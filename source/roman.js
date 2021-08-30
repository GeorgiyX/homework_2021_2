'use strict';

const arabicPatterns = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
const romanianPatterns = [['IIII', 4], ['IV', 4], ['CM', 900], ['CD', 400], ['XC', 90], ['IX', 9], ['XL', 40], ['M', 1000], ['D', 500], ['C', 100], ['L', 50], ['X', 10], ['V', 5], ['I', 1]];
const ROMAN = 0, ARABIC = 1;

function arabic2roman(number) {
    number = parseInt(number);
    let result = '';
    arabicPatterns.forEach((pattern) => {
        while (number >= pattern[ARABIC]) {
            result += pattern[ROMAN]
            number -= pattern[ARABIC]
        }
    });
    return result;
}

function roman2arabic(number) {
    number = number.toUpperCase();
    let result = 0;
    romanianPatterns.forEach((pattern) => {
        number = number.replaceAll(pattern[ROMAN], () => {
            result += pattern[ARABIC];
            return ""; 
        });
    });
    return result;
}

function roman(number) {
    const inputType = typeof(number);
    if (inputType != "string" && inputType != "number") {
         throw new TypeError("Неверный тип входных данных!")
    }
    return isNaN(parseInt(number)) ? roman2arabic(number) : arabic2roman(number);
}
