import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/users';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await axios.post('/register', {
        login: 'novychenkoae',
        email: 'novychenkoae@gmail.com',
        password: 'examplepassword',
      });

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
