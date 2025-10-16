const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

// 2. Подключение к базе данных
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "world",
});

db.connect((err) => {
  if (err) {
    console.error("Ошибка подключения к базе данных:", err);
  } else {
    console.log("Подключение к базе данных установлено");
  }
});

// 3. Запросы к базе данных

// GET - получение всех городов
app.get("/cities", (req, res) => {
  const query = "SELECT id, name, country_code, district, population FROM city";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Ошибка при выполнении запроса:", err);
      return res.status(500).json({ error: "Ошибка при получении данных" });
    }
    res.json(results);
  });
});

// POST - добавление нового города
app.post("/cities", (req, res) => {
  const { name, country_code, district, population } = req.body;

  if (!name || !country_code || !district || population === undefined) {
    return res.status(400).json({
      error: "Все поля (name, country_code, district, population) обязательны",
    });
  }

  const query =
    "INSERT INTO city (name, country_code, district, population) VALUES (?, ?, ?, ?)";
  db.query(
    query,
    [name, country_code, district, population],
    (err, results) => {
      if (err) {
        console.error("Ошибка при добавлении города:", err);
        return res.status(500).json({ error: "Не удалось добавить город" });
      }
      const newCity = {
        id: results.insertId,
        name,
        country_code,
        district,
        population,
      };
      res.status(201).json(newCity);
    }
  );
});
// PUT - обновление города по id
app.put("/cities/:id", (req, res) => {
  const { id } = req.params;
  const { name, country_code, district, population } = req.body;

  const query =
    "UPDATE city SET name = ?, country_code = ?, district = ?, population = ? WHERE id = ?";
  db.query(
    query,
    [name, country_code, district, population, id],
    (err, results) => {
      if (err) {
        console.error("Ошибка при обновлении:", err);
        return res.status(500).send("Ошибка сервера");
      }
      if (results.affectedRows === 0) {
        return res.status(404).send("Город не найден");
      }
      res.json({ id, name, country_code, district, population });
    }
  );
});

// DELETE - удаление города по id
app.delete("/cities/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID должен быть числом" });
  }

  const query = "DELETE FROM city WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Ошибка при удалении:", err);
      return res.status(500).json({ error: "Ошибка сервера" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Город с таким ID не найден" });
    }
    res.json({ message: "Город удалён", id });
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

// Приложение
// Главная страница
app.get("/", (req, res) => {
  res.send(`
    <h1>World API с MySql работает!</h1>
    <p>Доступные маршруты:</p>
    <ul>
      <li><a href="/cities">/cities</a></li>
    </ul>
  `);
});

// Игнорирование запросов к .well-known
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
  res.status(404).end();
});
