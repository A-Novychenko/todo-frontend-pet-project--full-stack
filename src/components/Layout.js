import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Container } from '@mui/material';

import { AppBar } from './AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <div>
        <Container maxWidth="xl">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </div>
    </>
  );
};
