const React = require('react');
const Search = require('Search');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
	getInitialState: function () {
		return {
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
	render: function() {
		let {todos} = this.state;
		return (
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoApp;