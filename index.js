document.addEventListener("DOMContentLoaded", () => {
    const countElement = document.querySelector(".count");
    const lemonElement = document.querySelector(".lemon");

    lemonElement.addEventListener("click", () => {
        let currentCount = parseInt(countElement.textContent);
        countElement.textContent = currentCount + 1;
    });
});





document.addEventListener("DOMContentLoaded", function () {
    const colors = document.querySelectorAll(".color");
    const main = document.querySelector(".main"); // Получаем элемент с классом main

    colors.forEach(color => {
        color.addEventListener("click", function () {
            // Удаляем класс "current" у всех цветов
            colors.forEach(c => c.classList.remove("current"));
            
            // Добавляем "current" к выбранному цвету
            this.classList.add("current");

            // Получаем цвет из data-атрибута
            const selectedColor = this.getAttribute("data-color");

            // Применяем градиент к фону main
            if (main) {
                main.style.background = `radial-gradient(circle, rgba(9,56,121,0.2) 10%, ${selectedColor} 40%, ${selectedColor} 100%)`;
            }
        });
    });
});




