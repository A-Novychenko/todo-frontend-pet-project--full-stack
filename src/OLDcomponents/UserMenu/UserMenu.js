import { useUser } from 'OLDcontext/userContext';
import { LoginBtn, UserBar, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const { isLogin, userName, logIn, logOut } = useUser();

  return (
    <UserBar isLogin={isLogin}>
      {isLogin && <Name>{userName}</Name>}
      {isLogin ? (
        <LoginBtn onClick={logOut}>Log out</LoginBtn>
      ) : (
        <LoginBtn onClick={logIn}>Log in</LoginBtn>
      )}
    </UserBar>
  );
};
