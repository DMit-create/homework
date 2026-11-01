"use strict";

// Ключи в отдельных переменных
const todoKeys = {
	id: "id",
	text: "text",
	is_completed: "is_completed",
	priority: {
		key: "priority",
		low: "low",
		medium: "medium",
		high: "high",
	},
};

// Пустой массив
const todos = [];

// Функция строки ошибки
const errTodoNotFound = (todoId) => `Todo with id ${todoId} not found`;

// Функция поиска максимального id
const getNewTodoId = (todos) => {
	return (
		todos.reduce((maxId, todo) => {
			// Math.max ищет максимальное число из переданных
			return Math.max(maxId, todo[todoKeys.id]);
		}, 0) + 1
	);
};

// Добавление задачи в пустой массив todos через функцию ceateTodo()
const createTodo = (todos, text, priority = todoKeys.priority.medium) => {
	const newTodo = {
		[todoKeys.id]: getNewTodoId(todos),
		[todoKeys.text]: text,
		[todoKeys.is_completed]: false,
		[todoKeys.priority.key]: priority,
	};
	todos.push(newTodo);
	return newTodo;
};

// Выполнение задачи (is_completed)
const completeTodoById = (todos, todoId) => {
	// Находим задачу
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	// Обработка ошибки в поиске
	if (todo === undefined) {
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

// Редактирование задачи
const editTodoById = (todos, todoId, newText) => {
	// Находим задачу
	const todo = todos.find((todo) => todo[todoKeys.id] === todoId);
	// Обработка ошибки в поиске
	if (todo === undefined) {
		console.error(errTodoNotFound(todoId));
		return null;
	}
	todo[todoKeys.text] = newText;
	return todo;
};

createTodo(todos, "Сходить в магазин");
createTodo(todos, "Сделать домашку", todoKeys.priority.high);
createTodo(todos, "Погулять", todoKeys.priority.low);
console.log(todos);

// Фильтр по приоритету
const getTodosByPriority = (todos, priority) => {
	return todos.filter((todo) => todo[todoKeys.priority.key] === priority);
};

// Вызов высокого приоритета
const highTasks = getTodosByPriority(todos, todoKeys.priority.high);
console.log(highTasks);
