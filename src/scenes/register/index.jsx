import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { OutlinedInput, ListSubheader} from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es';
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

const theme = createTheme();

export default function Registro() {
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
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box display="flex" 
              component="img"
              alt="logo"
              src={logo}
              height="70px"
              width="240px"
              className='mb-3 img-responsive'
              maxWidth="sm"
            >
          </Box>
          <Typography component="h1" variant="h4">
            Regístrate
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  sx={{ bgcolor: 'white'}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="apellido"
                  label="Apellido"
                  name="apellido"
                  autoComplete="family-name"
                  sx={{ bgcolor: 'white'}}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  name="cedula"
                  required
                  fullWidth
                  id="cedula"
                  label="Cédula"
                  type="number"
                  sx={{ bgcolor: 'white'}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                 <InputLabel htmlFor="telefono" variant="outlined">Teléfono</InputLabel>
                 <OutlinedInput
                    value={values.textmask}
                    onChange={handleChangeTel}
                    name="textmask"
                    id="telefono"
                    inputComponent={TextMaskCustom}
                    label="Teléfono"
                    sx={{ bgcolor: 'white'}}
                 />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                 <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">  
                    {/*<DateField label="Fecha de Nacimiento" name="fnac" format="DD-MM-YYYY" required fullWidth />*/}
                     <DatePicker 
                       name="fnac"
                       label="Fecha/Nacimiento"
                       format="DD-MM-YYYY"
                       sx={{ width: '100%', bgcolor:'white' }}
                      />
                 </LocalizationProvider>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
              <InputLabel id="ocupación-label"> Ocupación </InputLabel>
              <Select
                id="ocupacion"
                name="ocupacion"
                value={ocup}
                label="Ocupación"
                onChange={handleChange}
                sx={{ bgcolor: 'white'}}
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
              </Grid>
              <Grid item xs={12}>
                 <TextField 
                 id="direccion" 
                 name="direccion" 
                 label="Dirección" 
                 fullWidth 
                 required 
                 multiline 
                 maxRows={4} 
                 sx={{ bgcolor: 'white'}} 
                 />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Correo Electrónico"
                  name="email"
                  autoComplete="email"
                  sx={{ bgcolor: 'white'}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 4, mb: 2, bgcolor:'teal' }}
            >
              Registrar Usuario
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
        <Copyright sx={{ mt: 3, mb: 3 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}