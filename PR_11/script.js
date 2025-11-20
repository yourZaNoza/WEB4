// URL API
const API_URL = "https://rickandmortyapi.com/api/character?page=39";

// Функция для получения данных из API с использованием async/await
async function fetchCharacters() {
  try {
    // Очищаем контейнер и скрываем предыдущие ошибки
    document.getElementById("characters-container").innerHTML = "";
    document.getElementById("error-message").style.display = "none";

    const response = await fetch(API_URL);

    // Проверяем, успешен ли запрос
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Полученные данные:", data.results); // Выводим массив в консоль

    // Извлекаем массив персонажей из поля results
    const characters = data.results;

    // Генерируем и добавляем карточки на страницу
    displayCharacters(characters);
  } catch (error) {
    // Обработка ошибок
    console.error("Ошибка при получении данных:", error);
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = `Ошибка при загрузке данных: ${error.message}`;
    errorMessageElement.style.display = "block";
  }
}

// Функция для создания и отображения карточек персонажей
function displayCharacters(characters) {
  const container = document.getElementById("characters-container");

  characters.forEach((character) => {
    // Создаем карточку для каждого персонажа
    const card = createCharacterCard(character);
    // Добавляем карточку в контейнер
    container.appendChild(card);
  });
}

// Функция для создания одной карточки персонажа в новом стиле
function createCharacterCard(character) {
  // Создаем элемент div с классом character-card
  const card = document.createElement("div");
  card.className = "character-card";

  // Создаем элемент img
  const image = document.createElement("img");
  image.src = character.image;
  image.alt = `Изображение ${character.name}`;

  // Создаем контейнер для текстовой информации
  const infoContainer = document.createElement("div");
  infoContainer.className = "character-info";

  // Создаем элемент h3 для имени
  const name = document.createElement("h3");
  name.textContent = character.name;

  // Создаем контейнер для строки "Статус - Вид"
  const statusSpeciesContainer = document.createElement("div");
  statusSpeciesContainer.className = `status-species status-${character.status.toLowerCase()}`; // Класс для стилизации

  // Создаем точку статуса
  const statusDot = document.createElement("span");
  statusDot.className = "status-dot";

  // Создаем текст статуса
  const statusText = document.createElement("span");
  statusText.className = "status-text";
  statusText.textContent = character.status;

  // Создаем текст вида
  const speciesText = document.createElement("span");
  speciesText.className = "species-text";
  speciesText.textContent = `- ${character.species}`;

  // Добавляем элементы в контейнер статуса/вида
  statusSpeciesContainer.appendChild(statusDot);
  statusSpeciesContainer.appendChild(statusText);
  statusSpeciesContainer.appendChild(speciesText);

  // Создаем контейнер для локации и эпизода
  const locationEpisodeContainer = document.createElement("div");
  locationEpisodeContainer.className = "location-episode";

  // Создаем элемент p для локации
  const location = document.createElement("p");
  location.innerHTML = `<strong>Last known location:</strong> ${character.location.name}`;

  // Создаем элемент p для первого эпизода (берем первый из массива)
  const firstEpisode = document.createElement("p");
  if (character.episode && character.episode.length > 0) {
    // Извлекаем номер эпизода из URL (например, из https://rickandmortyapi.com/api/episode/1 получаем 1)
    const episodeUrl = character.episode[0];
    const episodeNumber = episodeUrl.split("/").pop(); // Получаем последний элемент пути
    firstEpisode.innerHTML = `<strong>First seen in:</strong> Episode ${episodeNumber}`;
  } else {
    firstEpisode.innerHTML = `<strong>First seen in:</strong> Unknown`;
  }

  // Добавляем элементы в контейнер локации/эпизода
  locationEpisodeContainer.appendChild(location);
  locationEpisodeContainer.appendChild(firstEpisode);

  // Добавляем все элементы в контейнер информации
  infoContainer.appendChild(name);
  infoContainer.appendChild(statusSpeciesContainer);
  infoContainer.appendChild(locationEpisodeContainer);

  // Добавляем изображение и контейнер информации внутрь карточки
  card.appendChild(image);
  card.appendChild(infoContainer);

  // Возвращаем готовую карточку
  return card;
}

// Запускаем загрузку данных при загрузке скрипта
fetchCharacters();
