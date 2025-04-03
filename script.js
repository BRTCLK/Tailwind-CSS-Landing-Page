const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", (e) => {
    e.stopPropagation(); // Bu, tıklama olayının dışarıya yayılmasını engeller
    btn.classList.toggle("open");
    nav.classList.toggle("hidden");
    nav.classList.toggle("flex");
});

// Menü dışında bir yere tıklandığında menüyü kapatmak için
document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !nav.contains(e.target)) {
        btn.classList.remove("open");
        nav.classList.add("hidden");
        nav.classList.remove("flex");
    }
});
