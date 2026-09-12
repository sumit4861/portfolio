# Personal Portfolio Website

A responsive personal portfolio website built using **React and Vite**, extended with a **Node.js and Express backend** for project data and contact-form submissions.

This project was developed as part of the Full Stack Development assignment.

---

## Features

### Frontend

- Personal portfolio website
- Home/About section
- Education section
- Skills section
- Projects section
- Individual project details
- Contact form
- React Router navigation
- Light/Dark theme toggle
- Responsive design
- Projects loaded dynamically from the backend
- Loading state while fetching projects
- Error state when the backend is unavailable
- Contact form success and error messages

### Backend

- Node.js and Express server
- Health-check endpoint
- REST API for projects
- REST API for individual project details
- Contact form submission API
- Contact submissions stored in a JSON file
- Server-side form validation
- Email validation
- CORS support
- Environment-variable configuration
- 404 handling for unknown routes
- Global Express error-handling middleware

---

## Technologies Used

### Frontend

- React
- Vite
- JavaScript
- React Router
- CSS
- Fetch API

### Backend

- Node.js
- Express.js
- CORS
- dotenv
- File System (`fs`)
- JSON file storage

---

## Project Structure

```text
portfolio/
│
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   ├── ProjectInfo.jsx
│   │   └── SubProject.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   ├── Project.jsx
│   │   ├── ProjectDetails.jsx
│   │   └── Skills.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── server/
│   ├── data/
│   │   ├── projects.js
│   │   └── contacts.json
│   │
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── public/
│   └── images/
│
├── package.json
├── .gitignore
└── README.md
```

---

# Backend Setup

The backend is located inside the `server` directory.

## 1. Navigate to the server directory

```bash
cd server
```

## 2. Install backend dependencies

```bash
npm install
```

The backend uses:

- Express
- CORS
- dotenv

## 3. Configure environment variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### Environment variables

| Variable | Description |
|---|---|
| `PORT` | Port on which the Express server runs |
| `FRONTEND_URL` | Frontend origin allowed by CORS |

A template is provided in `.env.example`.

---

## 4. Start the backend

From the `server` directory:

```bash
npm start
```

The backend will run on:

```text
http://localhost:5000
```

The health-check endpoint can be tested at:

```text
http://localhost:5000/
```

Expected response:

```json
{
  "status": "ok"
}
```

---

# Frontend Setup

From the project root directory:

## 1. Install dependencies

```bash
npm install
```

## 2. Start the frontend

```bash
npm run dev
```

Vite will display the local frontend URL in the terminal, normally:

```text
http://localhost:5173
```

The frontend communicates with the backend running on:

```text
http://localhost:5000
```

---

# API Documentation

## 1. Health Check

### Request

```http
GET /
```

### Example

```text
GET http://localhost:5000/
```

### Successful Response

**Status:** `200 OK`

```json
{
  "status": "ok"
}
```

---

## 2. Get All Projects

### Request

```http
GET /api/projects
```

### Example

```text
GET http://localhost:5000/api/projects
```

### Successful Response

**Status:** `200 OK`

Returns an array of project objects.

Each project contains:

```text
id
title
description
techStack
image
link
```

Example:

```json
[
  {
    "id": 1,
    "title": "GearRent: Peer-to-Peer Gear Rental Marketplace",
    "description": "A full-stack web application...",
    "techStack": "React,Node,MongoDB",
    "image": "/images/gear1.png,/images/gear2.png",
    "link": "https://github.com/sumit4861/gearrent-backend"
  }
]
```

---

## 3. Get Project by ID

### Request

```http
GET /api/projects/:id
```

### Example

```text
GET http://localhost:5000/api/projects/1
```

### Successful Response

**Status:** `200 OK`

Returns the project corresponding to the requested ID.

### Invalid Project ID

Example:

```text
GET http://localhost:5000/api/projects/999
```

### Response

**Status:** `404 Not Found`

```json
{
  "error": "Project not found"
}
```

---

# Contact API

## 4. Submit Contact Form

### Request

```http
POST /api/contact
```

### Example

```text
POST http://localhost:5000/api/contact
```

### Request Body

```json
{
  "name": "Sumit",
  "email": "sumit@example.com",
  "message": "Hello from the portfolio website"
}
```

### Successful Response

**Status:** `201 Created`

```json
{
  "message": "Contact form submitted successfully",
  "contact": {
    "id": 123456789,
    "name": "Sumit",
    "email": "sumit@example.com",
    "message": "Hello from the portfolio website"
  }
}
```

