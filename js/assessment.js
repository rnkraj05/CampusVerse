"use strict";

/* ==========================================
   CampusVerse Assessment Module
========================================== */

const CampusVerseAssessment = {

    assessment: null,

    categoryCards: [],

    featuredCards: [],

    performanceCards: [],

    resourceCards: [],

    assessmentData: {

        java: 85,

        webDevelopment: 78,

        dsa: 72,

        aptitude: 81,

        completedAssessments: 24,

        averageScore: 79

    },

    init() {

        console.log("Assessment Module Initialized");

        this.cacheElements();

        this.loadAssessment();

        this.bindEvents();

    },

    cacheElements() {

        this.assessment = document.querySelector(".assessment-hero");

        this.categoryCards = document.querySelectorAll(".assessment-category-card");

        this.featuredCards = document.querySelectorAll(".featured-assessment-card");

        this.performanceCards = document.querySelectorAll(".performance-card");

        this.resourceCards = document.querySelectorAll(".assessment-resource-card");

        this.performance = {

            score: document.querySelector('[data-performance="score"]'),

            achievement: document.querySelector('[data-performance="achievement"]'),

            growth: document.querySelector('[data-performance="growth"]')

        };

    },

    loadAssessment() {

        this.renderCategories();

        this.renderPerformance();

    },

    renderCategories() {

        console.log(this.assessmentData);

    },

    renderPerformance() {

        this.performance.score.textContent =
            `Average Score : ${this.assessmentData.averageScore}%`;

        this.performance.achievement.textContent =
            `${this.assessmentData.completedAssessments} Assessments Completed`;

        this.performance.growth.textContent =
            `Java ${this.assessmentData.java}% • Web ${this.assessmentData.webDevelopment}% • DSA ${this.assessmentData.dsa}%`;

    },

    bindEvents() {

        this.categoryCards.forEach((card) => {

            card.addEventListener("click", () => {

                const title = card.querySelector("h3")?.textContent;

                console.log(`Assessment Selected : ${title}`);

            });

        });

    }

};