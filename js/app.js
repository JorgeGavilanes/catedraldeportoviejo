const swiper = new Swiper(".header", {
    loop: true,
    autoplay: {
        delay: 25000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const burger = document.querySelector(".burger");
const paths = document.querySelector(".paths");

burger.addEventListener("click", () => {
    paths.classList.toggle("active");
});

paths.addEventListener("click", () => {
    paths.classList.remove("active");
});