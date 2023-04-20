import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBCard, MDBCardBody,MDBRow, MDBCol}from 'mdb-react-ui-kit';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Box, Button, TextField } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import banner2 from 'assets/paluz-banner2.jpg';

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

function ResetPass() {

  const nav = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };

  const theme = createTheme();

  const handleLinkClick = (event, message) => {
    if (message === 'inicio') {
      nav("/")
    }

    console.log('Link clickeado');
    console.log(event.currentTarget);
    console.log(message);
  };

  return (
    <MDBContainer relative>

      <div className="p-5 bg-image img-responsive" style={{backgroundImage: `url(${banner2})`, height: '300px'}}></div>

      <MDBCard className='mx-5 mb-4 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-3 text-center'>

          <h2 className="fw-bold mb-4"> Recuperar contraseña </h2>
          <ThemeProvider theme={theme}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
          <Typography className='h5 mb-4'>
            Ingresa tu dirección de correo electrónico
          </Typography>

          <MDBRow className='justify-content-center'>
            <MDBCol md='6'>
              <TextField required fullWidth id="email" name="email" type="email" label="Correo Electrónico"/> 
            </MDBCol>
          </MDBRow>

          <Button type="submit" className='mt-4 mb-3' variant="contained" sx={{ bgcolor: 'teal' }}> Restablecer contraseña </Button>
          <Grid container className='mb-2'>
            <Grid item xs>
              <Link variant="body2" sx={{ cursor: 'pointer' }} onClick={event => handleLinkClick(event, 'inicio')}>
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 3 }} />
          </Box>
          </ThemeProvider>

        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default ResetPass;