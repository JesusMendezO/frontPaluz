import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import InventoryOutlined from '@mui/icons-material/InventoryOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';


const Suministros = () => {

  const nav = useNavigate();

  //Theme
  const theme = useTheme();

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
            <Typography
            sx={{ display:'flex', alignItems:'center' }}
            color="text.primary"
            >
             <InventoryOutlined sx={{ mr: 0.5 }} fontSize="inherit" />
              Suministros
            </Typography>
         </Breadcrumbs>
         <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Suministros </Typography>
      </Box>
      <Container>
       <Card sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt }}>
        <CardContent>
          <Typography className='text-center'> <ConstructionIcon sx={{ fontWeight:'bold',mt:10, fontSize:100 }}/> </Typography>
          <Typography variant="h1" className='text-center' sx={{ fontWeight:'bold', mt:2, mb: 10 }}> EN CONSTRUCCIÓN </Typography>
        </CardContent>
      </Card>
      </Container>
    </Box>
  )
}

export default Suministros