# activeContext.md — WM Analyse: Current State & Development Tasks

## Current Application State

### Tech Stack
- **Build Tool:** Vite (vanilla JavaScript, no framework)
- **Styling:** CSS + PostCSS with a dark-themed design system (Tailwind-like utility classes)
- **Deployment:** Vercel
- **Dependencies:** `marked` (Markdown rendering), Gemini AI API, ESPN API, Weather API

### Architecture Overview
The app follows a **modular vanilla JS architecture** with a custom hash-based router and a global state store. No framework dependencies — all DOM manipulation and state management is hand-rolled.

### Data Flow
1. **Static data** (`src/data/teams.json`, `matches.json`, `venues.json`) is imported directly into `src/state/store.js` at module load time.
2. **Live data** is fetched from the ESPN API on init via `store.loadLiveData()` and merged into the local match objects.
3. **Persistent state** (`apiKey`, KO bracket results, completed match scores) is saved to `localStorage`.
4. **Views** read from the store and render into `#app-content`. Each view returns a `{ destroy() }` object for cleanup.

### Routing
- Hash-based (`#/simulator`, `#/gruppen`, `#/teams/:name`, `#/ko-runde`, `#/statistiken`)
- Router supports a `param` extraction (used by Teams view for team detail navigation)
- Tab navigation via `[data-tab]` attributes

### State Store (`src/state/store.js`)
- Holds: `teams`, `matches`, `venues`, `apiKey`, `liveMatches`, `liveDataLoaded`, `liveDataError`
- Key methods: `loadLiveData()`, `refreshLiveData()`, `getGroupStandings(groupId)`, `getThirdPlaceRanking()`, `saveMatchResult()`, `persistMatches()`, `hasLiveMatch()`, `getMatchDetails()`, `setApiKey()`
- Groups are hardcoded as A–L (12 groups, 48 teams)

### Services
- **ESPN** (`src/services/espn.js`): Fetches live match data (scores, clock, goals, cards, logos)
- **Gemini AI** (`src/services/gemini.js`): Generates match reports, predictions, and tournament analysis
- **Weather** (`src/services/weather.js`): Fetches real-time weather data (used in KO analysis context)

## Existing Views & Routes

| Route | View File | Description |
|---|---|---|
| `#/simulator` | `src/ui/views/simulator.js` | Interactive tournament simulation engine with AI-powered match analysis and predictions for group stage matches |
| `#/gruppen` | `src/ui/views/groups.js` | Group stage standings for all 12 groups + third-place ranking table with qualification status. Clicking a team navigates to its detail view. |
| `#/teams/:param` | `src/ui/views/teams.js` | Individual team profile showing squad roster, coach info, formation, and statistics |
| `#/ko-runde` | `src/ui/views/knockout.js` | Full 48-team bracket: R32 → R16 → QF → SF → 3rd Place → Final. Includes result input modal, cascading downstream result clearing, and AI match analysis/report generation. |
| `#/statistiken` | `src/ui/views/stats.js` | Aggregate tournament statistics (KPI cards, result distribution bar chart, group goal rankings, AI favorites analysis via Gemini). |

### Notable View Behaviors
- **Groups view**: Teams in positions 1–2 get green left-border, position 3 gets gold left-border (third-place qualification chance). Rows are clickable → navigates to team detail.
- **Knockout view**: Supports entering scores for any bracket match. Winners automatically advance. Clearing a result cascades downstream (all dependent matches reset). Includes `runKoAnalysis()` for Gemini-powered match stories/predictions. R32 matchups are hard-coded real-world pairings with date/time/venue metadata.
- **Stats view**: Computes home/win/draw splits, highest-goal match, biggest GD match. Renders per-group goal bars. Has AI favorites analysis button (requires API key).

## Development Tasks

### [x] Task 4: Overhaul prediction prompts for kicktipp optimization ✅ COMPLETED
Rewriting the AI prompt content in both `simulator.js` (`buildPrompt()`) and `knockout.js` (`buildKoPrompt()`) to produce predictions optimized for winning a kicktipp betting game.

**Requirements:**
- The AI must act as a **tippspiel-Experte** focused on winning kicktipp points
- The prompt must include the kicktipp scoring context:
  - 4 points for correct exact score
  - 3 points for correct goal difference
  - 2 points for correct tendency (win/draw/loss)
  - Draws: 4 points for exact score, otherwise 2 points
