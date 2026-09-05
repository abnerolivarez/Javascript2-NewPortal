const reviewForm = document.querySelector("#reviewForm");
const reviewsList = document.querySelector("#reviewsList");


// ==========================================================
// GET CURRENT PRODUCT ID
// ==========================================================

function getCurrentProductId() {

    return Number(
        localStorage.getItem("currentProductId")
    );

}

// Load reviews immediately when page loads
const currentProductId = getCurrentProductId();

if (currentProductId) {
    displayReviews(currentProductId);
}


// ==========================================================
// SUBMIT REVIEW
// ==========================================================

reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#reviewName").value.trim();

    const review = document.querySelector("#reviewText").value.trim();

    const selectedRating = document.querySelector(
        'input[name="rating"]:checked'
    );


    // Check rating
    if (!selectedRating) {

        alert("Please select a rating.");

        return;
    }


    // Get current product ID
    const productId = getCurrentProductId();

    // Make sure product exists
    if (!productId) {
        alert("Unable to identify the current product.");
        return;
    }


    const rating = Number(selectedRating.value);


    // ======================================================
    // REVIEW DATA
    // ======================================================

    const reviewData = {
        id: Date.now(),
        productId: productId,
        name: name,
        rating: Number(selectedRating.value),
        review: review,
        date: new Date().toLocaleDateString()
};


    // ======================================================
    // GET EXISTING REVIEWS
    // ======================================================

    const reviews =
        JSON.parse(localStorage.getItem("productReviews")) || [];


    // Add new review
    reviews.push(reviewData);


    // Save reviews
    localStorage.setItem("productReviews",JSON.stringify(reviews));


    // Display reviews for current product
    displayReviews(productId);
    
    alert("Thank You For Your Comment!");

    // Reset form
    reviewForm.reset();
    location.reload();

});


// ==========================================================
// DISPLAY REVIEWS
// ==========================================================

export function displayReviews(productId)  {

    const reviews =
        JSON.parse(
            localStorage.getItem("productReviews")
        ) || [];


    reviewsList.innerHTML = "";


    // ======================================================
    // ONLY GET REVIEWS FOR THIS PRODUCT
    // ======================================================

    const productReviews = reviews.filter(
        item =>
            Number(item.productId) === Number(productId)
    );

    // Number of reviews
    const reviewsCount = document.querySelector(".reviews");
    reviewsCount.textContent = `(${productReviews.length})`;


    // ======================================================
    // PRODUCT RATING
    // ======================================================

    const starsRate =
        document.querySelector(".stars-rate");

    const ratingElement =
        document.querySelector(".rating");


    if (productReviews.length > 0) {

        const totalRating =
            productReviews.reduce(
                (total, item) =>
                    total + Number(item.rating),
                0
            );


        const averageRating = totalRating / productReviews.length;
        const roundedRating = Math.round(averageRating);

        const stars =
            "★".repeat(roundedRating) +
            "☆".repeat(5 - roundedRating);


        starsRate.textContent = stars;


        ratingElement.textContent = averageRating.toFixed(1);


    } else {

        // No reviews yet

        starsRate.textContent =
            "☆☆☆☆☆";


        ratingElement.textContent =
            "0.0";

    }


    // ======================================================
    // DISPLAY REVIEW CARDS
    // ======================================================

    productReviews.forEach((item) => {

        const rating = Number(item.rating);

        const stars =
            "★".repeat(rating) +
            "☆".repeat(5 - rating);

        const reviewCard = document.createElement("div");

        reviewCard.classList.add(
            "review-card"
        );


        reviewCard.innerHTML = `

            <div class="review-top">
                <div>
                    <img src="images/favcon.png" alt="Review Image Profile" class="review-image"><br>
                    <span class="reviewer-name">
                        ${item.name}
                    </span>
                </div>

                <span class="review-stars">
                    ${stars}
                </span>
            </div>


            <p class="review-message">
                ${item.review}
            </p>

            <span class="review-date">
                ${item.date}
            </span>

        `;

        reviewsList.appendChild(reviewCard);

    });

}


// ==========================================================
// OPEN / CLOSE REVIEW BOX
// ==========================================================

const reviewSection = document.querySelector(".review-section");
const reviewOverlay = document.querySelector(".review-overlay");
const openReviewBtn = document.querySelector(".rate-container");
const closeReviewBtn = document.querySelector(".close-reviewbtn");


// OPEN REVIEW

openReviewBtn.addEventListener("click", () => {

    reviewSection.classList.add("active");

    const productId = getCurrentProductId();

    if (productId) {
        displayReviews(productId);
    }

});


// CLOSE REVIEW

closeReviewBtn.addEventListener("click", () => {
    reviewSection.classList.remove("active");
});

// CLOSE WITH OVERLAY
reviewOverlay.addEventListener("click", () => {
    reviewSection.classList.remove("active");
});


// CLOSE WITH ESC
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        reviewSection.classList.remove("active");
    }

});