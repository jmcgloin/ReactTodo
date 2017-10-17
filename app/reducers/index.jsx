export const searchTextReducer = (state = '', action) => {
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
		default:
			return state;
	};
};

export const addTodoReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_NEW_TODO':
			return state.concat(action.newTodo);
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

export const completeTodoReducer = (state = '', action) => {
	switch(action.type) {
		case 'COMPLETE_TODO':
			return action.id;
		default:
			return state;
	};
};