import { Box, Button, Typography } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/auth/authOperations';

export const UserMenu = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const userName = login => {
    const name = user.login.split('');
    name[0] = name[0].toUpperCase();
    return name.join('');
  };

  return (
    <Box
      component={'div'}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <AccountBoxIcon sx={{ mr: 1 }} />
        <Typography>{userName(user.login)}</Typography>
        {/* <Typography>Welcome, user.name</Typography> */}
      </Box>

      <Button
        component="button"
        type="button"
        variant="outline"
        onClick={() => dispatch(logoutUser())}
      >
        Logout
      </Button>
    </Box>
  );
};
