// src/pages/Tasks.jsx
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import TaskItem from "../components/TaskItem";
import TaskForm from "../components/TaskForm";
import Header from "../components/Header";
import "./Tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      console.error(err);
      alert("Не удалось загрузить задачи");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSave = async (formData, isUploading) => {
    const { title, description, reminder_time, image } = formData;
    const payload = new FormData();
    payload.append("title", title);
    if (description) payload.append("description", description);
    if (reminder_time) payload.append("reminder_time", reminder_time);

    if (image instanceof File) {
      payload.append("image", image);
    }

    try {
      if (editingTask) {
        await api.put(`/tasks/${editingTask.id}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await api.post("/tasks", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setShowForm(false);
      setEditingTask(null);
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert("Ошибка сохранения задачи");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error(err);
      alert("Ошибка удаления задачи");
    }
  };

  const handleToggleComplete = (taskId, isCompleted) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, is_completed: isCompleted } : task
      )
    );
  };

  if (loading) return <div className="loading">Загрузка...</div>;

  return (
    <div className="tasks-page">
      {/* Основной контент */}
      <main className="tasks-container">
        <Header />

        <div className="tasks-header">
          <h1>Мои задачи</h1>
          <button
            className="create-task-btn"
            onClick={() => {
              setShowForm(true);
              setEditingTask(null);
            }}
          >
            + Создать задачу
          </button>
        </div>
        {showForm ? (
          <TaskForm
            task={editingTask} // может быть null (для создания) или объектом (для редактирования)
            onSave={handleSave}
            onCancel={() => {
              setShowForm(false);
              setEditingTask(null);
            }}
          />
        ) : (
          <>
            {tasks.length === 0 ? (
              <p className="empty">Нет задач. Создайте первую!</p>
            ) : (
              <div className="tasks-grid">
                {tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onEdit={(task) => {
                      setEditingTask(task);
                      setShowForm(true);
                    }}
                    onDelete={handleDelete}
                    onToggleComplete={handleToggleComplete} // ← ДОБАВЬТЕ ЭТУ СТРОКУ
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
