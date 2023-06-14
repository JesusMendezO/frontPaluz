import React, { useState } from 'react';
import  { useNavigate, useLocation } from 'react-router-dom';
import { Box, useTheme, useMediaQuery, FormControl, MenuItem, InputLabel, Select} from "@mui/material";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import ScreenRotationOutlinedIcon from '@mui/icons-material/ScreenRotationOutlined';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import StatChart from 'components/StatChart';
import PieChart from 'components/PieChart';

const Estadisticas = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token =params.get("prop");
  const proyect = JSON.parse(token) 
  console.log(proyect);
  //Theme
  const theme = useTheme();

  const nav = useNavigate();

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  //BreadCrumbs
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

const [view, setView] = useState("sales");
const [views, setViews] = useState("pie1");

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
      <LeaderboardRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Estadísticas
    </Typography>
  </Breadcrumbs>
      <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Estadísticas para: {proyect.nombre} </Typography>
      </Box>
      <Box
        mt="40px"
        display="grid"
        gridTemplateColumns="repeat(8, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        <Box id="vertical-view"
        gridColumn="span 5"
        gridRow="span 3"
        backgroundColor={theme.palette.background.alt}
        borderRadius="1.5rem"
        mt="10px"
        height="auto"
        sx={{ boxShadow: 4 }}>
          <Typography className='text-center'> <ScreenRotationOutlinedIcon sx={{ fontWeight:'bold',mt:15, fontSize:80 }}/> </Typography>
          <Typography variant="h4" className='text-center' sx={{ fontWeight:'bold', mt:6, mb: 10 }}> Por favor, gira tu dispositivo para ver esta gráfica. </Typography>
        </Box>
        <Box id="rotate-view"
        gridColumn="span 5"
        gridRow="span 3"
        backgroundColor={theme.palette.background.alt}
        borderRadius="1.5rem"
        mt="10px"
        height="auto"
        sx={{ boxShadow: 4 }}
        > 
        <FormControl sx={{ mt:3, ml:3 }}>
          <InputLabel> Vistas </InputLabel>
          <Select
            value={view}
            label="Vistas"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales"> Gráfico 1 </MenuItem>
            <MenuItem value="units"> Gráfico 2 </MenuItem>
          </Select>
        </FormControl>
           <StatChart view={view} />
        </Box>
        <Box 
        gridColumn="span 3"
        gridRow="span 3"
        backgroundColor={theme.palette.background.alt}
        p="1.29rem"
        borderRadius="1.5rem"
        mt="10px"
        height="auto"
        sx={{ boxShadow: 4 }}
        >  
        <FormControl sx={{ mt:1 }}>
          <InputLabel> Vistas </InputLabel>
          <Select
            value={views}
            label="Vistas"
            onChange={(e) => setViews(e.target.value)}
          >
            <MenuItem value="pie1"> Gráfico 1 </MenuItem>
            <MenuItem value="pie2"> Gráfico 2 </MenuItem>
          </Select>
        </FormControl>
        <PieChart views={views} />
        </Box>
        </Box> 
    </Box> 
  )
}

export default Estadisticas
