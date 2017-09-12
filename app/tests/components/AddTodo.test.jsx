const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
	it('should exist', () => {
		expect(AddTodo).toExist();
	});

	it('should call onSubmit if a non-blank string is submitted', () => {
		let spy = expect.createSpy();
		let addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
		let $el = $(ReactDOM.findDOMNode(addTodo));

		let input = 'Learn React';

		addTodo.refs.newTodo.value = input;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(input);
	});

	it('should not call onSubmit with an empty string', () => {
		let spy = expect.createSpy();
		let addTodo = TestUtils.renderIntoDocument(<AddTodo onNewTodo={spy}/>);
		let $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.newTodo.value = '';
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toNotHaveBeenCalled();
	})
})