// Modul med alt server-oppsettet som ikke endres i programmet
const { app, server, port, db} = require("./server");
// Modul for å håndtere fil- og katalogstier
const path = require("path");


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "view", "index.html"));
});





/*
  API-endepunkt for å hente alle land og hovedsteder.
*/
app.get("/api/land", (req, res) => {
    const sql = "SELECT * FROM country_capitals";
    db.all(sql, [], (err, rows) => {
        if (err) {
            console.error("Feil ved henting av land og hovedsteder:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Start serveren og lytt på angitt port
server.listen(port, () => {
    console.log(`Serveren kjører på http://localhost:${port}`);
});
