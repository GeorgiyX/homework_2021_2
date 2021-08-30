'use strict';

QUnit.module('Тестируем функцию roman', function () {
	QUnit.test('roman правильно переводит из римской системы счисления', function (assert) {
		assert.strictEqual(roman('I'), 1);
		assert.strictEqual(roman('V'), 5);
		assert.strictEqual(roman('M'), 1000);
		assert.strictEqual(roman('l'), 50);
		assert.strictEqual(roman('d'), 500);

		assert.strictEqual(roman('iv'), 4);
		assert.strictEqual(roman('iiii'), 4);
		assert.strictEqual(roman('CM'), 900);

		assert.strictEqual(roman('MCMIV'), 1904);
		assert.strictEqual(roman('MCMXC'), 1990);
		assert.strictEqual(roman('mmxvii'), 2017);
	});

	QUnit.test('roman правильно переводит из десятичной системы счисления', function (assert) {
		assert.strictEqual(roman(1), 'I');
		assert.strictEqual(roman(5), 'V');
		assert.strictEqual(roman(1000), 'M');
		assert.strictEqual(roman(50), 'L');
		assert.strictEqual(roman(500), 'D');

		assert.strictEqual(roman(4), 'IV');
		assert.strictEqual(roman(900), 'CM');

		assert.strictEqual(roman(1904), 'MCMIV');
		assert.strictEqual(roman(1990), 'MCMXC');
		assert.strictEqual(roman(2017), 'MMXVII');
	});

	QUnit.test('roman правильно определяет, что было передано на вход', function (assert) {
		assert.strictEqual(roman('1904'), 'MCMIV');
		assert.strictEqual(roman('1990'), 'MCMXC');
		assert.strictEqual(roman('2017'), 'MMXVII');
	});
});

QUnit.module('Дополнительные тесты на функцию roman', function () {
	QUnit.test('roman не работает с неподходящими типами данных', function (assert) {
		assert.throws(() => roman(null), TypeError);
		assert.throws(() => roman(undefined), TypeError);
		assert.throws(() => roman({foo: "bar"}), TypeError);
	});

	QUnit.test('roman регистро независима', function (assert) {
		assert.strictEqual(roman('MMMXC'), 3090);
		assert.strictEqual(roman('mmmxc'), 3090);
		assert.strictEqual(roman('mMmxC'), 3090);
	});

	QUnit.test('roman выдает одинаковый результат при конвертировании из римской в десятичную и наоборот', function (assert) {
		let romanian = '';
		for (let arabic = 0; arabic < 2500; arabic++) {
			romanian = roman(arabic);
			assert.strictEqual(roman(romanian), arabic);
		}
	});
});
