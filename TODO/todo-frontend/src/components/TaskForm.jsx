// src/components/TaskForm.jsx
import React, { useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ task = null, onSave, onCancel }) {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [reminderTime, setReminderTime] = useState(
    task?.reminder_time ? task.reminder_time.slice(0, 16) : ""
  );
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(task?.image_url || null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(
      { title, description, reminder_time: reminderTime || null, image },
      isUploading
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Название задачи"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Описание (опционально)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="datetime-local"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
      />
      <div className="image-upload">
        <label>
          {imagePreview ? "Изменить изображение" : "Прикрепить изображение"}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {imagePreview && (
          <img
            src={
              imagePreview.startsWith("http")
                ? imagePreview
                : `${process.env.REACT_APP_API_URL}${imagePreview}`
            }
            alt="preview"
          />
        )}
      </div>
      <div className="form-actions">
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel} className="cancel">
          Отмена
        </button>
      </div>
    </form>
  );
}
