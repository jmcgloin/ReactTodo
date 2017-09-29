const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
	render: function() {
		let {id, text, completed, createdAt, completedAt} = this.props;
		let renderDate = () => {
			let message = completed ? 'Completed ' : 'Created ';
			let timestamp = completed ? completedAt : createdAt;
			return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mma');
		}
		return (
			<div onClick={() => this.props.onToggle(id)}>
				<input type='checkbox' checked={completed} ></input>
				<p>{text}</p>
				<p>{renderDate()}</p>
			</div>
		);
	}
});

module.exports = Todo;