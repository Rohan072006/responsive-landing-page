const button = document.getElementById("start-btn");
const message = document.getElementById("message");

button.addEventListener("click", function(){
    message.textContent = "Welcome to MySite 🚀";
});
const themeBtn = document.getElementById("theme-btn");

if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.textContent = "☀️";

        localStorage.setItem("theme", "light");
    }
    else{
        themeBtn.textContent = "🌙";

        localStorage.setItem("theme", "dark");
    }

});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function(item){

    item.addEventListener("click", function(){

        navLinks.classList.remove("active");

    });

});

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }
    else{
        navbar.classList.remove("scrolled");
    }

});

const typingText = document.getElementById("typing-text");

const words = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Learner"
];

let wordIndex = 0;

function changeText(){

    typingText.textContent = words[wordIndex];

    wordIndex++;

    if(wordIndex >= words.length){
        wordIndex = 0;
    }

}

setInterval(changeText, 2000);

changeText();

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function(){

    reveals.forEach(function(section){

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            section.classList.add("active");

        }

    });

});

const sections = document.querySelectorAll("section");
const navItemsLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function(){

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navItemsLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Message Sent Successfully 🚀");

});