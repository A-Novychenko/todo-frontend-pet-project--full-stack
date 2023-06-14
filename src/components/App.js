import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { Layout } from './Layout';

export const App = () => {
  return (
    <>
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
