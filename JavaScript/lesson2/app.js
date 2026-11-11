// let str = "Bugun yaxshi kun va Dushanba kuni";
// console.log(str.length) // 33 bu satrning uzunligini beradi
// console.log(str[13]) // 13-chi indexdagi harfni chiqaradi
// console.log(str.slice(0, 13)) // 0 dan 13 indexgacha bo'lgan harflarni chiqaradi
// console.log(str.substring(0, 13)) // 0 dan 13 indexgacha bo'lgan harflarni chiqaradi
// let str2 = "sog' bo'l"
// console.log(str2.toUpperCase()) // barcha harflarni katta harfga o'zgartiradi
// console.log(str2.toLowerCase()) // barcha harflarni kichik harfga o'zgartiradi
// console.log(str2.charAt(3)) // 3-chi indexdagi harfni chiqaradi
// console.log(str2.indexOf('o')) // satrda 'o' harfi nechanchi indexda ekanligini chiqaradi
// let str3 = "time"
// console.log(str3.repeat(5)) // satrni 5 marta takrorlaydi
// console.log(str3.replace('t', 'T')) // satrdagi birinchi 't' harfini 'T' harfiga o'zgartiradi
// console.log(str3.replaceAll('t', 'T')) // satrdagi barcha 't' harflarini 'T' harfiga o'zgartiradi
// let str4 = "Qish yaqinlashmoqda"
// console.log(str4.includes('yaqin')) // satrda 'yaqin' so'zi bor yoki yo'qligini tekshiradi
// console.log(str4.startsWith('Qish')) // satr 'Qish' bilan boshlanadimi tekshiradi
// console.log(str4.endsWith('moqda')) // satr 'moqda' bilan tugaydimi tekshiradi

// let str5 = "Example"
 
// //qirqib olish

// console.log(str5.slice(2,5)) // 2-chi indexdan 5-chi indexgacha bo'lgan harflarni chiqaradi
// console.log(str5.slice(-4)) // oxirgi 4 ta harfni chiqaradi
// console.log(str5.substring(2,5)) // 2-chi indexdan 5-chi indexgacha bo'lgan harflarni chiqaradi
// let str6 = "Biror narsani qidirish"
// console.log(str6.substring(6,11)) // 6-chi indexdan boshlab 11 ta harfni chiqaradi

// let str7 = "Anvar aka va Anvar aka"
// console.log(str7.replace('Anvar', 'Sarvar')) // satrdagi birinchi 'Anvar' so'zini 'Sarvar' so'ziga o'zgartiradi
// console.log(str7.replaceAll('Anvar', 'Sarvar')) // satrdagi barcha 'Anvar' so'zlarni 'Sarvar' so'ziga o'zgartiradi
// ------------------------------------------------------------------------
// Sizga tekst beriladi agar text 40 ta belgidan katta bo'lsa 40 ta belgidan keyingi belgilarni kesib tashlang va oxiriga "..." qo'shing. Agar text 40 ta belgidan kichik bo'lsa textni o'zgartirmang.

let text = "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
if (text.length > 40) {
    text = text.slice(0, 40) + "...";
}
console.log(text);
//? : 
console.log(text.length > 40 ? text.slice(0, 40) + "..." : text);

let str9 = "Menda example qolmadi";
console.log(str9.startsWith("Menda")); // satr 'Menda' bilan boshlanadimi tekshiradi
console.log(str9.endsWith("qolmadi")); // satr 'qolmadi' bilan tugaydimi tekshiradi
console.log(str9.trim()); // satrning boshidagi va oxiridagi bo'sh joylarni olib tashlaydi

let str10 = "55";
console.log(str10.padEnd(5,"*")); // satrni 50 ta belgiga to'ldiradi va boshiga '*' qo'shadi
console.log(str10.padStart(7,"#")); // satrni 50 ta belgiga to'ldiradi va oxiriga '*' qo'shadi


// uy vazifa:
// o'tilgan darslardan 5 ta savol boshqa papakaga ham kirish mumkin
let savol1 = "1. String nima?";
let savol2 = "2. Stringning uzunligini qanday aniqlash mumkin?";
let savol3 = "3. Stringni kesib olish uchun qaysi metodlardan foydalanish mumkin?";
let savol4 = "4. Stringdagi harflarni katta yoki kichik harfga o'zgartirish uchun qaysi metodlardan foydalanish mumkin?";
let savol5 = "5. Stringda ma'lum bir so'zni qidirish uchun qaysi metoddan foydalanish mumkin?";

console.log(savol1);
console.log(savol2);
console.log(savol3);
console.log(savol4);
console.log(savol5);


// o'tilgan string metodlari:
// 1. length - satrning uzunligini aniqlash uchun ishlatiladi.
// 2. slice() - satrni kesib olish uchun ishlatiladi. bunda - son ishlatsa bo'ladi va oxiridan kesib olish mumkin.
// 3. substring() - satrni kesib olish uchun ishlatiladi. bunda - son ishlatilmaydi va oxiridan kesib olish mumkin emas.
// 4. toUpperCase() - satrdagi barcha harflarni katta harfga o'zgartiradi.
// 5. toLowerCase() - satrdagi barcha harflarni kichik harfga o'zgartiradi.
// 6. charAt() - satrdagi ma'lum bir indexdagi harfni chiqaradi.
// 7. indexOf() - satrda ma'lum bir harf yoki so'zning nechanchi indexda ekanligini aniqlash uchun ishlatiladi.
// 8. repeat() - satrni takrorlash uchun ishlatiladi.
// 9. replace() - satrdagi birinchi ma'lum bir harf yoki so'zni boshqa harf yoki so'zga o'zgartirish uchun ishlatiladi.
// 10. replaceAll() - satrdagi barcha ma'lum bir harf yoki so'zlarni boshqa harf yoki so'zga o'zgartirish uchun ishlatiladi.
// 11. includes() - satrda ma'lum bir harf yoki so'z bor yoki yo'qligini tekshirish uchun ishlatiladi.
// 12. startsWith() - satr ma'lum bir harf yoki so'z bilan boshlanadimi tekshirish uchun ishlatiladi.
// 13. endsWith() - satr ma'lum bir harf yoki so'z bilan tugaydimi tekshirish uchun ishlatiladi.
// 14. padEnd() - satrni ma'lum bir uzunlikka to'ldirish uchun ishlatiladi.
// 15. padStart() - satrni ma'lum bir uzunlikka to'ldirish uchun ishlatiladi.   
// 16. trim() - satrning boshidagi va oxiridagi bo'sh joylarni olib tashlash uchun ishlatiladi.