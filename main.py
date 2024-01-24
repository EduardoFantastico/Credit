import asyncio
import websockets
import sqlite3
import json

conn = sqlite3.connect('users.db')

c = conn.cursor()

c.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='users'")
if c.fetchone() is None:
    # Tabelle erstellen
    c.execute('''
        CREATE TABLE users
        (id INTEGER PRIMARY KEY AUTOINCREMENT,
        gender TEXT,
        firstName TEXT,
        lastName TEXT,
        dob TEXT,
        email TEXT,
        username TEXT,
        password TEXT)
    ''')

conn.commit()
conn.close()    

def register(gender, firstName, lastName, dob, email, username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    c.execute("INSERT INTO users (gender, firstName, lastName, dob, email, username, password) VALUES (?, ?, ?, ?, ?, ?, ?)", (gender, firstName, lastName, dob, email, username, password))

    conn.commit()
    conn.close()

def login(username, password):
    conn = sqlite3.connect('users.db')
    c = conn.cursor()

    c.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    user = c.fetchone()

    conn.close()

    return user is not None


usernames = {}

connections = {}

connected = set()

async def echo(websocket, path):
    connected.add(websocket)
    try:
        async for message in websocket:
            data = json.loads(message)
            if data['type'] == 'register':
                register(data['gender'], data['firstName'], data['lastName'], data['dob'], data['email'], data['username'], data['password'])
                await websocket.send(json.dumps({'message': 'Account erstellt: ' + data['username'], 'sessionID': data.get('sessionID')}))
            elif data['type'] == 'login':
                username = data['username']
                password = data['password']
                if login(username, password):
                    await websocket.send(json.dumps({'message': 'Erfolgreich angemeldet als: ' + username, 'sessionID': data.get('sessionID')}))
                else:
                    await websocket.send(json.dumps({'message': 'Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihren Benutzernamen und Ihr Passwort.', 'sessionID': data.get('sessionID')}))
            elif data['type'] == 'listAccounts':
                conn = sqlite3.connect('users.db')
                c = conn.cursor()
                c.execute("SELECT id, gender, firstName, lastName, dob, email, username, password FROM users")
                accounts = c.fetchall()
                conn.close()
                account_list = ', '.join(['ID: ' + str(account[0]) + ', Geschlecht: ' + account[1] + ', Vorname: ' + account[2] + ', Nachname: ' + account[3] + ', Geburtsdatum: ' + account[4] + ', Email: ' + account[5] + ', Benutzername: ' + account[6] + ', Passwort: ' + account[7] for account in accounts])
                await websocket.send(json.dumps({'message': 'Liste aller Accounts: ' + account_list, 'sessionID': data.get('sessionID')}))
            elif data['type'] == 'removeAccounts':
                conn = sqlite3.connect('users.db')
                c = conn.cursor()
                c.execute("DELETE FROM users")
                # AUTOINCREMENT zurücksetzen
                c.execute("DELETE FROM sqlite_sequence WHERE name='users'")
                conn.commit()
                conn.close()
                await websocket.send(json.dumps({'message': 'Alle Accounts wurden entfernt.', 'sessionID': data.get('sessionID')}))
    finally:
        # Client entfernen
        connected.remove(websocket)



start_server = websockets.serve(echo, "localhost", 8765)

print("WebSocket-Server läuft auf ws://localhost:8765")
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
