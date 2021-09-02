'use strict';

const patterns = { 'IIII': 4, 'IV': 4, 'CM': 900, 'CD': 400, 'XC': 90, 'IX': 9, 'XL': 40, 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 }
const ROMAN = 0, ARABIC = 1, MAX_VALUE = 3999, MIN_VALUE = 0;

/**
 * Переводит запись чила арабскими цифрами в число записанное римскими цифрами
 * @param {string | number} number Число, записанное арабскими цифрами
 * @returns Римскую запись этого же числа
 */
function arabic2roman(number) {
    number = +number;
    if (!Number.isInteger(number) || number < MIN_VALUE || number > MAX_VALUE) {
        throw new Error('Ошибка во входных данных (запись числа арабскими)');
    }

    let result = '';
    Object.entries(patterns).sort((leftPattern, rightPattern) => {
        /* В случае равенства чисел, сортируем их по длине римской записи числа. */
        return rightPattern[ARABIC] == leftPattern[ARABIC] ? 
               leftPattern[ROMAN].length - rightPattern[ROMAN].length :
               rightPattern[ARABIC] - leftPattern[ARABIC];
    }).forEach((pattern) => {
        while (number >= pattern[ARABIC]) {
            result += pattern[ROMAN];
            number -= pattern[ARABIC];
        }
    });

    return result;
}

/**
 * Переводит запись чила римскими цифрами в число записанное арабскими цифрами
 * @param {string} number Число, записанное римскими цифрами
 * @returns Арабскую запись этого же числа
 */
function roman2arabic(number) {
    number = number.toUpperCase();
    if (number.match(/[^IVXLCDM]/) || number.match(/([A-Z])\1{3,}/) && number !== 'IIII') {
        throw new Error('Ошибка во входных данных (запись числа римскими)');
    }

    let result = 0;
    Object.entries(patterns).sort((lhs, rhs) => {
        return rhs[ROMAN].length - lhs[ROMAN].length;
    }).forEach((pattern) => {
        number = number.replaceAll(pattern[ROMAN], () => {
            result += pattern[ARABIC];
            return '';
        });
    });

    return result;
}

/**
 * Конвертирует римские числа в арабские и наоборот
 * @param {string | number} number Входное число. Римская запись числа 
 * представлена строкой, десятичная арабская - может быть как числом так и строкой
 * @returns Число переведеное в противоположную форму записи
 */
function roman(number) {
    const inputType = typeof(number);
    if (inputType !== 'string' && inputType !== 'number') {
        throw new TypeError('Неверный тип входных данных!');
    }

    return isNaN(+number) ? roman2arabic(number) : arabic2roman(number);
}
