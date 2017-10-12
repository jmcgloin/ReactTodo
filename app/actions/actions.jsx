export const setSearchText = searchText => ({type: 'SET_SEARCH_TEXT', searchText});

export const addTodo = newTodo => ({type: 'ADD_NEW_TODO', newTodo});

export const toggleShowCompleted = () => ({type: 'TOGGLE_SHOW_COMPLETED'});

export const completeTodo = id => ({type: 'COMPLETE_TODO', id});