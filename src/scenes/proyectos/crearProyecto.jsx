import React, { useState } from 'react'
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

  //Theme
  const theme = useTheme();

  function handleClickBreadCrumbs(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

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
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Inicio
    </Link>
    <Link
      underline="hover"
      sx={{ display:'flex', alignItems:'center' }}
      color="inherit"
      href="/proyectos"
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
</Box>
<Container>
  <Card sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt }}>
    <CardContent>
    <Grid container spacing={2}>
      <Grid item sm={6}>
        <Typography variant="h2" component="div" sx={{ ml:2, mb:3, mt:3, fontWeight:'bold' }}>
          Crear Proyecto
        </Typography>
      </Grid>
      <Grid item sm={6} >
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
               <DatePicker 
                 name="finic"
                 label="Fecha inicio"
                 format="DD-MM-YYYY"
                 sx={{ width: '100%' }}
               />
             </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">  
                <DatePicker 
                  name="ffin"
                  label="Fecha final"
                  format="DD-MM-YYYY"
                  sx={{ width: '100%' }}
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
            <Grid item xs={12}>
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
          <Grid container spacing={2} sx={{ mt:1 }}>
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
            <Grid item xs={12} sm={1} sx={{ mt: 1 }}>
              <Tooltip title="Eliminar Indicador">
                <Button variant='contained' 
                color='error' 
                fullWidth 
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
          <Grid item xs={12} sm={2} sx={{ mt:3 }}>
            <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} fullWidth onClick={handleClick}> Añadir Indicador </Button>
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
              <Button variant='contained' color='error' size='large' fullWidth> Cancelar </Button>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} size='large' fullWidth> Guardar </Button>
            </Grid>
          </Grid>
        </Box>
    </CardContent>
  </Card>
</Container>
</Box>
</Box>
  )
}

export default CrearProyecto 
