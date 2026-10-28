"use strict";

// 1. A Needle in the Haystack / 8 kyu
/* 
  Сможете ли вы найти иголку в стоге сена? 
  Напишите функцию findNeedle(), которая принимает массив, полный мусора, но содержащий одну «иголку». 
  После того, как ваша функция найдет иголку, она должна вернуть сообщение (в виде строки), которое гласит: 
  "found the needle at position " + индекс, указывающий на то, что игла найдена.
*/

const haystack_1 = ["hay", "needle", "junk"];

function findNeedle(haystack) {
	const index = haystack.indexOf("needle");
	return `found the needle at position ${index}`;
}

const result = findNeedle(haystack_1);

console.log(result);

// 2. Opposite number / 8 kyu
/* 
  Очень просто: дано число, найдите его противоположное (аддитивное обратное)
*/

const number = 5;

function opposite(number) {
	return -number;
}

console.log(opposite(number));
console.log(opposite(-14));
console.log(opposite(0));

// 3. MakeUpperCase / 8 kyu
/* 
  Напишите функцию, которая преобразует входную строку в верхний регистр.
*/

const makeUpperCase = (str) => str.toUpperCase();

console.log(makeUpperCase("hello"));
console.log(makeUpperCase("Hello"));
console.log(makeUpperCase("HELLO"));

// 4. Beginner - Lost Without a Map / 8 kyu
/* 
  Дана последовательность целых чисел. Верните новый массив, в котором каждое значение удвоено.
*/

const numbers = [1, 2, 3];

function maps(x) {
	const doubledNumbers = x.map((number) => {
		return number * 2;
	});
	return doubledNumbers;
}

const dubled = maps(numbers);

console.log(numbers);
console.log(dubled);

// 5. Beginner - Reduce but Grow / 8 kyu
/* 
  Дана непустая последовательность целых чисел. Верните результат умножения этих чисел в порядке возрастания.
*/

function grow(x) {
	const product = x.reduce((acc, number) => {
		return acc * number;
	}, 1);
	return product;
}

const numbersProduct = grow(numbers);

console.log(numbersProduct);
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));

// 6. Grasshopper - Personalized Message / 8 kyu
/* 
  Создайте функцию, которая выдает персонализированное приветствие. 
  Эта функция принимает два параметра: имя и владелец. 
  Используйте условные операторы для возврата соответствующего сообщения: 
  Имя равно владельцу - 'Hello boss' 
  В противном случае - 'Hello guest'
*/

const owner = "Daniel";

function greet(name, owner) {
	if (name === owner) {
		return "Hello boss";
	} else {
		return "Hello guest";
	}
}

console.log(greet("Daniel", owner));
console.log(greet("Greg", owner));

// 7. Double Char  / 8 kyu
/* 
  Написать функцию doubleChar(str), которая принимает строку и возвращает новую строку, где каждый символ повторяется дважды.
*/

const text = "Привет";
function doubleChar(str) {
	const letters = str.split("");
	const doubledLetters = letters.map((letter) => {
		return letter.repeat(2);
	});
	const resultString = doubledLetters.join("");
	return resultString;
}

console.log(doubleChar(text));
console.log(doubleChar("123456"));
console.log(doubleChar("%^&*("));

// 8. Remove String Spaces  / 8 kyu
/* 
  Напишите функцию, которая удаляет пробелы из строки, а затем возвращает результирующую строку.
*/

function noSpace(x) {
	return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B", "8j8mBliB8gimjB8B8jlB"));
console.log(noSpace("8aaaaa dddd r     "));

// 9. Sum Mixed Array  / 8 kyu
/* 
  Дан массив целых чисел, представленных в виде строк и цифр. 
  Верните сумму значений массива, как если бы все они были числами. 
  Верните ответ в виде числа.
*/

function sumMix(x) {
	const sum = x.reduce((acc, number) => {
		return acc + +number;
	}, 0);
	return sum;
}

console.log(sumMix([9, 3, "7", "3"]));

// 10. Function 1 - hello world  / 8 kyu
/* 
  Создайте простую функцию с именем greet, которая возвращает знаменитую фразу "hello world!".
*/

const getHelloWorld = () => "hello world!";

console.log(getHelloWorld());

// УСЕ. ФИНИШ )))
