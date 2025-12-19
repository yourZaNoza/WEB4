// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import "./Auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      const res = await api.post("/auth/login", { email, password });
      const { token, user } = res.data;

      // Сохраняем JWT и данные пользователя
      localStorage.setItem("todoToken", token);
      localStorage.setItem("todoUser", JSON.stringify(user));

      setMessage({
        type: "success",
        text: "Вход выполнен! Переход в задачи...",
      });
      setTimeout(() => navigate("/tasks"), 1000);
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Ошибка входа";
      setMessage({ type: "error", text: errorMsg });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Вход</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Войти</button>
          {message.text && (
            <p className={`message ${message.type}`}>{message.text}</p>
          )}
          <p className="switch">
            Нет аккаунта?{" "}
            <button
              type="button"
              className="link"
              onClick={() => navigate("/register")}
            >
              Зарегистрироваться
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
