# Interactive Multi-Page Portfolio Website using React

## Assignment 2 — Full Stack Development (CS1303)

This project extends the static portfolio website from Assignment 1 into an interactive React application using reusable components, React Hooks, props, and client-side routing.

## Features

- React functional components
- Reusable portfolio components
- Project cards rendered from project data
- Props-based data passing
- Two-level prop drilling
- Dark/Light theme toggle
- Theme preference persisted using `localStorage`
- Home-page loading sequence using `useEffect`
- Controlled contact form using `useState`
- Contact form validation and disabled submit button
- Independent "View Details" state for each project card
- Client-side routing with `react-router-dom`
- Dynamic project detail route using `useParams`
- 404 Not Found page
- Responsive layout for mobile and tablet screens

## Project Structure

```text
assignment2/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Nav.jsx
│   │   ├── ProjectInfo.jsx
│   │   └── SubProject.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Project.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── ProjectInfo.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── data/
│   │   └── projects.js
│   │
│   ├── assets/
│   │   └── ...
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── README.md
```

> The exact contents of the `assets` directory may vary depending on the portfolio images used.

## Component Tree

```text
App
├── Nav
├── Routes
│   ├── Home
│   │   └── Header
│   ├── About
│   ├── Education
│   ├── Project
│   │   └── SubProject
│   │       └── ProjectInfo
│   ├── ProjectDetails
│   ├── Skills
│   ├── Contact
│   └── NotFound
└── Footer
```

### Props and Prop Drilling

Project data is stored in `src/data/projects.js`.

The Projects page maps over the project array and passes project information to `SubProject` through props. `SubProject` then passes selected project information such as the title and description to `ProjectInfo`.

This demonstrates two-level prop drilling:

```text
Project
   ↓ props
SubProject
   ↓ props
ProjectInfo
```

## State Management

### 1. Theme State

The theme state is lifted to the top-level `App` component:

```text
App
 ├── theme state
 └── Nav
      └── toggleTheme
```

`App` owns the theme state and passes the current theme and `toggleTheme` function to `Nav` through props.

The theme preference is also stored in `localStorage`, allowing the selected theme to remain after refreshing the page.

### 2. Contact Form State

The Contact page uses `useState` to store:

- Name
- Email
- Message

Each input is controlled using its `value` and `onChange` properties.

An additional `errors` state object is used for basic validation. The submit button remains disabled until all required fields contain values.

### 3. Project Card State

Each `SubProject` component has its own `showDetails` state.

Because every project is rendered as a separate component instance, opening the details of one project does not automatically change the state of another project.

## useEffect Hooks

### Home Loading Effect

`Home.jsx` uses:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false)
  }, 1000)

  return () => clearTimeout(timer)
}, [])
```

This simulates a short loading sequence when the Home component mounts.

The cleanup function clears the timer if the component is removed before the timer finishes.

### Theme Persistence Effect

`App.jsx` uses an effect that runs whenever the theme changes:

```jsx
useEffect(() => {
  localStorage.setItem('theme', theme)
}, [theme])
```

This saves the selected theme preference to `localStorage`.

The initial theme state reads the saved preference from `localStorage`, falling back to the dark theme when no saved preference exists.

## Routing

The application uses `react-router-dom`.

Routes include:

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/education` | Education |
| `/projects` | Projects |
| `/projects/:projectId` | Dynamic Project Details |
| `/skills` | Skills |
| `/contact` | Contact |
| `*` | 404 Not Found |

Navigation uses React Router links instead of normal page-reloading anchor navigation.

## Responsive Design

The existing portfolio CSS is reused and adapted for the React application.

Responsive breakpoints are maintained for:

- Mobile: `≤ 480px`
- Tablet: `≤ 768px`

## Installation and Setup

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Enter the Assignment 2 directory

```bash
cd portfolio/assignment2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed by Vite in the terminal.

### 5. Create a production build

```bash
npm run build
```

The project should build successfully without console errors before submission.

## Projects

The portfolio currently contains project information for:

- GearRent — Peer-to-Peer Gear Rental Marketplace
- StudyAI — AI-powered study planning application
- Real-time Chat Room

Project information is stored in `src/data/projects.js` and rendered dynamically.

## AI Assistance Disclosure

AI assistance was used during development for debugging small code snippets, understanding React concepts, checking assignment requirements, and identifying/fixing implementation issues. The project was developed and tested by the student, and the assistance was used as guidance and debugging support rather than as a replacement for understanding the implementation.

## Author

**Sumit Kumar Pathak**

B.Tech Computer Science & Engineering  
National Institute of Technology, Warangal
