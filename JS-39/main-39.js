// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
	name: "Дима",
	age: 40,
	city: "Москва",
	employment: "Самозанятый",
	isStudent: true,
	course: "Aroken.ru",
};

for (const key in person) {
	console.log(person[key]);
}

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const myObject = {
	// car: "AUDI",
	// model: "Q7",
};
function isEmpty(object) {
	for (const key in object) {
		return false;
	}
	return true;
}
console.log(isEmpty(myObject));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
	title: "Домашка по JS",
	description: "Практика по объектам",
	isCompleted: false,
};

const taskChanges = {
	isCompleted: true,
	problems: "Пришлось пострадать с решением этой задачи",
	PS: "Понял как task и taskChanges передаются в object и modifications при вызове функции",
};

function cloneAndModify(object, modifications) {
	const newObject = { ...object, ...modifications };
	return newObject;
}

const modifiedTask = cloneAndModify(task, taskChanges);

for (const key in modifiedTask) {
	console.log(`${key}:`, modifiedTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const myObject2 = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

const callAllMethods = (object) => {
	for (const key in object) {
		if (typeof object[key] === "function") {
			object[key]();
		}
	}
};

callAllMethods(myObject2);
