// config/db.js
const sqlite3 = require("sqlite3").verbose();
require("dotenv").config();

const dbPath = process.env.DB_PATH || "./database.db";
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Ошибка подключения к SQLite:", err.message);
  } else {
    console.log("✅ Подключено к базе данных SQLite");
  }
});

// Создание таблицы при инициализации
db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      price REAL NOT NULL,
      description TEXT,
      specs TEXT,
      image_url TEXT
    )
  `,
    (err) => {
      if (err) {
        console.error("Ошибка создания таблицы:", err.message);
      } else {
        console.log('✅ Таблица "products" готова');
      }
    }
  );
});

module.exports = db;
