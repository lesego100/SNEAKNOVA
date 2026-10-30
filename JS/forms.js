"use strict";

/*==========================================================
  SNEAKNOVA - forms.js
  Validation, enquiry response and contact email for
  enquiry.html and contact.html
  ========================================================= */

const RECIPIENT = "info@sneaknova.co.za";   // contact form email goes here
const FORMSPREE_ENDPOINT = "";              // optional: paste a Formspree URL to send with AJAX
const DELIVERY_FEE = 99;                    // fictional delivery fee (rand)
const FREE_DELIVERY_OVER = 2500;            // fictional free-delivery threshold (rand)

/* Product data (prices match products.html). "out" = sizes out of stock (demo data). */
const PRODUCTS = {
    "nike-af1":      { name: "Nike Air Force 1", price: 2499, out: [5] },
    "adidas-campus": { name: "Adidas Campus 00", price: 2199, out: [10, 11] },
    "puma-suede":    { name: "Puma Suede", price: 1899, out: [] },
    "nb-530":        { name: "New Balance 530", price: 2399, out: [6] },
    "converse-70":   { name: "Converse Chuck 70 Plus Canvas Black", price: 1599, out: [] },
    "air-max-95":    { name: "Nike Air Max 95", price: 2499, out: [8, 9] },
    "air-max-90":    { name: "Nike Air Max 90", price: 2499, out: [7] },
    "vans-knu":      { name: "Vans Knu Skool Trainers Black", price: 1499, out: [11] },
    "dunk-low":      { name: "Nike Dunk Low Retro", price: 1999, out: [5, 6] },
    "f50-elite":     { name: "Adidas F50 Hyperfast Elite Firm Ground Boots", price: 3499, out: [9] },
    "shox-tl":       { name: "Nike Shox TL", price: 3499, out: [10] },
    "aj4-cement":    { name: "Air Jordan 4 Retro White Cement", price: 1499, out: [7, 8] },
    "shox-r4":       { name: "Nike Shox R4", price: 1999, out: [] }
};
const SIZES = [5, 6, 7, 8, 9, 10, 11];

