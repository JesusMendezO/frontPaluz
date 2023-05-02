import * as React from 'react';
import { useState } from 'react';
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
import clienteAxios from '../../config/clienteAxios';
import { useGetProcatQuery, useGetCategoriasQuery } from "state/api";
import Alert from '@mui/material/Alert';


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

  let{ data, isLoading } = useGetProcatQuery();
  let pro= useGetCategoriasQuery();
  pro=pro.data
  console.log(pro);
    const handleSubmit = async event=> {
    event.preventDefault();
    let dataform = new FormData(event.currentTarget);
   

    try {
      
      const { data1 } = await clienteAxios.post('/perfil/voluntario/', {
        nombres: dataform.get('nombre'),
        apellidos: dataform.get('apellido'),
        cedula: dataform.get('cedula'),
        correo: dataform.get('email'),
        telefono: dataform.get('textmask'),
        fnacimiento:new Date(selectedDate).toLocaleDateString('es-ES') ,
        ocupacion: dataform.get('ocupacion'),
        direccion: dataform.get('direccion'),
      })
      .then(function (response) {
        setAlerta({})
        //console.log(response.data.idToken)
          //localStorage.setItem('token',JSON.stringify(response.data) )
          //setAuth(data)
          event.target.reset();
          setOcup('');
          setAlertaF(false)
          setAlerta(true)
          setTimeout(function(){
            setAlerta(false);
        }, 3000);
          handleDateChange(null);
      })
      .catch(function (error) {
        event.preventDefault();
        
      
        console.log('error')
       // document.getElementById(":r7:").value='';

        
        setAlertaF(true);
        setTimeout(function(){
          setAlertaF(false);
      }, 3000);
        setAlerta(false);
      });
    
      
      console.log(data1)
      
  } catch (error) {
      
  }

  };

  const nav = useNavigate();
  const [alerta, setAlerta] = useState('')
  const [alertaF, setAlertaF] = useState('')
  const [ocup, setOcup] = React.useState('');
  const [date, setDate] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChange = (event) => {
    console.log("hola")
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
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
  };
  const handleLinkClick = (event, message) => {
    if (message === 'inicio') {
      nav("/")
    }
   

    console.log('Link clickeado');
    console.log(event.currentTarget);
    console.log(message);
  };
  if (!data || isLoading || !pro) return "Loading..."
  return (
    <div className='bg-img bg-div'>
      <ThemeProvider theme={theme}>
      <div style={{ position: 'relative', marginTop:5, marginRight:5 }}>
      {
          alerta ?  <Alert variant="filled" severity="success" sx={{ position: 'absolute', top: 0, right: 0, zIndex:999, borderRadius:2, boxShadow:4 }}>
  ¡Usuario creado exitosamente!
</Alert> :''
}
{
          alertaF ? <Alert variant="filled" severity="error" sx={{ position: 'absolute', top: 0, right: 0, zIndex:999, borderRadius:2, boxShadow:4 }}>

          ¡No se pudo registrar el usuario!
       
       </Alert>:''
}

          
        </div>
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
                       id="fnac"
                       name="fnac"
                       label="Fecha/Nacimiento"
                       format="DD-MM-YYYY"
                       clearable
          disableFuture
          value={selectedDate}
          onChange={handleDateChange}
                      //  onChange={(date) => {
                      //   setDate(new Date(date).toLocaleDateString('es-ES'));
                   
                      // }}
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
              
                {/* {data.map(dato => {
                return <ListSubheader> {dato.nombre} </ListSubheader>
                 } )} */}
                 
                 {
        data.map((dat,index)=>(

           <MenuItem value={dat.id_pro}>
          {dat.descripcion}
          </MenuItem>
          
          
        ))
       



      }

                 

                
    
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
          {
          alerta ?  <Alert variant="filled" severity="success">
  ¡Usuario creado exitosamente!
</Alert> :''
}
{
          alertaF ? <Alert variant="filled" severity="error">

          ¡No se pudo registrar el usuario!
       
       </Alert>:''
}

        </Box>
        <Copyright sx={{ mt: 3, mb: 3 }} />
      </Container>
    </ThemeProvider>
    </div>
  );
}