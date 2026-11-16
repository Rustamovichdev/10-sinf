// // set time out

// setTimeout(function() {
//     console.log('Hello, World!');
// }, 1000);


// console.log("Shohruh")


// promise 
// callback
// setInterval(function() {
//     for (let i = 1; i >0; i++) {
//         console.log(i);
    // }
// }, 1000);

// Sekundomer yasash
// setInterval(function() {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     console.log(`${hours}:${minutes}:${seconds}`);
// }, 1000);
let internet = true;

const promise = new Promise((resolve, reject) => {
    if (internet) {
        resolve("Internet mavjud");
    }else{
        reject("Internet mavjud emas");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.log(error);
});

async function Javob() {
    console.log("Javob kutilyapti...");
    try {
        const message = await promise;
        console.log(message);
    } catch (error) {
        console.log(error);
    }
    
}
