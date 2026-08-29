/* ========================================= */
/* LINKUPGH — DASHBOARD JAVASCRIPT          */
/* ========================================= */

/*
    FRONT-END DEMO ONLY

    TODO:
    Replace demo profile data and localStorage
    with real backend/API data in the future.
*/


document.addEventListener("DOMContentLoaded", function () {


    /* ========================================= */
    /* DEMO DISCOVER PROFILES                   */
    /* ========================================= */

    const demoProfiles = [

        {
            id: 1,
            name: "Ama",
            age: 24,
            location: "Kumasi",
            avatar: "😊",

            intro:
                "Love good conversations, music and spontaneous adventures.",

            interests: [
                "Music",
                "Travel",
                "Football"
            ],

            personality: [
                "Friendly",
                "Easygoing"
            ]
        },


        {
            id: 2,
            name: "Kojo",
            age: 26,
            location: "Accra",
            avatar: "😎",

            intro:
                "Big on football, good food and conversations that actually go somewhere.",

            interests: [
                "Football",
                "Movies",
                "Food"
            ],

            personality: [
                "Calm",
                "Funny"
            ]
        },


        {
            id: 3,
            name: "Abena",
            age: 23,
            location: "Cape Coast",
            avatar: "🌸",

            intro:
                "I enjoy meaningful conversations, quiet places and discovering new ideas.",

            interests: [
                "Books",
                "Music",
                "Travel"
            ],

            personality: [
                "Thoughtful",
                "Creative"
            ]
        },


        {
            id: 4,
            name: "Kwame",
            age: 27,
            location: "Takoradi",
            avatar: "🤓",

            intro:
                "Tech, business and random conversations at midnight somehow make sense to me.",

            interests: [
                "Technology",
                "Business",
                "Gaming"
            ],

            personality: [
                "Curious",
                "Ambitious"
            ]
        },


        {
            id: 5,
            name: "Esi",
            age: 25,
            location: "Accra",
            avatar: "✨",

            intro:
                "I appreciate honesty, laughter and people who can genuinely be themselves.",

            interests: [
                "Art",
                "Fashion",
                "Music"
            ],

            personality: [
                "Warm",
                "Confident"
            ]
        },


        {
            id: 6,
            name: "Yaw",
            age: 28,
            location: "Tamale",
            avatar: "🧠",

            intro:
                "Always learning something new. I enjoy good energy and people with interesting stories.",

            interests: [
                "Reading",
                "Technology",
                "Travel"
            ],

            personality: [
                "Thoughtful",
                "Driven"
            ]
        }

    ];


    /* ========================================= */
    /* DASHBOARD STATE                           */
    /* ========================================= */

    let availableProfiles =
        [...demoProfiles];

    let currentProfiles =
        [];


    /* ========================================= */
    /* DOM ELEMENTS                              */
    /* ========================================= */

    const discoverGrid =
        document.querySelector("#discoverGrid");

    const discoverEmpty =
        document.querySelector("#discoverEmpty");

    const refreshDiscover =
        document.querySelector("#refreshDiscover");

    const resetDiscover =
        document.querySelector("#resetDiscover");

    const welcomeName =
        document.querySelector("#welcomeName");

    const welcomeLocation =
        document.querySelector("#welcomeLocation");

    const headerProfileName =
        document.querySelector("#headerProfileName");

    const headerAvatar =
        document.querySelector("#headerAvatar");

    const mobileAvatar =
        document.querySelector("#mobileAvatar");

    const greetingLabel =
        document.querySelector("#greetingLabel");

    const profileMenuButton =
        document.querySelector(".profile-menu-button");


    /* ========================================= */
    /* LOAD USER INFORMATION                     */
    /* ========================================= */

    function loadUserInformation() {


        /*
            Get information saved during
            registration and profile building.
        */

        const displayName =
            localStorage.getItem(
                "linkup_displayName"
            )
            ||
            localStorage.getItem(
                "linkup_firstName"
            )
            ||
            "there";


        const location =
            localStorage.getItem(
                "linkup_location"
            )
            ||
            "Your location";


        const avatar =
            localStorage.getItem(
                "linkup_avatar"
            )
            ||
            "😊";


        /*
            Update welcome section
        */

        if (welcomeName) {

            welcomeName.textContent =
                displayName;

        }


        /*
            Update location
        */

        if (welcomeLocation) {

            welcomeLocation.textContent =
                location;

        }


        /*
            Update header profile name
        */

        if (headerProfileName) {

            headerProfileName.textContent =
                displayName;

        }


        /*
            Update header avatar
        */

        if (headerAvatar) {

            headerAvatar.textContent =
                avatar;

        }


        /*
            Update mobile avatar
        */

        if (mobileAvatar) {

            mobileAvatar.textContent =
                avatar;

        }

    }


    /* ========================================= */
    /* UPDATE GREETING                           */
    /* ========================================= */

    function updateGreeting() {


        if (!greetingLabel) {

            return;

        }


        const currentHour =
            new Date().getHours();


        let greeting =
            "GOOD MORNING";


        if (
            currentHour >= 12 &&
            currentHour < 17
        ) {

            greeting =
                "GOOD AFTERNOON";

        }


        if (
            currentHour >= 17
        ) {

            greeting =
                "GOOD EVENING";

        }


        greetingLabel.textContent =
            greeting;

    }


    /* ========================================= */
    /* GET VISIBLE PROFILES                      */
    /* ========================================= */

    function getVisibleProfiles() {


        /*
            Shuffle profiles so the
            order changes when refreshed.
        */

        const shuffled =
            [...availableProfiles]
                .sort(function () {

                    return Math.random() - 0.5;

                });


        /*
            Show maximum of 3 cards
            on the dashboard.
        */

        return shuffled.slice(0, 3);

    }


    /* ========================================= */
    /* RESET DISCOVER                            */
    /* ========================================= */

    function resetDiscoverProfiles() {


        availableProfiles =
            [...demoProfiles];


        currentProfiles =
            getVisibleProfiles();


        renderProfiles();

    }


    /* ========================================= */
    /* RENDER PROFILES                           */
    /* ========================================= */

    function renderProfiles() {


        if (!discoverGrid) {

            return;

        }


        /*
            Clear previous cards
        */

        discoverGrid.innerHTML =
            "";


        /*
            Empty state
        */

        if (
            currentProfiles.length === 0
        ) {

            discoverGrid.classList.add(
                "hidden"
            );


            if (discoverEmpty) {

                discoverEmpty.classList.remove(
                    "hidden"
                );

            }


            return;

        }


        /*
            Hide empty state
        */

        discoverGrid.classList.remove(
            "hidden"
        );


        if (discoverEmpty) {

            discoverEmpty.classList.add(
                "hidden"
            );

        }


        /*
            Create cards
        */

        currentProfiles.forEach(
            function (profile) {


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "profile-card";


                card.dataset.profileId =
                    profile.id;


                card.innerHTML = `

                    <!-- PROFILE TOP -->

                    <div class="profile-card-top">


                        <div class="profile-avatar">
                            ${profile.avatar}
                        </div>


                        <div class="profile-card-identity">


                            <div class="profile-name-row">

                                <h3>
                                    ${profile.name},
                                    <span>
                                        ${profile.age}
                                    </span>
                                </h3>

                            </div>


                            <div class="profile-location">

                                <span aria-hidden="true">
                                    ⌖
                                </span>

                                <span>
                                    ${profile.location}
                                </span>

                            </div>

                        </div>


                        <div class="profile-private-badge">

                            <span aria-hidden="true">
                                🔒
                            </span>

                            <span>
                                Private
                            </span>

                        </div>

                    </div>


                    <!-- INTRO -->

                    <div class="profile-introduction">

                        <span class="profile-content-label">
                            ABOUT
                        </span>

                        <p>
                            "${profile.intro}"
                        </p>

                    </div>


                    <!-- INTERESTS -->

                    <div class="profile-detail-group">

                        <span class="profile-content-label">
                            INTERESTS
                        </span>


                        <div class="tag-list">

                            ${profile.interests.map(
                                function (interest) {

                                    return `
                                        <span class="profile-tag">
                                            ${interest}
                                        </span>
                                    `;

                                }
                            ).join("")}

                        </div>

                    </div>


                    <!-- PERSONALITY -->

                    <div class="profile-detail-group">

                        <span class="profile-content-label">
                            PERSONALITY
                        </span>


                        <div class="tag-list">

                            ${profile.personality.map(
                                function (trait) {

                                    return `
                                        <span class="profile-tag personality-tag">
                                            ${trait}
                                        </span>
                                    `;

                                }
                            ).join("")}

                        </div>

                    </div>


                    <!-- PRIVACY MESSAGE -->

                    <div class="profile-privacy-message">

                        <span class="privacy-lock">
                            🔒
                        </span>


                        <div>

                            <strong>
                                Photo private
                            </strong>

                            <span>
                                Get to know them first.
                            </span>

                        </div>

                    </div>


                    <!-- ACTIONS -->

                    <div class="profile-actions">


                        <button
                            type="button"
                            class="action-button pass-button"
                            data-action="pass"
                            data-id="${profile.id}"
                            aria-label="Pass on ${profile.name}"
                        >
                            ✕
                        </button>


                        <button
                            type="button"
                            class="action-button like-button"
                            data-action="like"
                            data-id="${profile.id}"
                            aria-label="Like ${profile.name}"
                        >
                            ♥
                        </button>


                        <a
                            href="profile.html"
                            class="view-profile-button"
                        >
                            View Profile
                            <span aria-hidden="true">
                                →
                            </span>
                        </a>


                    </div>

                `;


                discoverGrid.appendChild(
                    card
                );

            }
        );


        attachProfileActions();

    }


    /* ========================================= */
    /* PROFILE ACTIONS                           */
    /* ========================================= */

    function attachProfileActions() {


        const actionButtons =
            document.querySelectorAll(
                ".action-button"
            );


        actionButtons.forEach(
            function (button) {


                button.addEventListener(
                    "click",
                    function () {


                        const action =
                            button.dataset.action;


                        const profileId =
                            Number(
                                button.dataset.id
                            );


                        const card =
                            button.closest(
                                ".profile-card"
                            );


                        /*
                            Like profile
                        */

                        if (
                            action === "like"
                        ) {

                            saveLikedProfile(
                                profileId
                            );


                            if (card) {

                                card.classList.add(
                                    "profile-liked"
                                );

                            }

                        }


                        /*
                            Remove card after
                            a small visual delay.
                        */

                        if (card) {

                            card.classList.add(
                                "profile-card-removing"
                            );

                        }


                        setTimeout(
                            function () {

                                removeProfile(
                                    profileId
                                );

                            },
                            300
                        );

                    }
                );

            }
        );

    }


    /* ========================================= */
    /* REMOVE PROFILE                            */
    /* ========================================= */

    function removeProfile(profileId) {


        /*
            Remove from visible profiles
        */

        currentProfiles =
            currentProfiles.filter(
                function (profile) {

                    return (
                        profile.id !== profileId
                    );

                }
            );


        /*
            Remove from available profiles
        */

        availableProfiles =
            availableProfiles.filter(
                function (profile) {

                    return (
                        profile.id !== profileId
                    );

                }
            );


        /*
            Add another profile if available
        */

        if (
            currentProfiles.length < 3 &&
            availableProfiles.length > 0
        ) {


            const remainingProfiles =
                availableProfiles.filter(
                    function (profile) {

                        return !currentProfiles.some(
                            function (currentProfile) {

                                return (
                                    currentProfile.id ===
                                    profile.id
                                );

                            }
                        );

                    }
                );


            if (
                remainingProfiles.length > 0
            ) {


                const randomProfile =
                    remainingProfiles[
                        Math.floor(
                            Math.random()
                            *
                            remainingProfiles.length
                        )
                    ];


                currentProfiles.push(
                    randomProfile
                );

            }

        }


        renderProfiles();

    }


    /* ========================================= */
    /* SAVE LIKED PROFILE                        */
    /* ========================================= */

    function saveLikedProfile(profileId) {


        /*
            TODO:
            Replace this with backend
            like/match functionality.
        */

        const savedLikes =
            JSON.parse(
                localStorage.getItem(
                    "linkup_likedProfiles"
                )
                ||
                "[]"
            );


        /*
            Avoid duplicate likes
        */

        if (
            !savedLikes.includes(
                profileId
            )
        ) {

            savedLikes.push(
                profileId
            );

        }


        localStorage.setItem(
            "linkup_likedProfiles",
            JSON.stringify(
                savedLikes
            )
        );

    }


    /* ========================================= */
    /* REFRESH DISCOVER                          */
    /* ========================================= */

    if (refreshDiscover) {


        refreshDiscover.addEventListener(
            "click",
            function () {


                /*
                    Reset demo profiles
                */

                availableProfiles =
                    [...demoProfiles];


                /*
                    Shuffle profiles
                */

                currentProfiles =
                    getVisibleProfiles();


                renderProfiles();


                /*
                    Visual refresh state
                */

                refreshDiscover.classList.add(
                    "refreshing"
                );


                setTimeout(
                    function () {

                        refreshDiscover.classList.remove(
                            "refreshing"
                        );

                    },
                    500
                );

            }
        );

    }


    /* ========================================= */
    /* DISCOVER AGAIN                            */
    /* ========================================= */

    if (resetDiscover) {


        resetDiscover.addEventListener(
            "click",
            function () {

                resetDiscoverProfiles();

            }
        );

    }


    /* ========================================= */
    /* PROFILE MENU                              */
    /* ========================================= */

    if (profileMenuButton) {


        profileMenuButton.addEventListener(
            "click",
            function () {


                /*
                    Temporary behaviour.

                    TODO:
                    Replace with a proper
                    profile dropdown menu.
                */

                window.location.href =
                    "profile.html";

            }
        );

    }


    /* ========================================= */
    /* INITIALIZE DASHBOARD                      */
    /* ========================================= */

    loadUserInformation();

    updateGreeting();

    resetDiscoverProfiles();


});
