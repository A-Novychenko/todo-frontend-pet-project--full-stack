import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://642b3417d7081590f91e85c9.mockapi.io',
  }),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => `/todos`,
      providesTags: ['Todos'],
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
