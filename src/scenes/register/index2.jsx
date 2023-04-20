import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBCard, MDBCardBody } from 'mdb-react-ui-kit';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { Typography, ListSubheader, Box, TextField, Stack, Button, OutlinedInput  } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import banner1 from 'assets/paluz-banner1.png';

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

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#000) 000-0000"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


function Registro() {

  const nav = useNavigate();

  const [ocup, setOcup] = React.useState('');

  const handleChange = (event) => {
    setOcup(event.target.value);
  };

  const [values, setValues] = React.useState({
    textmask: '',
  });

  const handleChangeTel = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      nombre: data.get('nombre'),
      apellido: data.get('apellido'),
      cedula: data.get('cedula'),
      email: data.get('email'),
      telefono: data.get('textmask'),
      fnacimiento: data.get('fnac'),
      ocupacion: data.get('ocupacion'),
      direccion: data.get('direccion'),
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

  const theme = createTheme();

  return (
    <MDBContainer relative>

      <div className="p-5 bg-image img-responsive" style={{backgroundImage: `url(${banner1})`, height: '320px'}}></div>

      <MDBCard className='mx-5 mb-2 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-3 text-center'>
          <h2 className="fw-bold mb-3"> Regístrate </h2>
          <ThemeProvider theme={theme}>
          <Box component="form" noValidate onSubmit={handleSubmit}>
          <Stack
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 2, sm: 2, md: 4 }}
          >
             <TextField required fullWidth id="nombre" name="nombre" label="Nombre"/>
             <TextField required fullWidth id="apellido" name="apellido" label="Apellido"/>   
          </Stack>
          <Stack
           className='mt-3'
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <TextField required fullWidth id="cedula" name="cedula" type="number" label="Cédula"/>  
            <TextField required fullWidth id="email" name="email" type="email" label="Correo Electrónico"/>   
          </Stack>

          <Stack
           className='mt-3'
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <FormControl fullWidth required>
            <InputLabel htmlFor="telefono" variant="outlined">Teléfono</InputLabel>
            <OutlinedInput
              value={values.textmask}
              onChange={handleChangeTel}
              name="textmask"
              id="telefono"
              inputComponent={TextMaskCustom}
              label="Teléfono"
            />
            </FormControl>
            
            <LocalizationProvider dateAdapter={AdapterDayjs}>  
              <DateField label="Fecha de Nacimiento" name="fnac" format="DD-MM-YYYY" required fullWidth />
            </LocalizationProvider>

             <FormControl fullWidth required>
              <InputLabel id="ocupación-label"> Ocupación </InputLabel>
              <Select
                id="ocupacion"
                name="ocupacion"
                value={ocup}
                label="Ocupación"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Seleccione su Ocupación</em>
                </MenuItem>
                <ListSubheader> Médicos </ListSubheader>
                <MenuItem value={10}> Médico General</MenuItem>
                <MenuItem value={20}> Médico Familiar</MenuItem>
                <MenuItem value={30}> Ginecólogo </MenuItem>
                <MenuItem value={40}> Internista </MenuItem>

                <ListSubheader> Estudiantes </ListSubheader>
                <MenuItem value={50}> Primer Año </MenuItem>
                <MenuItem value={60}> Segundo Año </MenuItem>
                <MenuItem value={70}> Tercer Año </MenuItem>
                <MenuItem value={80}> Cuarto Año </MenuItem>
                <MenuItem value={90}> Quinto Año </MenuItem>
                <MenuItem value={100}> Sexto Año </MenuItem>

                <ListSubheader> Ingenieros </ListSubheader>
                <MenuItem value={101}> Ing. Computación </MenuItem>
                <MenuItem value={102}> Ing. Industrial </MenuItem>
                <MenuItem value={103}> Ing. Sistemas </MenuItem>

                <ListSubheader> Otras Especialidades </ListSubheader>
                <MenuItem value={104}> Comunicador/a Social </MenuItem>
                <MenuItem value={105}> Lic. en Administración </MenuItem>
                <MenuItem value={106}> Lic. en Contaduría </MenuItem>
                <MenuItem value={107}> Nutricionista </MenuItem>
                <MenuItem value={108}> Psicólogo/a </MenuItem>

                <ListSubheader> Miscelaneo </ListSubheader>
                <MenuItem value={109}> Otro </MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack
           className='mt-3'
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <TextField id="direccion" name="direccion" label="Dirección" fullWidth required multiline maxRows={4} />
          </Stack>

          <Button type="submit" className='mt-3 mb-3' variant="contained" sx={{ bgcolor: 'teal' }}> Registrar Usuario </Button>

          <Grid container className='mb-1'>
            <Grid item xs>
              <Link variant="body2" sx={{ cursor: 'pointer' }} onClick={event => handleLinkClick(event, 'inicio')}>
                ¿Ya tienes cuenta? Inicia sesión
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 2 }} />
          </Box>
          </ThemeProvider>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Registro;