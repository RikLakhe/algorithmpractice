const sent = 'I would have gotten the promotion, but my attendance wasn’t good enough.';
let tempArray = [];
let letter = /^[a-zA-Z]+$/;
let n = sent.length;

function checkAllWord(arr) {
    let leng = arr.length;
    if (leng < 31) {
        console.log('missing words  ' + (31 - leng));
        missingWord(arr);
    } else {
        console.log('all here ');
    }
}

missingWord = (arr) => {
    for (let i = 0; i < 26; i++) {
        if (typeof(arr[i]) == 'undefined') {
            console.log(String.fromCharCode(i + 97));
        }
    }
}

function saveByASCII(element) {
    let as = (element.charCodeAt(0)) - 97;
    tempArray[as] = (element);
    // console.log(as);
}

for (let i = 0; i < n; i++) {
    let word = sent.charAt(i).toLowerCase();
    if (word.match(letter)) {
        saveByASCII(word);
    }
    // tempArray.push(sent.charAt(i));
}

checkAllWord(tempArray);
console.log(tempArray);

// console.log(typeof(tempArray[5]));