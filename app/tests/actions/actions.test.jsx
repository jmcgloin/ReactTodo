const expect = require('expect');
const actions = require('actions');

describe('Actions', () => {
	it('should generate search text action', () => {
		const action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'some search text'
		};

		let res = actions.setSearchText(action.searchText);
		expect(res).toEqual(action);
	});
	it('should generate new todo action', () => {
		const action = {
			type: 'ADD_NEW_TODO',
			newTodo: 'Make a billion dollars and buy a relaxing forest'
		};

		let res = actions.addTodo(action.newTodo);
		expect(res).toEqual(action);
	});
	it('should generate toggle show completed action', () => {
		expect(actions.toggleShowCompleted()).toEqual({type: 'TOGGLE_SHOW_COMPLETED'});
	});
	it('should generate complete todo action', () => {
		const action = {
			type: 'COMPLETE_TODO',
			id: 1
		};
		let res = actions.completeTodo(action.id);
		expect(res).toEqual(action);
	});
});