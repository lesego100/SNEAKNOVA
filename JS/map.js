"use strict";

/* Switches the Google Map between SneakNova locations */
document.addEventListener("DOMContentLoaded", () => {
    const frame = document.getElementById("map-frame");
    const buttons = document.querySelectorAll(".map-tabs button");
    if (!frame || !buttons.length) return;

    function show(button) {
        frame.src = "https://www.google.com/maps?q=" +
            encodeURIComponent(button.dataset.place) + "&output=embed&z=11";
        buttons.forEach(b => b.setAttribute("aria-pressed", b === button));
    }

    buttons.forEach(b => b.addEventListener("click", () => show(b)));
    show(buttons[0]);   // Johannesburg loads first
});