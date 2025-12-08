// server/routes/auth.js
const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db"); // ← важно!
require("dotenv").config();

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Некорректный email"),
    body("firstName").notEmpty().withMessage("Имя обязательно"),
    body("lastName").notEmpty().withMessage("Фамилия обязательна"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Пароль должен быть не менее 6 символов"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, firstName, lastName, password } = req.body;

    try {
      // Проверка уникальности email
      const [existing] = await db.execute(
        "SELECT id FROM users WHERE email = ?",
        [email]
      );
      if (existing.length > 0) {
        return res
          .status(400)
          .json({ message: "Пользователь с таким email уже существует" });
      }

      // Хэширование и сохранение
      const hashedPassword = await bcrypt.hash(password, 10);
      const [result] = await db.execute(
        "INSERT INTO users (email, firstName, lastName, password) VALUES (?, ?, ?, ?)",
        [email, firstName, lastName, hashedPassword]
      );

      const token = jwt.sign({ id: result.insertId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.status(201).json({
        message: "Регистрация успешна",
        token,
        user: { id: result.insertId, email, firstName, lastName },
      });
    } catch (error) {
      console.error("Ошибка регистрации:", error); // ← для диагностики
      res.status(500).json({ message: "Ошибка сервера", error: error.message });
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  if (rows.length === 0)
    return res.status(401).json({ message: "Неверный email или пароль" });

  const user = rows[0];
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(401).json({ message: "Неверный email или пароль" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });
});

module.exports = router;
