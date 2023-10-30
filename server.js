const WebSocket = require('ws');
const wss = new WebSocket.Server({ noServer: true });
const express = require('express');
const app = express();
const port = 3000; // Your Express server port

// WebSocket server logic
wss.on('connection', (ws) => {
    console.log('WebSocket connection established');

    ws.on('message', (message) => {
        // Process the incoming audio data, e.g., decode base64
        console.log(message)
        // Replay the audio back by sending it to the same WebSocket connection
        ws.send(message); // Assuming message contains the raw audio data
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
    });
});

// Start Express server
const server = app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});

// Add WebSocket server to the Express server
server.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit('connection', ws, request);
    });
});
