// server/server.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet"); // ← переместите вверх
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Helmet
if (process.env.NODE_ENV === "production") {
  app.use(helmet());
} else {
  app.use(helmet({ contentSecurityPolicy: false }));
}

// Routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
require("./db");

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("API на MySQL работает!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
