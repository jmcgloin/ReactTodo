const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with search text', () => {
		let spy = expect.createSpy();
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		let sText = 'Dog';

		todoSearch.refs.searchText.value = sText;
		TestUtils.Simulate.change(todoSearch.refs.searchText);

		expect(spy).toHaveBeenCalledWith(false, 'Dog');
	});

	it('should call onSearch with checked value', () => {
		let spy = expect.createSpy();
		let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy} />);

		todoSearch.refs.showComplete.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showComplete)

		expect(spy).toHaveBeenCalledWith(true,'');

	})
});