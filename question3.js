let a = [1, 1];
let evenNo = [];
let oddNo = [];

let n = prompt("Enter length = ");
console.log(n);

for (let i = 0; i < n - 2; i++) {
    var temp = a[i] + a[i + 1];
    a.push(temp);


}

console.log(a);

checkForEvenNodd = (array) => {
    for (let i = 0; i < array.length; i++) {
        ((array[i] % 2) == 0) ? evenNo.push(array[i]): oddNo.push(array[i]);
    }
}

checkForEvenNodd(a);
console.log(evenNo);
console.log(oddNo);
let evenSum = evenNo.reduce((a, b) => a + b, 0);
let oddSum = oddNo.reduce((a, b) => a + b, 0);

console.log(evenSum);
console.log(oddSum);