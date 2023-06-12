import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import clienteAxios from '../config/clienteAxios';
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

export default function AcceptTab(prop) {
  const data = prop.dato;
  const close = prop.onClose;
  console.log(prop);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleLinkClick = async event => {
  
    try {
      
      const { data1 } = await clienteAxios.post('/perfil/voluntarioU/', {
         nombres: data.nombres,
         apellidos: data.apellidos,
        // cedula: dataform.get('cedula'),
         correo: data.email,
        // telefono: dataform.get('textmask'),
        // fnacimiento:new Date(selectedDate).toLocaleDateString('es-ES') ,
         ocupacion: data.ocupacion,
        // direccion: dataform.get('direccion'),
      })
      .then(function (response) {
       // setAlerta({})
        //console.log(response.data.idToken)
          //localStorage.setItem('token',JSON.stringify(response.data) )
          //setAuth(data)
         
         
      })
      .catch(function (error) {
        event.preventDefault();
        
      
        console.log('error')
       // document.getElementById(":r7:").value='';

        
        
      });
    
      
      console.log(data1)
      
  } catch (error) {
      
  }
  close()

  };

  const handleRechazo = async event => {
  
    try {
      
      const { data1 } = await clienteAxios.post('/perfil/rechazo/', {
         nombres: data.nombres,
         apellidos: data.apellidos,
        // cedula: dataform.get('cedula'),
         correo: data.email,
        // telefono: dataform.get('textmask'),
        // fnacimiento:new Date(selectedDate).toLocaleDateString('es-ES') ,
         ocupacion: data.ocupacion,
        // direccion: dataform.get('direccion'),
      })
      .then(function (response) {
       // setAlerta({})
        //console.log(response.data.idToken)
          //localStorage.setItem('token',JSON.stringify(response.data) )
          //setAuth(data)
         
         
      })
      .catch(function (error) {
        event.preventDefault();
        
      
        console.log('error')
       // document.getElementById(":r7:").value='';

        
        
      });
    
      
      console.log(data1)
      
  } catch (error) {
      
  }
  close()

  };

 
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='black'>
          <Tab label="Aceptar" {...a11yProps(0)} />
          <Tab label="Rechazar" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container justifyContent='center'>
          <Grid item>
             <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} onClick={event => handleLinkClick(event)}> Aceptar Voluntario </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container justifyContent='center'>
           <Grid item  xs={12}>
             <TextField
             name="mRechazo"
             required
             fullWidth
             id="mRechazo"
             label="Motivo de Rechazo"
             />
           </Grid>
          <Grid item mt={2}>
             <Button variant='contained' color='error'> Rechazar usuario </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}