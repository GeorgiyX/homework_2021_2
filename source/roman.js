'use strict';

function arabic2roman(number) {

}

function roman2arabic(number)

function roman(inputNum) {
    const inputType = typeof(inputNum);
    if (inputType != "string" && inputType != "number") {
         throw new TypeError("Неверный тип входных данных!")
    }

    const roman2arabic = new Map([["I", 1], ["V", 5], ["X", 10], ["C", 100], ["D", 500], ["M", 1000]]);
    const arabic2roman = new Map([["I", 1], ["V", 5], ["X", 10], ["C", 100], ["D", 500], ["M", 1000]]);
    
}

function testCode() {
    let str = "100blabla";
    let parsed = parseInt(str);
    if (isNaN(parsed)) {
        console.log("nan")
    } else {
        console.log(parsed)
    }
}

testCode()