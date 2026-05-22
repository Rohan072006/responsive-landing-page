const button = document.getElementById("start-btn");
const message = document.getElementById("message");

button.addEventListener("click", function(){
    message.textContent = "Welcome to MySite 🚀";
});
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "☀️";
    }
    else{
        themeBtn.textContent = "🌙";
    }

});
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});