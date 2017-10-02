const React = require('react');

const TodoSearch = React.createClass({
	onChange: function () {
		let showCompleted = this.refs.showComplete.checked;
		let searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function () {
		return (
			<div className='container__header'>
				<div>
					<input type='search' ref='searchText' placeholder='Search' onChange={this.onChange} />
				</div>
				<div>
					<label>
						<input type='checkbox' onChange={this.onChange} ref='showComplete' />
						Show Completed Todos
					</label>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;

