const React = require('react');

const TodoSearch = React.createClass({
	onChange: function () {
		let showCompleted = this.refs.showComplete.checked;
		let searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function () {
		return (
			<div className='row'>
				<div className='columns medium-4 medium-centered'>
					<form ref='searchForm'>
						<input type='search' id='search-text' ref='searchText' placeholder='Search' onChange={this.onChange}></input>
						<label>
							<input type='checkbox' onChange={this.onChange} id='show-complete' ref='showComplete'></input> Show Completed
						</label>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = TodoSearch;

