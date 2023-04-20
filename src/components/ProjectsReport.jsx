import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/es';

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

export default function ProjectsReport() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor='black'>
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Rango de Fecha" {...a11yProps(1)} />
          <Tab label="Historial" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container justifyContent='center'>
          <Grid item>
             <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }}> Generar Reporte </Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2} justifyContent='center'>
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
            <Grid item>
              <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }}> Generar Reporte </Button>
            </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container justifyContent='center'>
          <Grid item>
             <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }}> Generar Historial </Button>
          </Grid>
        </Grid>
      </TabPanel>
    </Box>
  );
}