const megaMenu = document.getElementById("megaMenu");
const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const fondo = document.getElementById("menuBackground");
const links = document.querySelectorAll(".mega-links a");

if (openBtn && megaMenu) {
    openBtn.onclick = () => {
        megaMenu.classList.add("active");
    };
}

if (closeBtn && megaMenu) {
    closeBtn.onclick = () => {
        megaMenu.classList.remove("active");
        if (fondo) fondo.style.opacity = 0;
    };
}

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        if (fondo) {
            fondo.style.backgroundImage = `url('${link.dataset.img}')`;
            fondo.style.opacity = 1;
        }
    });
});

if (megaMenu) {
    megaMenu.addEventListener("mouseleave", () => {
        if (fondo) fondo.style.opacity = 0;
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && megaMenu) {
        megaMenu.classList.remove("active");
    }
});