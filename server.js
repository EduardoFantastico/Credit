const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// Verbindung zur Datenbank herstellen
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yvB&kxH@QS#0',
  database: 'clicker'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Verbindung zur Datenbank erfolgreich hergestellt.');
});

// Route zum Auflisten aller Benutzer
app.get('/listAccounts', (req, res) => {
  let sql = "SELECT * FROM Benutzer";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});

// Route zum Erstellen eines neuen Benutzers
app.post('/register', (req, res) => {
    let { gender, firstName, lastName, dob, email, username, password } = req.body;
  
    // Überprüfen, ob alle Felder ausgefüllt sind
    if (!gender || !firstName || !lastName || !dob || !email || !username || !password) {
      return res.json({ message: 'Bitte füllen Sie alle Felder aus.' });
    }
  
    let data = { Geschlecht: gender, Vorname: firstName, Nachname: lastName, Geburtsdatum: dob, Email: email, Benutzername: username, Passwort: password };
    let sql = "INSERT INTO Benutzer SET ?";
    connection.query(sql, data, (err, results) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          res.json({ message: 'Benutzername bereits vergeben.' });
        } else {
          throw err;
        }
      } else {
        res.json({ message: 'Benutzerkonto erfolgreich erstellt.' });
      }
    });
  });
  
  
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
