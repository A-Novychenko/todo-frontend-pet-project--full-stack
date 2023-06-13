import { Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink as RouterNavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <Box component={'nav'}>
      <Toolbar sx={{}}>
        <Button component={RouterNavLink} variant="outline" to="/">
          <FormatListNumberedIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="p" sx={{ textTransform: 'none' }}>
            TodoApp
          </Typography>
        </Button>

        {/* {isLoggedIn && ( */}
        <Button component={RouterNavLink} to="/todos" variant="outline">
          <Typography variant="h6" component="p" sx={{ textTransform: 'none' }}>
            Todos
          </Typography>
        </Button>
        {/* )} */}
      </Toolbar>
    </Box>
  );
};
