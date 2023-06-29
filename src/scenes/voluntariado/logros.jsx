import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Divider from '@mui/material/Divider'
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack'
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

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
  
const Logros = () => {

  //Theme
  const theme = useTheme();

  //BreadCrumbs
  function handleClickBreadCrumbs(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

//Tabs
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
};

const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2.5rem">
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
      href="/inicio"
    >
      <VolunteerActivismIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Voluntariado
    </Link>
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <EmojiEventsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Logros
    </Typography>
        </Breadcrumbs>
        <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Logros </Typography>
      </Box>
      <Box
   mt="10px"
   display="grid"
   gridTemplateColumns="repeat(8, 1fr)"
   gridAutoRows="160px"
   gap="20px"
   sx={{
     "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
   }}
  >
  <Box 
  gridColumn="span 8"
  gridRow="span 3"
  backgroundColor={theme.palette.background.alt}
  p="1.5rem"
  borderRadius="1.5rem"
  mt="40px"
  height="fit-content"
  sx={{ boxShadow: 4 }}
  >
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Rankings" {...a11yProps(0)} />
          <Tab label="Misiones" {...a11yProps(1)} />
          <Tab label="Recompensas" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 70, height: 70, color:'black' }}>1</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h3'> John Doe </Typography>
             <Typography className='text-center' variant='h3'> Oro </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h2'> 500 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:2 }}></Divider>
        <Grid container spacing={2} mt={2} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 55, height: 55, color:'black'}}>2</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h4'> John Doe </Typography>
             <Typography className='text-center' variant='h4'> Plata </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h3'> 300 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:2 }}></Divider>
        <Grid container spacing={2} mt={2} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 45, height: 45, color:'black' }}>3</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h4'> John Doe </Typography>
             <Typography className='text-center' variant='h4'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h3'> 150 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:2 }}></Divider>
        <Grid container spacing={2} mt={2} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 35, height: 35, color:'black' }}>4</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h6'> John Doe </Typography>
             <Typography className='text-center' variant='h6'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h5'> 150 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:1 }}></Divider>
        <Grid container spacing={2} mt={1} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 35, height: 35, color:'black' }}>5</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h6'> John Doe </Typography>
             <Typography className='text-center' variant='h6'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h5'> 150 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:1 }}></Divider>
        <Grid container spacing={2} mt={1} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 35, height: 35, color:'black' }}>6</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h6'> John Doe </Typography>
             <Typography className='text-center' variant='h6'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h5'> 150 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:1 }}></Divider>
        <Grid container spacing={2} mt={1} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 35, height: 35, color:'black' }}>7</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h6'> John Doe </Typography>
             <Typography className='text-center' variant='h6'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h5'> 150 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:1 }}></Divider>
        <Grid container spacing={2} mt={1} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 35, height: 35, color:'black' }}>8</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h6'> John Doe </Typography>
             <Typography className='text-center' variant='h6'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h5'> 150 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:1 }}></Divider>
        <Grid container spacing={2} mt={1} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 35, height: 35, color:'black' }}>9</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h6'> John Doe </Typography>
             <Typography className='text-center' variant='h6'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h5'> 150 pts </Typography>
            </Grid>
        </Grid>
        <Divider sx={{ mt:1 }}></Divider>
        <Grid container spacing={2} mt={1} justifyContent='center'>
            <Grid item sm={2}>
              <Avatar sx={{ width: 35, height: 35, color:'black' }}>10</Avatar>
            </Grid>
            <Grid item sm={3} mt={2}>
             <Typography className='text-center' variant='h6'> John Doe </Typography>
             <Typography className='text-center' variant='h6'> Bronce </Typography>
            </Grid>
            <Grid item sm={6} mt={3}>
              <Typography className='text-center' variant='h5'> 150 pts </Typography>
            </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  </Box>
  </Box>
    </Box>
  )
}

export default Logros
