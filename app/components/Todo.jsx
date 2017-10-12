const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
	render: function() {
		let {id, text, completed, createdAt, completedAt} = this.props;
		let renderDate = () => {
			let message = completed ? 'Completed ' : 'Created ';
			let timestamp = completed ? completedAt : createdAt;
			return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mma');		
		};
		let todoClassName = completed ? 'todo todo-completed' : 'todo';
		return (
			<div className={todoClassName} onClick={() => this.props.onToggle(id)}>
				<div>
					<input type='checkbox' checked={completed} />
				</div>
				<div>
					<p>{text}</p>
					<p className='todo__subtext'>{renderDate()}</p>
				</div>
			</div>
		);
	}
});

module.exports = Todo;