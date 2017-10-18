const moment = require('moment');

export const searchTextReducer = (state = '', action) => {
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	};
};

export const todos = (state = [], action) => {
	switch(action.type) {
		case 'ADD_NEW_TODO':
			return state.concat(action.newTodo);
		case 'COMPLETE_TODO':
			let todos = state.map( (todo) => {
				if(todo.id === action.id) {
					let newCompletedAt = todo.completed ? undefined : moment().unix();
					let newCompleted = !todo.completed;

					return {
					...todo,
					completed: newCompleted,
					completedAt: newCompletedAt
					};
				}
			});
			return todos;
		default:
			return state;
	};
};

export const toggleShowCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
		default:
			return state;
	};
};