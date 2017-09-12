const React = require('react');

const Search = React.createClass({
	render: function () {
		return (
			<div className='row'>
				<div className='columns medium-4 medium-centered'>
					<form >
						<input type='text' id='search-text' placeholder='Search'></input>
						<input type='checkbox' id='show-complete'></input> Show Completed
					</form>
				</div>
			</div>
		);
	}
});

module.exports = Search;