- For KO matches: predict the **90-minute score** (what gets tipped) AND the **overall result** (after extra time/penalties)
- The prompt must demand a structured output with:
  - Data-driven analysis (form, stats, standings, head-to-head patterns)
  - Sentiment & psychology (pressure, motivation, tournament momentum, underdog factor)
  - Tournament form & context (group situation, qualification scenarios)
  - Weather impact analysis
  - A **clear, prominent final prediction** with exact score
  - Confidence assessment and alternative scenarios
  - Risk-reward analysis (safe vs. bold pick)
- The AI should explicitly reason about which tip maximizes expected kicktipp points
- Both `buildPrompt()` (group stage) and `buildKoPrompt()` (KO stage) must be updated with consistent structure

**Database (data) changes:** None

**API changes:**
- Gemini API receives a longer, more structured prompt — may increase token usage and response time slightly

**UI changes:** None (prompt content only)

**Risks:**
- Longer prompts may increase API costs and response times
- AI may not perfectly optimize for kicktipp scoring — the prompt can guide but not guarantee
- Both prompt functions need to stay in sync structurally

### [x] Task 5: Visually upgrade prediction display ✅ COMPLETED
Enhancing the rendering of AI predictions in both `simulator.js` and `knockout.js` to be more visually appealing and structured.

**Requirements:**
- Replace the current plain `marked.parse(report)` rendering with a richer layout
- Add a **prediction highlight box** at the top of the output showing:
  - Large, prominent score prediction (e.g., "2:1")
  - Confidence indicator (e.g., high/medium/low or percentage)
  - Expected kicktipp points for this prediction
  - For KO matches: show both 90-minute score and overall result
- Structure the remaining content with visual sections:
  - Form & Data analysis
  - Psychology & Sentiment
  - Tactical analysis
  - Weather impact
  - Final prediction summary
- Use existing design system (cards, badges, accent colors, gradients, typography)
- The AI prompt should be updated to output the prediction in a parseable format (e.g., a specific markdown pattern like `**TIPP: 2:1**` or a JSON block) so the UI can extract the score and render it in the highlight box
- Add a fallback: if the score cannot be parsed from the AI response, render the full markdown as before

**Database (data) changes:** None

**API changes:** None

**UI changes:**
- `simulator.js` — replace `sim-report-content` rendering with structured layout + prediction highlight box
- `knockout.js` — replace `ko-analysis-content` rendering with structured layout + prediction highlight box
- Both: add a `parsePrediction()` helper function to extract the score from the AI response
- Both: add a highlight card component showing the extracted prediction
- Styling: use existing design tokens (card, p-5, font-display, text-accent, etc.)

**Risks:**
- AI output format may not always be parseable — need a robust fallback to plain markdown rendering
- More complex rendering logic increases maintenance burden
- The prediction extraction regex/parser needs to handle edge cases (draws, extra time scores, "1:1 n.V.", "4:2 i.E.", etc.)
- Both views need to be updated and kept in sync

## Project Structure Summary

```
wm_analyse/
├── index.html              # Entry point
├── vite.config.js          # Vite build config
├── postcss.config.js       # PostCSS processing
├── vercel.json             # Vercel deployment config
├── package.json            # Dependencies
├── build_squads.py         # Data generation script (team squads)
├── docs/                   # Project documentation
│   ├── projectbrief.md     # Architecture overview
│   ├── architecture.md
│   ├── roadmap.md
│   ├── planner.md, coder.md, reviewer.md
│   └── activeContext.md    # This file
├── activeContext.md        # ← CURRENT FILE
└── src/
    ├── main.js             # App entry: init, routing, settings modal, refresh
    ├── router.js           # Hash-based router with param support
    ├── index.css           # Global styles
    ├── config/
    │   └── settings.js     # App configuration constants
    ├── data/
    │   ├── teams.json      # 48 teams, 12 groups (A–L), squad data
    │   ├── matches.json    # Match schedule & results
    │   └── venues.json     # Stadium info
    ├── services/
    │   ├── espn.js         # ESPN live data integration
    │   ├── gemini.js       # Gemini AI API integration
    │   └── weather.js      # Weather API integration
    ├── state/
    │   └── store.js        # Global state store & business logic
    └── ui/
        ├── dom.js          # DOM utilities
        ├── components.js   # Reusable UI components (e.g. showToast)
        └── views/
            ├── simulator.js   # Simulation engine view
            ├── groups.js      # Group standings view
            ├── teams.js       # Team detail view
            ├── knockout.js    # Full KO bracket view
            └── stats.js       # Statistics & AI analysis view