"use strict";

/* ==========================================
   CampusVerse Journey Module
========================================== */

const CampusVerseJourney = {

    selectedJourney: "Java Backend",

    init() {

        console.log("Journey Module Initialized");

        this.cacheElements();

        this.bindEvents();

    },

    cacheElements() {

        this.levelCards =
            document.querySelectorAll(".journey-level-card");

    },

    bindEvents() {

        this.levelCards.forEach((card) => {

            card.addEventListener("click", () => {

                const title =
                    card.querySelector("h3")?.textContent;

                this.selectedJourney = title;

                console.log(`Journey Selected : ${title}`);

            });

        });

    }

};