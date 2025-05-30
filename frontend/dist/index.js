"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const lockScreen = document.getElementById("lockScreen");
    const infoContainer = document.getElementById("infoContainer");
    const loginContainer = document.getElementById("loginContainer");
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const days = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
        const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const dayName = days[now.getDay()];
        const date = now.getDate();
        const month = months[now.getMonth()];
        const timeEl = document.getElementById("time");
        const dateEl = document.getElementById("date");
        if (timeEl && dateEl) {
            timeEl.textContent = `${hours}:${minutes}`;
            dateEl.textContent = `${dayName}, ${date} de ${month}`;
        }
    }
    updateTime();
    setInterval(updateTime, 1000);
    // Clique na tela
    document.addEventListener("click", () => {
        lockScreen.classList.add("blurred");
        infoContainer.classList.add("hidden");
        loginContainer.classList.add("show");
    }, { once: true }); // garante que só roda uma vez
});
