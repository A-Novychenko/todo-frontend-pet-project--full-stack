import { Navigation } from 'components/Navigation';
import { Header } from './';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

export const AppBar = () => {
  return (
    <Header>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </Header>
  );
};
