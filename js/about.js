document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const hiddenCards = document.querySelectorAll(".about-card.extra");
  
    toggleBtn.addEventListener("click", () => {
      hiddenCards.forEach(card => {
        card.classList.toggle("hidden");
      });
  
      // Change button text
      if (toggleBtn.textContent === "Know More") {
        toggleBtn.textContent = "Show Less";
      } else {
        toggleBtn.textContent = "Know More";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const knowMoreBtn = document.getElementById("knowMoreBtn");
    const knowMoreContent = document.getElementById("knowMoreContent");
  
    knowMoreBtn.addEventListener("click", () => {
      knowMoreContent.classList.toggle("active");
      knowMoreBtn.textContent = knowMoreContent.classList.contains("active")
        ? "Show Less"
        : "Know More";
    });
  });
  