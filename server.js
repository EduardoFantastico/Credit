const express = require('express');
const app = express();
const path = require('path');

// Loggen, wenn ein neuer Benutzer die Hauptseite besucht
app.get('/', (req, res) => {
  console.log('Ein neuer Benutzer hat die Hauptseite besucht.');
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Pfad zu Ihren statischen Dateien (z.B. HTML, CSS, JS)
const staticPath = __dirname;

app.use(express.static(staticPath));

app.listen(80, () => {
  console.log('Server läuft auf http://localhost:80');
});
