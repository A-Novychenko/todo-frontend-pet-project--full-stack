import axios from 'axios';

axios.defaults.baseURL = 'https://6403b8063bdc59fa8f2bad68.mockapi.io';

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
