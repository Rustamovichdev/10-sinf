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

async function getProducts() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);

    
}
getProducts()
async function postProducts() {
    const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "iPhone 13",
            description: "An apple mobile which is nothing like apple",
            price: 999,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            
            
            
        })
    });
    const data = await res.json();
    console.log(data);
}
postProducts()
