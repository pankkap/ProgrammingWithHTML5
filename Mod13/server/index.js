const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 });

wss.on("connection", (ws) => {
  console.log("New Client Connectted...!!");

  ws.on("message", (data) => {
    console.log(`Data Recieved from Client: ${data} `);
    ws.send("Thank you for your Message..!! How may help");
  });

  ws.on("close", () => {
    console.log("Clent Diconnected...!!");
  });
});
