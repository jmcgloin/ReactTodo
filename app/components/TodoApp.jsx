const React = require('react');
const uuid = require('node-uuid');

const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoAPI = require('TodoAPI');

const TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		}
	},
	componentDidUpdate: function () {
		TodoAPI.setTodos(this.state.todos);
	},
	handleToggle: function (id) {
		let updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({todos: updatedTodos});
	},
	handleNewTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed: false
				}
			]
		});
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});	
	},
	render: function() {
		let {todos, showCompleted, searchText} = this.state;
		let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={filteredTodos} onToggle={this.handleToggle} />
				<AddTodo onNewTodo={this.handleNewTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;