// src/components/CharacterList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CharacterList.css";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/?page=19"
        );
        setCharacters(response.data.results);
        setLoading(false);
      } catch (err) {
        setError("Не удалось загрузить персонажей");
        setLoading(false);
        console.error(err);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <div className="loading">Загрузка...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="character-list">
      {characters.map((character) => (
        <Link
          to={`/character/${character.id}`}
          key={character.id}
          className="character-link"
        >
          <div className="character-card">
            <img src={character.image} alt={character.name} />
            <div className="character-info">
              <h3>{character.name}</h3>
              <div
                className={`status-species status-${character.status.toLowerCase()}`}
              >
                <span className="status-dot"></span>
                <span className="status-text">{character.status}</span>
                <span className="species-text"> – {character.species}</span>
              </div>
              <div className="location">
                <p>
                  <strong>Last known location:</strong>{" "}
                  {character.location.name}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
