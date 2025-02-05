document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("app-modal");
  const modalTitle = document.getElementById("app-title");
  const closeButton = document.querySelector(".close-btn");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const appName = card.dataset.app;
      modalTitle.textContent =
        appName.charAt(0).toUpperCase() + appName.slice(1);

      // Show modal with animation
      modal.classList.remove("hidden", "hide");
      modal.classList.add("show");
    });
  });

  closeButton.addEventListener("click", () => {
    // Close modal with animation
    modal.classList.remove("show");
    modal.classList.add("hide");

    setTimeout(() => {
      modal.classList.add("hidden");
    }, 500); // Wait for animation to complete
  });
});
