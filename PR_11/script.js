// URL API
const API_URL = "https://rickandmortyapi.com/api/character?page=39";

async function fetchCharacters() {
  try {
    document.getElementById("characters-container").innerHTML = "";
    document.getElementById("error-message").style.display = "none";

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Полученные данные:", data.results);

    const characters = data.results;

    displayCharacters(characters);
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = `Ошибка при загрузке данных: ${error.message}`;
    errorMessageElement.style.display = "block";
  }
}

function displayCharacters(characters) {
  const container = document.getElementById("characters-container");

  characters.forEach((character) => {
    const card = createCharacterCard(character);
    container.appendChild(card);
  });
}

function createCharacterCard(character) {
  const card = document.createElement("div");
  card.className = "character-card";

  const image = document.createElement("img");
  image.src = character.image;
  image.alt = `Изображение ${character.name}`;

  const infoContainer = document.createElement("div");
  infoContainer.className = "character-info";

  const name = document.createElement("h3");
  name.textContent = character.name;

  const statusSpeciesContainer = document.createElement("div");
  statusSpeciesContainer.className = `status-species status-${character.status.toLowerCase()}`; // Класс для стилизации

  const statusDot = document.createElement("span");
  statusDot.className = "status-dot";

  const statusText = document.createElement("span");
  statusText.className = "status-text";
  statusText.textContent = character.status;

  const speciesText = document.createElement("span");
  speciesText.className = "species-text";
  speciesText.textContent = `- ${character.species}`;

  statusSpeciesContainer.appendChild(statusDot);
  statusSpeciesContainer.appendChild(statusText);
  statusSpeciesContainer.appendChild(speciesText);

  const locationEpisodeContainer = document.createElement("div");
  locationEpisodeContainer.className = "location-episode";

  const location = document.createElement("p");
  location.innerHTML = `<strong>Last known location:</strong> ${character.location.name}`;

  const firstEpisode = document.createElement("p");
  if (character.episode && character.episode.length > 0) {
    const episodeUrl = character.episode[0];
    const episodeNumber = episodeUrl.split("/").pop();
    firstEpisode.innerHTML = `<strong>First seen in:</strong> Episode ${episodeNumber}`;
  } else {
    firstEpisode.innerHTML = `<strong>First seen in:</strong> Unknown`;
  }

  locationEpisodeContainer.appendChild(location);
  locationEpisodeContainer.appendChild(firstEpisode);

  infoContainer.appendChild(name);
  infoContainer.appendChild(statusSpeciesContainer);
  infoContainer.appendChild(locationEpisodeContainer);

  card.appendChild(image);
  card.appendChild(infoContainer);

  return card;
}

fetchCharacters();
