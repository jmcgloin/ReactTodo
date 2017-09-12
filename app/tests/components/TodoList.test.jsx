const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const TestUtils = require('react-addons-test-utils');

const TodoList = require('TodoList');
const Todo = require('Todo');

describe('TodoList', () => {
	it('should exist', () => {
		expect('TodoList').toExist();
	});

	it('should render one Todo component for each item', () => {
		let todo = [
			{
				id : 1,
				text :'do something'
			},
			{
				id : 2,
				text : 'do anything'
			},
			{
				id : 3,
				text : 'take a break'
			}
		];
		let todoList = TestUtils.renderIntoDocument(<TodoList todos={todo}/>);
		let todoComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

		expect(todoComponents.length).toBe(todo.length);
	});
});