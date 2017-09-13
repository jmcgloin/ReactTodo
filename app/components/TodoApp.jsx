const React = require('react');
const TodoSearch = require('TodoSearch');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id:1,
					text: 'walk the dog'
				},
				{
					id: 2,
					text: 'clean the yard'
				},
				{
					id:3,
					text: 'do laundry'
				},
				{
					id:4,
					text: 'do dishes'
				}
			]
		}
	},
	handleNewTodo: function (item) {
		alert('New todo added: ' + item);
		this.setState = function () {
			return {

			}
		}
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState = function () {
			return {
				showCompleted: showCompleted,
				searchText: searchText.toLowerCase()
			}
		}
	},
	render: function() {
		let {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos} />
				<AddTodo onNewTodo={this.handleNewTodo} />
			</div>
		);
	}
});

module.exports = TodoApp;