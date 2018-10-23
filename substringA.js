// Complete the repeatedString function below.
function repeatedString(s, n) {
    if (s == 'a') {
        return n;
    }
    let len = n;
    let a = 0;
    for (let i = 0; i < len; i++) {
        if (a >= s.length) {
            a = 0;
        }
        temp.push(s.charAt(a));
        a++;
    }
    // console.log(temp);
    let result = checkAll(temp);
    return result;
}

function checkAll(arr) {
    let checkA = 'a';
    let leng = arr.length;
    let count = 0;
    for (let i = 0; i <= leng; i++) {
        if (arr[i] == checkA) {
            count = count + 1;
        }
    }
    return count;
}