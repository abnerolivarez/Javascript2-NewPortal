// ===============================
// SCROLL ANIMATION REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    
   
    
    ".image-detalis," +
    ".featured-item-container, " +
    ".specs-container, " +
    ".headset-title, " +
    ".headset-image, " +
    ".feature-item, " +
    ".featured-main, " +
    ".featured-product-container," +
    ".footer-brand"  
    
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                // Stop observing after animation happens
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.55  /* valid number is 0 - 1*/
    }
);


// Add reveal class and observe
revealElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});