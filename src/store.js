// src/store.js
import { createStore } from 'redux';

// Estado inicial
const initialState = {
    todos: []
};

// Reducer
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter((_, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

// Crear el store
const store = createStore(todosReducer);

export default store;