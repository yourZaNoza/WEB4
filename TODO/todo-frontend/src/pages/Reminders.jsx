// src/pages/Reminders.jsx
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "../components/Header";
import "./Reminders.css";

export default function Reminders() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReminders = async () => {
    try {
      const res = await api.get("/reminders");
      setReminders(res.data);
    } catch (err) {
      console.error(err);
      alert("Не удалось загрузить напоминания");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReminders();
  }, []);

  // Форматирование даты
  const formatDateTime = (isoString) => {
    return new Date(isoString).toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) return <div className="loading">Загрузка напоминаний...</div>;

  return (
    <div className="reminders-page">
      <Header />
      <main className="reminders-content">
        <h1>
          <img
            src="/notification.svg"
            alt="Напоминания"
            className="bell-icon"
          />
          Напоминания
        </h1>
        {reminders.length === 0 ? (
          <p className="empty">Нет предстоящих напоминаний</p>
        ) : (
          <div className="reminders-list">
            {reminders.map((task) => (
              <div key={task.id} className="reminder-card">
                <h3>{task.title}</h3>
                {task.description && <p>{task.description}</p>}
                {task.image_url && (
                  <img
                    src={`${process.env.REACT_APP_API_URL}${task.image_url}`}
                    alt="Изображение задачи"
                    className="reminder-image"
                  />
                )}
                <div className="reminder-time">
                  <strong>Время:</strong> {formatDateTime(task.reminder_time)}
                </div>
                {/* {task.is_completed && <span className="completed-badge"></span>} */}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
