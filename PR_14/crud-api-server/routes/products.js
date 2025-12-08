// routes/products.js
const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET /products
router.get("/", (req, res) => {
  try {
    const query = "SELECT * FROM products";
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error("Ошибка при SELECT:", err.message);
        return res.status(500).json({ error: "Не удалось получить товары" });
      }
      res.json(rows);
    });
  } catch (error) {
    console.error("Неожиданная ошибка в GET /products:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

// POST /products
router.post("/", (req, res) => {
  try {
    const { name, price, description, specs, image_url } = req.body;

    if (!name || !price) {
      return res
        .status(400)
        .json({ error: 'Поля "name" и "price" обязательны' });
    }

    const query =
      "INSERT INTO products (name, price, description, specs, image_url) VALUES (?, ?, ?, ?, ?)";
    db.run(query, [name, price, description, specs, image_url], function (err) {
      if (err) {
        console.error("Ошибка при INSERT:", err.message);
        return res.status(500).json({ error: "Не удалось добавить товар" });
      }
      res
        .status(201)
        .json({ id: this.lastID, name, price, description, specs, image_url });
    });
  } catch (error) {
    console.error("Ошибка в POST /products:", error);
    res.status(500).json({ error: "Ошибка при добавлении товара" });
  }
});

// PUT /products/:id
router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, specs, image_url } = req.body;

    const query =
      "UPDATE products SET name = ?, price = ?, description = ?, specs = ?, image_url = ? WHERE id = ?";
    db.run(
      query,
      [name, price, description, specs, image_url, id],
      function (err) {
        if (err) {
          console.error("Ошибка при UPDATE:", err.message);
          return res.status(500).json({ error: "Не удалось обновить товар" });
        }
        if (this.changes === 0) {
          return res.status(404).json({ error: "Товар не найден" });
        }
        res.json({
          id: parseInt(id),
          name,
          price,
          description,
          specs,
          image_url,
        });
      }
    );
  } catch (error) {
    console.error("Ошибка в PUT /products/:id:", error);
    res.status(500).json({ error: "Ошибка при обновлении товара" });
  }
});

// DELETE /products/:id
router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const query = "DELETE FROM products WHERE id = ?";
    db.run(query, [id], function (err) {
      if (err) {
        console.error("Ошибка при DELETE:", err.message);
        return res.status(500).json({ error: "Не удалось удалить товар" });
      }
      if (this.changes === 0) {
        return res.status(404).json({ error: "Товар не найден" });
      }
      res.json({ message: "Товар удалён", id: parseInt(id) });
    });
  } catch (error) {
    console.error("Ошибка в DELETE /products/:id:", error);
    res.status(500).json({ error: "Ошибка при удалении товара" });
  }
});

module.exports = router;
