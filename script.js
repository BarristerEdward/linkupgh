/* ========================================= */
/* LINKUPGH — REGISTRATION JAVASCRIPT       */
/* STEP 01 + STEP 02                        */
/* ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================= */
    /* STEP 01 — BASIC INFORMATION              */
    /* ========================================= */

    const basicForm =
        document.querySelector(".basic-info-form");


    if (basicForm) {

        basicForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const firstName =
                document.querySelector("#firstName").value.trim();

            const dateOfBirth =
                document.querySelector("#dateOfBirth").value;

            const gender =
                document.querySelector("#gender").value;

            const location =
                document.querySelector("#location").value;


            if (
                !firstName ||
                !dateOfBirth ||
                !gender ||
                !location
            ) {

                alert("Please complete all the required fields.");

                return;

            }


            localStorage.setItem(
                "linkup_firstName",
                firstName
            );

            localStorage.setItem(
                "linkup_dateOfBirth",
                dateOfBirth
            );

            localStorage.setItem(
                "linkup_gender",
                gender
            );

            localStorage.setItem(
                "linkup_location",
                location
            );


            const accountSection =
                document.querySelector(".account-details");


            if (accountSection) {

                accountSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }



    /* ========================================= */
    /* STEP 02 — ACCOUNT DETAILS                 */
    /* ========================================= */

    const accountForm =
        document.querySelector(".account-details-form");


    if (accountForm) {

        accountForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const email =
                document.querySelector("#email").value.trim();

            const phone =
                document.querySelector("#phone").value.trim();

            const username =
                document.querySelector("#username").value.trim();

            const password =
                document.querySelector("#password").value;

            const confirmPassword =
                document.querySelector("#confirmPassword").value;


            /* --------------------------------- */
            /* Check required fields            */
            /* --------------------------------- */

            if (
                !email ||
                !phone ||
                !username ||
                !password ||
                !confirmPassword
            ) {

                alert("Please complete all the required fields.");

                return;

            }


            /* --------------------------------- */
            /* Email validation                 */
            /* --------------------------------- */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;

            }


            /* --------------------------------- */
            /* Ghana phone validation           */
            /* --------------------------------- */

            const cleanPhone =
                phone.replace(/\s+/g, "");


            const phonePattern =
                /^(0|\+233)(2[0-9]|5[0-9])[0-9]{7}$/;


            if (!phonePattern.test(cleanPhone)) {

                alert(
                    "Please enter a valid Ghanaian phone number."
                );

                return;

            }


            /* --------------------------------- */
            /* Username validation              */
            /* --------------------------------- */

            const usernamePattern =
                /^[a-zA-Z0-9_]{3,20}$/;


            if (!usernamePattern.test(username)) {

                alert(
                    "Username must be 3–20 characters and can only contain letters, numbers and underscores."
                );

                return;

            }


            /* --------------------------------- */
            /* Password length                  */
            /* --------------------------------- */

            if (password.length < 8) {

                alert(
                    "Your password must contain at least 8 characters."
                );

                return;

            }


            /* --------------------------------- */
            /* Confirm password                 */
            /* --------------------------------- */

            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            /* --------------------------------- */
            /* Save account information         */
            /* --------------------------------- */

            localStorage.setItem(
                "linkup_email",
                email
            );

            localStorage.setItem(
                "linkup_phone",
                cleanPhone
            );

            localStorage.setItem(
                "linkup_username",
                username
            );


            /* --------------------------------- */
            /* Move to Step 03                  */
            /* --------------------------------- */

            const securitySection =
                document.querySelector(".security-verification");


            if (securitySection) {

                securitySection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }



    /* ========================================= */
    /* SHOW / HIDE PASSWORD                     */
    /* ========================================= */

    const passwordToggle =
        document.querySelector(".password-toggle");

    const passwordInput =
        document.querySelector("#password");


    if (passwordToggle && passwordInput) {

        passwordToggle.addEventListener("click", function () {

            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                passwordToggle.textContent = "Hide";

            } else {

                passwordInput.type = "password";

                passwordToggle.textContent = "Show";

            }

        });

    }



    /* ========================================= */
    /* PASSWORD STRENGTH                        */
    /* ========================================= */

    if (passwordInput) {

        const strengthBars =
            document.querySelectorAll(
                ".password-strength span"
            );


        passwordInput.addEventListener(
            "input",
            function () {

                const password =
                    passwordInput.value;


                let strength = 0;


                if (password.length >= 8) {
                    strength++;
                }

                if (/[A-Z]/.test(password)) {
                    strength++;
                }

                if (/[0-9]/.test(password)) {
                    strength++;
                }

                if (/[^A-Za-z0-9]/.test(password)) {
                    strength++;
                }


                strengthBars.forEach(
                    function (bar, index) {

                        if (index < strength) {

                            bar.classList.add("active");

                        } else {

                            bar.classList.remove("active");

                        }

                    }
                );

            }
        );

    }

});
