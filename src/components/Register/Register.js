import { useDispatch } from 'react-redux';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { registerUser } from 'redux/auth/authOperations';
import { useState } from 'react';

export const Register = () => {
  const [isErrorLogin, setIsErrorLogin] = useState(null);
  const [isErrorMail, setIsErrorMail] = useState(null);
  const [isErrorPass, setIsErrorPass] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      login: formData.get('login'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    dispatch(registerUser(data));
    e.target.reset();
  };

  const handleChangeLogin = e => {
    if (e.target.value.trim().length === 0) {
      setIsErrorLogin(true);
    } else {
      setIsErrorLogin(null);
    }
  };
  const handleChangeEmail = e => {
    const validMail = e.target.value.includes('mail.com');
    const minLength = e.target.value.length > 9;
    if (validMail && minLength) {
      setIsErrorMail(null);
    } else {
      setIsErrorMail(true);
    }
  };
  const handleChangePassword = e => {
    const isValidPassword = e.target.value.length > 6;
    if (isValidPassword) {
      setIsErrorPass(null);
    } else {
      setIsErrorPass(true);
    }
  };

  return (
    <>
      <Container component="div" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <HowToRegIcon />
          </Avatar>
          <Typography component="h2" variant="h5">
            Register
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="login"
              name="login"
              onChange={handleChangeLogin}
              error={isErrorLogin}
              helperText={'Enter your login!'}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              onChange={handleChangeEmail}
              error={isErrorMail}
              helperText={'Domain must match "mail.com"'}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChangePassword}
              error={isErrorPass}
              helperText={'Password must be more than 7 characters'}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
