const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getAPIData(url) {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log("Unable to get the data");
  }
}

async function displayAPIData() {
  let serverData = await getAPIData(API_URL);
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

displayAPIData();
