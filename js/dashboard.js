"use strict";

/* ==========================================
   CampusVerse Dashboard Module
========================================== */

const CampusVerseDashboard = {

    dashboard: null,

    statCards: [],

    quickActions: [],

    dashboardData: {

        completedCourses: 12,

        completedProjects: 8,

        certificatesEarned: 5,

        learningHours: 145,

        currentTrack: "Java Backend",

        progress: 68,

        streak: 14,

        continueLearning: {

            javaBackend: 72,

            webDevelopment: 48,

            dsa: 61

        },

    },

    init() {

        console.log("Dashboard Module Initialized");

        this.cacheElements();

        this.loadDashboard();

        this.bindEvents();

    },

    cacheElements() {

        this.dashboard = document.querySelector(".dashboard");

        this.statCards = document.querySelectorAll(".stat-card");

        this.quickActions = document.querySelectorAll(".quick-action-card");

        this.dashboardStats = {

            courses: document.querySelector(
                '[data-dashboard="courses"]'
            ),

            projects: document.querySelector(
                '[data-dashboard="projects"]'
            ),

            certificates: document.querySelector(
                '[data-dashboard="certificates"]'
            )

        };

        this.learningProgress = {

            java: document.querySelector(
                '[data-progress="java"]'
            ),

            web: document.querySelector(
                '[data-progress="web"]'
            ),

            dsa: document.querySelector(
                '[data-progress="dsa"]'
            )

        };

    },

    loadDashboard() {

        this.renderStats();

        this.renderContinueLearning();

    },

    renderStats() {

        this.dashboardStats.courses.textContent =
            `${this.dashboardData.completedCourses} Courses`;

        this.dashboardStats.projects.textContent =
            `${this.dashboardData.completedProjects} Projects`;

        this.dashboardStats.certificates.textContent =
            `${this.dashboardData.certificatesEarned} Certificates`;

    },

    renderContinueLearning() {

        this.learningProgress.java.textContent =
            `${this.dashboardData.continueLearning.javaBackend}% Completed`;

        this.learningProgress.web.textContent =
            `${this.dashboardData.continueLearning.webDevelopment}% Completed`;

        this.learningProgress.dsa.textContent =
            `${this.dashboardData.continueLearning.dsa}% Completed`;

    },

    bindEvents() {

        this.quickActions.forEach((card) => {

            card.addEventListener("click", () => {

                const title = card.querySelector("h3")?.textContent;

                console.log(`Quick Access : ${title}`);

            });

        });

    },

};