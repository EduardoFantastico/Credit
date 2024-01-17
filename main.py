import asyncio
import websockets
import sqlite3
import json

# Verbindung zur SQLite-Datenbank erstellen
conn = sqlite3.connect('users.db')

# Cursor-Objekt erstellen
c = conn.cursor()

# Überprüfen, ob die Tabelle bereits existiert
c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
if c.fetchone() is None:
    # Tabelle erstellen
    c.execute('''
        CREATE TABLE users
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        gender TEXT,
        firstName TEXT,
        lastName TEXT,
        dob DATE,
        email TEXT,
        username TEXT,
        password TEXT)
    ''')

# Änderungen speichern und Verbindung schließen
conn.commit()
conn.close()    

def register(gender, firstName, lastName, dob, email, username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    # Neuen Benutzer hinzufügen
    c.execute("INSERT INTO users (gender, firstName, lastName, dob, email, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)", (gender, firstName, lastName, dob, email, username, password))

    # Daten in der Konsole loggen
    print(f"Neuer Benutzer registriert: Geschlecht={gender}, Vorname={firstName}, Nachname={lastName}, Geburtsdatum={dob}, Email={email}, Benutzername={username}, Passwort={password}")

    conn.commit()
    conn.close()

async def server(websocket, path):
    while True:
        try:
            message = await websocket.recv()
            data = json.loads(message)

            if data['type'] == 'register':
                register(data['gender'], data['firstName'], data['lastName'], data['dob'], data['email'], data['username'], data['password'])
                await websocket.send(json.dumps({"message": "Registrierung erfolgreich."}))
            elif data['type'] == 'removeAccounts':
                conn = sqlite3.connect('users.db')
                c = conn.cursor()
                c.execute("DELETE FROM users")
                conn.commit()
                conn.close()
                await websocket.send(json.dumps({"message": "Alle Accounts wurden entfernt."}))
            elif data['type'] == 'listAccounts':
                conn = sqlite3.connect('users.db')
                c = conn.cursor()
                c.execute("SELECT id, gender, firstName, lastName, dob, email, username, password FROM users")
                accounts = c.fetchall()
                conn.close()
                account_list = ', '.join(['ID: ' + str(account[0]) + ', Geschlecht: ' + account[1] + ', Vorname: ' + account[2] + ', Nachname: ' + account[3] + ', Geburtsdatum: ' + account[4] + ', Email: ' + account[5] + ', Benutzername: ' + account[6] + ', Passwort: ' + account[7] for account in accounts])
                await websocket.send(json.dumps({"message": "Liste aller Accounts: " + account_list}))
        except websockets.exceptions.ConnectionClosedOK:
            print("Verbindung ordnungsgemäß geschlossen")
            break

start_server = websockets.serve(server, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
