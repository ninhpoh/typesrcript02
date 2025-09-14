"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processArray(arr, callback) {
    arr.forEach((element, index) => {
        setTimeout(() => {
            callback(element, index);
        }, index * 1000);
    });
}
const numbers = [1, 2, 3, 4, 5];
function printElement(element, index) {
    console.log(`Phần tử thứ: ${element}`);
}
processArray(numbers, printElement);
