"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delayedCallback(callBack, delayMs) {
    setTimeout(() => {
        callBack();
    }, delayMs);
}
function printFunction() {
    console.log("2 giây đã trôi qua");
}
delayedCallback(printFunction, 2000);
