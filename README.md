# ⚽ WM 2026 Match Simulator

KI-gestützter Spielanalyse-Tool für die FIFA Fußball-Weltmeisterschaft 2026 in den USA, Kanada und Mexiko.

![Tech](https://img.shields.io/badge/Stack-HTML%20%2B%20JS%20%2B%20Tailwind-blue)
![API](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-red)
![Weather](https://img.shields.io/badge/Wetter-Open--Meteo-green)

## Features

- **72 echte Gruppenspiele** mit offiziellen Daten (Gruppen, Venues, Anstoßzeiten, Ergebnisse)
- **Automatisches Wetter** via Open-Meteo API basierend auf Stadion-GPS-Koordinaten
- **KI-Spielberichte** für bereits gespielte Partien (mit Torschützen, Taktik-Analyse, Atmosphäre)
- **KI-Spielprognosen** für kommende Partien (Kader, Wettquoten, Aufstellungen, Ergebnis-Tipp)
- **Automatische Gruppentabelle** berechnet aus den hinterlegten Ergebnissen
- Responsive Design (Mobile + Desktop)

## Voraussetzungen

- Ein **Google Gemini API-Key** — kostenlos unter [aistudio.google.com](https://aistudio.google.com/apikey)
- Ein **GitHub-Account** (für Vercel-Deployment)
- Ein **Vercel-Account** (kostenlos) — [vercel.com/signup](https://vercel.com/signup)

## Lokale Nutzung

```bash
# Repository klonen / Dateien herunterladen
cd /pfad/zum/projekt

# Beliebigen HTTP-Server starten
python3 -m http.server 8888
# oder
npx serve .

# Öffne http://localhost:8888
```

## Deployment auf Vercel (kostenlos)

### Schritt 1: GitHub-Repository erstellen

```bash
cd /pfad/zum/projekt

# Git initialisieren
git init
git add .
git commit -m "WM 2026 Match Simulator"

# Auf GitHub pushen (vorher ein leeres Repo auf github.com erstellen)
git remote add origin https://github.com/DEIN-USERNAME/wm2026-simulator.git
git branch -M main
git push -u origin main
```

### Schritt 2: Mit Vercel verbinden

1. Gehe zu [vercel.com](https://vercel.com) und logge dich mit deinem GitHub-Account ein
2. Klicke auf **„Add New…" → „Project"**
3. Wähle dein `wm2026-simulator` Repository aus
4. **Framework Preset:** `Other` (keine Änderung nötig)
5. **Build Command:** leer lassen (nicht nötig)
6. **Output Directory:** leer lassen (`.` wird automatisch erkannt)
7. Klicke **„Deploy"**

Das war's! Vercel gibt dir eine URL wie `https://wm2026-simulator.vercel.app`.

### Schritt 3: Updates deployen

Jede Änderung, die du auf `main` pushst, wird automatisch deployed:

```bash
git add .
git commit -m "Ergebnisse aktualisiert"
git push
```

## Ergebnisse aktualisieren

Die Spielergebnisse sind in [`app.js`](app.js) im `MATCHES`-Array hinterlegt. Um ein neues Ergebnis einzutragen:

1. Finde das Spiel im Array (sortiert nach `id`)
2. Füge `hs` (Heim-Tore) und `as` (Auswärts-Tore) hinzu:

```js
// Vorher (anstehend):
{ id: 33, g: 'F', md: 2, date: '2026-06-20', time: '13:00', h: 'Niederlande', a: 'Schweden', v: 'HOU' },

// Nachher (gespielt):
{ id: 33, g: 'F', md: 2, date: '2026-06-20', time: '13:00', h: 'Niederlande', a: 'Schweden', v: 'HOU', hs: 3, as: 1 },
```

3. `git push` — Vercel deployed automatisch.

## API-Key Sicherheit

> **Hinweis:** Der Gemini API-Key ist in `app.js` hartcodiert. Das ist sicher genug für den persönlichen Gebrauch.  
> Falls du die App öffentlich teilen willst, ersetze den Key durch ein Eingabefeld oder nutze einen Backend-Proxy (z.B. Vercel Serverless Functions).

## Projektstruktur

```
.
├── index.html      # UI mit Tailwind CSS
├── app.js          # Logik, Match-Daten, API-Calls
├── vercel.json     # Vercel-Konfiguration
├── .gitignore      # Git-Ausschlüsse
└── README.md       # Diese Datei
```

## Tech-Stack

| Komponente | Technologie |
|---|---|
| Frontend | HTML5, Vanilla JavaScript |
| Styling | Tailwind CSS (CDN) |
| KI | Google Gemini 2.0 Flash |
| Wetter | Open-Meteo API (kostenlos, kein Key) |
| Hosting | Vercel (kostenlos) |
| Fonts | Google Fonts (Inter, Outfit) |
| Markdown | marked.js |
