import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
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

export default function CreatePass() {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email')
    });
  };

  //Show Password Handlers
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className='bg-img bg-div'>
      <ThemeProvider theme={theme}>
        {/*<div style={{ position: 'relative', marginTop:5, marginRight:5 }}>
          <Alert variant="filled" severity="success" sx={{ position: 'absolute', top: 0, right: 0, zIndex:999, borderRadius:2, boxShadow:4 }}>
           ¡Contraseña creada exitosamente!
          </Alert>
        </div>
        <div style={{ position: 'relative', marginTop:5, marginRight:5 }}>
          <Alert variant="filled" severity="error" sx={{ position: 'absolute', top: 0, right: 0, zIndex:999, borderRadius:2, boxShadow:4 }}>
           ¡Error al crear la contraseña!
          </Alert>
        </div>*/}
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
             Crear Contraseña
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
            <Typography className='text-center' component="h5" sx={{ mt: 1 }}>
                Ingresa una contraseña para tu nueva cuenta.
            </Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Contraseña"
              name="password"
              type={showPassword ? 'text' : 'password'}
              sx={{ mt: 3, bgcolor:'white' }}
              value={password}
                onChange={ e => setPassword(e.target.value)}
                autoComplete="current-password"
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Cambiar visibilidad de la contraseña"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
            />

           <TextField
              margin="normal"
              required
              fullWidth
              id="confirmPass"
              label="Confirmar Contraseña"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              sx={{ mt: 3, bgcolor:'white' }}
              value={confirmPassword}
                onChange={ e => setConfirmPassword(e.target.value)}
                autoComplete="current-password"
                InputProps={{ 
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Cambiar visibilidad de la contraseña"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, bgcolor:'teal' }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}