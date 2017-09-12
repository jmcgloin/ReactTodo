const React = require('react');

const AddTodo = React.createClass({
	onSubmit: function (e) {
		e.preventDefault();
		let item = this.refs.newTodo.value;

		//should check for string and not permit injection => do this later
		if(item != '') {

			this.refs.newTodo.value = '';
			this.props.onNewTodo(item);
		}
	},
	render: function () {
		return (
			<div>
				<form ref='form' className='todo-form' onSubmit={this.onSubmit}>
					<input type='text' ref='newTodo' id='newTodo' placeholder='Enter new todo item'></input>
					<button className='button expanded'>Add New Todo</button>
				</form>
			</div>

		);
	}
});

module.exports = AddTodo;