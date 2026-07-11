/* =========================
   TYPING EFFECT
========================= */


const typingElement = document.getElementById("typing");


const words = [

    "AI Enthusiast",

    "Embedded Systems Developer",

    "IoT Developer",

    "Software Engineer",

    "Automation Engineer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect() {


    let currentWord = words[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);


        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }


    } else {


        typingElement.textContent =
            currentWord.substring(0, charIndex--);


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(typeEffect, 100);

}


typeEffect();





/* =========================
   DARK MODE
========================= */


const themeButton =
    document.querySelector(".theme-toggle");


themeButton.addEventListener("click", () => {


    document.body.classList.toggle("dark-mode");


    const icon =
        themeButton.querySelector("i");


    if (document.body.classList.contains("dark-mode")) {


        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");


    } else {


        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");


    }


});





/* =========================
   SCROLL ANIMATION
========================= */


const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver((entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    },
        {

            threshold: 0.15

        });



sections.forEach(section => {


    section.classList.add("hidden");


    observer.observe(section);


});





/* =========================
   ACTIVE NAVIGATION
========================= */


const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop =
            section.offsetTop - 150;


        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link => {


        link.classList.remove("active");


        if (link.getAttribute("href")
            === "#" + current) {


            link.classList.add("active");


        }


    });


});





/* =========================
   SMOOTH SCROLL
========================= */


document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {


        anchor.addEventListener("click",
            function (e) {


                e.preventDefault();


                document.querySelector(
                    this.getAttribute("href")
                )
                    .scrollIntoView({

                        behavior: "smooth"

                    });


            });


    });