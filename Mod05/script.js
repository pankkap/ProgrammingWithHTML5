const API_URL = "https://jsonplaceholder.typicode.com/users";

function getAPIData(url) {
  return new Promise((resolve, reject) => {
    console.log("Wait for sometime");
    setTimeout(function () {
      let request = new XMLHttpRequest();
      request.open("GET", url);
      request.send();
      request.onload = () => {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject("Can not load the data");
        }
      };
    }, 2000);
  });
}

getAPIData(API_URL)
  .then((response) => {
    displayAPIData(JSON.parse(response));
  })
  .catch((err) => alert(err));

function displayAPIData(serverData) {
  //   console.log("Data is display in function");
  //   console.log(serverData[0].id);

  for (let user of serverData) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");

    td1.innerHTML = `${user.id}`;
    td2.innerHTML = `${user.name}`;
    td3.innerHTML = `${user.username}`;
    td4.innerHTML = `${user.email}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("myTable").appendChild(tr);
  }
}
