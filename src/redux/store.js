import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './todoSlice';

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    todosApi.middleware,
  ],
});
