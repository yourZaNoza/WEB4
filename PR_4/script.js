const searchInput = document.getElementById("search-input");
const bubblesContainer = document.getElementById("bubbles-container");
const bubbles = document.querySelectorAll(".bubble");

// Функция фильтрации пузырьков
function filterBubbles() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  bubbles.forEach((bubble) => {
    const bubbleName = bubble.getAttribute("data-name").toLowerCase();

    if (bubbleName.includes(searchTerm)) {
      bubble.classList.remove("hidden");
    } else {
      bubble.classList.add("hidden");
    }
  });
}

// Обработчик события ввода
searchInput.addEventListener("input", filterBubbles);
