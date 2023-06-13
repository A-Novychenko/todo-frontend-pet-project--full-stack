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
    addTodo: builder.mutation({
      query: text => ({
        url: `/todos`,
        method: 'POST',
        body: { text, completed: false, priority: false },
      }),
      invalidatesTags: ['Todos'],
    }),
    changeStatus: builder.mutation({
      query: config => ({
        url: `/todos/${config.id}`,
        method: 'PUT',
        body: config,
      }),
      invalidatesTags: ['Todos'],
    }),
    deleteTodo: builder.mutation({
      query: id => ({
        url: `/todos/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useChangeStatusMutation,
} = todosApi;
