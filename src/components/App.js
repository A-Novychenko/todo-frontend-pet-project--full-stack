import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { Layout } from './Layout';
import { getAllTodo } from 'redux/todos/todosOperations';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(getAllTodo());
        }}
      >
        getTodos
      </button>
      <Layout />
      <RegisterPage />
      <div style={{ textAlign: 'center' }}>
        <p>login: novychenkoae </p>
        <p>email: novychenkoae@gmail.com</p>
        <p>password: examplepassword</p>
      </div>
      <LoginPage />
    </>
  );
};
