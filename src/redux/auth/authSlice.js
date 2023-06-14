import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { login: null, email: null },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder =>
    builder
      .addCase(registerUser.fulfilled, (state, { payload: { user } }) => {
        const { email, login } = user;
        state.user = { email, login };
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload: { user, token } }) => {
        const { email, login } = user;
        state.user = { email, login };
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = { email: null, login: null };
        state.token = null;
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
