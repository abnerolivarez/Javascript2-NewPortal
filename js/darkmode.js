const themeBtn = document.querySelector(".theme-btn");
const themeIcon = document.querySelector(".theme-btn i");

// ===============================
// LOAD SAVED THEME
// ===============================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.remove("dark-mode");

    themeIcon.classList.remove("bx-moon");
    themeIcon.classList.add("bx-sun");

} else {

    // Default theme is Dark Mode
    document.body.classList.add("dark-mode");

    themeIcon.classList.remove("bx-sun");
    themeIcon.classList.add("bx-moon");

}


// ===============================
// THEME BUTTON
// ===============================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        // DARK MODE
        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("bx-sun");
        themeIcon.classList.add("bx-moon");

    } else {

        // LIGHT MODE
        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("bx-moon");
        themeIcon.classList.add("bx-sun");

    }

});