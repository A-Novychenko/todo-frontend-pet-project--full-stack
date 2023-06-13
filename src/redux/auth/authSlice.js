const { createSlice } = require('@reduxjs/toolkit');
const { registerUser } = require('./authOperations');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { login: '', email: '', password: '' },
    token: null,
  },
  extraReducers: builder =>
    builder.addCase(
      registerUser.fulfilled,
      (state, { payload: { user, token } }) => {
        const { email, login, password } = user;
        state.user = { email, login, password };
        state.token = token;
      }
    ),
});

export const authReducer = authSlice.reducer;
