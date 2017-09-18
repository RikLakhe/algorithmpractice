//remove the items in array1 if array2 item names matches. 

let array1 = [],
    array2 = [];


arrayadd = (arrychoice) => {
    while (true) {
        let addon = prompt("Add item in array = ");
        arrychoice.push(addon);
        if (check()) {
            break;
        }
    }
}

check = () => {
    let choice = prompt("move to next array ?[yes or y] ").toLowerCase();
    if (choice === "yes" || choice === "y") {
        return true;
    }
    return false;

}

removeFromArray = () => {
    let length1 = array1.length;
    let length2 = array2.length;

    for (let i = 0; i < length1; i++) {
        for (let j = 0; j < length2; j++) {
            if (array1[i] === array2[j]) {
                array1.splice(i, 1);
            }
        }
    }
}

alert("Add items in array 1 = ");
arrayadd(array1);
console.log(array1);
alert("Add items in array 2 = ");
arrayadd(array2);
console.log(array2);

removeFromArray();

console.log(array1);