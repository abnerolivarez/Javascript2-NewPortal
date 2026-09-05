// =============================//
// PASSWORD SHOW
// ===========================//
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
                    isPassword ? "text" : "password";

                passwordToggle.textContent =
                    isPassword ? "◉" : "◉";

            }
        );
//=========================================//   



        const loginForm =
            document.querySelector("#loginForm");


        loginForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const email =
                    document.querySelector("#email").value.trim();

                const passwordValue =
                    password.value.trim();


                if (!email || !passwordValue) {
                    return;
                }


                console.log("Email:", email);

                console.log(
                    "Password:",
                    passwordValue
                );

                // Connect your backend authentication here.
                window.location.href="index.html"
            }
        );

    