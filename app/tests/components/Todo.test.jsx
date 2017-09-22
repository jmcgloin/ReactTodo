const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const Todo = require('Todo');

describe('Todo', () => {
	it('should exist', () => {
		expect('Todo').toExist();
	});
	it('should call onToggle with the clicked id', () => {
		let todoData = {
			id: 199,
			text: 'write todo.jsx test',
			completed: true
		};

		let spy = expect.createSpy();
		let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);

		let $el = $(ReactDOM.findDOMNode(todo))[0];
		console.log($el);
		TestUtils.Simulate.click($el);
		expect(spy).toHaveBeenCalledWith(199);
	});
});