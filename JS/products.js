"use strict";

/* =========================================================
   SNEAKNOVA - products.js
   Live search, brand filter and sort for products.html.
   Reads the existing product cards, so no data to maintain.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".product-grid");
    const search = document.getElementById("product-search");
    const brand = document.getElementById("brand-filter");
    const sort = document.getElementById("sort-by");
    const count = document.getElementById("product-count");
    const none = document.getElementById("no-results");
    if (!grid || !search) return;

    /* Build the product list from the cards on the page */
    const products = [...grid.querySelectorAll(".product-card")].map((el, i) => ({
        el,
        order: i,
        brand: el.querySelector("h2").textContent.trim(),
        name: el.querySelector("h3").textContent.trim(),
        price: parseInt(el.querySelector("p").textContent.replace(/\D/g, ""), 10)
    }));

    /* Fill the brand dropdown from the brands that exist */
    [...new Set(products.map(p => p.brand))].sort().forEach(b => brand.add(new Option(b, b)));

    function update() {
        const query = search.value.trim().toLowerCase();

        const list = products.filter(p =>
            (brand.value === "" || p.brand === brand.value) &&
            (p.brand + " " + p.name).toLowerCase().includes(query)
        );

        list.sort((a, b) => {
            switch (sort.value) {
                case "price-low":  return a.price - b.price;
                case "price-high": return b.price - a.price;
                case "name-az":    return a.name.localeCompare(b.name);
                case "name-za":    return b.name.localeCompare(a.name);
                default:           return a.order - b.order;
            }
        });

        products.forEach(p => { p.el.hidden = true; });
        list.forEach(p => { p.el.hidden = false; grid.append(p.el); });   // append also reorders

        count.textContent = "Showing " + list.length + " of " + products.length + " products";
        none.hidden = list.length > 0;
    }

    search.addEventListener("input", update);
    brand.addEventListener("change", update);
    sort.addEventListener("change", update);
    document.getElementById("clear-filters").addEventListener("click", () => {
        search.value = "";
        brand.value = "";
        sort.value = "default";
        update();
    });

    update();
});