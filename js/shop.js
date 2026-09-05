
import imageItem from "./product.js";

import {
    updateCart,
    updateCartNumber
} from "./updatecart.js";





const shopMenu = document.querySelectorAll(".shop-menu");
const shopGrid = document.querySelector(".shop-image-grid");

// =================================//
// DISPLAY THE ITEM FROM PRODUCT.JS
// =================================//
function displayShopProduct(products) {

    // CHECK IF NO PRODUCTS FOUND
    if(products.length === 0){
            shopGrid.innerHTML = `
                 <div class="empty-item-container">
                    <img src="images/cartitems.png" alt="No Products Found">

                    <p class="empty-item">
                        No products found.
                    </p>
                </div>
            
            `;
            return;
    }

    // DISPLAY THE PRODUCT 
    shopGrid.innerHTML = products.map(item => {

        const specsHTML = item.technicalspecs
            .split("|")
            .map(spec => `<li>${spec.trim()}</li>`)
            .join("");
            

        return `
            <div class="shop-js-container">

                <div class="shop-js">
                    <img 
                        src="${item.img}" 
                        alt="shop image" 
                        class="shopping-img"
                        data-id="${item.id}"
                    >
                </div>

                <div class="shop-content">

                    <div>
                        <h5>${item.title}</h5>
                        <div class="item-discount">
                            <p class="shop-price">₱${item.price.toLocaleString()}</p>
                            <p class="discount">₱${item.discount.toLocaleString()}</p>
                        </div>

                        <ul class="shop-specs">
                            ${specsHTML}
                        </ul>
                    </div>

                    <div class="shop-incdecbtn-container">
                        <button class="shopbtn-decrease">-</button>
                        <span class="shop-counter">1</span>
                        <button class="shopbtn-increase">+</button>
                    </div>

                </div>

            </div>
        `;
    }).join("");
}
// ========================================================//


// ==========================//
// INCREASE & DECREASE BUTTON
// ==========================//
shopGrid.addEventListener("click", (e) => {

    const counter = e.target
        .parentElement
        .querySelector(".shop-counter");

    if (!counter) return;

    let quantity = Number(counter.textContent);

    if (e.target.classList.contains("shopbtn-increase")) {
        quantity++;
    }

    if (e.target.classList.contains("shopbtn-decrease")) {
        if (quantity > 1) {
            quantity--;
        }
    }

    counter.textContent = quantity;


    
});
// =====================================================//


// =============================//
// SEARCH THE ITEM PER CATEGORY
// ============================//
const urlParams = new URLSearchParams(window.location.search);
const searchValue = urlParams.get("search");


 if (searchValue) {

        const searchProducts = imageItem.filter(item =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.category.toLowerCase().includes(searchValue.toLowerCase())
        );

    displayShopProduct(searchProducts);

} else {

    displayShopProduct(imageItem);

}

// ==============================
// DISPLAY THE ITEM PER CATEGORY WHEN SEARCHING ITEM
// ==============================
function showLoading(callback) {

    searchLoading.classList.add("active");

    const loadingPercent = document.getElementById("loadingPercent");
    const progressBar = document.getElementById("progressBar");
    const loadingText = document.getElementById("loadingText");

    // Reset progress
    let progress = 0;

    loadingPercent.textContent = progress;
    progressBar.style.width = progress + "%";

    loadingText.textContent = "Loading products...";


    // Start progress
    const progressInterval = setInterval(() => {

        progress += 2;

        loadingPercent.textContent = progress;
        progressBar.style.width = progress + "%";


        // Change message
        if (progress < 40) {

            loadingText.textContent =
                "Loading products...";

        } else if (progress < 70) {

            loadingText.textContent =
                "Checking products...";

        } else if (progress < 100) {

            loadingText.textContent =
                "Preparing products...";

        }


        if (progress >= 100) {

            clearInterval(progressInterval);

        }

    }, 30);


    // Finish after 1 second
    setTimeout(() => {

        clearInterval(progressInterval);

        // Make sure it reaches 100%
        progress = 100;

        loadingPercent.textContent = progress;
        progressBar.style.width = "100%";

        loadingText.textContent =
            "Products ready!";


        // Run your actual filtering
        callback();


        // Small delay so user can see 100%
        setTimeout(() => {

            searchLoading.classList.remove("active");

        }, 150);

    }, 1000);

}
// ============================================//




 shopMenu.forEach(el=>{
        el.addEventListener("click",()=>{
            
            // Remove active from all menu items
            shopMenu.forEach(btn=>{
                btn.classList.remove("active");
            });
            // Add active to clicked menu
            el.classList.add("active");
            

    showLoading(()=>{

        // Get category
        const selectedCategory = el.dataset.title;


        // ==========================
        // FEATURED / ALL
        // ==========================

          if (selectedCategory === "all") {

            displayShopProduct(imageItem);

            return;
        }


        // ==========================
        // FILTER THE PRODUCTS
        // ==========================

        const filteredProducts = imageItem.filter(item =>
            item.category.startsWith(selectedCategory)
        );


        displayShopProduct(filteredProducts);
        


        });
    });

});
// =======================================================//



// ===============================================================//
// CLICK IMAGE THEN SAVE TO LOCAL STORAGE AND FETCH FROM PLACEORDER
// ===============================================================//
shopGrid.addEventListener("click", (e) => {

    // console.log("SHOP GRID CLICKED");
    // console.log("Clicked element:", e.target);

    if (!e.target.classList.contains("shopping-img")) {
        console.log("Not a product image");
        return;
    }

    console.log("PRODUCT IMAGE CLICKED");

    const productContainer = e.target.closest(".shop-js-container");
    const counter = productContainer.querySelector(".shop-counter");

    const quantity = Number(counter.textContent) || 1;
    const id = Number(e.target.dataset.id);

    const product = imageItem.find(item => item.id === id);


    if (!product) {
        alert("Product NOT FOUND");
        return;
    }

    localStorage.setItem(
        "selectedProduct",
        JSON.stringify(product)
    );

    localStorage.setItem(
        "selectedQuantity",
        quantity
    );

    localStorage.setItem(
        "checkoutSource",
        "shop"
    );

    // Reset shop quantity back to 1
    counter.textContent = 1;

    window.location.href = "placeorder.html";

    
    
});

// ==============================================================//








// ===========================================//
// CHECK OUT BUTTON TO REDIRECT INTO PLACE ORDER
// ===========================================//
 
const checkOutBtn = document.querySelectorAll(".checkoutbtn");

checkOutBtn.forEach(button => {

    button.addEventListener("click", () => {

        // Get cart from localStorage
        const savedCart = JSON.parse(localStorage.getItem("cart"));

        const cart =
            Array.isArray(savedCart)
                ? savedCart
                : [];


        // Check if cart is empty
        if (cart.length === 0) {

            showToast("Your Cart is Empty!");

            return;
        }


        // Tell placeorder this is normal cart checkout
        localStorage.setItem("checkoutSource","cart");

        // Go to place order
        window.location.href =  "placeorder.html";

    });

});
// =========================================================//


// To make the Cart Number Updated
updateCart();
updateCartNumber();

window.addEventListener("pageshow", () => {
    updateCart();
    updateCartNumber();
});




