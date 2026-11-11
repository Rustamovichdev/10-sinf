// arr

let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // arrning uzunligini aniqlash uchun ishlatiladi.
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

let arr2 = ["apple", "banana", "cherry",4,5,true,false, undefined, null, NaN];
console.log(arr2.includes(typeof(String)))
console.log(arr2.reverse());
console.log(arr2.join(" "));



// task
let username=  "shohruh";
let arr3 = username.split("");
console.log(arr3.reverse().join(""));

// ARRAYLARDA 4 ta asosiy metodlar mavjud: push, pop, shift, unshift
const fruits = ["apple", "banana", "cherry"];
fruits.push("orange"); // array oxiriga element qo'shadi
console.log(fruits);

fruits.pop(); // array oxiridan elementni o'chiradi
console.log(fruits);

fruits.shift(); // array boshidan elementni o'chiradi
console.log(fruits);

fruits.unshift("kiwi"); // array boshiga element qo'shadi
console.log(fruits);    



const arr4 = ["apple", "banana", "cherry"];