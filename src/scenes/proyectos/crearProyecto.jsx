import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import 'dayjs/locale/es';
import Select from '@mui/material/Select';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ImagePicker from 'components/ImagePicker';
import OutlinedInput from '@mui/material/OutlinedInput';

// Array Select Multiple
const sector = [
  'NUT',
  'WASH',
  'Salud',
  'Educación',
];

const CrearProyecto = () => {

  const nav = useNavigate();

  //Theme
  const theme = useTheme();

  function handleClickBreadCrumbs(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  //DatePicker Value
  const [valueFI, setValueFI] = React.useState(null);
  const [valueFF, setValueFF] = React.useState(null);

  //Socios Select
  const [soc, setSoc] = React.useState('');

  const handleChange = (event) => {
    setSoc(event.target.value);
  };

  //Indicadores Inputs
  const [data,setData]=useState([{indicador:"",metas:"",mediosVerif:""}])
   
    const handleClick=()=>{
        setData([...data,{indicador:"",metas:"",mediosVerif:""}])
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
  
  //Sector Select
  const [sectorOpc, setSectorOpc] = React.useState([]);
  const handleChangeSector = (event) => {
    const {
      target: { value },
    } = event;
    setSectorOpc(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  //Routes
 const handleLinkClick = (event, message) => {
  if (message === 'cancelar') {
    nav("/proyectos")
    
  }
};

const handleLinkHome = (event, message) => {
  if (message === 'home') {
    nav("/inicio")
  }
};

const handleLinkProjects = (event, message) => {
  if (message === 'proyectos') {
    nav("/proyectos")
  }
};

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

//Modal Handlers
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [openAlert, setOpenAlert] = React.useState(false);
const handleOpenAlert = () => {
  setOpenAlert(true);
  handleCloseAlert();
}
const handleCloseAlert = () => setTimeout(() => {
  setOpenAlert(false);
}, 2000);

return (

<Box m="1.5rem 2.5rem">
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
      href="/proyectos"
      onClick={event => handleLinkProjects(event, 'proyectos')}

    >
      <CasesRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Proyectos
    </Link>
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <CreateNewFolderIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Crear Proyecto
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" component="div" sx={{ mt:3, mb:1, fontWeight:'bold' }}>
      Crear Proyecto
  </Typography>
</Box>
<Container>
  <Card sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt }}>
    <CardContent>
    <Grid container spacing={2}>
      <Grid item xs={11} sm={6}>
        <Typography variant="h5" className='text-center' component="div" sx={{ ml:2, mb:1, mt:3, fontWeight:'bold' }}>
          Agregar un logo para el proyecto
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} >
        <ImagePicker />
      </Grid>
    </Grid>
     <Box>
     <Divider sx={{ mt:4, mb:3 }}>
        <Chip label="INFORMACIÓN GENERAL" />
      </Divider>
       <Grid container spacing={2}>
         <Grid item xs={12} sm={6}>
            <TextField
              name="nombreProyecto"
              required
              fullWidth
              id="nombreProyecto"
              label="Nombre del Proyecto"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="codigoProyecto"
              label="Código del Proyecto"
              name="codigoProyecto"
            />
          </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                <DesktopDatePicker
                label="Fecha inicio"
                name="finic"
                inputFormat="DD/MM/YYYY" 
                value={valueFI}
                onChange={setValueFI}
                renderInput={(params) => {
                 return <TextField fullWidth {...params} />;
                }}
                clearable
              />
              </LocalizationProvider>  
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                <DesktopDatePicker
                label="Fecha final"
                name="ffinal"
                inputFormat="DD/MM/YYYY" 
                value={valueFF}
                onChange={setValueFF}
                renderInput={(params) => {
                 return <TextField fullWidth {...params} />;
                }}
                clearable
              />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label"> Socio </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Socios"
                    value={soc}
                    onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em> Seleccione un Socio </em>
                    </MenuItem>
                    <MenuItem value={11}> IRC </MenuItem>
                    <MenuItem value={21}> FHV </MenuItem>
                    <MenuItem value={31}> UNICEF </MenuItem>
                  </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"> Sector </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Sector"
                  multiple
                  value={sectorOpc}
                  onChange={handleChangeSector}
                  input={<OutlinedInput label="Sector" />}
                  >
                    {sector.map((nameSec) => (
                     <MenuItem
                      key={nameSec}
                      value={nameSec}
                     >
                     {nameSec}
                     </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
              id="descripcion" 
              name="descripción" 
              label="Descripción" 
              fullWidth 
              required 
              multiline 
              maxRows={5} 
              />
            </Grid>
          </Grid>
          <Divider sx={{ mt:4 }}>
            <Chip label="INDICADORES" />
          </Divider>
          {
          data.map((val,i)=>
          <div>
          <Grid container spacing={2} sx={{ mt:1 }} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                id="indicador"
                label="Indicador"
                name="indicador" 
                value={val.indicador} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                fullWidth
                id="metas"
                label="Target/Metas"
                name="metas" 
                value={val.metas} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField 
              id="mediosVerif" 
              label="Medios de Verificación" 
              fullWidth 
              required 
              name="mediosVerif" 
              value={val.mediosVerif} onChange={(e)=>handleChangeInput(e,i)}
              />
            </Grid>
            <Grid item xs={5} sm={1} sx={{ mt: 1 }}>
              <Tooltip title="Eliminar Indicador">
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
            <Grid item xs={8} sm={2} sx={{ mt:3 }}>
              <Button variant='contained' sx={{ bgcolor:'teal', color:'white', borderRadius:2 }} fullWidth onClick={handleClick}> Añadir Más </Button>
            </Grid>
          </Grid>
          {/*<p>{JSON.stringify(data)}</p>*/}
          <Divider sx={{ mt:4 }}>
            <Chip label="GESTIÓN DE EQUIPOS" />
          </Divider>
          <Grid container spacing={2} sx={{ mt:1 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="coordProyecto"
                required
                fullWidth
                id="coordProyecto"
                label="Coordinador de Proyecto"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="coordME"
                label="Coordinador de M/E"
                name="coordME"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="coordCadenaSum"
                label="Coordinador de Cadena de Suministros"
                name="coordCadenaSum"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="coordLog"
                label="Coordinador de Logística"
                name="coordLog"
              />
            </Grid>
          </Grid>
          <Divider sx={{ mt:5 }}></Divider>
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="center" >
            <Grid item sm={3} xs={6}>
              <Button variant='contained' color='error' size='large' fullWidth onClick={handleOpen}> Cancelar </Button>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} size='large' fullWidth onClick={handleOpenAlert}> Guardar </Button>
            </Grid>
          </Grid>
        </Box>
    </CardContent>
  </Card>
    <Modal
        open={openAlert}
        onClose={handleCloseAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='text-center'>
            <TaskAltOutlinedIcon color='success' sx={{ fontWeight:'bold',mt:3, fontSize:80 }}/>
          </Typography>
          <Typography id="modal-modal-description" className='text-center' sx={{ mt: 2, fontSize:20, fontWeight:'bold' }}>
            ¡El proyecto se ha guardado exitosamente!
          </Typography>
        </Box>
      </Modal>
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

export default CrearProyecto 
