// // function

// // Decloration
// // Expration
// // Arrow
// // Self (IIFE)
// // ...


// // Declaration
// function sum(a,b){   // Parameter
//     let c= 56
//     return a+b

// }

// console.log(sum(32,56))  // Argument
// console.log(sum(3,6))  // Argument


// // expration
// let r= function(str){
//     return str.length > 40 ? str.slice(0,40) + "..." : str;

// }

// console.log(r("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."))


// // Arrow   ES6 

// let y= () => {
//     return "Salom"

// }


// console.log(y());


// // IIFE (Immediately Invoked Function Expression)  self function o'z o'zini chaqiradi

// (function (){
//     console.log("IIFE")

// })();


// // Scope
// // Hoisting
// // TDZ (Temporal Dead Zone)
// // ...




// // local 
// // global

// let rg = 68;

// // local => block scope, function scope

// if (true){
//     let g= 123;
//     console.log(g+rg);

// }
// // console.log(rg+g);  // error g is not defined


// // let  const

// let as= "salom";
// as= "hello";
// const tt=67;
// var ui = 90;
// if (true){
//     var ui = 100;
// }
// console.log(ui);  // 100

// function a(){
//     var yy=345;
//     yy=globalThis.yy;

// }

// console.log(globalThis.yy);  // undefined


// var r1= 67;
// // hoisting bu o'zgaruvchilarni va funksiyalarni kodning yuqorisiga ko'taradi. Faqat var bilan e'lon qilingan o'zgaruvchilar hoisting qilinadi, let va const bilan e'lon qilingan o'zgaruvchilar esa hoisting qilinmaydi.
// console.log(r1)
// //TDZ

// console.log(b()) 
// function b(){
//     return "salom hammaga"
// }


// console.log(b()) 
// const def= function c(){
//     return "salom hammaga"
// }



// // task 1

// // mini colculator

// // num1 amal num2

// function calculator(num1, amal, num2,amal2,num3){
//     if (amal === "+" && amal2 === "+"){
//         return num1 + num2 + num3;
//     }
//     else if (amal === "+" && amal2 === "-"){
//         return num1 + num2 - num3;
//     }
//     else if (amal === "+" && amal2 === "*"){
//         return num1 + num2 * num3;
//     }
//     else if (amal === "+" && amal2 === "/"){
//         return num1 + num2 / num3;
//     }
//     else if (amal === "-" && amal2 === "+"){
//         return num1 - num2 + num3;
//     }
//     else if (amal === "-" && amal2 === "-"){
//         return num1 - num2 - num3;
//     }
//     else if (amal === "-" && amal2 === "*"){
//         return num1 - num2 * num3;
//     }
//     else if (amal === "-" && amal2 === "/"){
//         return num1 - num2 / num3;
//     }
//     else if (amal === "*" && amal2 === "+"){
//         return num1 * num2 + num3;
//     }
//     else if (amal === "*" && amal2 === "-"){
//         return num1 * num2 - num3;
//     }
//     else if (amal === "*" && amal2 === "*"){
//         return num1 * num2 * num3;
//     }
//     else if (amal === "*" && amal2 === "/"){
//         return num1 * num2 / num3;
//     }
//     else if (amal === "/" && amal2 === "+"){
//         return num1 / num2 + num3;
//     }
//     else if (amal === "/" && amal2 === "-"){
//         return num1 / num2 - num3;
//     }
//     else if (amal === "/" && amal2 === "*"){
//         return num1 / num2 * num3;
//     }
//     else if (amal === "/" && amal2 === "/"){
//         return num1 / num2 / num3;
//     }
//     else if (amal === "^"){
//         return Math.pow(num1, num2);
//     }
//     else{
//         return "Invalid operation";
//     }
// }

// console.log(calculator(5, "+", 2, "+", 10));
// console.log(calculator(5, "-", 2, "*", 10));
// console.log(calculator(5, "*", 2, "/", 10));
// console.log(calculator(5, "/", 2, "-", 10));
// console.log(calculator(5, "^", 2, "+", 10));
// console.log(calculator(5, "+", 2, "-", 10));
// console.log(calculator(5, "-", 2, "+", 10));
// console.log(calculator(5, "*", 2, "+", 10));
// console.log(calculator(5, "/", 2, "*", 10));
// console.log(calculator(5, "+", 2, "/", 10));
// console.log(calculator(5, "-", 2, "/", 10));
// console.log(calculator(5, "*", 2, "-", 10));
// console.log(calculator(5, "/", 2, "+", 10));
// console.log(calculator(5, "^", 2, "-", 10));
// console.log(calculator(5, "^", 2, "*", 10));
// console.log(calculator(5, "^", 2, "/", 10));
// console.log(calculator(5, "^", 2, "^", 10));
// console.log(calculator(5, "^", 2, "+", 10));
// console.log(calculator(5, "^", 2, "-", 10));
// console.log(calculator(5, "^", 2, "*", 10));
// console.log(calculator(5, "^", 2, "/", 10));
// console.log(calculator(5, "^", 2, "^", 10));

k=0
function counter(ism){
    let unli = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < ism.length; i++) {
        if (unli.includes(ism[i])) {
            k++;
        }
    }
    return k;
}

console.log(counter("Mohiniso"))  