The generated `id` will be different for each submission.

---

## Contact Validation

The backend validates the required fields.

### Missing Name

Request:

```json
{
  "email": "sumit@example.com",
  "message": "Hello"
}
```

Response:

**Status:** `400 Bad Request`

```json
{
  "error": "Name is required"
}
```

### Missing Email

Request:

```json
{
  "name": "Sumit",
  "message": "Hello"
}
```

Response:

**Status:** `400 Bad Request`

```json
{
  "error": "Email is required"
}
```

### Missing Message

Request:

```json
{
  "name": "Sumit",
  "email": "sumit@example.com"
}
```

Response:

**Status:** `400 Bad Request`

```json
{
  "error": "Message is required"
}
```

### Invalid Email

Request:

```json
{
  "name": "Sumit",
  "email": "invalid-email",
  "message": "Hello"
}
```

Response:

**Status:** `400 Bad Request`

```json
{
  "error": "Invalid email"
}
```

---

## 5. Get Contact Submissions

### Request

```http
GET /api/contact
```

### Example

```text
GET http://localhost:5000/api/contact
```

### Successful Response

**Status:** `200 OK`

Returns an array containing all stored contact submissions.

Example:

```json
[
  {
    "id": 123456789,
    "name": "Sumit",
    "email": "sumit@example.com",
    "message": "Hello"
  }
]
```

> This endpoint is intentionally open and does not require authentication, as required by the assignment.

---

# Error Handling

## Unknown Routes

The backend provides a catch-all 404 response for routes that do not exist.

Example:

```text
GET http://localhost:5000/api/unknown
```

Response:

**Status:** `404 Not Found`

```json
{
  "error": "Route not found"
}
```

## Global Error Handler

The Express application also includes global error-handling middleware.

Unexpected server errors are returned as JSON:

```json
{
  "error": "Internal server error"
}
```

The server continues running after handling the error.

---

# Data Storage

Project data is stored in:

```text
server/data/projects.js
```

Contact-form submissions are stored in:

```text
server/data/contacts.json
```

The project does not use a database or ORM. JSON file storage is used for persistence.

---

# Frontend-Backend Integration

The Projects page retrieves project information from the backend using the Fetch API.

```text
React Projects Page
        |
        | GET /api/projects
        ↓
Express Backend
        |
        ↓
server/data/projects.js
        |
        ↓
JSON response
        |
        ↓
React state
        |
        ↓
Project cards
```

The individual project details page retrieves a project using its ID:

```text
/projects/:projectId
        |
        ↓
GET /api/projects/:projectId
        |
        ↓
Express Backend
        |
        ↓
Project Details
```

The Contact page sends form data to:

```text
POST /api/contact
```

The backend validates and stores the submission in `contacts.json`.

---

# Environment Configuration

The backend uses environment variables through `dotenv`.

## `.env`

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
```

## `.env.example`

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
```

The actual `.env` file should not be committed if it contains secrets.

---

# API Testing Checklist

The following endpoints can be tested using Postman or curl.

| Test | Method | Endpoint | Expected |
|---|---|---|---|
| Health check | GET | `/` | `200` |
| Get projects | GET | `/api/projects` | `200` |
| Get valid project | GET | `/api/projects/1` | `200` |
| Invalid project | GET | `/api/projects/999` | `404` |
| Valid contact | POST | `/api/contact` | `201` |
| Invalid contact | POST | `/api/contact` | `400` |
| Get contacts | GET | `/api/contact` | `200` |
| Unknown route | GET | `/unknown` | `404` |

---

# Running Both Servers

Two terminals are required during local development.

### Terminal 1 — Backend

```bash
cd server
npm install
npm start
```

Backend:

```text
http://localhost:5000
```

### Terminal 2 — Frontend

From the project root:

```bash
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# Project Data

The portfolio currently contains the following projects:

1. **GearRent: Peer-to-Peer Gear Rental Marketplace**
   - React
   - Node.js
   - MongoDB

2. **StudyAI**
   - React
   - Node.js
   - MongoDB

3. **Real-time Chat Room**
   - HTML
   - CSS
   - JavaScript
   - Firebase

---

# Notes

- The frontend uses the Fetch API for backend communication.
- Project data is no longer imported directly into the Projects page from the frontend data file.
- Contact submissions are persisted in a JSON file.
- CORS is configured using the `FRONTEND_URL` environment variable.
- The contact submissions endpoint is intentionally open without authentication.
- The backend and frontend must both be running for full functionality.