
        /* ========================================
           PASSWORD TOGGLE
        ======================================== */

        const password =
            document.querySelector("#password");

        const passwordToggle =
            document.querySelector("#passwordToggle");


        passwordToggle.addEventListener(
            "click",
            () => {

                const isPassword =
                    password.type === "password";

                password.type =
                    isPassword
                        ? "text"
                        : "password";

            }
        );


        /* ========================================
           CONFIRM PASSWORD TOGGLE
        ======================================== */

        const confirmPassword =
            document.querySelector("#confirmPassword");

        const confirmToggle =
            document.querySelector("#confirmToggle");


        confirmToggle.addEventListener(
            "click",
            () => {

                const isPassword =
                    confirmPassword.type === "password";

                confirmPassword.type =
                    isPassword
                        ? "text"
                        : "password";

            }
        );


/* ========================================
    PASSWORD STRENGTH
======================================== */

const strengthBar =
    document.querySelector("#strengthBar");

const strengthText =
    document.querySelector("#strengthText");


password.addEventListener("input", () => {

    const value = password.value;

    let strength = 0;


    // Length
    if (value.length >= 8) {
        strength++;
    }

    // Uppercase
    if (/[A-Z]/.test(value)) {
        strength++;
    }

    // Number
    if (/[0-9]/.test(value)) {
        strength++;
    }

    // Special character
    if (/[^A-Za-z0-9]/.test(value)) {
        strength++;
    }


    /* ========================================
       RESET
    ======================================== */

    if (value.length === 0) {

        strengthBar.style.width = "0%";

        strengthBar.style.background = "transparent";

        strengthBar.style.boxShadow = "none";

        strengthText.textContent =
            "Use at least 8 characters";

        strengthText.style.color = "#666";

        return;
    }


    /* ========================================
       WEAK
    ======================================== */

    if (strength === 1) {

        strengthBar.style.width = "25%";

        strengthBar.style.background = "#ef4444";

        strengthBar.style.boxShadow = "0 0 8px rgba(239, 68, 68, 0.35)";

        strengthText.textContent = "Weak password";

        strengthText.style.color = "#ef4444";
    }


    /* ========================================
       FAIR
    ======================================== */

    else if (strength === 2) {

        strengthBar.style.width = "50%";

        strengthBar.style.background = "#f97316";

        strengthBar.style.boxShadow =
            "0 0 8px rgba(249, 115, 22, 0.35)";

        strengthText.textContent =
            "Fair password";

        strengthText.style.color =
            "#f97316";
    }


    /* ========================================
       GOOD
    ======================================== */

    else if (strength === 3) {

        strengthBar.style.width = "75%";

        strengthBar.style.background = "#eab308";

        strengthBar.style.boxShadow =
            "0 0 8px rgba(234, 179, 8, 0.35)";

        strengthText.textContent =
            "Good password";

        strengthText.style.color =
            "#eab308";
    }


    /* ========================================
       STRONG
    ======================================== */

    else {

        strengthBar.style.width = "100%";

        strengthBar.style.background = "#22c55e";

        strengthBar.style.boxShadow =
            "0 0 10px rgba(34, 197, 94, 0.45)";

        strengthText.textContent =
            "Strong password";

        strengthText.style.color =
            "#22c55e";
    }

});


        /* ========================================
           REGISTER
        ======================================== */

        const registerForm = document.querySelector("#registerForm");


        registerForm.addEventListener("submit",(event) => {

            event.preventDefault();

                const name = document.querySelector("#name").value.trim();
                const email = document.querySelector("#email").value.trim();
                const passwordValue = password.value;
                const confirmValue = confirmPassword.value;
                const terms = document.querySelector("#terms").checked;


                if (passwordValue !== confirmValue) {

                    alert("Passwords do not match.");

                    return;
                }


                if (!terms) {

                    alert(
                        "Please agree to the Terms of Service."
                    );

                    return;
                }


                console.log("Name:", name);

                console.log("Email:", email);

                console.log(
                    "Password:",
                    passwordValue
                );


                // Connect your backend registration here.


                alert(
                    "Account created successfully!"
                    
                );
                window.location.href="login.html";
            }
        );



        

    