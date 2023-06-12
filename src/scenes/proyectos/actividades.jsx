import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import CssBaseline from '@mui/material/CssBaseline';
import HomeIcon from '@mui/icons-material/Home';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Calendar from "components/Scheduler/index";

const Actividades = () => {

  const nav = useNavigate();

  //Theme
  const theme = useTheme();
  
  function handleClickBreadCrumbs(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

//Routes
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

  return (
<Box m="1.5rem 2.5rem">
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
      <CalendarMonthRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Actividades
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Actividades </Typography>
</Box>
  <Box
  gridColumn="span 2"
  gridRow="span 1"
  display="flex"
  flexDirection="column"
  justifyContent="space-between"
  height="fit-content"
  p="1.25rem 1rem"
  flex="1 1 100%"
  sx={{ borderRadius:4, boxShadow:8, bgcolor:theme.palette.background.alt }}
  >
    <CssBaseline />
    <Calendar />
  </Box>
</Box>
  )
}

export default Actividades
