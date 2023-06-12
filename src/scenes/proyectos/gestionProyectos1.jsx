import React from 'react';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
import ProgressSteps from 'components/ProgressStepper';
import UploadExcel from 'components/UploadExcel';
import ProjectsReport from 'components/ProjectsReport';

function GestionProyectos() {

//Theme
const theme = useTheme();

//Modal Styles
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: theme.palette.background.alt,
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius:5,
    p: 4,
    fontSize:30
  };

    //BreadCrumbs
    function handleClickBreadCrumbs(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    //Select
    const [proyecto, setProyecto] = React.useState('');

    const handleChangeSelect = (event) => {
      setProyecto(event.target.value);
    };

    //Indicador Modal
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    //Upload Modal
    const [openUpload, setOpenUpload] = React.useState(false);
    const handleOpenUploadModal = () => setOpenUpload(true);
    const handleCloseUploadModal = () => setOpenUpload(false);

    //Reports Modal
    const [openReports, setOpenReports] = React.useState(false);
    const handleOpenReportsModal = () => setOpenReports(true);
    const handleCloseReportsModal = () => setOpenReports(false);

  return (
    <Box m="2.5rem 2.5rem">
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
      <SettingsApplicationsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Gestión de Proyectos
    </Typography>
  </Breadcrumbs>
</Box>
<Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Gestión de Proyectos </Typography>
        <Box
        mt={3}
        gridColumn="span 2"
        gridRow="span 1"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="1.25rem 1rem"
        flex="1 1 100%"
        >
            <CssBaseline />
            <Container> 
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={8}>
                     <Card sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt }}>
                         <CardContent>
                            <Typography variant="h4" mb={2} component="div" className='text-center'>
                               Agregar Data de Resultados
                            </Typography>
                            <Divider />
                            <Grid container justifyContent='center'>
                                <Grid item xs={8}>
                                <Box sx={{ minWidth: 120, mt:3, mb:3}}>
                              <FormControl fullWidth required>
                              <InputLabel id="demo-simple-select-label"> Proyectos </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={proyecto}
                                label="Proyectos"
                                onChange={handleChangeSelect}
                               >
                                <MenuItem value="">  <em> Seleccione un Proyecto </em>  </MenuItem>
                                <MenuItem value={10}> Proyecto 1 </MenuItem>
                                <MenuItem value={20}>Proyecto 2</MenuItem>
                                <MenuItem value={30}> Proyecto 3 </MenuItem>
                              </Select>
                              </FormControl>
                            </Box>
                                </Grid>
                            </Grid>
                            <Divider>
                               <Chip label="Indicadores" />
                            </Divider>
                            <Grid container justifyContent='center' className='text-center'>
                                <Grid item xs={12} sm={6} mt={3}>
                                  <Typography variant='h5'>
                                     Indicador 1
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} mt={2}>
                                   <Button variant='contained' onClick={handleOpenModal} sx={{ bgcolor:'teal', color:'white' }}> Actualizar </Button>
                                   <Modal
                                   open={open}
                                   onClose={handleCloseModal}
                                   aria-labelledby="modal-modal-title"
                                   aria-describedby="modal-modal-description"
                                   >
                                     <Box sx={style}>
                                       <ProgressSteps onCloseModal={handleCloseModal}/>
                                     </Box>
                                   </Modal>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='center' className='text-center'>
                                <Grid item xs={12} sm={6} mt={2}>
                                  <Typography variant='h5'>
                                     Indicador 2
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} mt={2}>
                                   <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }}> Actualizar </Button>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent='center' className='text-center'>
                                <Grid item xs={12} sm={6} mt={2}>
                                  <Typography variant='h5'>
                                     Indicador 3
                                  </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} mt={2}>
                                   <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }}> Actualizar </Button>
                                </Grid>
                            </Grid>
                         </CardContent>
                     </Card>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                     <Card className='zoom' sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt }}>
                         <CardContent>
                            <Typography variant='h4' className='text-center' mb={2}> Cargar Base de Datos </Typography>
                            <Divider />
                            <Grid container justifyContent='center'>
                                <Grid item mt={2}>
                                  <Avatar sx={{ bgcolor: 'teal', width: 70, height: 70}}>
                                     <IconButton aria-label="uploadModal">
                                         <CloudUploadIcon onClick={handleOpenUploadModal} sx={{ fontSize:40, color:'white' }}/>
                                     </IconButton>
                                   </Avatar>
                                   <Modal
                                   open={openUpload}
                                   onClose={handleCloseUploadModal}
                                   aria-labelledby="modal-modal-title"
                                   aria-describedby="modal-modal-description"
                                   >
                                     <Box sx={style}>
                                        <UploadExcel onCloseModal={handleCloseUploadModal} />
                                     </Box>
                                    </Modal>
                                </Grid>
                            </Grid>
                         </CardContent>
                     </Card>
                     <Card className='zoom' sx={{ borderRadius:8, boxShadow:5, mt:2.7, bgcolor:theme.palette.background.alt }}>
                         <CardContent>
                             <Typography variant='h4' className='text-center' mb={2}> Reportes </Typography>
                             <Divider />
                            <Grid container justifyContent='center'>
                                <Grid item mt={2}>
                                  <Avatar sx={{ bgcolor: 'teal', width: 70, height: 70 }}>
                                     <IconButton aria-label="ReportsModal">
                                         <DescriptionRoundedIcon onClick={handleOpenReportsModal} sx={{ fontSize:40, color:'white' }}/>
                                     </IconButton>
                                   </Avatar>
                                   <Modal
                                   open={openReports}
                                   onClose={handleCloseReportsModal}
                                   aria-labelledby="modal-modal-title"
                                   aria-describedby="modal-modal-description"
                                   >
                                     <Box sx={style}>
                                        <ProjectsReport />
                                        <Divider />
                                        <Grid container justifyContent='flex-end'>
                                          <Grid item>
                                             <Button variant='contained' color='error' onClick={handleCloseReportsModal} sx={{ mt:2 }} > Salir </Button>
                                          </Grid>
                                        </Grid>
                                     </Box>
                                    </Modal>
                                </Grid>
                            </Grid>
                         </CardContent>
                     </Card>
                  </Grid>
                </Grid>
            </Container>
        </Box>
    </Box>
  )
}

export default GestionProyectos
