# projectbrief.md - WM Analyse: Tournament Tracker & Simulator

## 1. Project Overview
The **WM Analyse** application is a comprehensive web-based dashboard and simulator for a major sports tournament[cite: 1]. It allows users to view match data, track team statistics, examine venue information, and simulate tournament outcomes[cite: 1]. The application leverages external data providers and AI to enhance the analytical experience[cite: 1].

## 2. Tech Stack & Environment
*   **Build Tool:** Vite (`vite.config.js`)[cite: 1].
*   **Styling:** CSS with PostCSS processing (`postcss.config.js`, `src/index.css`)[cite: 1].
*   **Deployment & Hosting:** Vercel (`vercel.json`)[cite: 1].
*   **Package Management:** npm (`package.json`, `package-lock.json`)[cite: 1].

## 3. Core Architecture
The application follows a modular, vanilla JavaScript structure utilizing a custom DOM manipulation and state management approach[cite: 1]. 

### Directory Structure Requirements
*   **`/src/config/`**: Contains global application settings (`settings.js`)[cite: 1].
*   **`/src/data/`**: Serves as the local database for static tournament information[cite: 1].
    *   `matches.json`: Schedule and results of all games[cite: 1].
    *   `teams.json`: Roster, rankings, and team metadata[cite: 1].
    *   `venues.json`: Stadium information and locations[cite: 1].
*   **`/src/services/`**: Handles external API integrations and data fetching[cite: 1].
    *   `espn.js`: Fetches live sports data, scores, or detailed statistics from ESPN[cite: 1].
    *   `gemini.js`: Integrates Google's Gemini AI, likely used for match predictions, natural language insights, or dynamic commentary[cite: 1].
    *   `weather.js`: Fetches real-time or historical weather data to factor into match analysis or simulations[cite: 1].
*   **`/src/state/`**: Manages the global application state (`store.js`)[cite: 1].
*   **`/src/ui/`**: Manages the frontend presentation layer[cite: 1].
    *   `dom.js` & `components.js`: Reusable UI elements and DOM rendering logic[cite: 1].

## 4. Primary Features & Views
The routing (`src/router.js`) navigates between several distinct views located in the `/src/ui/views/` directory[cite: 1]:
*   **Teams View (`teams.js`)**: Displays individual team profiles, rosters, and historical data[cite: 1].
*   **Groups View (`groups.js`)**: Tracks group stage standings, points, goal differentials, and qualifications[cite: 1].
*   **Knockout View (`knockout.js`)**: A visual bracket system for the elimination rounds (Round of 16 through the Final)[cite: 1].
*   **Stats View (`stats.js`)**: Leaderboards for top scorers, assists, and team performance metrics[cite: 1].
*   **Simulator View (`simulator.js`)**: The core interactive feature allowing users to run match or tournament predictions, potentially utilizing the AI (`gemini.js`) and environmental factors (`weather.js`) to influence outcomes[cite: 1].

## 5. Development Steps (For AI Agent)
1.  **Initialization:** Scaffold the Vite project and establish the `index.html` entry point and main CSS[cite: 1].
2.  **Data Layer:** Parse and load the initial state from `teams.json`, `matches.json`, and `venues.json` into the `store.js`[cite: 1].
3.  **UI Framework:** Build the basic routing mechanism (`router.js`) and DOM rendering utilities (`dom.js`, `components.js`)[cite: 1].
4.  **View Construction:** Implement the passive views first (`teams.js`, `groups.js`, `knockout.js`, `stats.js`)[cite: 1].
5.  **Service Integration:** Wire up external APIs (`espn.js`, `weather.js`, `gemini.js`) to enrich the application state[cite: 1].
6.  **Simulation Engine:** Construct the logic for `simulator.js`, drawing upon current state, historical stats, and API insights to generate outcomes[cite: 1].