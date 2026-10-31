"use strict";

/* =========================================================
   SNEAKNOVA - wheel.js
   Welcome spin-the-wheel for new customers (index.html only).
   One spin per browser, remembered with localStorage.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "sneaknova-spin-reward-v2";

    /* weight = how likely a prize is (bigger = more often). prefix = start of that prize's reward code. */
    const PRIZES = [
        { short: "10% off",       full: "10% off",                                  prefix: "NOVA10", weight: 25 },
        { short: "Free shipping", full: "free shipping",                            prefix: "SHIP",   weight: 20 },
        { short: "25% off",       full: "25% off",                                  prefix: "NOVA25", weight: 12 },
        { short: "Free cup",      full: "a free SneakNova cup",                     prefix: "CUP",    weight: 15,
          img: "IMAGES/sneaknova-cup.png", alt: "Black SneakNova insulated cup" },
        { short: "50% off",       full: "50% off",                                  prefix: "NOVA50", weight: 3 },
        { short: "Free backpack", full: "a free SPRAYGROUND backpack",              prefix: "PACK",   weight: 15,
          img: "IMAGES/sprayground-backpack.jpeg", alt: "SPRAYGROUND shark backpack" },
        { short: "2 Gold Reef City tickets", full: "2 Gold Reef City general admission tickets", prefix: "GRC", weight: 10 }
    ];

    const seg = 360 / PRIZES.length;
    const seconds = matchMedia("(prefers-reduced-motion: reduce)").matches ? 1 : 5;

    const el = (tag, cls, text) => {
        const n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text !== undefined) n.textContent = text;
        return n;
    };
    const load = () => { try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); } catch { return null; } };
    const save = r => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); } catch { /* storage blocked */ } };

    let reward = load();
    let rotation = 0;
    let spinning = false;

    /* ----- Build the page elements ----- */
    const fab = el("button", "wheel-fab");
    fab.type = "button";

    const modal = el("div", "wheel-modal");
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Welcome reward wheel");

    const card = el("div", "wheel-card");
    const closeBtn = el("button", "wheel-close", "×");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", "Close");

    const wrap = el("div", "wheel-wrap");
    const wheel = el("div", "wheel");

    PRIZES.forEach((p, i) => {
        const line = el("i", "wheel-line");                       // divider between slices
        line.style.transform = "rotate(" + i * seg + "deg)";

        const slice = el("div", "wheel-slice");                   // one slice, turned to its own angle
        slice.style.transform = "rotate(" + (i * seg + seg / 2) + "deg)";
        const content = el("div", "wheel-content");
        if (p.img) {
            const pic = el("img");
            pic.src = p.img;
            pic.alt = p.alt;
            content.append(pic);
        }
        content.append(el("span", null, p.short));
        slice.append(content);
        wheel.append(line, slice);
    });
    wrap.append(el("div", "wheel-pointer"), wheel, el("div", "wheel-shine"), el("div", "wheel-hub"));

    const spinBtn = el("button", "wheel-spin", "Spin the wheel");
    spinBtn.type = "button";
    const result = el("p", "wheel-result");
    result.setAttribute("aria-live", "polite");

    card.append(closeBtn,
        el("h2", null, "Welcome to SneakNova!"),
        el("p", null, "New here? Spin the wheel for a welcome reward. One spin per customer."),
        wrap, spinBtn, result);
    modal.append(card);
    document.body.append(fab, modal);

    /* ----- Behaviour ----- */
    function pick() {
        let r = Math.random() * PRIZES.reduce((sum, p) => sum + p.weight, 0);
        for (let i = 0; i < PRIZES.length; i++) {
            r -= PRIZES[i].weight;
            if (r < 0) return i;
        }
        return 0;
    }

    function showReward() {
        result.textContent = "You won " + reward.prize + "! Your code is " + reward.code +
                             ". Mention it in your enquiry message.";
        spinBtn.disabled = true;
        fab.textContent = "Your reward: " + reward.prize + " (" + reward.code + ")";
        fab.classList.add("has-reward");
    }

    function openModal() {
        modal.hidden = false;
        if (reward) showReward();
        (reward ? closeBtn : spinBtn).focus();
    }

    function closeModal() {
        modal.hidden = true;
        fab.focus();
    }

    function spin() {
        if (spinning || reward) return;
        spinning = true;
        spinBtn.disabled = true;
        result.textContent = "";

        const winner = pick();
        const stopAt = winner * seg + seg / 2 + (Math.random() - 0.5) * seg * 0.7;   // somewhere inside the winning slice
        const extra = (((360 - stopAt - rotation) % 360) + 360) % 360;               // turn needed to put it under the pointer
        rotation += 360 * 5 + extra;                                                 // 5 full turns, then the stop

        wheel.style.transitionDuration = seconds + "s";
        wheel.style.transform = "rotate(" + rotation + "deg)";

        setTimeout(() => {
            reward = {
                prize: PRIZES[winner].full,
                code: PRIZES[winner].prefix + "-" + Math.random().toString(36).slice(2, 6).toUpperCase()
            };
            save(reward);
            spinning = false;
            showReward();
        }, seconds * 1000 + 200);
    }

    fab.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    spinBtn.addEventListener("click", spin);
    modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
    document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

    if (reward) {
        fab.textContent = "Your reward: " + reward.prize + " (" + reward.code + ")";
        fab.classList.add("has-reward");
    } else {
        fab.textContent = "Spin to win";
        setTimeout(openModal, 1500);        // welcome pop-up for new customers
    }
});