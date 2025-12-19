// src/components/TaskItem.jsx
import React from "react";
import api from "../utils/api";
import "./TaskItem.css";

export default function TaskItem({ task, onEdit, onDelete, onToggleComplete }) {
  const handleToggle = async () => {
    try {
      await api.put(`/tasks/${task.id}`, {
        is_completed: !task.is_completed,
      });
      onToggleComplete(task.id, !task.is_completed);
    } catch (err) {
      console.error(err);
      alert("Не удалось обновить статус задачи");
    }
  };

  return (
    <div className={`task-item ${task.is_completed ? "completed" : ""}`}>
      <div className="task-header">
        <h3>
          <label className="completed-checkbox">
            <input
              type="checkbox"
              checked={task.is_completed}
              onChange={handleToggle}
            />{" "}
          </label>
          {task.title}
        </h3>
      </div>

      {task.description && <p>{task.description}</p>}

      {task.image_url && (
        <img
          src={`${process.env.REACT_APP_API_URL}${task.image_url}`}
          alt="task"
          className="task-image"
        />
      )}

      {task.reminder_time && (
        <small>
          <img
            src="/notification_small.svg"
            alt="Напоминания"
            className="bell-small-icon"
          />{" "}
          Напоминание: <br></br>
          {new Date(task.reminder_time).toLocaleString("ru-RU")}
        </small>
      )}

      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Редактировать</button>
        <button onClick={() => onDelete(task.id)} className="delete">
          Удалить
        </button>
      </div>
    </div>
  );
}
