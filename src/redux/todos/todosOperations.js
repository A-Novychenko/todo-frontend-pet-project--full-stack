import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001/api';

export const getAllTodo = createAsyncThunk(
  'todos/getAllTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/todos/');

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (credentials, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/todos/', credentials);

      return resp.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateTodo = createAsyncThunk(
  'todos/updateTodo',
  async ({ decription, _id, title }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/todos/updateTodo/${_id}`, {
        decription,
        title,
      });

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateStatus = createAsyncThunk(
  'todos/updateStatus',
  async ({ _id, status }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/todos/${_id}/status`, { status });
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const removeTodo = createAsyncThunk(
  'todos/removeTodo',
  async ({ _id }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/todos/${_id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteAllTodos = createAsyncThunk(
  'todos/deleteAllTodos',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('todos/clean/collection');
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
