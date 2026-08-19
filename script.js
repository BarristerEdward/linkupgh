/* ========================================= */
/* LINKUPGH — REGISTRATION JAVASCRIPT       */
/* STEP 01 — BASIC INFORMATION              */
/* ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const basicForm = document.querySelector(".basic-info-form");

    if (!basicForm) return;


    basicForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get form values
        const firstName =
            document.querySelector("#firstName").value.trim();

        const dateOfBirth =
            document.querySelector("#dateOfBirth").value;

        const gender =
            document.querySelector("#gender").value;

        const location =
            document.querySelector("#location").value;


        // Check required fields
        if (
            !firstName ||
            !dateOfBirth ||
            !gender ||
            !location
        ) {

            alert("Please complete all the required fields.");

            return;

        }


        // Save information temporarily
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


        // Move to Account Details
        const accountSection =
            document.querySelector(".account-details");

        if (accountSection) {

            accountSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
