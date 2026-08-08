const navBar = document.querySelector(".menu");
const navBtn = document.querySelector(".mobile-btn");
const door = document.querySelector(".door");
const svg = document.querySelector(".hire");

const startIcon = document.querySelector(".header .start");
const FinishIcon = document.querySelector(".header .finish");

navBtn.addEventListener("click", function () {
    navBar.classList.toggle("hidden")
    document.body.classList.toggle("no-scroll");
    door.classList.toggle("hidden")
    svg.classList.toggle("hidden")

    startIcon.classList.toggle("hidden")
    FinishIcon.classList.toggle("hidden")
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        navBar.classList.add("hidden");
        document.body.classList.remove("no-scroll");

        door.classList.add("hidden");
        svg.classList.remove("hidden");

        startIcon.classList.remove("hidden");
        FinishIcon.classList.add("hidden");
    }
}); 