
const words = ["Healthcare", "Diagnosis", "Medical Support", "Health Analysis"];
let wordIndex = 0;
let letterIndex = 0;
const typingElement = document.querySelector(".typing");

function typeEffect() {

    if(letterIndex < words[wordIndex].length){
        typingElement.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeEffect,100);
    }

    else{
        setTimeout(deleteEffect,2000);
    }

}

function deleteEffect(){

    if(letterIndex > 0){
        typingElement.textContent =
        words[wordIndex].substring(0,letterIndex-1);

        letterIndex--;
        setTimeout(deleteEffect,50);
    }

    else{
        wordIndex++;

        if(wordIndex >= words.length){
            wordIndex = 0;
        }

        setTimeout(typeEffect,300);
    }

}

typeEffect();



// ================= NAVBAR CLICK SCROLL ANIMATION =================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        const navbarHeight =
        document.querySelector(".navbar").offsetHeight;

        const sectionPosition =
        targetSection.offsetTop - navbarHeight;

        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
        });

    });

});



// ================= ACTIVE NAVBAR LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});



// ================= NAVBAR SHADOW =================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 40){
        navbar.style.boxShadow =
        "0 6px 25px rgba(0,0,0,0.2)";
    }

    else{
        navbar.style.boxShadow = "none";
    }

});



// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{threshold:0.2});

document.querySelectorAll(
".feature-card, .step, .stat, .section-title, .section-subtitle"
).forEach(el => {

    el.classList.add("hidden");
    observer.observe(el);

});

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

const msg = document.getElementById("successMessage");

msg.innerHTML = "✅ Message sent successfully!";
msg.style.opacity = "1";

setTimeout(() => {
msg.innerHTML = "";
document.getElementById("contactForm").reset();
},3000);

});


