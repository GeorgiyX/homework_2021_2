'use strict';

const patterns = {'IIII': 4, 'IV': 4, 'CM': 900, 'CD': 400, 'XC': 90, 'IX': 9, 'XL': 40, 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1}
const ROMAN = 0, ARABIC = 1;

/**
 * Переводит запись чила арабскими цифрами в число записанное римскими цифрами
 * @param {string | number} number Число, записанное арабскими цифрами
 * @returns Римскую запись этого же числа
 */
function arabic2roman(number) {
    number = +number;
    if (!Number.isInteger(number) || number < 0 || number > 3999) {
       throw new InputError('Ошибка во входных данных')
    }
    let result = '';
    Object.entries(patterns).sort((lhs, rhs) => {
        /* В случае равенства чисел, сортируем их по длине римской записи числа. */ 
        return rhs[ARABIC] == lhs[ARABIC] ? lhs[ROMAN].length - rhs[ROMAN].length 
                                          : rhs[ARABIC] - lhs[ARABIC];
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
    let result = 0;
    Object.entries(patterns).sort((lhs, rhs) => { 
        return rhs[ROMAN].length - lhs[ROMAN].length;
    }).forEach((pattern) => {
        number = number.replaceAll(pattern[ROMAN], () => {
            result += pattern[ARABIC];
            return ""; 
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
    if (inputType != "string" && inputType != "number") {
         throw new TypeError("Неверный тип входных данных!");
    }
    return isNaN(+number) ? roman2arabic(number) : arabic2roman(number);
}
