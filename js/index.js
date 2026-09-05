
import imageItem from "./product.js"; //Get the product from product.js
import { displayReviews } from "./review.js";


import {
    cart,
    saveToCart,
} from "./updatecart.js";


let currentProduct = imageItem[0];

productFunction(currentProduct);

// Tell review.js which product is currently displayed
localStorage.setItem("currentProductId",currentProduct.id);

displayReviews(currentProduct.id);



// Hero Section
const heroImages = document.querySelectorAll(".hero-bg");//the output of image

const heroTitle = document.querySelector(".hero-title");
const heroHeading = document.querySelector(".hero-heading");
const heroPhone = document.querySelector(".best-hphone");
const heroWireless = document.querySelector(".wireless");


const heroContent = [

    { heading: "Best Collection", phone: "HEAD PHONE", wireless: "WIRELESS"},

    { heading: "Premium Sound", phone: "HEADPHONE", wireless: "EXPERIENCE"},

    { heading: "Next Generation", phone: "SMART AUDIO", wireless: "TECHNOLOGY"}

];


// =====Heror Section with Animation=====//
let heroIndex = 0;

// Initial text animation
heroTitle.classList.add("animate");


function changeHero() {

    // Remove active from current image
    heroImages[heroIndex].classList.remove("active");


    // Move to next slide
    heroIndex++;

    if (heroIndex >= heroImages.length) {
        heroIndex = 0;
    }


    // Activate next image
    heroImages[heroIndex].classList.add("active");


    // Change text
    heroHeading.textContent = heroContent[heroIndex].heading;

    heroPhone.textContent = heroContent[heroIndex].phone;

    heroWireless.textContent = heroContent[heroIndex].wireless;


    // Restart text animation
    heroTitle.classList.remove("animate");

    // Force animation restart
    void heroTitle.offsetWidth;

    heroTitle.classList.add("animate");
}

// Change every 5 seconds
setInterval(changeHero, 5000);
// =============================End of Hero Section=================================//


// ==========================================================//

const itemGrid = document.querySelector(".item-container-grid-two");
const arrowPrev = document.querySelector(".arrow-prev");
const arrowNext = document.querySelector(".arrow-next");



const showImageLimit = 4;  //LIMIT THE DISPLAY ITEM TO 4
let showIndex = 0;


// ADD THIS FUNCTION ABOVE showImage()
function productFunction(product){

    document.querySelector(".headphone-img").src = product.img;

    document.querySelector(".title").textContent = product.title;

    document.querySelector(".price").textContent = `₱${product.price.toLocaleString()}`;



    const descriptionHTML = product.description
        .split("|")
        .map(desc => `<li class="li">${desc.trim()}</li>`)
        .join("");

    document.querySelector(".itemspecs-details").innerHTML = `
        <div class="description-container">
            <ul class="description-list">
                ${descriptionHTML}
            </ul>
        </div>
    `;

    if(product.technicalspecs){

        const specsHTML = product.technicalspecs
        .split("|")
        .map(spec => `<li>${spec.trim()}</li>`)
        .join("");


        document.querySelector(".specification-content").innerHTML = `
            <div class="description-container">
                <ul class="description-list">
                    ${specsHTML}
                </ul>
            </div>
        `;

    }

}


function showImage(direction =""){

    // Remove previous animation
    itemGrid.classList.remove(
        "slide-left",
        "slide-right"
    );


    // Force browser to restart animation
    void itemGrid.offsetWidth;

    itemGrid.innerHTML = imageItem
    .slice(showIndex, showIndex + showImageLimit)
    .map(img=>`

        <div class="image-content-container">
            <img src="${img.img}" class="show-img" alt="${img.img}" 
            data-id="${img.id}">
        </div>

    `)
    .join("");




    // ===Select newly created images===//
    const itemgridImages = itemGrid.querySelectorAll(".show-img");

    // Add click event
    itemgridImages.forEach(img => {

        img.addEventListener("click",()=>{

            const id = Number(img.dataset.id);
            const product = imageItem.find(item => item.id === id);

            productDisplay(product);

            // Remove selected border
            itemgridImages.forEach(image=>{image.classList.remove("selected");});

            // Add selected border
            img.classList.add("selected");
        });
    });


    // Add animation
    if(direction === "arrowNext"){
        itemGrid.classList.add("slide-left");
    }

    if(direction === "arrowPrev"){
        itemGrid.classList.add("slide-right");
    }

    updateIndex();

}

