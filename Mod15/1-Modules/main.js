// import { message, company, user, Person } from "./library.js";
// Import Every exported statements
import * as data from "./library.js";

// Import the default one
import important from "./library.js";

console.log(data.message);
console.log(data.company);

console.log(data.user("pankaj"));
console.log(data.user("Baker"));

let pankaj = new data.Person("Pankaj", 40);
pankaj.dispData();

let bakri = new data.Person("Bakri", 35);
bakri.dispData();

console.log(important());
