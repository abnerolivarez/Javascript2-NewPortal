import {
    cart,
    updateCartNumber
} from "./updatecart.js";

const orderItems = document.querySelector(".order-items");
const summaryItems = document.querySelector(".summary-items");
const subtotalOutput = document.querySelector(".subtotal");
const grandTotalOutput = document.querySelector(".grand-total");


// Fetch From shop.js
const checkoutSource = localStorage.getItem("checkoutSource");
const savedProduct = localStorage.getItem("selectedProduct");

const selectedProduct = savedProduct
        ? JSON.parse(savedProduct)
        : null;

const selectedQuantity = Number(
    localStorage.getItem("selectedQuantity")
) || 1;






// ======================================
// SHOP PAGE CHECKOUT
// ======================================

if (
    checkoutSource === "shop" &&
    selectedProduct
) {

    const existingProduct =
        cart.find(
            item => item.id === selectedProduct.id
        );


    if (existingProduct) {

        // Update quantity
        existingProduct.quantity =
            selectedQuantity;

    } else {

        // Add new product
        cart.push({
            id: selectedProduct.id,
            img: selectedProduct.img,
            title: selectedProduct.title,
            price: selectedProduct.price,
            quantity: selectedQuantity
        });

    }


    // Save updated cart
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    //Update navbar immediately
    updateCartNumber();


    // Remove temporary transfer data
    localStorage.removeItem("selectedProduct");
    localStorage.removeItem("selectedQuantity");
    localStorage.removeItem("checkoutSource");

}
// ======================================================================//



// =========================
// DISPLAY ORDER
// =========================

function displayOrder() {

    orderItems.innerHTML = "";
    summaryItems.innerHTML = "";

    let total = 0;


    if (cart.length === 0) {
        orderItems.innerHTML = `
            <p>Your Cart is Empty.</p>
        `;
        return;
    }


    cart.forEach(product => {

        const subtotal = product.price * product.quantity;

        total += subtotal;


        // LEFT SIDE
        const orderItem = document.createElement("div");

        orderItem.classList.add("order-item");

        orderItem.innerHTML = `

            <img src="${product.img}" alt="${product.title}">

            <div class="order-info">
                <h3>${product.title}</h3>
                <p>Quantity: ${product.quantity}</p>
                <p>₱${product.price.toLocaleString()} each</p>
            </div>

            <strong class="order-price">
                ₱${subtotal.toLocaleString()}
            </strong>

        `;

        orderItems.appendChild(orderItem);


        // RIGHT SIDE
        const summaryItem = document.createElement("div");

        summaryItem.classList.add("summary-item");

        summaryItem.innerHTML = `
            <img src="${product.img}" alt="${product.title}">

            <div class="summary-item-info">
                <h4>${product.title}</h4>
                <span> Qty: ${product.quantity}</span>
            </div>

            <strong class="summary-item-price">₱${subtotal.toLocaleString()}</strong>

        `;

        summaryItems.appendChild(summaryItem);

    });


    subtotalOutput.textContent = `₱${total.toLocaleString()}`;

    grandTotalOutput.textContent = `₱${total.toLocaleString()}`;


    // Save numeric total for calculator page
    localStorage.setItem("grandTotal", total);

}


displayOrder();




// ==============================//
// PAYMENT SELECTED OPTION
// =============================//
const paymentRadios = document.querySelectorAll('input[name="payment"]');
const paymentMode = document.querySelector(".payment-mode");

paymentRadios.forEach(radio => {

    radio.addEventListener("change", () => {

        document.querySelectorAll(".payment-option")
            .forEach(option => {
                option.classList.remove("active");
            });

        radio
            .closest(".payment-option")
            .classList.add("active");
        
        // Send selected payment value to .payment-mode
        paymentMode.textContent = radio.value;

    });

});



const step1 = document.querySelector('[data-step="1"]');
const step2 = document.querySelector('[data-step="2"]');
const step3 = document.querySelector('[data-step="3"]');

