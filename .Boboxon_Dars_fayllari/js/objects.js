const obj = {
    username: "boboxon",
    email: "boboxonjumaboyev2010@gmail.com",
    age: 20
}
const user = {
    firstName: "Boboxon",
    lastName: "Jumaboyev",
    age: 16,
    email: "boboxonjumaboyev2010@gmail.com",
    skills: ["HTML", "CSS", "JavaScript", "Python", "C++"],
    points: 100,
    HomeAdress: "Xorazm viloyati, Urganch shahar, 1-mavze",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}


// objectlarni yaratish 
const obj2={}
const obj3=new Object()




user.age=17
console.log(user.lastName);
console.log(user["age"]);
console.log(user.skills);
console.log(user.fullName());

delete user["HomeAdress"]




// copy 

let num = 90;
let num1 = 90;
 console.log(num===num1);

let obj4 = {
    username: "Shohrux",
    age: 20
}
