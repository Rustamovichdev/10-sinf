const arr =[65,95,65,625,65,98,985,567,98,54,654,987,897,65,4856,7];

const sum = arr
  .filter(num => Number.isInteger(num) && Math.abs(num).toString().length === 2)
  .reduce((acc, curr) => acc + curr, 0);

console.log(sum); 
