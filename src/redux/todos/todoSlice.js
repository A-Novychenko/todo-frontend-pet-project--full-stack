import { createSlice } from '@reduxjs/toolkit';
import {
  getAllTodo,
  addTodo,
  updateTodo,
  updateStatus,
  removeTodo,
  deleteAllTodos,
} from './todosOperations';

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};

export const todosApi = createSlice({
  name: 'todosApi',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getAllTodo.fulfilled, (state, { payload }) => {
        state.todos = payload.todos;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, { payload }) => {
        state.todos.push(payload.todos);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTodo.fulfilled, (state, { payload }) => {
        state.todos = state.todos.map(todo => {
          if (todo._id !== payload._id) return todo;
          return payload;
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateStatus.fulfilled, (state, { payload }) => {
        state.todos = state.todos.map(todo => {
          if (todo._id !== payload._id) return todo;
          return payload;
        });
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeTodo.fulfilled, (state, { payload }) => {
        state.todos = state.todos.filter(todo => todo._id !== payload._id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteAllTodos.fulfilled, (state, { payload }) => {
        state = initialState;
      }),
});

export const todosReducer = todosApi.reducer;
