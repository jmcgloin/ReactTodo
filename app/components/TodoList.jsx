const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
	render: function () {
		let {todos} = this.props;
		let renderTodos = () => {
			return todos.length === 0 ? <p className='container__message'>Nothing to do.</p> : 
				todos.map((todo) => {
					return (
						<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
					)
				});
		};
		return (
			<div>
				{renderTodos()}
			</div>
		);
	}
});

module.exports = TodoList;