const progressLines =
    document.querySelectorAll(".progress-line");


function updateProgress() {

    const name = document.querySelector("#customerName").value.trim();

    const email = document.querySelector("#customerEmail").value.trim();

    const phone = document.querySelector("#customerPhone").value.trim();

    const address = document.querySelector("#customerAddress").value.trim();

    const city = document.querySelector("#city").value.trim();

    const postal = document.querySelector("#postal").value.trim();


    // Check customer information
    const customerComplete =
        name !== "" &&
        email !== "" &&
        phone !== "" &&
        address !== "" &&
        city !== "" &&
        postal !== "";


    // Check payment
    const paymentSelected = document.querySelector(
            'input[name="payment"]:checked'
        );


    // ========================================
    // STEP 1
    // ========================================

    if (customerComplete) {

        step1.classList.add("completed");

    } else {

        step1.classList.remove("completed");

    }


    // ========================================
    // STEP 2
    // ========================================

    if (customerComplete) {

        step2.classList.add("completed");

        progressLines[0].classList.add("completed");

    } else {

        step2.classList.remove("completed");

        progressLines[0].classList.remove("completed");

    }


    // ========================================
    // STEP 3
    // ========================================

    if (customerComplete && paymentSelected) {

        step3.classList.add("completed");

        progressLines[1].classList.add("completed");

    } else {

        step3.classList.remove("completed");

        progressLines[1].classList.remove("completed");

    }

}



const customerInputs = document.querySelectorAll(
        "#customerName, #customerEmail, #customerPhone, #customerAddress, #city, #postal"
    );


customerInputs.forEach(input => {

    input.addEventListener("input", () => {

        updateProgress();

    });

});



const paymentOptions = document.querySelectorAll(
        'input[name="payment"]'
    );


paymentOptions.forEach(payment => {

    payment.addEventListener("change", () => {

        updateProgress();

    });

});



// ======================================//
// FINAL CONFIMATION FOR ORDER
// ======================================//

// GET THE ELEMENTS
const placeOrderBtn = document.querySelector("#placeOrderBtn");
const orderConfirmation = document.querySelector("#orderConfirmation");



// =======================================================//


// GET THE CONFIRMATION FIELD
const confirmName = document.querySelector("#confirmName");
const confirmEmail = document.querySelector("#confirmEmail");
const confirmPhone = document.querySelector("#confirmPhone");
const confirmAddress = document.querySelector("#confirmAddress");
const confirmPayment = document.querySelector("#confirmPayment");
const confirmCity = document.querySelector("#city");
const confirmPostal = document.querySelector("#postal");
const confirmItems = document.querySelector("#confirmItems");
const confirmTotal = document.querySelector("#confirmTotal");


// =============================//
// PLACE ORDER IS CLICK
// ============================//
placeOrderBtn.addEventListener("click", () => {

    const name = document.querySelector("#customerName").value.trim();
    const email = document.querySelector("#customerEmail").value.trim();
    const phone = document.querySelector("#customerPhone").value.trim();
    const address = document.querySelector("#customerAddress").value.trim();
    const city = document.querySelector("#city").value.trim();
    const postal = document.querySelector("#postal").value.trim();

    const selectedPayment = document.querySelector('input[name="payment"]:checked');

    // Validate customer information

    if (
        name === ""  ||  email === "" ||
        phone === "" ||  address === "" ||
        city === ""  ||  postal === "" 

    ) {
        alert("Please complete your customer information.");
        return;
    }


    // Validate payment

    if (!selectedPayment) {
        alert("Please select a payment method.");
        return;
    }


    // Display customer information

    confirmName.textContent = name;
    confirmEmail.textContent = email;
    confirmPhone.textContent = phone;
    confirmAddress.textContent = address;
    confirmCity.textContent = city;
    confirmPostal.textContent = postal;


    // Display payment

    if (selectedPayment.value === "gcash") {

        confirmPayment.textContent = "GCash";

    } else if(selectedPayment.value ==="paymaya") {

        confirmPayment.textContent = "Paymaya";

    }else{
        confirmPayment.textContent = "Cash on Delivery";
    }


// DISPLAY BOX
    displayConfirmationItems();

    // Show confirmation
    orderConfirmation.classList.add("show");
});


