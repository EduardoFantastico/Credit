import asyncio
import websockets

async def server(websocket, path):
    while True:
        await websocket.send("Server ist noch online.")
        await asyncio.sleep(5)  # Warte 5 Sekunden

start_server = websockets.serve(server, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()