arrowNext.addEventListener("click",()=>{
    if(showIndex + showImageLimit < imageItem.length){
        showIndex += showImageLimit;
        showImage("arrowNext");
    }
});

arrowPrev.addEventListener("click",()=>{
    if(showIndex > 0){
        showIndex -= showImageLimit;
        showImage("arrowPrev");
    }
});


function updateIndex(){
    arrowPrev.disabled = showIndex === 0;
    arrowNext.disabled =
    showIndex + showImageLimit >= imageItem.length;
}

// Initial load
showImage();

// ============================================================//



const imageLimit = 5;
let index = 0;

const itemContainerGrid = document.querySelector(".item-container-grid");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");


// Display the product when click the image
function productDisplay(product){ 
    
    document.querySelector(".headphone-img").src = product.img; 
    document.querySelector(".title").textContent = product.title; 
    document.querySelector(".price").textContent = `₱${product.price.toLocaleString()}`; 
    document.querySelector(".discount").textContent = `₱${product.discount.toLocaleString()}`; 
 
    // Update current product
    currentProduct = product;


    // ==========================================
    // UPDATE REVIEW PRODUCT ID
    // ==========================================

    localStorage.setItem(
        "currentProductId",
        currentProduct.id
    );


    // Update rating and reviews
    displayReviews(currentProduct.id);


    // ==========================================
    // DESCRIPTION
    // ==========================================

    const descriptionHTML = product.description 
        .split("|") 
        .map(desc => `<li>${desc.trim()}</li>`) 
        .join(""); 
 
 
    document.querySelector(".itemspecs-details").innerHTML = ` 
        <div class="description-container"> 
            <ul class="description-list"> 
                ${descriptionHTML} 
            </ul> 
        </div> 
    `; 
 
 
    document.querySelector(".descript-content").innerHTML = ` 
        <div class="description-container"> 
            <ul class="description-list"> 
                ${descriptionHTML} 
            </ul> 
        </div> 
    `; 
 
 
    // ==========================================
    // TECHNICAL SPECS
    // ==========================================

    if(product.technicalspecs){ 
 
        const specsHTML = product.technicalspecs 
            .split("|") 
            .map(spec => `<li>${spec.trim()}</li>`) 
            .join(""); 
 
 
        document.querySelector(".specification-content").innerHTML = ` 
            <div class="description-container"> 
                <ul class="description-list"> 
                    ${specsHTML} 
                </ul> 
            </div> 
        `; 
 
    } 
 
}



function displayImage(direction = ""){

    itemContainerGrid.classList.remove(
        "slide-left",
        "slide-right"
    );

    void itemContainerGrid.offsetWidth;

    itemContainerGrid.innerHTML = imageItem
        .slice(index, index + imageLimit)
        .map(el=>`

            <div class="image-content-container">

                <img src="${el.img}" class="item-img" alt="${el.img}" 
                data-id="${el.id}"> 

            </div>

    `).join("");


    const itemImages = itemContainerGrid.querySelectorAll(".item-img");

    itemImages.forEach(img=>{

        img.addEventListener("click",()=>{

            const id = Number(img.dataset.id);

            const product = imageItem.find(
                item=>item.id === id
            );

            productDisplay(product);

            itemImages.forEach(image=>{
                image.classList.remove("selected");
            });


            img.classList.add("selected");


        });


    });




    if(direction === "next"){
        itemContainerGrid.classList.add("slide-left");
    }


    if(direction === "prev"){
        itemContainerGrid.classList.add("slide-right");
    }

    updateImage();

}


next.addEventListener("click",()=>{
    if(index + imageLimit < imageItem.length){
        index += imageLimit;
        displayImage("next");
    }
});

prev.addEventListener("click",()=>{

    if(index > 0){
        index -= imageLimit;
        displayImage("prev");
    }

});


function updateImage(){
    prev.disabled = index === 0;
    next.disabled =
    index + imageLimit >= imageItem.length;

}

// LOAD DEFAULT PRODUCT
displayImage();

productDisplay(imageItem[0]);


// =======================================================================//


//====Featured Products Section Add Highlight for the menu====//
const featuredLinks = document.querySelectorAll(".featured-links");

        featuredLinks.forEach(el=>{
            el.addEventListener("click",()=>{
                featuredLinks.forEach(btn=>{
                    btn.classList.remove("active");
                });
                el.classList.add("active");
            });
        });
