export default function(){
    console.log("This is an Important Function ");
}

let message = "Hello Friends";
let myName = "Pankaj";
let company = "Koenig Solutions Pvt Ltd.";

function user(user)
{
    return `hello ${user}`
}

class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age
    }
    dispData(){
        console.log('My Details: ' + this.name + ' '+ this.age);
    }
}



export { message, company, user, Person };
