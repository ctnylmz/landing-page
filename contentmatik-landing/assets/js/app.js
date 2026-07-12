const MobileBtn = document.querySelector(".mobile-btn");
const HeaderRight = document.querySelector(".header-right");

const StartBtn = document.querySelector(".icon");
const closeIcon = document.querySelector(".closeIcon");
const video = document.querySelector(".video-popup");



MobileBtn.addEventListener("click",function(){
    HeaderRight.classList.toggle("active")
})

StartBtn.addEventListener("click",function(){
    video.classList.toggle("active")
})

closeIcon.addEventListener("click",function(){
    video.classList.remove("active")
})