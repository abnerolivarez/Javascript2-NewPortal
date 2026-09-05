
const burgerBtn = document.querySelector(".burgerBtn-container");
const navLinks = document.querySelector(".navbar-links");

    burgerBtn.addEventListener("click",()=>{
        burgerBtn.classList.toggle("active");
        navLinks.classList.toggle("show");
});


// ========================================//
// Show & Hide Search Bar and Cart Container
// ========================================//
const iconGlassbtn = document.querySelector(".icon-glass");
const searchContainer = document.querySelector(".search-container");
const cartmainContainer = document.querySelector(".cart-main-container");

if (localStorage.getItem("searchOpen") === "true"){
    searchContainer.classList.add("show")
}

    iconGlassbtn.addEventListener("click",()=>{
        
        searchContainer.classList.toggle("show");
        cartmainContainer.classList.remove("show");

    // SAVE SEARCH STATE
    const isSearchOpen = searchContainer.classList.contains("show");

    localStorage.setItem("searchOpen", isSearchOpen);

});


const cartIconBtn = document.querySelector(".cart-icon");

    cartIconBtn.addEventListener("click",()=>{
        cartmainContainer.classList.toggle("show");
        searchContainer.classList.remove("show");

     // SEARCH IS CLOSED
    localStorage.setItem("searchOpen", "false");
});


// ============================//
// Navbar Scroll  
// ===========================//
const navbar = document.querySelector(".navbar-container");
const cartContainer = document.querySelector(".cart-main-container");
const searchInput = document.querySelector(".search-container");

        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                navbar.classList.add("hide");
                cartContainer.classList.add("hide");
                searchInput.classList.add("hide");
            } else {
                // Scrolling up
                navbar.classList.remove("hide");
                cartContainer.classList.remove("hide");
                searchInput.classList.remove("hide");
            }

            lastScrollY = currentScrollY;
        });
    


// ==================================//
            //TOAST//
// =================================//
const cartToast = document.querySelector("#cartToast");
const toastMessage = document.querySelector(".toast-message");

let toastTimer;

function showToast(message) {

    toastMessage.textContent = message;

    cartToast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        cartToast.classList.remove("show");

    }, 2500);
}


// =================================//
// SEARCHING THE PRODUCT
// ================================//
const searchbtn = document.querySelector(".magnifying-glass");
const searchBar = document.querySelector(".searchInput");

const searchLoading = document.querySelector("#searchLoading");
const loadingPercent = document.querySelector("#loadingPercent");
const progressBar = document.querySelector("#progressBar");
const loadingText = document.querySelector("#loadingText");


function performSearch() {

    const searchValue = searchBar.value.trim();

    if (!searchValue) return;


    // Show loading screen
    searchLoading.classList.add("active");


    // Reset loading
    let progress = 0;

    loadingPercent.textContent = "0";
    progressBar.style.width = "0%";
    loadingText.textContent = "Searching products...";


    // Start progress animation
    const loadingInterval = setInterval(() => {

        progress += 2;

        loadingPercent.textContent = progress;
        progressBar.style.width = progress + "%";


        // Change loading message
        if (progress < 40) {

            loadingText.textContent = "Searching products...";

        } else if (progress < 70) {

            loadingText.textContent = "Checking products...";

        } else if (progress < 100) {

            loadingText.textContent = "Preparing results...";

        }


        if (progress >= 100) {

            clearInterval(loadingInterval);

        }

    }, 20);


    // Redirect after 1 second
    setTimeout(() => {

        window.location.href =
            `shop.html?search=${encodeURIComponent(searchValue)}`;

    }, 1000);

}


// Press Search Button/Icon
if (searchbtn && searchBar) {

    searchbtn.addEventListener("click", performSearch);


// Press Enter key to search
    searchBar.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            performSearch();

        }

    });

}






