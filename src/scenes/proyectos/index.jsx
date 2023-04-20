import * as React from 'react';
import { useTheme } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Header from "components/Header";
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import RuleFolderRoundedIcon from '@mui/icons-material/RuleFolderRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';

export default function Proyectos() {

  //Theme
  const theme = useTheme();

  //BreadCrumbs
  function handleClickBreadCrumbs(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  return (
    <div>
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
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <CasesRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Proyectos
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Proyectos </Typography>
  </Box>
      <Box
       gridColumn="span 2"
       gridRow="span 1"
       display="flex"
       flexDirection="column"
       justifyContent="space-between"
       p="1rem 1rem"
       flex="1 1 100%"
       borderRadius="0.55rem"
      >
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mt:3 }}>
          <Grid item xs={12} sm={4}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <CreateNewFolderIcon sx={{ fontSize: 70, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 20, fontWeight:'bold', mt:4 }} gutterBottom>
                    nuevo proyecto
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:4, mt:3 }} 
                    fullWidth
                    >  
                    Iniciar
                   </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <RuleFolderRoundedIcon sx={{ fontSize: 70, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 20, fontWeight:'bold', mt:2 }} gutterBottom>
                    administrar proyectos
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:4, mt:1 }} 
                    fullWidth
                  > 
                   iniciar
                  </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <PeopleAltRoundedIcon sx={{ fontSize: 70, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 20, fontWeight:'bold', mt:2 }} gutterBottom>
                    administrar equipos
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:4, mt:1 }} 
                    fullWidth
                  > 
                   iniciar
                  </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>
        </Grid> 

        {/* ROW 2 */}
        <Grid container spacing={3} sx={{ mt:3 }}>
        <Grid item xs={12} sm={4}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <SettingsApplicationsRoundedIcon sx={{ fontSize: 70, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 20, fontWeight:'bold', mt:2 }} gutterBottom>
                    gestión de proyectos
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:4, mt:1 }} 
                    fullWidth
                  > 
                   iniciar
                  </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <CalendarMonthRoundedIcon sx={{ fontSize: 70, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 20, fontWeight:'bold', mt:4 }} gutterBottom>
                    actividades
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:4, mt:3 }} 
                    fullWidth
                  > 
                   iniciar
                  </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 100, height: 100, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <LeaderboardRoundedIcon sx={{ fontSize: 70, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 20, fontWeight:'bold', mt:4,}} gutterBottom>
                    estadísticas
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:4, mt:3 }} 
                    fullWidth
                  > 
                   iniciar
                  </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>
        </Grid> 
      </Container>
      </Box> 
    </Box>
    </div>
    
  );
}