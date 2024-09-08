// src/store.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Usamos localStorage por defecto
import { combineReducers } from 'redux';

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

// Configuración de redux-persist
const persistConfig = {
    key: 'root', // Clave para guardar en localStorage
    storage,     // Usa localStorage para persistir el estado
};

// Combinamos el reducer (en caso de agregar más en el futuro)
const rootReducer = combineReducers({
    todos: todosReducer
});

// Crear el reducer persistente
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Crear el store con el reducer persistente
const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Crear el persistor
export const persistor = persistStore(store);

export default store;