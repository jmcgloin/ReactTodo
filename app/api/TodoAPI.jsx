const $ = require('jquery');

module.exports = {
	setTodos: function (todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function () {
		let stringTodos = localStorage.getItem('todos');
		let todos = [];

		try{
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}
		return $.isArray(todos) ? todos : [];
	},

	filterTodos: function(todos, showCompleted, searchText) {
		let filteredTodos = todos;

		filteredTodos = filteredTodos.filter(todo => !todo.completed || showCompleted);
		
		if(searchText !== '') {
			filteredTodos = filteredTodos.filter(todo => todo.text.toLowerCase().indexOf(searchText) > -1);
		}
		if(showCompleted) {
			let completedTodos = filteredTodos.filter(todo => todo.completed);
			let uncompletedTodos = filteredTodos.filter(todo => !todo.completed);
			filteredTodos = uncompletedTodos.concat(completedTodos);
		}

		return filteredTodos;
	}
}