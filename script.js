const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your form was validated successfully.";

    contactForm.reset();
});
// Typing Animation

const typingElement = document.getElementById("typing");

const roles = [
    "Frontend Developer",
    "Java Developer",
    "Software Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    if (!typingElement) return;

    const currentRole = roles[roleIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingElement.textContent =
        currentRole.substring(0, charIndex);

    let delay = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        delay = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll",function(){
    if(backToTop && window.scrollY > 200){
        backToTop.style.display="block";
    } else if (backToTop){
        backToTop.style.display="none";
    }
});
if (backToTop){
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
}


const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
});