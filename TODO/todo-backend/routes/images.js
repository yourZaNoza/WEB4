// routes/images.js
const express = require("express");
const pool = require("../config/db");
const auth = require("../middleware/auth");

const router = express.Router();

// Получить все изображения пользователя
router.get("/", auth, async (req, res) => {
  try {
    const [images] = await pool.execute(
      `SELECT t.id as task_id, t.title as task_title, t.image_url, t.created_at
       FROM tasks t
       WHERE t.user_id = ? AND t.image_url IS NOT NULL
       ORDER BY t.created_at DESC`,
      [req.user.userId]
    );

    res.json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ошибка при получении изображений" });
  }
});

module.exports = router;