// CLOSE BOX ORDER
const closeBox = document.querySelector(".close-confirmation");
    closeBox.addEventListener("click",()=>{
    orderConfirmation.classList.remove("show");
});


function displayConfirmationItems() {

    confirmItems.innerHTML = "";

    let total = 0;


    cart.forEach(product => {

        const subtotal = product.price * product.quantity;
        total += subtotal;

        const item = document.createElement("div");

        item.classList.add("confirmation-item");

        item.innerHTML = `

            <div class="confirmation-item-info">

                <img src="${product.img}" alt="${product.title}">

                <div>
                    <strong>${product.title}</strong>
                    <small>
                        Quantity: ${product.quantity}
                    </small>
                </div>
            </div>

            <span>₱${subtotal.toLocaleString()}</span>
        `;


        confirmItems.appendChild(item);

    });


    confirmTotal.textContent =
        `₱${total.toLocaleString()}`;

}


// ==============================//
// EDIT ORDER
// ================================//
const editOrderBtn = document.querySelector("#editOrderBtn");
editOrderBtn.addEventListener("click", () => {

    // Close confirmation popup
    orderConfirmation.classList.remove("show");

    // Optional: scroll back to customer information
    document.querySelector("#customerName")
        .scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

});



// =======================================//
    //CONFRIM THE ORDER FINAL 
// =======================================//
const confirmOrderBtn = document.querySelector("#confirmOrderBtn");

confirmOrderBtn.addEventListener("click", () => {

    // Prevent double clicking
    confirmOrderBtn.disabled = true;

    confirmOrderBtn.textContent = "Processing...";


    // Get customer information
    const customer = {

        name:document.querySelector("#customerName").value.trim(),

        email: document.querySelector("#customerEmail").value.trim(),

        phone: document.querySelector("#customerPhone").value.trim(),

        address: document.querySelector("#customerAddress").value.trim(),

        city: document.querySelector("#city").value.trim(),

        postal: document.querySelector("#postal").value.trim(),

        payment:
            document.querySelector(
                'input[name="payment"]:checked'
            )?.value

    };


    // Get current cart
    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    // Generate order number
    const orderNumber =
        "ORD-" +
        Date.now().toString().slice(-8);


    // Calculate total
    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );


    // Create final order
    const order = {

        orderNumber,
        customer,

        items: cart,

        total,

        orderDate:
            new Date().toISOString(),

        status: "Confirmed"

    };


    // Save order
    localStorage.setItem("lastOrder",JSON.stringify(order));

    // Clear cart
    localStorage.removeItem("cart");

    // Show success
    showOrderSuccess(order);

});


// ===================================//
// ORDER SUCCESS FORM
// ===================================
function showOrderSuccess(order) {

    const orderConfirmation = document.querySelector("#orderConfirmation");
    const orderSuccess = document.querySelector("#orderSuccess");

    // Close confirmation popup
    orderConfirmation.classList.remove("show");

    // Order number
    document.querySelector("#orderNumber")
        .textContent = order.orderNumber;

    // Total
    document.querySelector("#successTotal")
        .textContent =
        `₱${order.total.toLocaleString()}`;


    // Show success
    orderSuccess.classList.add("show");


    // Reset cart badge
    const cartNumber = document.querySelector(".cart-number");

    if (cartNumber) {
        cartNumber.textContent = "0";
    }

}

// =======================//
// CONTINUE SHOPPING BUTTON
// =======================//

const continueShopping = document.querySelector("#continueShoppingBtn");
    continueShopping.addEventListener("click", () => {
        window.location.href = "shop.html";
    });


function historyPage(){
    window.history.back();
    
}
    window.historyPage = historyPage;
