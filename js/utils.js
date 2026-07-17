"use strict";

/* ==========================================
   CampusVerse Utilities
========================================== */

const CampusVerseUtils = {

    init() {

        console.log("Utilities Initialized");

        this.initializeTheme();

    },

    initializeTheme() {

        const themeButton = document.getElementById("theme-toggle");

        if (!themeButton) return;

        // Load Saved Theme
        const savedTheme = localStorage.getItem("campusverse-theme");

        if (savedTheme === "dark") {

            document.body.classList.add("dark-theme");

            themeButton.textContent = "☀️";

        }

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-theme");

            const isDark = document.body.classList.contains("dark-theme");

            localStorage.setItem(
                "campusverse-theme",
                isDark ? "dark" : "light"
            );

            themeButton.textContent = isDark ? "☀️" : "🌙";

            console.log(`Theme : ${isDark ? "Dark" : "Light"}`);

        });

    }

};