// ===================================================//


const productLimit = 4;
let startIndex = 0;
let selectedCategory = "all";

const featuredProduct = document.querySelector(".featured-product-details");
const prevBtn = document.querySelector(".featured-prev");
const nextBtn = document.querySelector(".featured-next");


function getFilteredProducts() {

    // ==========================================
    // GET PRODUCTS BY CATEGORY
    // ==========================================

    let products =
        selectedCategory === "all"
            ? [...imageItem]
            : imageItem.filter(item =>
                item.category.includes(selectedCategory)
            );


    // ==========================================
    // PUT NEW PRODUCTS FIRST
    // ==========================================

    products.sort((a, b) => {

        const aIsNew = a.new === "New";
        const bIsNew = b.new === "New";

        if (aIsNew && !bIsNew) return -1;

        if (!aIsNew && bIsNew) return 1;

        return 0;
    });


    return products;
}


function displayFeaturedProducts(direction = "") {

    // Remove previous animation
    featuredProduct.classList.remove("slide-next", "slide-prev");

    // Force browser to restart animation
    void featuredProduct.offsetWidth;
    

    // Get category products
    // NEW products are automatically placed first
    const filteredItems = getFilteredProducts();


    // Save the Star Review
    const reviews = JSON.parse(localStorage.getItem("productReviews")) || [];


    // Display products
    featuredProduct.innerHTML = filteredItems
        .slice(startIndex, startIndex + productLimit)
        .map(item => {


    // Get reviews for this specific product
        const productReviews = reviews.filter(
            review => Number(review.productId) === Number(item.id)
        );

        // Calculate average rating
        let averageRating = 0;

        if (productReviews.length > 0) {

            const totalRating = productReviews.reduce(
                (total, review) =>
                    total + Number(review.rating),
                0
            );

            averageRating =
                totalRating / productReviews.length;
        }

        // Create stars
        const roundedRating = Math.round(averageRating);

        const stars =
            "★".repeat(roundedRating) +
            "☆".repeat(5 - roundedRating);


        return `
            
            <div class="product-details-containerjs">

                <div class="product-labels">
                    ${item.new ? `<p class="new-text">${item.new}</p>` :""}
                    ${item.sale ? `<p class="sale-text">${item.sale}</p>` :"" }
                </div>

                <img src="${item.img}" class="featured-img">

                <div class="hLine"></div>

                <h5 class="product-titlejs">
                    ${item.title}
                </h5>

                <div>
                 <!-- Star Rate Output -->
                    <span class="stars-rate">${stars}</span>
                </div>

                <p class="price-productjs">
                    ₱${item.price.toLocaleString()}
                   
                </p>

            </div>
        `})
        .join("");



    if (direction) {
        featuredProduct.classList.add(`slide-${direction}`);
    }


    // Add animation
    if (direction === "nextBtn") {
        featuredProduct.classList.add("slide-next");
    }

    if (direction === "prevBtn") {
        featuredProduct.classList.add("slide-prev");
    }

    // IMPORTANT:
    // Use filteredItems.length
    updateButtons(filteredItems.length);
}


nextBtn.addEventListener("click", () => {

    const products = getFilteredProducts();

    if (startIndex + productLimit < products.length) {

        startIndex += productLimit;

        displayFeaturedProducts("nextBtn");
    }

});


prevBtn.addEventListener("click", () => {

    if (startIndex > 0) {
        startIndex -= productLimit;
        displayFeaturedProducts("prevBtn");
    }

});


function updateButtons(totalProducts) {
    prevBtn.disabled = startIndex === 0;
    nextBtn.disabled = startIndex + productLimit >= totalProducts;
}
displayFeaturedProducts();




// Selecting Category Menu
const categoryButtons = document.querySelectorAll(".featured-links");

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active button
        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Get category
        selectedCategory = button.dataset.category;

        // Reset slider
        startIndex = 0;

        // Display filtered products
        displayFeaturedProducts();

    });

});



const specsItem = document.querySelectorAll(".specs");
      specsItem.forEach(item=>{
            item.addEventListener("click",()=>{
                specsItem.forEach(p=>{
                         p.classList.remove("active");
                })
                 item.classList.add("active");

                 changeTab(item.dataset.tab);
            });
            
    });



// =======================//
// DESCRIPTION TAB SECTION
// =======================//

