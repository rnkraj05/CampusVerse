"use strict";

/* ==========================================
   CampusVerse Application
========================================== */

const CampusVerseApp = {

    init() {

        console.log("🚀 CampusVerse Initialized");

        this.initializeNavigation();

        this.initializeAnimations();

        this.initializeSearch();

        this.initializeForms();

        this.initializeButtons();

        this.initializeCards();

        this.initializeScroll();

    },

    initializeNavigation() {

        CampusVerseNavigation.init();

    },

    initializeAnimations() {

        console.log("Animations Ready");

    },

    initializeSearch() {

        CampusVerseSearch.init();

    },

    initializeForms() {

        console.log("Forms Ready");

    },

    initializeButtons() {

        console.log("Buttons Ready");

    },

    initializeCards() {

        console.log("Cards Ready");

    },

    initializeScroll() {

        console.log("Scroll Ready");

    }

};

document.addEventListener("DOMContentLoaded", () => {

    CampusVerseApp.init();

});