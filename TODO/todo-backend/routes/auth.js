// routes/auth.js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/db");
const {
  validateRegister,
  validateLogin,
  handleValidationErrors,
} = require("../utils/validate");

const router = express.Router();

// Регистрация
router.post(
  "/register",
  validateRegister,
  handleValidationErrors,
  async (req, res) => {
    const { name, email, password } = req.body;

    try {
      // Проверка, существует ли пользователь
      const [existing] = await pool.execute(
        "SELECT id FROM users WHERE email = ?",
        [email]
      );
      if (existing.length > 0) {
        return res
          .status(409)
          .json({ message: "Пользователь с таким email уже существует" });
      }

      // Хеширование пароля
      const hashedPassword = await bcrypt.hash(password, 12);

      // Создание пользователя
      const [result] = await pool.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, hashedPassword]
      );

      res
        .status(201)
        .json({
          message: "Пользователь успешно зарегистрирован",
          userId: result.insertId,
        });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Ошибка сервера при регистрации" });
    }
  }
);

// Вход
router.post(
  "/login",
  validateLogin,
  handleValidationErrors,
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const [rows] = await pool.execute(
        "SELECT id, name, email, password FROM users WHERE email = ?",
        [email]
      );
      if (rows.length === 0) {
        return res.status(401).json({ message: "Неверный email или пароль" });
      }

      const user = rows[0];
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Неверный email или пароль" });
      }

      // Генерация JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      res.json({
        message: "Успешный вход",
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Ошибка сервера при входе" });
    }
  }
);

// Выход — на бэкенде не требуется, фронтенд просто удаляет токен
// Но можно добавить маршрут для чистоты
router.post("/logout", (req, res) => {
  // В простой JWT-системе logout делается на фронтенде
  res.json({ message: "Выход выполнен" });
});

module.exports = router;
