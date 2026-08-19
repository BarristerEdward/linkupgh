/* ========================================= */
/* LINKUPGH — REGISTRATION JAVASCRIPT       */
/* STEP 01 → STEP 02 → STEP 03 → FINAL     */
/* ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================= */
    /* HELPER — SCROLL TO SECTION               */
    /* ========================================= */

    function goToSection(selector) {

        const section = document.querySelector(selector);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


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


            /* Required fields */

            if (
                !firstName ||
                !dateOfBirth ||
                !gender ||
                !location
            ) {

                alert("Please complete all the required fields.");

                return;

            }


            /* ================================= */
            /* AGE CHECK                          */
            /* ================================= */

            const birthDate =
                new Date(dateOfBirth);

            const today =
                new Date();

            let age =
                today.getFullYear() -
                birthDate.getFullYear();

            const monthDifference =
                today.getMonth() -
                birthDate.getMonth();


            if (
                monthDifference < 0 ||
                (
                    monthDifference === 0 &&
                    today.getDate() < birthDate.getDate()
                )
            ) {

                age--;

            }


            if (age < 18) {

                alert(
                    "You must be 18 or older to use LinkUpGH."
                );

                return;

            }


            /* Save information */

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


            /* Move to Step 02 */

            goToSection(".account-details");

        });

    }



    /* ========================================= */
    /* STEP 02 — ACCOUNT DETAILS                */
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


            /* Required fields */

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


            /* ================================= */
            /* EMAIL VALIDATION                  */
            /* ================================= */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            /* ================================= */
            /* GHANA PHONE VALIDATION            */
            /* ================================= */

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


            /* ================================= */
            /* USERNAME VALIDATION               */
            /* ================================= */

            const usernamePattern =
                /^[a-zA-Z0-9_]{3,20}$/;


            if (!usernamePattern.test(username)) {

                alert(
                    "Username must be 3–20 characters and can only contain letters, numbers and underscores."
                );

                return;

            }


            /* ================================= */
            /* PASSWORD VALIDATION               */
            /* ================================= */

            if (password.length < 8) {

                alert(
                    "Your password must contain at least 8 characters."
                );

                return;

            }


            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                return;

            }


            /* Save account information */

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


            /* Move to Step 03 */

            goToSection(".security-verification");

        });

    }



    /* ========================================= */
    /* STEP 03 — VERIFICATION CONTINUE         */
    /* ========================================= */

    const securityContinue =
        document.querySelector(".security-continue");


    if (securityContinue) {

        securityContinue.addEventListener("click", function (event) {

            event.preventDefault();

            goToSection(".terms-consent");

        });

    }



    /* ========================================= */
    /* EMAIL / PHONE VERIFICATION BUTTONS      */
    /* ========================================= */

    const verificationButtons =
        document.querySelectorAll(".verification-btn");


    verificationButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "Verification will be available when the LinkUpGH backend is connected."
            );

        });

    });



    /* ========================================= */
    /* FINAL STEP — TERMS & CONSENT             */
    /* ========================================= */

    const createAccountButton =
        document.querySelector("#createAccountBtn");


    if (createAccountButton) {

        createAccountButton.addEventListener("click", function (event) {

            event.preventDefault();


            /* Required consent checkboxes */

            const ageConfirmation =
                document.querySelector("#ageConfirmation");

            const termsAgreement =
                document.querySelector("#termsAgreement");

            const privacyAgreement =
                document.querySelector("#privacyAgreement");

            const communityGuidelines =
                document.querySelector("#communityGuidelines");


            if (!ageConfirmation.checked) {

                alert(
                    "Please confirm that you are 18 years old or older."
                );

                return;

            }


            if (!termsAgreement.checked) {

                alert(
                    "Please agree to the LinkUpGH Terms of Service."
                );

                return;

            }


            if (!privacyAgreement.checked) {

                alert(
                    "Please read and accept the LinkUpGH Privacy Policy."
                );

                return;

            }


            if (!communityGuidelines.checked) {

                alert(
                    "Please agree to follow the LinkUpGH Community Guidelines."
                );

                return;

            }


            /* ================================= */
            /* ACCOUNT CREATION                  */
            /* ================================= */

            localStorage.setItem(
                "linkup_account_created",
                "true"
            );


            localStorage.setItem(
                "linkup_marketing_consent",
                document.querySelector("#marketingConsent").checked
            );


            /* Move to success section */

            goToSection("#account-success");


            /* Update progress */

            updateProgress(3);

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

        passwordToggle.addEventListener("click", function (event) {

            event.preventDefault();


            if (passwordInput.type === "password") {

                passwordInput.type = "text";

                passwordToggle.textContent = "Hide";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Hide password"
                );

            } else {

                passwordInput.type = "password";

                passwordToggle.textContent = "Show";

                passwordToggle.setAttribute(
                    "aria-label",
                    "Show password"
                );

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



    /* ========================================= */
    /* PROGRESS INDICATOR                      */
    /* ========================================= */

    function updateProgress(step) {

        const progressSteps =
            document.querySelectorAll(
                ".register-progress .progress-step"
            );


        progressSteps.forEach(
            function (progressStep, index) {

                if (index < step) {

                    progressStep.classList.add("active");

                } else {

                    progressStep.classList.remove("active");

                }

            }
        );

    }



    /* ========================================= */
    /* INITIAL PROGRESS                         */
    /* ========================================= */

    updateProgress(1);

});


/* ========================================= */
/* LINKUPGH — PROFILE BUILDER JAVASCRIPT     */
/* STEP 01 → STEP 08 → STEP 09              */
/* ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================= */
    /* STEP 06 — AVATAR SELECTION               */
    /* ========================================= */

    const avatarOptions =
        document.querySelectorAll(".avatar-option");

    const selectedAvatar =
        document.querySelector("#selectedAvatar");

    const previewAvatar =
        document.querySelector("#previewAvatar");


    avatarOptions.forEach(function (option) {

        option.addEventListener("click", function () {

            avatarOptions.forEach(function (item) {
                item.classList.remove("active");
            });

            option.classList.add("active");

            const avatar =
                option.dataset.avatar;

            if (selectedAvatar) {
                selectedAvatar.textContent = avatar;
            }

            if (previewAvatar) {
                previewAvatar.textContent = avatar;
            }

            localStorage.setItem(
                "linkup_avatar",
                avatar
            );

        });

    });


    /* ========================================= */
    /* STEP 08 — PROFILE PREVIEW                */
    /* ========================================= */

    function updateProfilePreview() {

        const displayName =
            document.querySelector("#displayName");

        const aboutMe =
            document.querySelector("#aboutMe");


        /* Name */

        if (displayName && previewName) {

            const name =
                displayName.value.trim();

            previewName.textContent =
                name || "Your Name";

        }


        /* About */

        if (aboutMe && previewAbout) {

            const about =
                aboutMe.value.trim();

            previewAbout.textContent =
                about || "Your introduction will appear here.";

        }


        /* Avatar */

        const savedAvatar =
            localStorage.getItem("linkup_avatar");

        if (savedAvatar && previewAvatar) {

            previewAvatar.textContent =
                savedAvatar;

        }


        /* ================================= */
        /* INTERESTS                          */
        /* ================================= */

        const selectedInterests =
            document.querySelectorAll(
                ".interest-option.active[data-interest]"
            );

        if (previewInterests) {

            previewInterests.innerHTML = "";

            selectedInterests.forEach(function (item) {

                const tag =
                    document.createElement("span");

                tag.className =
                    "preview-tag";

                tag.textContent =
                    item.textContent.trim();

                previewInterests.appendChild(tag);

            });

        }


        /* ================================= */
        /* PERSONALITY                       */
        /* ================================= */

        const selectedTraits =
            document.querySelectorAll(
                ".personality-tag.active[data-trait]"
            );

        if (previewPersonality) {

            previewPersonality.innerHTML = "";

            selectedTraits.forEach(function (item) {

                const tag =
                    document.createElement("span");

                tag.className =
                    "preview-tag";

                tag.textContent =
                    item.textContent.trim();

                previewPersonality.appendChild(tag);

            });

        }


        /* ================================= */
        /* LOOKING FOR                       */
        /* ================================= */

        const selectedLookingFor =
            document.querySelector(
                ".looking-for-option.active"
            );

        if (previewLookingFor && selectedLookingFor) {

            const title =
                selectedLookingFor.querySelector("strong");

            if (title) {

                previewLookingFor.textContent =
                    title.textContent.trim();

            }

        }

    }


    /* ========================================= */
    /* PREVIEW ELEMENTS                         */
    /* ========================================= */

    const previewName =
        document.querySelector("#previewName");

    const previewAbout =
        document.querySelector("#previewAbout");

    const previewInterests =
        document.querySelector("#previewInterests");

    const previewPersonality =
        document.querySelector("#previewPersonality");

    const previewLookingFor =
        document.querySelector("#previewLookingFor");


    /* ========================================= */
    /* UPDATE PREVIEW WHEN USER TYPES            */
    /* ========================================= */

    const displayNameInput =
        document.querySelector("#displayName");

    const aboutMeInput =
        document.querySelector("#aboutMe");


    if (displayNameInput) {

        displayNameInput.addEventListener(
            "input",
            updateProfilePreview
        );

    }


    if (aboutMeInput) {

        aboutMeInput.addEventListener(
            "input",
            updateProfilePreview
        );

    }


    /* ========================================= */
    /* INTEREST / PERSONALITY / LOOKING FOR      */
    /* ========================================= */

    document
        .querySelectorAll(
            ".interest-option, .personality-tag, .looking-for-option"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    setTimeout(
                        updateProfilePreview,
                        0
                    );

                }
            );

        });


    /* ========================================= */
    /* LOOKS GOOD                                */
    /* ========================================= */

    const profileLooksGoodBtn =
        document.querySelector("#profileLooksGoodBtn");


    if (profileLooksGoodBtn) {

        profileLooksGoodBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                updateProfilePreview();

                const completeSection =
                    document.querySelector("#profileComplete");

                if (completeSection) {

                    completeSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* ========================================= */
    /* FINISH PROFILE                            */
    /* ========================================= */

    const previewContinue =
        document.querySelector("#previewContinue");


    if (previewContinue) {

        previewContinue.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                updateProfilePreview();

                const completeSection =
                    document.querySelector("#profileComplete");

                if (completeSection) {

                    completeSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /* ========================================= */
    /* EDIT PROFILE                              */
    /* ========================================= */

    const editProfileBtn =
        document.querySelector("#editProfileBtn");


    if (editProfileBtn) {

        editProfileBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                goToProfileSection(".profile-about");

            }
        );

    }


    /* ========================================= */
    /* PROFILE SECTION NAVIGATION                */
    /* ========================================= */

    function goToProfileSection(selector) {

        const section =
            document.querySelector(selector);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    }


    /* ========================================= */
    /* INITIAL PREVIEW                           */
    /* ========================================= */

    updateProfilePreview();

});
