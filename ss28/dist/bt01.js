"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(a, b, callback) {
    const sum = a + b;
    callback(sum);
}
function printResult(result) {
    console.log("Kết quả là:", result);
}
calculate(8, 12, printResult);
