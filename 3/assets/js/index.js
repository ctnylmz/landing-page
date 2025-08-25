const btn = document.getElementById("mobile-icon-button");
const menu = document.querySelector(".menu ul");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});