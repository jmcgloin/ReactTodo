const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('should exist', () => {
		expect('TodoApp').toExist();
	});

	it('should add a new todo', () => {
		let todoText = 'test';
		let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

		todoApp.setState({todos: []});
		todoApp.handleNewTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe('test');
	});
	it('it should toggle completed value when handleToggle is called', () => {
		let todoData = {
			id: 11,
			text: 'Test features',
			completed: false
		};

		let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);

		todoApp.handleToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});