import { createSlice } from '@reduxjs/toolkit';
import { getAllTodo, addTodo, updateTodo } from './todosOperations';

export const todosApi = createSlice({
  name: 'todosApi',
  initialState: {
    todos: [],
    isLoading: false,
    error: null,
  },
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
        state.todos.map(todo => {
          if (todo._id !== payload._id) return todo;
          return payload;
        });
      }),
});

export const todosReducer = todosApi.reducer;
