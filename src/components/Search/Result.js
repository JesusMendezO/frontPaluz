import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Modal from "@mui/material/Modal";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import iconNutri from 'assets/icon-nutri.png';
import iconSalud from 'assets/icon-salud.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Result({ result }) {
  //Theme
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  //Modal Styles
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isSmallScreen ? '95%' : 510,
    bgcolor: theme.palette.background.alt,
    border: '2px solid #000',
    borderRadius:5,
    boxShadow: 24,
    p: 4,
  };

  //Modal Handlers
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Tabs Handlers
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Container maxWidth="xs">
      <Grid>
       <Grid item mt={2} mb={1} mr={1}>
         <Card sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt, border:"solid 1px"}}>
           <CardContent>
             <div className="card-body">
               <p className="card-title font-result"><span className="b"><img className="icon-img" alt="Nutrición" title="Nutrición" src={iconNutri}/></span><strong>{result.title}</strong> </p>
               <p className="mt-3">{result.description}</p>
               <div className="card-actions justify-end">
                 <button className="btn btn-block mt-2" style={{ backgroundColor:'teal', color:'white' }} onClick={handleOpen}>
                    Ver más
                 </button>
               </div>
             </div>
           </CardContent>
         </Card>
       </Grid>
     </Grid>
     <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ width: '100%' }}>
           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
             <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
               <Tab label="Datos Básicos" {...a11yProps(0)} />
               <Tab label="Diagnósticos" {...a11yProps(1)} />
               <Tab label="Tratamientos" {...a11yProps(2)} />
             </Tabs>
           </Box>
           <TabPanel value={value} index={0}>
             <Typography variant="h4" className="text-center" sx={{ fontWeight:'bold', mb:2 }}><img className="icon-img-modal" alt="Nutrición" title="Nutrición" src={iconNutri}/> José Alejandro Pirela Coscorrosa </Typography>
             <Grid container justifyContent='center'>
               <Grid item xs={11} mt={2}>
                 <Typography><strong>Nombre Representante: </strong>N/A</Typography> 
               </Grid> 
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Cédula: </strong>19765877</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Fecha de Nacimiento: </strong>16/05/1989</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Edad: </strong>34</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Género: </strong>Másculino</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Grupo Étnico: </strong>N/A</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Municipio: </strong>Maracaibo</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Comunidad: </strong>Pomona</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Atendido por: </strong>Dr(a). XXXX XXXX</Typography> 
               </Grid>
               <Grid item xs={11} mt={1}>
                 <Typography><strong>Fecha de Evaluación: </strong>21/06/2023</Typography> 
               </Grid>
             </Grid>
           </TabPanel>
           <TabPanel value={value} index={1}>
             <Grid container justifyContent='center'>
               <Grid item xs={12} mt={1}>
                 <Typography><strong>Circunferencia Brazo (CMB): </strong>N/A</Typography> 
               </Grid> 
               <Grid item xs={12} mt={2}>
                 <Typography><strong>Discapacidad: </strong>No</Typography> 
               </Grid>
               <Grid item xs={12} mt={2}>
                 <Typography><strong>Clasificación PB: </strong>Adecuado</Typography> 
               </Grid>
             </Grid>
           </TabPanel>
           <TabPanel value={value} index={2}>
             <Grid container justifyContent='center'>
               <Grid item xs={12} mt={1}>
                 <Typography><strong>Albendazol: </strong>Si</Typography> 
               </Grid> 
               <Grid item xs={12} mt={2}>
                 <Typography><strong>Micronutrientes: </strong>Si</Typography> 
               </Grid>
               <Grid item xs={12} mt={2}>
                 <Typography><strong>LNS-MQ(Sobre Amarillo): </strong>Si</Typography> 
               </Grid>
               <Grid item xs={12} mt={2}>
                 <Typography><strong>RUTF(Sobre Rojo): </strong>Si</Typography> 
               </Grid>
               <Grid item xs={12} mt={2}>
                 <Typography><strong>Dosis: </strong>1 Sobre al Día por 30 días</Typography> 
               </Grid>
             </Grid>
           </TabPanel>
           <Divider sx={{ mt:4 }} />
           <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleClose}>Cerrar</Button>
             </Grid>
           </Grid>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
}
