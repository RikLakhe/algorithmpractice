var a = [5, 7, 423, 8, 9, 42, 56, 8, 23, -4, -7, 10, 1];
let tempArray = [];
let temp = 100;
var answer = 0;

positiveSortNumbers = (element) => {

    if (element >= 0) {
        tempArray.push(element);
    }
    tempArray.sort((a, b) => a - b);
}

checkSmallest = () => {
    tempArray.forEach((element) => {
        if (element == 0) {
            temp = 0;
        } else if (element < temp) {
            temp = element;
        }
    })
    if (temp != 0) {
        return temp - 1;
    } else {
        return 0;
    }
}



for (let i = 0; i <= a.length; i++) {
    positiveSortNumbers(a[i]);
}
answer = checkSmallest();


console.log(tempArray);
console.log(answer);