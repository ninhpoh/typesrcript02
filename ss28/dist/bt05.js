"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkCondition(condition, callback) {
    setTimeout(() => {
        callback(condition);
    }, 1000);
}
function display(result) {
    console.log("Điều kiện trả về:", result);
}
checkCondition(true, display);
checkCondition(false, display);
