
import { getCart, saveToCart } from "./updatecart.js";

/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".story-left, .story-right, .philosophy-content, .philosophy-image, .numbers-heading, .number-card, .technology-header, .tech-card, .experience-text, .experience-quote, .cta-content"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

// ====================================================//


/* =========================================
   NUMBER COUNTER
========================================= */

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(
                counter.dataset.count
            );

            let start = 0;

            const duration = 1600;

            const startTime = performance.now();


            function animate(currentTime) {

                const elapsed =
                    currentTime - startTime;

                const progress =
                    Math.min(
                        elapsed / duration,
                        1
                    );

                const ease =
                    1 - Math.pow(1 - progress, 3);

                start =
                    Math.floor(
                        target * ease
                    );

                counter.textContent = start;

                if (progress < 1) {

                    requestAnimationFrame(animate);

                } else {

                    counter.textContent = target;

                }

            }

            requestAnimationFrame(animate);

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: .5
    }
);


counters.forEach((counter) => {
    counterObserver.observe(counter);
});


/* =========================================
   HEADPHONE MOUSE PARALLAX
========================================= */

const heroProduct =
    document.querySelector(".hero-product");

const headphone =
    document.querySelector(".hero-headphone");


if (heroProduct && headphone) {

    heroProduct.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroProduct.getBoundingClientRect();

            const x =
                (event.clientX - rect.left)
                / rect.width
                - .5;

            const y =
                (event.clientY - rect.top)
                / rect.height
                - .5;


            headphone.style.transform = `
                translate(
                    ${x * 20}px,
                    ${y * 20}px
                )
                rotateY(${x * 8}deg)
                rotateX(${-y * 5}deg)
            `;

        }
    );


    heroProduct.addEventListener("mouseleave",() => {
            headphone.style.transform = "";

        }
    );

}


/* =========================================
   TECHNOLOGY CARD EFFECT
========================================= */

const techCards =
    document.querySelectorAll(".tech-card");


techCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const rotateY =
                ((x / rect.width) - .5) * 5;

            const rotateX =
                ((y / rect.height) - .5) * -5;


            card.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-5px)
            `;

        }
    );


    card.addEventListener("mouseleave",() => {

            card.style.transform = "";

        }
    );

});


/* =========================================
   SMOOTH SCROLL
========================================= */

const storyButton =
    document.querySelector(".hero-button");


if (storyButton) {

    storyButton.addEventListener(
        "click",
        (event) => {

            const story =
                document.querySelector("#story");

            if (!story) return;

            event.preventDefault();

            story.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* =========================================
   HERO MOUSE LIGHT
========================================= */

const heroGrid =
    document.querySelector(".hero-grid");


if (heroGrid) {

    window.addEventListener(
        "mousemove",
        (event) => {

            const x =
                event.clientX /
                window.innerWidth *
                100;

            const y =
                event.clientY /
                window.innerHeight *
                100;


            heroGrid.style.background =
                `
                radial-gradient(
                    circle at ${x}% ${y}%,
                    rgba(216,194,157,.08),
                    transparent 20%
                ),
                linear-gradient(
                    rgba(255,255,255,.025) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255,255,255,.025) 1px,
                    transparent 1px
                )
                `;

            heroGrid.style.backgroundSize =
                "auto, 70px 70px, 70px 70px";

        }
    );

}


/* =========================================
   CTA BUTTON
========================================= */

const ctaButton =
    document.querySelector(".cta-button");


if (ctaButton) {

    ctaButton.addEventListener(
        "click",
        (event) => {

            const href =
                ctaButton.getAttribute("href");

            if (href === "#") {

                event.preventDefault();

                console.log(
                    "Connect this button to your shop page."
                );

            }

        }
    );

}





// ===========================================//
// CHECK OUT BUTTON TO REDIRECT INTO PLACE ORDER
// ===========================================//
 
const checkOutBtn = document.querySelectorAll(".checkoutbtn");

    checkOutBtn.forEach((button)=>{
        button.addEventListener("click",()=> {

        const cart = getCart();

    if (cart.length === 0) {
        showToast("Your Cart is Empty!");
        return;
    }

    // Save the latest cart
        saveToCart();

    window.location.href = "placeorder.html";
   
    });

});