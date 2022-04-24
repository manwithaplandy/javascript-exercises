const removeFromArray = function(inputArray, ...args) {
/*
Take in array and ...args as inputs
Turn args into array
For each arg, check if it's in input array
    If in input array, remove number from input array
    else, continue to next arg
Return final array
*/

let newArray = inputArray;
let myArgs = args; // Turn args into array

args.forEach(checkAndReplace(value));

function checkAndReplace(num) {
    if (newArray.includes(num)) {
        let index = newArray.findIndex(num);
        newArray.splice(index, 1);
    }
    return newArray;
}

return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
