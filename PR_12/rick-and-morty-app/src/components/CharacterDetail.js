// src/components/CharacterDetail.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(response.data);
        setLoading(false);
      } catch (err) {
        setError("Персонаж не найден");
        setLoading(false);
        console.error(err);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div className="detail-loading">Загрузка...</div>;
  if (error)
    return (
      <div className="detail-error">
        <p>{error}</p>
        <Link to="/" className="back-link">
          ← Вернуться к списку
        </Link>
      </div>
    );

  return (
    <div className="character-detail">
      <Link to="/" className="back-link">
        ← Назад к персонажам
      </Link>

      <div className="detail-card">
        <img src={character.image} alt={character.name} />

        <div className="detail-info">
          <h1>{character.name}</h1>
          <p className={`status-full status-${character.status.toLowerCase()}`}>
            <span className="status-dot-large"></span>
            {character.status} – {character.species}
          </p>
          <p>
            <strong>Пол:</strong> {character.gender}
          </p>
          <p>
            <strong>Происхождение:</strong> {character.origin.name}
          </p>
          <p>
            <strong>Текущая локация:</strong> {character.location.name}
          </p>
          {character.type && (
            <p>
              <strong>Тип:</strong> {character.type}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
