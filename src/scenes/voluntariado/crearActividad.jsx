import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
//import { esES } from '@mui/x-date-pickers/locales';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import 'dayjs/locale/es';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import DeleteIcon from '@mui/icons-material/Delete';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

// Array Select Multiple
const actividad = [
  'Jornada Médica',
  'Jornada de Nutrición',
  'Jornada de Desparasitación',
  'Capacitación',
  'Entrega de Insumos',
];

// Array Select Multiple
const equipos = [
  'Alfa',
  'Beta',
  'Delta',
  'Gamma',
  'Omega',
  'Zeta',
];

const CrearActividad = () => {

 const nav = useNavigate();

 //Theme
 const theme = useTheme();

 //DatePicker Value
 const [valueDP, setValueDP] = React.useState(new Date());
 const handleChangeDP = (newValueDP) => {
  setValueDP(newValueDP);
};

 //TimePicker Values
 const [newValueHE, setValueHE] = React.useState(null);
 const handleChangeHE = (newValueHE) => {
  setValueHE(newValueHE);
};

 const [newValueHS, setValueHS] = React.useState(null);
 const handleChangeHS = (newValueHS) => {
  setValueHS(newValueHS);
};

const [newValueRT, setValueRT] = React.useState(null);
const handleChangeRT = (newValueRT) => {
 setValueRT(newValueRT);
};

//BreadCrumbs
function handleClickBreadCrumbs(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

//Modal Styles
const style = {
  position: 'inherit',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 375,
  bgcolor: theme.palette.background.alt,
  border: '2px solid #000',
  borderRadius: 4,
  boxShadow: 1,
  p: 4, 
};

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

//Actividad Select
const [actividadOpc, setActividadOpc] = React.useState([]);
const handleChangeActividad = (event) => {
  const {
    target: { value },
  } = event;
  setActividadOpc(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

//Equipos Select
const [equiposOpc, setEquiposOpc] = React.useState([]);
const handleChangeEquipos = (event) => {
  const {
    target: { value },
  } = event;
  setEquiposOpc(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

//Proyecto Select
const [proyecto, setProyecto] = React.useState('');
  const handleChangeProyecto = (event) => {
    setProyecto(event.target.value);
};

//Cantidad de Voluntarios Inputs
const [data,setData]=useState([{roles:"",cantidad:""}])
   
    const handleClick=()=>{
        setData([...data,{roles:"",cantidad:""}])
    }
    const handleChangeInput=(e,i)=>{
        const {name,value}=e.target
        const onchangeVal = [...data]
        onchangeVal[i][name]=value
        setData(onchangeVal)
    }
    const handleDelete=(i)=>{
        const deleteVal = [...data]
        deleteVal.splice(i,1)
        setData(deleteVal)
    }

//Routes
const handleLinkClick = (event, message) => {
  if (message === 'cancelar') {
    nav("/voluntariado") 
  }
};
const handleLinkHome = (event, message) => {
  if (message === 'home') {
    nav("/inicio")
  }
};
const handleLinkVol = (event, message) => {
  if (message === 'voluntariado') {
    nav("/voluntariado")
  }
};

//Form Submit
const [loc, setLoc] = React.useState('');

const handleLoc = (event) => {
  setLoc(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();

  alert(proyecto + ' ' + actividadOpc + ' ' + loc + ' ' + valueDP);
};

  return (
    <Box m="1.5rem 1.5rem">
    <Box
    gridColumn="span 2"
    gridRow="span 1"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    p="1.25rem 1rem"
    flex="1 1 100%"
    borderRadius="0.55rem"
    >
    <CssBaseline />
    <Box role="presentation" onClick={handleClickBreadCrumbs} sx={{ mb:3 }}>
    <Breadcrumbs aria-label="breadcrumb">
    <Link
      underline="hover"
      sx={{ display:'flex', alignItems:'center' }}
      color="inherit"
      href="/inicio"
      onClick={event => handleLinkHome(event, 'home')}
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Inicio
    </Link>
    <Link
      underline="hover"
      sx={{ display:'flex', alignItems:'center' }}
      color="inherit"
      href="/voluntariado"
      onClick={event => handleLinkVol(event, 'voluntariado')}
    >
      <VolunteerActivismIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Voluntariado
    </Link>
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <MoreTimeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Crear Convocatoria
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Crear Convocatoria </Typography>
  </Box> 
  <Container>
  <Card sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt }}>
    <CardContent>
      <Divider sx={{ mt:2, mb:3 }}>
        <Chip label="INFORMACIÓN GENERAL" />
      </Divider>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" required> Proyecto que Convoca </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="convoc"
                label="Proyecto que Convoca"
                value={proyecto}
                onChange={handleChangeProyecto}
              >
              <MenuItem value="">
                <em> Seleccione un Proyecto </em>
              </MenuItem>
              <MenuItem value={11}> Proyecto 1 </MenuItem>
              <MenuItem value={21}> Proyecto 2 </MenuItem>
              <MenuItem value={31}> Proyecto 3 </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
         <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" required> Tipo de Actividad </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="tipoAct"
                label="Tipo de Actividad"
                multiple
                value={actividadOpc}
                onChange={handleChangeActividad}
                input={<OutlinedInput label="Tipo de Actividad" />}
                >
                  {actividad.map((nameActividad) => (
                  <MenuItem
                   key={nameActividad}
                   value={nameActividad}
                  >
                  {nameActividad}
                  </MenuItem>
                ))}
             </Select>
         </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
          name="locacion"
          required
          fullWidth
          id="locacion"
          label="Locación"
          value={loc}
          onChange={handleLoc}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">  
            <DesktopDatePicker
            label="Fecha"
            name="fecha"
            inputFormat="DD/MM/YYYY" 
            value={valueDP}
            onChange={handleChangeDP}
            renderInput={(params) => {
              return <TextField  fullWidth {...params} />;
            }}
            clearable
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
          name="encuentro"
          required
          fullWidth
          id="encuentro"
          label="Punto de Encuentro"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
        <TextField
          name="duracion"
          required
          fullWidth
          id="duracion"
          label="Duración Aprox."
        />
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
            name="horaEncuentro"
            label="Hora de Encuentro"
            value={newValueHE}
            onChange={handleChangeHE}
            renderInput={(params) => {
              return <TextField fullWidth {...params} />;
            }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
            name="horaSalida"
            label="Hora de Salida" 
            value={newValueHS}
            onChange={handleChangeHS}
            renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileTimePicker
            name="horaRetorno"
            label="Hora Estimada de Retorno" 
            value={newValueRT}
            onChange={handleChangeRT}
            renderInput={(params) => <TextField fullWidth {...params} />}
            />
          </LocalizationProvider>
          </Grid>
      </Grid>
      <Divider sx={{ mt:4, mb:3 }}>
        <Chip label="CANTIDAD DE VOLUNTARIOS" />
      </Divider>
      {
          data.map((val,i)=>
          <div>
          <Grid container spacing={2} sx={{ mt:1 }} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
               <InputLabel id="roles" required> Roles </InputLabel>
               <Select
                labelId="roles-select"
                id="roles-select"
                label="Roles"
                name='roles'
                value={val.roles}
                onChange={(e)=>handleChangeInput(e,i)}
               >
                 <MenuItem value="">
                   <em> Seleccione un Rol </em>
                 </MenuItem>
                 <MenuItem value={'Médico General'}> Médico General </MenuItem>
                 <MenuItem value={'Médico Familiar'}> Médico Familiar </MenuItem>
                 <MenuItem value={'Ginecólogo'}> Ginecólogo </MenuItem>
                 <MenuItem value={'Internista'}> Internista </MenuItem>
               </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="cantidad"
                label="Cantidad"
                name="cantidad" 
                value={val.metas} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
            <Grid item xs={4} sm={1} sx={{ mt: 1 }}>
              <Tooltip title="Eliminar">
                <Button variant='contained' 
                color='error' 
                fullWidth 
                sx={{ borderRadius:2 }}
                onClick={()=>handleDelete(i)}
                > 
                  <DeleteIcon /> 
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
          </div>
            )
          }
          <Grid container justifyContent="center">
            <Grid item xs={6} sm={2} sx={{ mt:3 }}>
              <Button variant='contained' sx={{ bgcolor:'teal', color:'white', borderRadius:2 }} fullWidth onClick={handleClick}> Añadir Más </Button>
            </Grid>
          </Grid>
          {/*<p>{JSON.stringify(data)}</p>*/}
          <Divider sx={{ mt:4, mb:3 }}>
            <Chip label="EQUIPOS" />
          </Divider>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} sx={{ mt:2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> Equipos </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Equipos"
                multiple
                value={equiposOpc}
                onChange={handleChangeEquipos}
                input={<OutlinedInput label="Equipos" />}
                >
                  {equipos.map((nameEquipos) => (
                  <MenuItem
                   key={nameEquipos}
                   value={nameEquipos}
                  >
                  {nameEquipos}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
          </Grid>
          <Divider sx={{ mt:4, mb:3 }}>
            <Chip label="LOGÍSTICA NECESARIA" />
          </Divider>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={5}>
            <div>
          <FormControlLabel
            control={
              <Checkbox name="sillas" color="success"  />
            }
            label="Sillas"
          />
          <FormControlLabel
            control={
              <Checkbox name="mesas" color="success"  />
            }
            label="Mesas"
          />
          <FormControlLabel
            control={
              <Checkbox name="minibus" color="success"  />
            }
            label="Minibus (Coaster)"
          />
           <FormControlLabel
            control={
              <Checkbox name="pickup" color="success"  />
            }
            label="Pickup"
          />
         </div>
           </Grid>
          </Grid>
          <Grid container justifyContent="center" mt={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField
              name="comentarios"
              fullWidth
              id="comentarios"
              label="Comentarios"
              multiline
              maxRows={4}
              />
            </Grid>
          </Grid>
          <Divider sx={{ mt:4, mb:3 }}>
            <Chip label="INSUMOS NECESARIOS" />
          </Divider>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8}>
            <div>
          <FormControlLabel
            control={
              <Checkbox name="plumpy" color="success"  />
            }
            label="Plumpy"
          />
          <FormControlLabel
            control={
              <Checkbox name="rutf" color="success"  />
            }
            label="RUTF"
          />
          <FormControlLabel
            control={
              <Checkbox name="desp" color="success"  />
            }
            label="Desparasitantes"
          />
           <FormControlLabel
            control={
              <Checkbox name="micronut" color="success"  />
            }
            label="Micronutrientes"
          />
          <FormControlLabel
            control={
              <Checkbox name="meds" color="success"  />
            }
            label="Medicamentos"
          />
         </div>
           </Grid>
          </Grid>
          <Divider sx={{ mt:5 }}></Divider>
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="center" >
            <Grid item sm={3} xs={6}>
              <Button variant='contained' color='error' size='large' fullWidth onClick={handleOpen}> Cancelar </Button>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Button variant='contained' type='submit' sx={{ bgcolor:'teal', color:'white' }} size='large' fullWidth> Guardar </Button>
            </Grid>
          </Grid>
        </form>
    </CardContent>
  </Card>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
    >
      <Box sx={style}>
        <Typography variant='h6' className='text-center' sx={{ mb:1.5 }}> ¿Está seguro de cancelar esta operación? </Typography>
          <Divider sx={{ mt:2 }} />
          <Grid container sx={{ mt:1 }} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleClose}> No </Button>
             </Grid>
             <Grid item>
               <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} onClick={event => handleLinkClick(event, 'cancelar')}> Si </Button>
             </Grid>
          </Grid>
        </Box>
    </Modal>
  </Container>
  </Box>
  </Box>
  )
}

export default CrearActividad