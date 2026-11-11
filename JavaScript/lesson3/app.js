// // trim
// let str="       salom"
// console.log(str) //oddiy holatda satrni chiqaradi
// console.log(str.trim()) // satrning boshidagi va oxiridagi bo'sh joylarni olib tashlaydi

// // indexOf
// let str2 = "Xurshida 10-sinf";
// console.log(str2.indexOf("s")); // "dunyo" so'zi nechanchi indexda ekanini aniqlaydi

// charAt() - satrdagi ma'lum bir indexdagi harfni chiqaradi.
// charCodeAt() - satrdagi ma'lum bir indexdagi harfni chiqaradi.
// console.log(str2.charAt(0)); // satrdagi 0-indexdagi harfni chiqaradi
// console.log(str2.charCodeAt(0)); // satrdagi 0-indexdagi harfni chiqaradi va unicode qiymatini chiqaradi
// console.log(str2.charCodeAt(5)); // satrdagi 5-indexdagi harfni  ASCII unicode qiymatini chiqaradi
// // ikkilikga o'tkazish
// let a="j"
// console.log(a.charCodeAt(0).toString(2)); // satrdagi 0-indexdagi harfni chiqaradi va unicode qiymatini chiqaradi va uni ikkilikka o'tkazadi

// let arr=[5,4,8,51,554,874,56,46847,84,54687,454,867,84,True,False,"salom",null,undefined]
// console.log(arr.length)


let str5="Example"
// console.log(str5.split("")) // satrni bo'sh joy bo'yicha ajratadi va arrayga joylaydi

console.log(str5.split("a")) // satrni 'a' bo'yicha ajratadi va arrayga joylaydi