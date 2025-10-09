// Бургер меню

const menuButton = document.querySelector(".header__menu");
const overlay = document.getElementById("overlay");
const menuClose = document.getElementById("menuClose");
menuButton.addEventListener("click", () => {
  overlay.style.display = "flex";
});

menuClose.addEventListener("click", () => {
  overlay.style.display = "none";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.style.display = "none";
  }
});

// Функция фильтрации

const searchInput = document.getElementById("search-input");
const bubblesContainer = document.getElementById("bubbles-container");
const bubbles = document.querySelectorAll(".bubble");

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

searchInput.addEventListener("input", filterBubbles);

// Успешная подписка

const emailInput = document.getElementById("email-input");
const signUpButton = document.getElementById("sign-up-button");
const successMessage = document.getElementById("success-message");

signUpButton.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    successMessage.querySelector("p").innerHTML =
      "Мы отправили сообщение на почту <br>" + `${email}`;
    successMessage.style.display = "block";
    emailInput.value = "";
  } else {
    alert("Пожалуйста, введите корректный email.");
  }
});
