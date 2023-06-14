import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { login: '', email: '' },
    token: null,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, { payload: { user } }) => {
        const { email, login } = user;
        state.user = { email, login };
      })
      .addCase(loginUser.fulfilled, (state, { payload: { user, token } }) => {
        const { email, login } = user;
        state.user = { email, login };
        state.token = token;
      }),
});

export const authReducer = authSlice.reducer;
