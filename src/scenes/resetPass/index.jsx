import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from 'assets/paluz-logo.png';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {' © '}
        
        {new Date().getFullYear()}
        {' - '}
        <Link color="inherit" href="https://paluz.org/">
          PALUZ
        </Link>{' '}
      </Typography>
    );
}  

const theme = createTheme();

export default function ResetPass() {

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email')
    });
  };

  const handleLinkClick = (event, message) => {
    if (message === 'inicio') {
      nav("/")
    }

    console.log('Link clickeado');
    console.log(event.currentTarget);
    console.log(message);
  };

  return (
    <div className='bg-img bg-div'>
      <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box display="flex" 
              component="img"
              alt="logo"
              src={logo}
              height="80px"
              width="270px"
              className='mb-3'
            >
          </Box>
          <Typography component="h1" variant="h4">
             Recuperar contraseña
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Typography className='text-center' component="h5" sx={{ mt: 1 }}>
                Ingresa tu direccion de correo electrónico y recibirás instrucciones para recuperar tu contraseña.
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electrónico"
              name="email"
              autoComplete="email"
              sx={{ mt: 3, bgcolor:'white' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, bgcolor:'teal' }}
            >
              Recuperar contraseña
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
              <Link variant="body2" sx={{ cursor: 'pointer' }} onClick={event => handleLinkClick(event, 'inicio')}>
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}