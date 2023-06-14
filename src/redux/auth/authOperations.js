import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/users';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    console.log('first', credentials);
    try {
      const {
        data: { data },
      } = await axios.post('/register', credentials);

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await axios.post('/login', credentials);

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
