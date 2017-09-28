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

	describe('filterTodos', () => {
		
		let todos = [
			{ id : 1, text : 'some text', completed : true },
			{ id : 2, text : 'other text', completed : false },
			{ id : 3, text : 'some text', completed : true }
		];

		it('should show all todos if showCompleted is true', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredTodos.length).toBe(3);
		});

		it('should show one todo if showCompleted is false', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, false, '');

			expect(filteredTodos.length).toBe(1);
		});

		it('should show one todo when searchText==="oThEr"', () => {
			let filteredTodos = TodoAPI.filterTodos( todos, true, 'other');

			expect(filteredTodos.length).toBe(1);
		});

		it('should sort by completed status', () => {
			let filteredTodos = TodoAPI.filterTodos(todos, true, '');

			expect(filteredTodos[0].completed).toBe(false);
		});
	});
});