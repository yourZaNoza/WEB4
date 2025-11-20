const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const storages = [
  { id: 1, name: "John", age: 15 },
  { id: 2, name: "Mike", age: 16 },
  { id: 3, name: "Kate", age: 15 },
  { id: 4, name: "Lusi", age: 18 },
];

// 1. Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

// 2. Маршрут /start для получения текста "Привет мир"
app.get("/start", (req, res) => {
  res.send("Привет мир");
});

// 3. Маршрут /data с методом GET для получения всех данных
app.get("/data", (req, res) => {
  res.json(storages);
});

// 4. Маршрут /data с методом POST для добавления новой записи

app.post("/data/", (req, res) => {
  const { name, age } = req.body;
  const newItem = { id: storages.length + 1, name, age };
  storages.push(newItem);
  res.status(201).json(newItem);
  console.log(storages);
});

// 5. Маршрут /data/:id с методом PUT для обновления записи по id
app.put("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age } = req.body;

  const index = storages.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Запись не найдена" });
  }

  if (name !== undefined) storages[index].name = name;
  if (age !== undefined) storages[index].age = age;

  res.json(storages[index]);
});

// 6. Маршрут /data/:id с методом DELETE для удаления записи по id
app.delete("/data/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = storages.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Запись не найдена" });
  }

  const deletedItem = storages.splice(index, 1)[0];
  res.json(deletedItem);
});

// Приложение
// Главная страница
app.get("/", (req, res) => {
  res.send(`
    <h1>Мой API работает!</h1>
    <p>Доступные маршруты:</p>
    <ul>
      <li><a href="/start">/start</a></li>
      <li><a href="/data">/data</a> (GET)</li>
    </ul>
  `);
});

// Игнорирование запросов к .well-known
app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
  res.status(404).end();
});
