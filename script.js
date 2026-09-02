// Typing animation

const typed = new Typed("#typing", {

    strings: [
        "AI & ML Student",
        "Web Developer",
        "Programmer",
        "Problem Solver"
    ],

    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true

});


// Mobile menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu when clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// Contact form

function sendMessage(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been received."
    );

    event.target.reset();

}