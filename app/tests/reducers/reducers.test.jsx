const expect = require('expect');
const df = require('deep-freeze-strict');
const uuid = require('uuid');
const moment = require('moment');

const reducers = require('reducers');

describe('Reducers', () => {
	describe('SearchTextReducer', () => {
		it('should set search text', () => {
			let action = {type: 'SET_SEARCH_TEXT', searchText: 'dog'};
			let res = reducers.searchTextReducer(df(''),  df(action));

			expect(res).toEqual(action.searchText);
		});
	});
	describe('toggleShowCompletedReducer', () => {
		it('should toggle show completed value', () => {
			let action = {type: 'TOGGLE_SHOW_COMPLETED'};
			let res = reducers.toggleShowCompletedReducer(df(false), df(action));

			expect(res).toEqual(true);
		});
	});
	describe('todoReducer', () => {
		let newTodo = {
				id: uuid(),
				text: 'Meditate',
				completed: false,
				createdAt: moment().unix(),
				completedAt: undefined
		};
		it('should add a new todo', () => {
			let action = {type: 'ADD_NEW_TODO', newTodo: newTodo};
			let res = reducers.todos(df([]), df(action));

			expect(res.length).toBe(1);
			expect(res[0].text).toEqual(newTodo.text);
		});
		it('should toggle complete status', () => {
			let action = {type: 'COMPLETE_TODO', id: newTodo.id};
			let res = reducers.todos(df([newTodo]), df(action));

			expect(res[0].completed).toEqual(true);
			expect(res[0].completedAt).toNotEqual(undefined);

			let newRes = reducers.todos(df(res), df(action));

			expect(newRes[0].completed).toEqual(false);
			expect(newRes[0].completedAt).toEqual(undefined);
		});
	});
});