import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { Layout } from './Layout';

// import { useDispatch } from 'react-redux';

import TodosPage from 'pages/TodosPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TodosDetailsPage from 'pages/TodosDetailsPage';

export const App = () => {
  // const dispatch = useDispatch();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="todos" element={<TodosPage />} />
        <Route path="todos/:todoId" element={<TodosDetailsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
