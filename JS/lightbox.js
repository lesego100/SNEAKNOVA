"use strict";

/* =========================================================
   SNEAKNOVA - lightbox.js
   Click a gallery image to view it larger.
   Close: X button, Esc key or clicking the dark background.
   Navigate: arrow buttons or the left/right arrow keys.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const images = [...document.querySelectorAll(".gallery-grid img")];
    if (!images.length) return;

    function button(text, cls, label) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = cls;
        b.textContent = text;
        b.setAttribute("aria-label", label);
        return b;
    }

    const box = document.createElement("div");
    box.className = "lightbox";
    box.hidden = true;
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Image viewer");

    const closeBtn = button("×", "lightbox-close", "Close image viewer");
    const prevBtn = button("‹", "lightbox-prev", "Previous image");
    const nextBtn = button("›", "lightbox-next", "Next image");
    const big = document.createElement("img");
    const caption = document.createElement("p");

    box.append(closeBtn, prevBtn, big, nextBtn, caption);
    document.body.append(box);

    let index = 0;
    let opener = null;

    function show(i) {
        index = (i + images.length) % images.length;      // wraps around at both ends
        const img = images[index];
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        caption.textContent = img.alt + " (" + (index + 1) + " of " + images.length + ")";
    }

    function openBox(i) {
        opener = images[i];
        show(i);
        box.hidden = false;
        document.body.classList.add("no-scroll");
        closeBtn.focus();
    }

    function closeBox() {
        box.hidden = true;
        document.body.classList.remove("no-scroll");
        if (opener) opener.focus();
    }

    images.forEach((img, i) => {
        img.tabIndex = 0;                                  // reachable with the keyboard
        img.setAttribute("role", "button");
        img.addEventListener("click", () => openBox(i));
        img.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openBox(i); }
        });
    });

    closeBtn.addEventListener("click", closeBox);
    prevBtn.addEventListener("click", () => show(index - 1));
    nextBtn.addEventListener("click", () => show(index + 1));
    box.addEventListener("click", e => { if (e.target === box) closeBox(); });

    document.addEventListener("keydown", e => {
        if (box.hidden) return;
        if (e.key === "Escape") closeBox();
        if (e.key === "ArrowLeft") show(index - 1);
        if (e.key === "ArrowRight") show(index + 1);
    });
});