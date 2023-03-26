const hamburger = document.querySelector(".bio-hamburger")
const navMenu = document.querySelector(".navigate-menu__wrapper")
const locale = document.querySelector(".bio__locale")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("bio-hamburger_activate");
    navMenu.classList.toggle("navigate-menu__wrapper_activate");
    document.body.classList.toggle("hidden");
    locale.classList.toggle("bio__locale_active")
})

document.querySelectorAll(".navigate-menu__link").forEach(n => n.addEventListener("click", () => {
    disableBlocks();
}))



function disableBlocks() {
    hamburger.classList.remove("bio-hamburger_activate");
    navMenu.classList.remove("navigate-menu__wrapper_activate");
    document.body.classList.toggle("hidden");
    locale.classList.remove("bio__locale_active");
}