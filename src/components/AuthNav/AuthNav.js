import { NavLink } from 'react-router-dom';

import { Box, Button } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box>
      <Button component={NavLink} variant={'outline'} to="/register">
        Register
      </Button>
      <Button component={NavLink} variant={'outline'} to="/login">
        Log In
      </Button>
    </Box>
  );
};
