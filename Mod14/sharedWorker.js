self.onconnect = function (e) {
  console.log("Message Recieved..!! ");

  var port = e.ports[0];

  port.onmessage = function (e) {
    const result = e.data[0] * e.data[1];

    port.postMessage(`Result: ${result}`);
  };
};