/* ---------- Validation rules ---------- */
const NAME_RE = /^[A-Za-zÀ-ÿ'’ -]{2,60}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^(\+27|0)[1-8]\d{8}$/;      // South African numbers

const cleanPhone = v => v.replace(/[\s()-]/g, "");
const todayISO = () => new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
const rand = n => "R" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const commonRules = {
    name:    v => NAME_RE.test(v.trim()) ? "" : "Enter your full name (letters only, 2-60 characters).",
    email:   v => EMAIL_RE.test(v.trim()) ? "" : "Enter a valid email address, e.g. name@example.com.",
    message: v => (v.trim().length >= 10 && v.trim().length <= 500) ? "" : "Message must be between 10 and 500 characters."
};

const enquiryRules = {
    ...commonRules,
    phone:    v => PHONE_RE.test(cleanPhone(v)) ? "" : "Enter a valid South African number, e.g. 0821234567 or +27821234567.",
    product:  v => v ? "" : "Please choose a product.",
    size:     v => v ? "" : "Please choose a size.",
    quantity: v => (Number.isInteger(+v) && +v >= 1 && +v <= 10) ? "" : "Quantity must be a whole number from 1 to 10.",
    date:     v => (!v || v >= todayISO()) ? "" : "The collection date cannot be in the past.",
    consent:  checked => checked ? "" : "Please tick the box so we can contact you."
};

const contactRules = {
    ...commonRules,
    phone: v => (v.trim() === "" || PHONE_RE.test(cleanPhone(v))) ? "" : "Enter a valid South African number or leave this blank.",
    type:  v => v ? "" : "Please choose a type of message."
};

/* ---------- Shared helpers ---------- */
function showError(input, message) {
    const err = document.getElementById(input.id + "-error");
    if (err) err.textContent = message;
    input.setAttribute("aria-invalid", message ? "true" : "false");
    return !message;
}

const valueOf = input => input.type === "checkbox" ? input.checked : input.value;

function validateForm(form, rules) {
    let firstBad = null;
    for (const id in rules) {
        const input = form.elements[id];
        if (!showError(input, rules[id](valueOf(input))) && !firstBad) firstBad = input;
    }
    if (firstBad) firstBad.focus();
    return !firstBad;
}

function make(tag, text, cls) {              // textContent only, so user input can never inject HTML
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (cls) node.className = cls;
    return node;
}

function wire(form, rules, responseBox, onValid) {
    form.addEventListener("focusout", e => {
        const rule = rules[e.target.id];
        if (rule) showError(e.target, rule(valueOf(e.target)));
    });
    form.addEventListener("submit", e => {
        e.preventDefault();
        if (validateForm(form, rules)) onValid();
    });
    form.addEventListener("reset", () => {
        responseBox.hidden = true;
        form.querySelectorAll(".error").forEach(s => s.textContent = "");
        form.querySelectorAll("[aria-invalid]").forEach(i => i.removeAttribute("aria-invalid"));
        document.getElementById("message-count").textContent = "0/500";
    });
    const area = form.elements.message, count = document.getElementById("message-count");
    area.addEventListener("input", () => count.textContent = area.value.length + "/500");
}

function showResponse(box, nodes) {
    box.replaceChildren(...nodes);
    box.hidden = false;
    box.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- Enquiry page ---------- */
function initEnquiry(form) {
    const box = document.getElementById("enquiry-response");
    for (const key in PRODUCTS) form.elements.product.add(new Option(PRODUCTS[key].name + " - " + rand(PRODUCTS[key].price), key));
    SIZES.forEach(s => form.elements.size.add(new Option("UK " + s, s)));
    form.elements.date.min = todayISO();

    wire(form, enquiryRules, box, () => {
        const f = form.elements, p = PRODUCTS[f.product.value];
        const size = +f.size.value, qty = +f.quantity.value;
        const subtotal = p.price * qty;
        const delivery = subtotal >= FREE_DELIVERY_OVER ? 0 : DELIVERY_FEE;
        const inStock = !p.out.includes(size);
        const available = SIZES.filter(s => !p.out.includes(s)).join(", ");
        const ref = "ENQ-" + Date.now().toString().slice(-6);

        const list = make("ul");
        [
            ["Product", p.name],
            ["Size", "UK " + size],
            ["Colour", f.colour.value.trim() || "Any available"],
            ["Quantity", qty],
            ["Price each", rand(p.price)],
            ["Subtotal", rand(subtotal)],
            ["Delivery", delivery ? rand(delivery) : "Free"],
            ["Estimated total", rand(subtotal + delivery)]
        ].forEach(([k, v]) => list.append(make("li", k + ": " + v)));

        showResponse(box, [
            make("h2", "Thank you, " + f.name.value.trim().split(" ")[0] + "!"),
            make("p", "Your enquiry reference is " + ref + ". Here is our response:"),
            list,
            inStock
                ? make("p", "Good news: size UK " + size + " is in stock. We will hold it for 48 hours" +
                    (f.date.value ? " and have it ready for collection on " + f.date.value + "." : "."), "success")
                : make("p", "Size UK " + size + " is currently out of stock. Available sizes for this sneaker: UK " + available + ".", "warning"),
            make("p", "We will confirm by " + f.method.value.toLowerCase() + " using the details you supplied.")
        ]);
    });
}

/* ---------- Contact page ---------- */
function initContact(form) {
    const box = document.getElementById("contact-response");

    wire(form, contactRules, box, async () => {
        const f = form.elements;
        const data = {
            name: f.name.value.trim(), email: f.email.value.trim(),
            phone: f.phone.value.trim() || "Not provided", type: f.type.value, message: f.message.value.trim()
        };
        const subject = "SneakNova website: " + data.type;
        const body = "Name: " + data.name + "\nEmail: " + data.email + "\nPhone: " + data.phone +
                     "\nMessage type: " + data.type + "\n\nMessage:\n" + data.message;

        if (FORMSPREE_ENDPOINT) {                       // AJAX submission (no page reload)
            try {
                const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify(data)
                });
                if (!res.ok) throw new Error("Request failed");
                showResponse(box, [make("h2", "Message sent!"), make("p", "Thank you, " + data.name.split(" ")[0] + ". We will reply to " + data.email + " soon.", "success")]);
                form.reset();
                box.hidden = false;
            } catch {
                showResponse(box, [make("p", "Sorry, your message could not be sent. Please try again or email us directly at " + RECIPIENT + ".", "warning")]);
            }
            return;
        }

        const link = make("a", "Send email to " + RECIPIENT, "button");
        link.href = "mailto:" + RECIPIENT + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        showResponse(box, [
            make("h2", "Your email is ready"),
            make("p", "Check the details below, then click the button to open it in your email app and send it."),
            make("pre", "To: " + RECIPIENT + "\nSubject: " + subject + "\n\n" + body),
            link
        ]);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const enquiry = document.getElementById("enquiry-form");
    const contact = document.getElementById("contact-form");
    if (enquiry) initEnquiry(enquiry);
    if (contact) initContact(contact);
});