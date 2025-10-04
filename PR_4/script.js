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
    successMessage.querySelector(
      "p"
    ).textContent = `Мы отправили сообщение на почту\n${email}`;
    successMessage.style.display = "block";
    emailInput.value = "";
  } else {
    alert("Пожалуйста, введите корректный email.");
  }
});
