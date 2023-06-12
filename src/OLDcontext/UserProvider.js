import { useState } from 'react';
import { UserContext } from './userContext';

export const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);

  const logIn = () => {
    setIsLogin(true);
    setUserName('Test');
  };

  const logOut = () => {
    setIsLogin(false);
    setUserName(null);
  };

  return (
    <UserContext.Provider value={{ isLogin, userName, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
