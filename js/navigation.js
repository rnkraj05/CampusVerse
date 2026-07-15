"use strict";

/* ==========================================
   CampusVerse Navigation
========================================== */

const CampusVerseNavigation = {

    header: null,

    menuButton: null,

    navigation: null,

    init() {

        console.log("Navigation Initialized");

        this.header = document.querySelector(".header");

        this.menuButton = document.querySelector(".menu-toggle");

        this.navigation = document.querySelector(".nav-menu");

        this.initializeStickyHeader();

        this.initializeActiveLink();

        this.initializeMobileMenu();

        this.initializeMenuLinks();

        this.initializeOutsideClick();

        this.initializeEscapeKey();

    },

    initializeStickyHeader() {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 10) {

                this.header.classList.add("header-scrolled");

            } else {

                this.header.classList.remove("header-scrolled");

            }

        });

    },

    initializeActiveLink() {

        const links = document.querySelectorAll(".nav-link");

        const currentPage = window.location.pathname.split("/").pop() || "index.html";

        links.forEach((link) => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            const pageName = href.split("/").pop();

            if (pageName === currentPage) {

                link.classList.add("active");

            }

        });

    },

    initializeMobileMenu() {

        if (!this.menuButton || !this.navigation) return;

        this.menuButton.addEventListener("click", () => {

            const isOpen = this.navigation.classList.toggle("nav-open");

            this.menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

            document.body.classList.toggle(
                "menu-open",
                isOpen
            );

        });

    },

    initializeMenuLinks() {

        const links = document.querySelectorAll(".nav-link");

        links.forEach((link) => {

            link.addEventListener("click", () => {

                if (!this.navigation.classList.contains("nav-open")) return;

                this.closeMenu();

            });

        });

    },

    initializeOutsideClick() {

        document.addEventListener("click", (event) => {

            if (!this.navigation.classList.contains("nav-open")) return;

            const clickedInsideNavigation =
                this.navigation.contains(event.target);

            const clickedMenuButton =
                this.menuButton.contains(event.target);

            if (!clickedInsideNavigation && !clickedMenuButton) {

                this.closeMenu();

            }

        });

    },

    closeMenu() {

        this.navigation.classList.remove("nav-open");

        this.menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove("menu-open");

    },

    initializeEscapeKey() {

        document.addEventListener("keydown", (event) => {

            if (event.key !== "Escape") return;

            if (!this.navigation.classList.contains("nav-open")) return;

            this.closeMenu();

        });

    },

};

