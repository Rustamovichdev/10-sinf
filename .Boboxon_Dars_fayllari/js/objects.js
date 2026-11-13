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
let obj5 = {
    username: "Shohrux",
    age: 20
}

console.log(obj4===obj5);


// copy tushunchasi
const player = {
    username: "boboxon",
    lastname: "Jumaboyev",
    age: 16,
    email: "boboxonjumaboyev2010@gmail.com",
    adress: {
        city: "Xonqa",
        Street: "Hamfikr",
        Homenumber: 3
    }
}

const player2 = Object.assign({}, player)
player2.adress.city = "Urganch"
console.log(player.adress.city);
console.log(player2.adress.city);

// deep copy
const player3 = JSON.parse(JSON.stringify(player))
player3.adress.city = "Xiva"
console.log(player.adress.city);
console.log(player3.adress.city);





// ___________________________________________________________________________________________________________________________________________

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
// users ichidan eng katta point egalarini toping
// users ichidan eng katta yoshli userni toping
// users skills ichida JavaScript react Node borlarini toping

maxPoints = 0;
maxUser = "";
for (const user in users) {
  if (users[user].points > maxPoints) {
    maxPoints = users[user].points;
    maxUser = user;
  }
}
console.log(`Eng katta point egasi: ${maxUser} - ${maxPoints} point`);

maxAge = 0;
oldestUser = "";
for (const user in users) {
  if (users[user].age > maxAge) {
    maxAge = users[user].age;
    oldestUser = user;
  }
}
console.log(`Eng katta yoshli user: ${oldestUser} - ${maxAge} yosh`);

usersWithSkills = [];
for (const user in users) {
  if (users[user].skills.includes('JavaScript') && users[user].skills.includes('React') && users[user].skills.includes('Node')) {
    usersWithSkills.push(user);
  }
}
console.log(`JavaScript, React va Node skillsga ega userlar: ${usersWithSkills.join(', ')}`);
