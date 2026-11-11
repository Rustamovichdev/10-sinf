// sum
let arr= [1,2,3,4,5,6,7,8,9,10]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log("Sum:", sum);


// Berilgan string ichida eng ko‘p uchraydigan belgi va uning uchrash sonini qaytaring.

// Kiritish: "abacabad"

// Chiqish: "a: 4"

let str = "abacabad";
let belgilar = {};
for (let i=0; i<str.length; i++){
    let belgi = str[i];
    if (belgilar[belgi]){
        belgilar[belgi]++
    }else{
        belgilar[belgi] = 1;

    }

}

console.log(belgilar)