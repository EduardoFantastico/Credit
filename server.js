const express = require('express');
const app = express();
const path = require('path');

// Pfad zu Ihren statischen Dateien (z.B. HTML, CSS, JS)
const staticPath = __dirname;

app.use(express.static(staticPath));

app.listen(80, () => {
  console.log('Server läuft auf http://localhost:80');
});
