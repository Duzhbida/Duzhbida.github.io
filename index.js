document.addEventListener("DOMContentLoaded", () => {
    const countElement = document.querySelector(".count");
    const lemonElement = document.querySelector(".lemon");

    // Загружаем сохранённое значение
    let count = localStorage.getItem("tapCount") || 0;
    countElement.textContent = count;

    lemonElement.addEventListener("click", () => {
        count++;
        countElement.textContent = count;
        localStorage.setItem("tapCount", count); // Сохраняем значение
    });
});

// Код смены цвета
document.addEventListener("DOMContentLoaded", function () {
    const colors = document.querySelectorAll(".color");
    const main = document.querySelector(".main");

    colors.forEach(color => {
        color.addEventListener("click", function () {
            colors.forEach(c => c.classList.remove("current"));
            this.classList.add("current");

            const selectedColor = this.getAttribute("data-color");
            if (main) {
                main.style.background = `radial-gradient(circle, rgba(9,56,121,0.2) 10%, ${selectedColor} 40%, ${selectedColor} 100%)`;
            }
        });
    });
});




function toggleColorsChange() {
    const theme = document.querySelector(".theme");
    const colorsChange = document.querySelector(".colors-change");
    const mediaQuery = window.matchMedia("(min-width: 768px)");
  
    if (!theme || !colorsChange) return;
  
    function handleClick() {
      if (mediaQuery.matches) {
        colorsChange.classList.toggle("visible");
      }
    }
  
    theme.addEventListener("click", handleClick);

    mediaQuery.addEventListener("change", (e) => {
      if (!e.matches) colorsChange.classList.remove("visible");
    });
  }
  
  toggleColorsChange();
  




