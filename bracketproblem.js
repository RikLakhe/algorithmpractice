const brackets = ']][]{{{}()}}[[';

let bigBrac = [],
    curlyBrac = [],
    smallBrac = [];

let leng = brackets.length;

console.log(leng);

checkArray = (arr, ele) => {
    let arrLeng = arr.length;
    if (arrLeng != 0) {
        if (arr[arrLeng - 1] == ele) {
            arr.push(ele);
        } else {
            arr.pop();
        }
    } else {
        arr.push(ele);
    }
}



for (let i = 0; i < leng; i++) {
    // console.log(brackets.charAt(i));
    let element = brackets.charAt(i);
    switch (element) {
        case '{':
            checkArray(curlyBrac, element);
            // curlyBrac.push(element);
            break;
        case '}':
            checkArray(curlyBrac, element);
            // curlyBrac.pop();
            break;
        case '[':
            checkArray(bigBrac, element);
            // bigBrac.push(element);
            break;
        case ']':
            checkArray(bigBrac, element);
            // bigBrac.pop();
            break;
        case '(':
            checkArray(smallBrac, element);
            // smallBrac.push(element);
            break;
        case ')':
            checkArray(smallBrac, element);
            // smallBrac.pop();
            break;
        default:
            console.log('error');
            break;

    }
}

console.log(curlyBrac);
console.log(bigBrac);
console.log(smallBrac);

if (curlyBrac.length == 0 && bigBrac.length == 0 && smallBrac.length == 0) {
    console.log('perfect fit');
} else {
    console.log('not perfect');
}