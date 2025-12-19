// routes/tasks.js
const express = require("express");
const pool = require("../config/db");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");
const router = express.Router();

// Получить все задачи пользователя
router.get("/", auth, async (req, res) => {
  try {
    const [tasks] = await pool.execute(
      `SELECT id, title, description, image_url, reminder_time, is_completed, created_at 
       FROM tasks WHERE user_id = ? ORDER BY created_at DESC`,
      [req.user.userId]
    );
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при получении задач" });
  }
});

// Создать задачу (с изображением)
router.post("/", auth, upload.single("image"), async (req, res) => {
  const { title, description, reminder_time } = req.body;
  const userId = req.user.userId;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const [result] = await pool.execute(
      `INSERT INTO tasks (user_id, title, description, image_url, reminder_time) 
       VALUES (?, ?, ?, ?, ?)`,
      [userId, title, description, imageUrl, reminder_time || null]
    );

    res.status(201).json({
      id: result.insertId,
      title,
      description,
      image_url: imageUrl,
      reminder_time,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при создании задачи" });
  }
});

// Обновить задачу
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { title, description, reminder_time, is_completed } = req.body;
  const userId = req.user.userId;

  // Проверка принадлежности задачи
  const [existing] = await pool.execute(
    "SELECT user_id FROM tasks WHERE id = ?",
    [id]
  );
  if (existing.length === 0 || existing[0].user_id !== userId) {
    return res
      .status(403)
      .json({ message: "Задача не найдена или доступ запрещён" });
  }

  const imageUrl = req.file
    ? `/uploads/${req.file.filename}`
    : req.body.keepImage === "true"
    ? null // оставить старое изображение
    : req.body.imageRemoved === "true"
    ? "" // удалить изображение
    : null;

  // Собираем поля для обновления
  const updates = [];
  const values = [];

  if (title !== undefined) {
    updates.push("title = ?");
    values.push(title);
  }
  if (description !== undefined) {
    updates.push("description = ?");
    values.push(description);
  }
  if (reminder_time !== undefined) {
    updates.push("reminder_time = ?");
    values.push(reminder_time || null);
  }
  if (is_completed !== undefined) {
    updates.push("is_completed = ?");
    values.push(is_completed);
  }
  if (imageUrl !== null) {
    updates.push("image_url = ?");
    values.push(imageUrl || null);
  }

  if (updates.length === 0) {
    return res.status(400).json({ message: "Нет данных для обновления" });
  }

  values.push(id, userId);

  try {
    const [result] = await pool.execute(
      `UPDATE tasks SET ${updates.join(", ")} WHERE id = ? AND user_id = ?`,
      values
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Задача не найдена" });
    }

    res.json({ message: "Задача обновлена" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при обновлении задачи" });
  }
});

// Удалить задачу
router.delete("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.userId;

  try {
    const [result] = await pool.execute(
      "DELETE FROM tasks WHERE id = ? AND user_id = ?",
      [id, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Задача не найдена" });
    }

    res.json({ message: "Задача удалена" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при удалении задачи" });
  }
});

module.exports = router;
