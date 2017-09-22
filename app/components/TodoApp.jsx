const React = require('react');
const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const uuid = require('node-uuid');

const TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'walk the dog',
					completed: false
				},
				{
					id: uuid(),
					text: 'clean the yard',
					completed: true
				},
				{
					id:uuid(),
					text: 'do laundry',
					completed: false
				},
				{
					id:uuid(),
					text: 'do dishes',
					completed: false
				}
			]
		}
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
		let {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<AddTodo onNewTodo={this.handleNewTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;