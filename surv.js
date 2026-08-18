const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


const heroSwiper = new Swiper(".heroSwiper", {

    loop: true,

    speed: 1200,

    effect: "fade",

    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }

});


const counters = document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    const statisticsSection = document.querySelector(".statistics");

    if (!statisticsSection || countersStarted) {
        return;
    }

    const sectionPosition =
        statisticsSection.getBoundingClientRect().top;

    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition - 100) {

        countersStarted = true;

        counters.forEach(function (counter) {

            const target = Number(counter.dataset.target);

            let currentValue = 0;

            const increment =
                Math.max(1, Math.ceil(target / 80));


            const updateCounter = function () {

                currentValue += increment;

                if (currentValue >= target) {

                    counter.textContent = target + "+";

                    return;
                }

                counter.textContent = currentValue;

                requestAnimationFrame(updateCounter);

            };

            updateCounter();

        });

    }

}


window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);