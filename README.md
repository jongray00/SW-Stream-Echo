# WebSocket Audio Echo Server with SignalWire

This application demonstrates how to create a WebSocket server that receives audio data over a WebSocket connection and echoes it back to the same stream. Additionally, it provides instructions on setting up an inbound XML bin in SignalWire to use this WebSocket server.

## Prerequisites

- Node.js installed on your machine.
- A SignalWire account with access to the SignalWire Dashboard.

## Setting Up the Inbound XML Bin

1. Log in to your SignalWire Dashboard.

2. In the Dashboard, go to **Laml > Bins**. And paste the bin/ save

3. Choose a phone number that you want to configure for the inbound audio stream. Replace the URL with the URL of your WebSocket server.

4. In the "Voice & Messaging" section, configure the "A Call Comes In" option to use an Inbound XML bin.
5. Run your server on server.js


   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <Response>
     <Connect>
         <Stream url="wss://your-public-url-here" />
     </Connect>
   </Response>
   ```

## Running the WebSocket Audio Echo Server
Clone this repository to your local machine.

Install the required dependencies:
```npm install```

Open the server code (server.js) in your preferred code editor.

Update the WebSocket server to listen on the desired port (e.g., 8080).

Start the WebSocket server:

```node server.js```

The server is now running and listening for WebSocket connections.