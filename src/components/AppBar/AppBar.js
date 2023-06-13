import { Navigation } from 'components/Navigation';
// import { Header } from './';
import { UserMenu } from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';
import { AppBar as AppBarContainer, Box, Container } from '@mui/material';

export const AppBar = () => {
  return (
    // <Header>
    //   <Navigation />
    //   <UserMenu />
    //   <AuthNav />
    //   </Header>
    <Box component={'header'}>
      <AppBarContainer position="static" color="primary">
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Navigation />
            {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
            <UserMenu /> <AuthNav />
          </Box>
        </Container>
      </AppBarContainer>
    </Box>
  );
};
