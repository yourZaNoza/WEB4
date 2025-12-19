// src/pages/Images.jsx
import React, { useState, useEffect } from "react";
import api from "../utils/api";
import Header from "../components/Header";
import "./Images.css";

export default function Images() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const res = await api.get("/images");
      setImages(res.data);
    } catch (err) {
      console.error(err);
      alert("Не удалось загрузить изображения");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <div className="loading">Загрузка изображений...</div>;

  return (
    <div className="images-page">
      <Header />
      <h1>Все изображения</h1>
      {images.length === 0 ? (
        <p className="empty">Нет изображений. Прикрепите фото к задачам!</p>
      ) : (
        <div className="images-grid">
          {images.map((img) => (
            <div key={img.task_id} className="image-card">
              <img
                src={`${process.env.REACT_APP_API_URL}${img.image_url}`}
                alt={`К задаче: ${img.task_title}`}
                className="image-preview"
              />
              <div className="image-info">
                <p>
                  <strong>Задача:</strong> {img.task_title}
                </p>
                <p>
                  <small>
                    Добавлено:{" "}
                    {new Date(img.created_at).toLocaleString("ru-RU")}
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
