// call back 

function BigFunc(a,b){
    console.log(b);
    a()
}
function smallFunc(){
    console.log("Salom");
}
BigFunc(smallFunc, "Hello World");

// map filter sort every some find ...
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shu array ichidagi har bir elemntni 15% ga oshiring

// map =>  arraylar ichida amal bajaradi
// map bizga yangi array qaytaradi


// const newArr = []
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 1.15);
// }
// console.log(newArr);

const newArr2 = arr.map(item => item * 1.15);
// console.log(newArr2);

arr.map((l,index,mainArr) => console.log("element",l, "index", index, "mainArr", mainArr));


const arr2=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr2.filter(item => item>5));

const arr3 = [5555,65,65,55,54,54,698765,465,798,73,546,878,43,574,987,654,687,64,68,65]
console.log(arr3.sort((a,b)=> a-b))


// some 

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr4.some(item => item > 5));   
console.log(arr4.some(item => typeof item === "string"));

// every
console.log(arr4.every(item => item > 5));   
console.log(arr4.every(item => typeof item === "number"));

// find
const arr5 = [35468,453,465,453,4564,2,456,465,568,6,236,56,56,55,5,65,35,684354,654,654,654,654,654,654,654,654,654,654,654,654,654,654,654,654,654]
console.log(arr5.find(item => item <10000 && item%2 === 0));   


// reduce
const arr6 = [88,565,98,96,53,23,59,89,9,3,32,55,98,96,6,45];
let sum = arr6.reduce((acc, item) => acc + item, 0);
console.log(sum);

