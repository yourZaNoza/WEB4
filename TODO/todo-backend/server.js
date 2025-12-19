// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // разрешаем CORS (для связи с фронтендом)
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Роуты
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "To Do List Backend is running!" });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});

// Записи
const taskRoutes = require("./routes/tasks");
app.use("/api/tasks", taskRoutes);

// Отдача статики (изображения)
app.use("/uploads", express.static("uploads"));

// Изображения
const imageRoutes = require("./routes/images");
app.use("/api/images", imageRoutes);

// Напоминания
const reminderRoutes = require("./routes/reminders");
app.use("/api/reminders", reminderRoutes);
