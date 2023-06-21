import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import icon from 'assets/paluz-icon-2.png'
import SearchPage from 'components/Search/SearchPage';

const Beneficiarios = () => {
  const nav = useNavigate();

  //Theme
  const theme = useTheme();

  //BreadCrumbs
  function handleClickBreadCrumbs(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.')
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
             <FamilyRestroomOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Beneficiarios
            </Typography>
         </Breadcrumbs>
         <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Beneficiarios</Typography>
      </Box>
      <Container>
       <Box sx={{ bgcolor:"transparent" }}>
          <SearchPage />
      </Box>
      </Container>
    </Box>
  )
}

export default Beneficiarios
