// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  return (
    <div className="header-container">
      <header className="app-header">
        <img src="/logo_kpk.svg" alt="Логотип КПК" className="logo" />
        <nav className="links">
          <Link
            to="/tasks"
            className={`nav-link ${
              location.pathname === "/tasks" ? "active" : ""
            }`}
          >
            Задачи
          </Link>
          <Link
            to="/images"
            className={`nav-link ${
              location.pathname === "/images" ? "active" : ""
            }`}
          >
            Изображения
          </Link>
          <Link
            to="/reminders"
            className={`nav-link ${
              location.pathname === "/reminders" ? "active" : ""
            }`}
          >
            Напоминания
            <img
              src="/notification.svg"
              alt="Напоминания"
              className="bell-icon"
            />
          </Link>
        </nav>
        <div className="header-actions">
          {/* Кнопка "Создать задачу" только на странице задач */}
          {location.pathname === "/tasks" && (
            <button
              className="create-task-btn"
              onClick={() => {
                // Эту логику передадим через пропсы (см. ниже)
                window.dispatchEvent(new Event("open-create-task-form"));
              }}
            >
              + Создать задачу
            </button>
          )}
          <button className="admin-button">Админ-панель</button>
        </div>
      </header>
    </div>
  );
}
