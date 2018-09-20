const input = prompt("Enter the n =");
let count = 0;
let sum = 0;

function size(value) {
    while (value != 0) {
        value = parseInt(value / 10);
        count++;
    }
    return count;
}

function check(value) {
    let n = value;
    var length = size(value);
    while (n != 0) {
        let remainder = n % 10;
        console.log(remainder);
        sum += Math.pow(remainder, length);
        console.log(sum);
        n = parseInt(n / 10);
        console.log(n);
    }
    if (sum == value) {
        return true;
    } else {
        return false;
    }
}

if (check(input) == true) {
    alert("armstorng");
} else {
    alert("not armstrong");
}