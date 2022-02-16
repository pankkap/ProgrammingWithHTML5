onmessage = function (e) {
  console.log("Message Recieved..!! we are going to start the work");
  const result = e.data[0] + e.data[1];

  this.postMessage(`Result: ${result}`);
};
