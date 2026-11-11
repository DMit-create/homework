"use strict";

// Ключи в отдельных переменных
const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
};

// Пустой массив
const todos = [];

// Функция строки ошибки
const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

// Функция поиска максимального id
const getNewTodoId = (todos) => {
	return (
		todos.reduce((maxId, todo) => {
			return Math.max(maxId, todo[todoKeys.id]); // Math.max ищет максимальное число
		}, 0) + 1
	);
};

// Добавление задачи в пустой массив todos через функцию ceateTodo()
const createTodo = (todos, text) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
	};
	todos.push(newTodo);
	return newTodo;
};

// Выполнение задачи (is_completed)
const completeTodoById = (todos, todoId) => {
	// Находим задачу
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);

	// Обработка ошибки в поиске
	if (!todo) {
		console.error(errTodoNotFound(todoId));
		return null;
	}

	// Меняем true / false и наоборот через !
	todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
	return todo;
};

// Удаление задач
const deleteTodoById = (todos, todoId) => {
	// Находим задачу
	const todoIndex = todos.findIndex((todo) => todo[todoKeys.id] === todoId);

	// Обработка ошибки, так как findIndex вернет -1, если ничего не найдет
	if (todoIndex === -1) {
		console.error(errTodoNotFound(todoId));
		return todos;
	}

	todos.splice(todoIndex, 1);
	return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");

// console.log(form);
// console.log(input);
// console.log(todosList);

// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
function createTodoElement(todo) {
	// Создание нового элемента li через createElement()
	const li = document.createElement("li");

	// Добавление CSS-класса через classList.add()
	li.classList.add("todo");

	// Добавляем атрибут data-id элементу li
	li.dataset.id = todo[todoKeys.id];

	// Создание HTML-разметки через innerHTML
	li.innerHTML = `
		<div class="todo-text">${todo[todoKeys.text]}</div>
		<div class="todo-actions">
			<button class="button-complete button">&#10004;</button>
			<button class="button-delete button">&#10006;</button>
		</div>
	`;

	return li;
}

// createTodoElement("Задание 2 готово!");

// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement
function handleCreateTodo(todos, text) {
	// Помещаем объекты в общий массив
	const todo = createTodo(todos, text);
	const todoElement = createTodoElement(todo);

	// Добавление готового элемента в список через prepend()
	todosList.prepend(todoElement);
}

// handleCreateTodo(todos, "Домашнее задание DOM");
// handleCreateTodo(todos, "Купить продукты");
// handleCreateTodo(todos, "Выучить JavaScript");
// console.log(todos);

// Отмена стандартного поведения формы (отправка без перезагрузки страницы)
form.addEventListener("submit", (event) => {
	event.preventDefault(); // Сброс стандартного поведения формы

	// Создаем переменную textLine для удаления пробелов с строки
	// input.value - достаем текст из инпута
	const textLine = input.value.trim(); // .trim() - убирает пробелы

	// Условие. Если инпут - пустая строка, то обрываем функцию
	if (textLine === "") {
		return;
	}

	handleCreateTodo(todos, textLine); // Вызываем handleCreateTodo
	input.value = ""; // Очистка инпута, после отправки формы
});

// Определение текущей задачи по клику на todosList
// Вешаем слушатель событий на ul (todo)
todosList.addEventListener("click", (event) => {
	// Определяем ближайший нажатый элемент через closest
	const todo = event.target.closest(".todo");

	if (!todo) return; // Обрываем, если клик вне поля задачи

	const todoId = Number(todo.dataset.id);

	// Выполнение задачи
	// Проверка нажатия на кнопку внутри todo элемента через matches()
	if (event.target.matches(".button-complete")) {
		completeTodoById(todos, todoId);
		todo.classList.toggle("completed");
	}

	// Удаление задачи
	if (event.target.matches(".button-delete")) {
		deleteTodoById(todos, todoId); // Проверка нажатия
		todo.remove(); // Удаление задачи
	}
});
