"use strict";

/* ==========================================
   CampusVerse Search Module
========================================== */

const CampusVerseSearch = {

    searchInput: null,

    searchForm: null,

    searchButton: null,

    searchData: [],

    init() {

        console.log("Search Module Initialized");

        this.cacheElements();

        this.loadSearchData();

        this.bindEvents();

    },

    cacheElements() {

        this.searchForm = document.querySelector(".search-form");

        this.searchInput = document.querySelector('input[type="search"]');

        this.searchButton = this.searchForm?.querySelector("button");

    },

    loadSearchData() {

        this.searchData = [

            {
                title: "Learning Hub",
                url: "pages/learning-hub.html",
                keywords: [
                    "learning",
                    "java",
                    "python",
                    "roadmap"
                ]
            },

            {
                title: "Practice Hub",
                url: "pages/practice-hub.html",
                keywords: [
                    "practice",
                    "coding",
                    "dsa",
                    "questions"
                ]
            },

            {
                title: "Build Hub",
                url: "pages/build-hub.html",
                keywords: [
                    "projects",
                    "development",
                    "portfolio"
                ]
            },

            {
                title: "Career Launch",
                url: "pages/career-launch.html",
                keywords: [
                    "career",
                    "resume",
                    "interview",
                    "placement"
                ]
            }

        ];

        // console.log(this.searchData); 

    },

    bindEvents() {

        if (!this.searchForm) return;

        this.searchForm.addEventListener("submit", (event) => {

            event.preventDefault();

            this.handleSearch();

        });

    },

    handleSearch() {

        const query = this.searchInput.value
            .trim()
            .toLowerCase();

        if (!query) return;

        const results = this.searchData.filter((item) => {

            return (

                item.title
                    .toLowerCase()
                    .includes(query)

                ||

                item.keywords.some((keyword) =>

                    keyword.includes(query)

                )

            );

        });

        // console.log(results); 
        if (results.length === 0) {

            alert("No matching content found.");

            return;

        }

        window.location.href = results[0].url;

    },

    

};