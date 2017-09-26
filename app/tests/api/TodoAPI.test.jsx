const expect = require('expect');

const TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
	beforeEach(() => localStorage.removeItem('todos'));

	it('should exist', () => {
		expect(TodoAPI).toExist();
	});

	describe('setTodos', () => {
		it('should set valid todos array', () => {
			let validTodos = [
				{ 
					id: 23,
					text: 'test all files',
					completed: false
				}
			];


			TodoAPI.setTodos(validTodos);

			let actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(validTodos);
		});


		it('should not set invalid todos array', () => {
			let invalidTodos = { 'a':'b'};

			TodoAPI.setTodos(invalidTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		})

	});

	describe('getTodos', () => {
		it('should get valid todos array', () => {
			let validTodos = [
				{ 
					id: 23,
					text: 'test all files',
					completed: false
				}
			];

			localStorage.setItem('todos', JSON.stringify(validTodos));

			let actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual(validTodos);
		});

		it('should get empty array for invalid todos', () => {
			let actualTodos = TodoAPI.getTodos();

			expect(actualTodos).toEqual([]);
		})
	});
});