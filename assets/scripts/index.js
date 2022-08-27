const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            for (let i = 0; i < links.length; i++) {
                links[i].classList.remove("fade");  
            }
        });
    });
});

const contact = document.querySelector(".contact");
const contactSplash = document.querySelector(".contact-splash");


contact.addEventListener("click", () => {
    contactSplash.classList.toggle("open");
});