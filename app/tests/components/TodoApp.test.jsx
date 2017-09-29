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
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('it should toggle completed value when handleToggle is called', () => {
		let todoData = {
			id: 11,
			text: 'Test features',
			completed: false,
			createdAt: 0,
			completedAt:undefined
		};

		let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);

		todoApp.handleToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('it should remove completedAt when completed is true and toogleCompleted is called', () => {
		let todoData = {
			id: 11,
			text: 'Test features',
			completed: true,
			createdAt: 0,
			completedAt: 0
		};

		let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);

		todoApp.handleToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toBeFalsy();
	});
});