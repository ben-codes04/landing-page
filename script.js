// Simple interactive hover effect for cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 10px 30px rgba(99, 102, 241, 0.15)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
    });
  });
});