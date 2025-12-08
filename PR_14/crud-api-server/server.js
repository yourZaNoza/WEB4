// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes
const productRoutes = require("./routes/products");
app.use("/products", productRoutes);

// 404 — БЕЗ указания пути '*'
app.use((req, res) => {
  res.status(404).json({ error: `Маршрут ${req.method} ${req.url} не найден` });
});

// Глобальный обработчик ошибок
app.use((err, req, res, next) => {
  console.error("Глобальная ошибка:", err.stack);
  res.status(500).json({ error: "Серверная ошибка" });
});

// Запуск
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
