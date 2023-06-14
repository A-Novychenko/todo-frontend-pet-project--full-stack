// import { configureStore } from '@reduxjs/toolkit';
// import { todosApi } from './todos/todoSlice';

// export const store = configureStore({
//   reducer: {
//     [todosApi.reducerPath]: todosApi.reducer,
//   },

//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     todosApi.middleware,
//   ],
// });

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

// import { filterReducer } from './contacts/filterSlice';
import { todosReducer } from './todos/todoSlice';
import { authReducer } from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    todos: todosReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
