"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function displayNumbers(callback, delayMs) {
    let count = 1;
    setInterval(() => {
        callback(count);
        count++;
    }, delayMs);
}
function printNumber(num) {
    console.log(`Số thứ tự: ${num}`);
}
displayNumbers(printNumber, 1000);
