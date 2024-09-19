const fs = require('fs');

const addTodo = (title) => {
	const todos = fetchTodos();
	const todo = {
		title
	};

	const duplicatetodos = todos.filter(
		(todo) => todo.title === title);

	if (duplicatetodos.length === 0) {
		todos.push(todo);
		saveTodos(todos);
		return todo;
	}
};

const deleteTodo = (title) => {
	let todos = fetchTodos();
	let filteredtodos = todos.filter(
		(todo) => todo.title !== title);
	saveTodos(filteredtodos);

	return todos.length !== filteredtodos.length;
};

const readTodo = (title) => {
	let todos = fetchTodos();
	let filteredTodos = todos.filter(
		(todo) => todo.title === title);
	return filteredTodos[0];
};

const listTodos = () => {
	return fetchTodos();
};

const fetchTodos = () => {
	try {
		let todosString =
			fs.readFileSync('tasks-data.json');
		return JSON.parse(todosString);
	} catch (e) {
		return [];
	}
};

const saveTodos = (todos) => {
	fs.writeFileSync('tasks-data.json',
		JSON.stringify(todos));
};

const displayTodo = (todo) => {
	console.log('## ---## --- ##');
	console.log(`It's title is: ${todo.title}`);
};

module.exports = {
	addTodo,
	deleteTodo,
	readTodo,
	listTodos,
	displayTodo
};
