
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user';
import todoReducer from './todo/todo';

const rootReducer = {
    currentUser: userReducer,
    todos: todoReducer
}

export const store = configureStore({
    reducer: rootReducer,
    
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;