function changeTab(tab){

    if(!currentProduct) return;

    const descriptionContent = document.querySelector(".descript-content");
    const specificationContent = document.querySelector(".specification-content");
    const reviewContent = document.querySelector(".review-content");
    const shippingContent = document.querySelector(".ship-content");
    const returnContent = document.querySelector(".return-content");


    //HIDE ALL CONTENT FIRST
    descriptionContent.style.display = "none";
    specificationContent.style.display = "none";
    reviewContent.style.display = "none";
    shippingContent.style.display = "none";
    returnContent.style.display = "none";


    switch(tab){

    // ==========================//
    // DESCRIPTION TAB SECTION
    // ==========================//

        case "description": //located in the html Item Description Section
            descriptionContent.style.display = "block";
            descriptionContent.innerHTML = `
                <ul class="description-list">
                    ${
                        currentProduct.description
                        .split("|")
                        .map(desc =>
                            `<li>${desc.trim()}</li>`
                        )
                        .join("")
                    }
                </ul>
            `;
        break;


    // ==========================
    // SPECIFICATIONS TAB
    // ==========================

        case "technicalspecs":

        specificationContent.style.display = "block";

        if(!currentProduct.technicalspecs){
            specificationContent.innerHTML = `
                <p>
                    No specifications available.
                </p>
            `;
            break;
        }

        specificationContent.innerHTML = `
            <ul class="description-list">
                ${currentProduct.technicalspecs.split("|").map(spec =>
                        `<li>${spec.trim()}</li>`
                    ).join("")
                }
            </ul>
            `;
            break;


        // ==========================
        // REVIEWS TAB
        // ==========================

        case "reviews":
            reviewContent.style.display = "block";
        break;


        // ==========================
        // SHIPPING TAB
        // ==========================

        case "shipping":
            shippingContent.style.display = "block";
        break;


        // ==========================
        // RETURN TAB
        // ==========================

        case "return":
            returnContent.style.display = "block";
        break;
    }
}


// PROGRESS FOR SHIPPING ITEM
function updateShippingStatus(status) {

    const steps = document.querySelectorAll(".shipping-step");
    const lines = document.querySelectorAll(".shipping-line");

    steps.forEach((step, index) => {

        step.classList.remove("active", "completed");

        if (index < status) {
            step.classList.add("completed");
        }

        if (index === status) {
            step.classList.add("active");
        }

    });

    lines.forEach((line, index) => {

        line.classList.remove("completed");

        if (index < status) {
            line.classList.add("completed");
        }

    });
}

updateShippingStatus();




// ==============================//
//   COUNTER FOR ITEM QUANTITY
// =============================//
    const increaseBtn = document.querySelector(".increase");
    const decreaseBtn = document.querySelector(".decrease");
    const counterOutput = document.querySelector(".counter");

    let counterDisplay = 1;

        increaseBtn.addEventListener("click", ()=>{
            counterDisplay ++;
            counterOutput.textContent = counterDisplay;
        });

        decreaseBtn.addEventListener("click",()=>{
            if(counterDisplay > 1){
            counterDisplay--;
            counterOutput.textContent = counterDisplay;
            }
        });




// =================================//
//    ADD TO CART BUTTON CLICK
// =================================//
const addCartBtn = document.querySelector(".addcart");
addCartBtn.addEventListener("click", () => {

    // Make sure a product is selected
    if (!currentProduct) {
        return;
    }

    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.id === currentProduct.id);

    if (existingProduct) {

        // Increase quantity
        existingProduct.quantity = counterDisplay;

         showToast(
            `${currentProduct.title} quantity updated`
        );

    } else {

        // Add new product
        cart.push({
            id: currentProduct.id,
            img: currentProduct.img,
            title: currentProduct.title,
            price: currentProduct.price,
            quantity: counterDisplay,
        });

         showToast(`${currentProduct.title} Added to Cart`);

    }

    // Save to Cart
    saveToCart();

});






// ===========================================//
// CHECK OUT BUTTON TO REDIRECT INTO PLACE ORDER
// ===========================================//
// Note! showToast function is in the navbar.js
const checkOutBtn = document.querySelectorAll(".checkoutbtn");

    checkOutBtn.forEach((button)=>{
        button.addEventListener("click",()=> {

    if (cart.length === 0) {
        showToast("Your Cart is Empty!");
        return;
    }

    // Save the latest cart
        saveToCart();

    window.location.href = "placeorder.html";
   
    });

});



















