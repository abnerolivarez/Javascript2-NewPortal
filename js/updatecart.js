// ===============================
// CART DATA
// ===============================

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}


let cart = getCart();


// ===============================
// CART QUANTITY ALWAYS UPDATING
// ===============================

function getCartQuantity() {

    const currentCart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    return currentCart.reduce(
        (total, product) =>
            total + Number(product.quantity || 0),
        0
    );
}

// ===============================
// UPDATE NAVBAR CART NUMBER
// ===============================

function updateCartNumber() {

    const totalQuantity =
        getCartQuantity();

    document
        .querySelectorAll(".cart-number")
        .forEach(element => {

            element.textContent =
                totalQuantity;

        });

}


// ===============================
// CART ELEMENT
// ===============================

const cartImageContainer =
    document.querySelector(
        ".cart-image-container"
    );


// ===============================
// SAVE CART
// ===============================

function saveToCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCart();

}


// ===============================
// DISPLAY CART
// ===============================

function updateCart() {

    //Get the latest cart from localStorage
    cart = getCart();

    // Update navbar number
    updateCartNumber();


    // If this page doesn't have
    // cart container, stop
    if (!cartImageContainer) {
        return;
    }


    cartImageContainer.innerHTML = "";


    // =========================
    // EMPTY CART
    // =========================

    if (cart.length === 0) {

        cartImageContainer.innerHTML = `

            <div class="empty-cart">

                <img
                    src="images/cartitems.png"
                    alt="cart icon"
                    class="cart-icon"
                >

                <span class="counter-display">
                    Your Cart is empty!
                </span>

            </div>

        `;

        return;
    }


    // =========================
    // DISPLAY CART ITEMS
    // =========================

    cart.forEach(product => {

        const quantity =
            Number(product.quantity) || 0;


        const cartItem =
            document.createElement("div");


        cartItem.classList.add(
            "cart-item"
        );


        cartItem.innerHTML = `

            <div class="cart-item-head">

                <img
                    src="${product.img}"
                    class="cart-item-image"
                    alt="${product.title}"
                >


                <div class="cart-item-info">

                    <h4>
                        ${product.title}
                    </h4>

                    <p>
                        ₱${Number(product.price)
                            .toLocaleString()}
                    </p>

                </div>


                <div class="cart-quantity">

                    <button
                        class="quantity-minus"
                        data-id="${product.id}">
                        -
                    </button>


                    <span class="quantity-counter">
                        ${quantity}
                    </span>


                    <button
                        class="quantity-plus"
                        data-id="${product.id}">
                        +
                    </button>

                </div>

            </div>

        `;


        cartImageContainer.appendChild(
            cartItem
        );

    });

}


// ===============================
// CART QUANTITY EVENTS
// ===============================

if (cartImageContainer) {

    cartImageContainer.addEventListener(
        "click",
        (e) => {

            const id =
                Number(e.target.dataset.id);


            if (!id) {
                return;
            }


            const product =
                cart.find(
                    item => item.id === id
                );


            if (!product) {
                return;
            }


            // PLUS
            if (
                e.target.classList.contains(
                    "quantity-plus"
                )
            ) {

                product.quantity++;

            }


            // MINUS
            if (
                e.target.classList.contains(
                    "quantity-minus"
                )
            ) {

                if (product.quantity > 1) {

                    product.quantity--;

                } else {

                    cart = cart.filter(
                        item =>
                            item.id !== id
                    );

                }

            }


            // Save
            saveToCart();

        }
    );

}


// ===============================
// INITIALIZE
// ===============================

updateCart();


// ===============================
// EXPORT
// ===============================

export {

    cart,
    updateCart,
    updateCartNumber,
    saveToCart,
    getCart,
    getCartQuantity

};