document.addEventListener("DOMContentLoaded", () => {
  const shops = document.querySelectorAll(".shop");

  shops.forEach(shop => {
    shop.addEventListener("click", () => {
      alert("Byenvini! Magazen sa a ap pare byento.");
    });

    shop.addEventListener("mouseenter", () => {
      shop.style.transform = "scale(1.03)";
    });

    shop.addEventListener("mouseleave", () => {
      shop.style.transform = "scale(1)";
    });
  });
});
