
let first = document.getElementById("number1");
let second = document.getElementById("number2");
let output = document.getElementById("output");

const myWorker = new SharedWorker("sharedWorker.js");

first.onchange = function () {
  myWorker.port.postMessage([parseInt(first.value), parseInt(second.value)]);
  console.log("Message posted to worker to start the work");
};
second.onchange = function () {
  myWorker.port.postMessage([parseInt(first.value), parseInt(second.value)]);
  console.log("Message posted to worker to start the work");
};

myWorker.port.onmessage = function (e) {
  output.innerHTML = e.data;
  console.log("Message Recieved from worker");
};
