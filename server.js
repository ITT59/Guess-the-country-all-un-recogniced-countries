// Importer nødvendige moduler
const express = require("express"); // Web framework for Node.js
const path = require("path"); // Hjelpemiddel for fil- og katalogstier
const http = require("http"); // Node.js-modul for å opprette HTTP-server
const sqlite3 = require("sqlite3").verbose(); // SQLite3-modul med ekstra feilmeldinger

// --- Opprett Express-applikasjonen ---
const app = express();

// --- Definer port og opprett HTTP-serveren ---
const port = 3000;
const server = http.createServer(app);

// --- Sett opp statiske filer fra "public"-mappen ---
app.use(express.static(path.join(__dirname, "public")));

// --- Middleware-konfigurasjon ---
// Parse JSON-data og URL-kodet data fra klienten
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Databasekobling og opprettelse av nødvendige tabeller ---
// Opprett forbindelse til SQLite-databasen "chatDatabase.db"
const db = new sqlite3.Database("land_hovedstad.db", (err) => {
    if (err) {
        console.error("Feil ved åpning av database:", err.message);
    } else {
        console.log("Koblet til land_hovedstad.db.");
    }
});

// --- Eksporter viktige variabler for bruk i app.js ---
// App.js (elevenes fil) importerer nå app, server, port, db, isAuthenticated og bcrypt
module.exports = { app, server, port, db};
