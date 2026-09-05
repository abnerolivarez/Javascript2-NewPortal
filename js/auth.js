document.addEventListener("DOMContentLoaded", () => {

    const authButtons = document.getElementById("login-register-container");
    const logoutContainer = document.getElementById("logoutContainer");
    const logoutBtn = document.getElementById("logoutBtn");

    // Check login status
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (isLoggedIn === "true") {

        // User is logged in
        authButtons.style.display = "none";
        logoutContainer.style.display = "block";

    } else {

        // User is not logged in
        authButtons.style.display = "flex";
        logoutContainer.style.display = "none";

    }


    // Logout
    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            localStorage.removeItem("loggedIn");

            // Go back to home page
            window.location.href = "index.html";

        });

    }

});