# WorldWise 🌍

WorldWise is a travel-tracking application built with React. It allows users to explore an interactive map, record the cities they have visited, and keep track of their travel experiences.

The application combines React Router, Context API, and Leaflet to provide an interactive travel experience with location-based navigation and city management.

🔗 **Live Demo:** [WorldWise on Render](https://react-worldwise-c9za.onrender.com/)

📂 **GitHub Repository:** [ritujane78/react_worldwise](https://github.com/ritujane78/react_worldwise)

---

## ✨ Features

- **Interactive Map:** Explore locations using Leaflet and React Leaflet.
- **City Tracking:** Add and manage cities you have visited.
- **City Details:** View information about selected cities, including travel dates and notes.
- **Geolocation:** Use your current location to navigate the map.
- **Dynamic Navigation:** Navigate between pages using React Router.
- **URL-Based Map Position:** Keep map coordinates in URL search parameters.
- **Global State Management:** Share application state using React Context API and `useReducer`.
- **REST API:** Retrieve and manage city data using JSON Server.
- **Responsive Interface:** Explore the application across different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Building the user interface |
| Vite | Development server and production build |
| React Router | Client-side routing and navigation |
| React Leaflet | React integration for interactive maps |
| Leaflet | Interactive map rendering |
| Context API | Sharing application state |
| useReducer | Managing application state transitions |
| React Hooks | Managing state, effects, and reusable logic |
| JSON Server | Local REST API for city data |
| JavaScript (ES6+) | Application logic |
| CSS Modules | Component-level styling |

## 📁 Project Structure

The repository contains the following main directories and configuration files:

```text
react_worldwise/
├── data/
│   └── cities.json          # City data used by JSON Server
│
├── public/
│   └──                         # Static assets
│
├── src/
│   ├── components/           # Reusable UI components
│   ├── contexts/             # Application context and state management
│   ├── hooks/                # Custom React hooks
│   ├── pages/                # Application pages
│   ├── App.jsx               # Application component
│   ├── main.jsx              # Application entry point
│   └── ...                   # Styles and supporting modules
│
├── .gitignore
├── eslint.config.js          # ESLint configuration
├── index.html                # HTML entry point
├── package.json              # Dependencies and scripts
├── package-lock.json
├── vite.config.js             # Vite configuration
└── README.md
```

> The structure above is a high-level overview. Refer to the repository for the complete source tree.

## 📜 Available Scripts

The following scripts are defined in `package.json`.

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run server` | Start JSON Server on port 8000 |

## 🗺️ Map Integration

WorldWise uses Leaflet and React Leaflet to display an interactive map.

The map supports:

- Displaying geographical locations.
- Navigating between map positions.
- Updating map coordinates based on URL parameters.
- Using browser geolocation to find the current position.
- Interacting with city markers and map locations.

The application uses OpenStreetMap-based map tiles through Leaflet's tile layer configuration.

## 🧠 State Management

The application uses React's built-in state management features.

### Context API

The Context API makes shared application data available to components without passing props through multiple levels.

### useReducer

The `useReducer` hook manages application state transitions through a reducer function and dispatched actions.

### Custom Hooks

Custom hooks encapsulate reusable application logic, including city data access, geolocation, and URL-based map positioning.

## 📚 Learning Objectives

This project demonstrates practical usage of:

- React functional components.
- React Hooks: `useState`, `useEffect`, `useReducer`, and `useCallback`.
- Context API for global state management.
- React Router for client-side navigation.
- URL search parameters for managing application state.
- Leaflet and React Leaflet for interactive maps.
- Browser Geolocation API.
- REST API integration using JSON Server.
- Vite for development and production builds.
- ESLint for code quality.