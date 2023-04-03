import axios from 'axios';

axios.defaults.baseURL = 'https://642b3417d7081590f91e85c9.mockapi.io';

export const addTodo = async todo => {
  const resp = await axios.post('/todos', todo);
  return resp.data;
};

export const getTodo = async () => {
  const resp = await axios.get('/todos');
  return resp.data;
};

export const updTodo = async fields => {
  const resp = await axios.put(`/todos/${fields.id}`, fields);
  return resp.data;
};

export const delTodo = async id => {
  const resp = await axios.delete(`/todos/${id}`);
  return resp.data;
};

export const resetTodo = async fields => {
  const resp = await axios.put(`/todos/[${[]}`);
  return resp.data;
};
