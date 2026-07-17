![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/SpringBoot-4.1.0-brightgreen)
![MySQL](https://img.shields.io/badge/MySQL-Database-blue)
![HTML](https://img.shields.io/badge/HTML5-orange)
![CSS](https://img.shields.io/badge/CSS3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-Educational-lightgrey)


# 🎓 CampusVerse

> **A Full Stack Student Learning & Career Development Platform**

CampusVerse is a modern full-stack web application designed to help students learn, practice, build projects, prepare for placements, and access career resources from one platform.

This project was developed using **Spring Boot, MySQL, HTML, CSS, and JavaScript** with a clean architecture and REST API integration.

---

# 🚀 Features

### 📚 Learning Hub
- Structured learning content
- Technology roadmaps
- Topic-wise learning resources

### 💻 Practice Hub
- Coding practice
- Technical preparation
- Problem-solving

### 🚀 Build Hub
- Project ideas
- Portfolio guidance
- Development roadmap

### 📝 Assessment
- Skill assessment
- Technical preparation
- Learning evaluation

### 🗺 Journey Builder
- Personalized learning paths
- Career roadmap
- Skill development journey

### 📚 Resource Center
- Dynamic resources from backend
- Notes
- Books
- Cheat Sheets
- Learning materials

### 📩 Contact Module
- Contact form integrated with Spring Boot
- Data stored in MySQL Database

### 📊 Dashboard
- Student dashboard
- Learning overview
- Resource access

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Java
- Spring Boot
- Spring Web
- Spring Data JPA

## Database

- MySQL

## Build Tool

- Maven

## Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
CampusVerse/

│
├── campusverse-backend/
│     ├── controller
│     ├── service
│     ├── repository
│     ├── entity
│     ├── dto
│     ├── response
│     ├── config
│     └── exception
│
├── campusverse-frontend/
│     ├── css
│     ├── js
│     ├── images
│     ├── pages
│     └── index.html
│
└── README.md
```

---

# 🏗 Architecture

```
Frontend (HTML/CSS/JS)

        │

        ▼

REST API (Spring Boot)

        │

        ▼

Spring Service Layer

        │

        ▼

Repository (JPA)

        │

        ▼

MySQL Database
```

---

# 📡 REST API Endpoints

## Student

| Method | Endpoint |
|----------|----------------|
| GET | /api/students |
| POST | /api/students |

---

## Contact

| Method | Endpoint |
|----------|----------------|
| GET | /api/contact |
| POST | /api/contact |

---

## Assessment

| Method | Endpoint |
|----------|----------------|
| GET | /api/assessments |
| POST | /api/assessments |

---

## Journey

| Method | Endpoint |
|----------|----------------|
| GET | /api/journeys |
| POST | /api/journeys |

---

## Resources

| Method | Endpoint |
|----------|----------------|
| GET | /api/resources |
| POST | /api/resources |

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/your-username/CampusVerse.git
```

---

## Backend

```bash
cd campusverse-backend
```

Configure MySQL database in:

```
application.properties
```

Run

```bash
mvn spring-boot:run
```

Backend will start on

```
http://localhost:8080
```

---

## Frontend

Open

```
index.html
```

or use VS Code Live Server.

---

# 📸 Screenshots

> Add project screenshots here.

- Home Page
- Learning Hub
- Dashboard
- Resource Center
- Contact Page

---

# ✨ Future Enhancements

CampusVerse is currently released as **Version 1.0**.

Future versions will include:

- 🔐 Student Authentication & Login
- 👤 User Profile Management
- 🎥 Video Learning Platform
- 📄 Trusted Notes Repository
- 📝 Online Quiz System
- 📊 Progress Tracking Dashboard
- 🏆 Certificate Generation
- 🤖 AI Learning Assistant
- 💬 Discussion Forum
- 📱 Mobile Application
- ☁ Cloud Storage Integration
- 🔔 Notifications & Reminders
- 🎯 Placement Analytics
- 🧑‍💼 Admin Dashboard

---

# 🎯 Project Objectives

- Improve student learning experience
- Provide structured career guidance
- Centralize learning resources
- Support placement preparation
- Build an easy-to-use educational platform

---

# 👨‍💻 Author

**Raunak Raj**

B.Tech - Computer Science Engineering

Greater Noida College

Dr. A.P.J Abdul Kalam Technical University

GitHub:
https://github.com/rnkraj05

LinkedIn:
https://www.linkedin.com/in/raunak-raj-451062352

---

# ⭐ Acknowledgements

Special thanks to all the open-source technologies and learning resources that inspired the development of CampusVerse.

---

# 📄 License

This project is developed for educational purposes.

© 2026 Raunak Raj. All Rights Reserved.