import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { useTheme, useMediaQuery } from "@mui/material";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';
import { useGetProyectoQuery } from "state/api";

export default function Proyectos() {
  let proyectos = useGetProyectoQuery();
  const nav = useNavigate();

  //Theme
  const theme = useTheme();

  //BreadCrumbs
  function handleClickBreadCrumbs(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

 //DropDown Button
 const [anchorEl, setAnchorEl] = React.useState(null);
 const openDropDown = Boolean(anchorEl);
 const handleDropDown = (event) => {
  setAnchorEl(event.currentTarget);
 };
 const handleCloseDropDown = () => {
  setAnchorEl(null);
 };

 //Routes
 const handleLinkClick = (event, message) => {
  if (message === 'nuevo') {
    nav("/crearProyecto") 
  }
};

const handleLinkAdm = (event, message) => {
  if (message === 'adm') {
    nav("/adminEquipos")
  }
};

const handleLinkGest = (event, message) => {
  if (message === 'gest') {
    nav("/gestionProyectos")
  }
};

const handleLinkHome = (event, message) => {
  if (message === 'home') {
    nav("/inicio")
  }
};

const handleLinkAct = (event, message) => {
  if (message === 'act') {
    nav("/actividades")
  }
};

const handleLinkEst = (event, message,row) => {
 let  pro = JSON.stringify(row.original);
  if (message === 'est') {
    nav(`/estadisticas?prop=${pro}`)
  }
};

const columns = useMemo(() => [
  {
    accessorKey: 'nombre',
    header: 'Nombre',
  },
  {
    accessorKey: 'descripcion',
    header: 'Descripcion',
  },
  {
    accessorKey: 'estado',
    header: 'Estado',
  },
],
[],
);

const data = [
{
  id: '1',
  firstName: 'Dylan',
  middleName: 'Sprouse',
  lastName: 'Murray',
  address: '261 Erdman Ford',
  city: 'East Daphne',
  state: 'Kentucky',
  country: 'United States',
},
{
  id: '2',
  firstName: 'Raquel',
  middleName: 'Hakeem',
  lastName: 'Kohler',
  address: '769 Dominic Grove',
  city: 'Vancouver',
  state: 'British Columbia',
  country: 'Canada',
},
{
  id: '3',
  firstName: 'Ervin',
  middleName: 'Kris',
  lastName: 'Reinger',
  address: '566 Brakus Inlet',
  city: 'South Linda',
  state: 'West Virginia',
  country: 'United States',
},
{
  id: '4',
  firstName: 'Brittany',
  middleName: 'Kathryn',
  lastName: 'McCullough',
  address: '722 Emie Stream',
  city: 'Lincoln',
  state: 'Nebraska',
  country: 'United States',
},
{
  id: '5',
  firstName: 'Branson',
  middleName: 'John',
  lastName: 'Frami',
  address: '32188 Larkin Turnpike',
  city: 'Charleston',
  state: 'South Carolina',
  country: 'United States',
},
{
  id: '6',
  firstName: 'Branson',
  middleName: 'John',
  lastName: 'Frami',
  address: '32188 Larkin Turnpike',
  city: 'Charleston',
  state: 'South Carolina',
  country: 'United States',
},
{
  id: '7',
  firstName: 'Branson',
  middleName: 'John',
  lastName: 'Frami',
  address: '32188 Larkin Turnpike',
  city: 'Charleston',
  state: 'South Carolina',
  country: 'United States',
},
{
  id: '8',
  firstName: 'Branson',
  middleName: 'John',
  lastName: 'Frami',
  address: '32188 Larkin Turnpike',
  city: 'Charleston',
  state: 'South Carolina',
  country: 'United States',
},
{
  id: '9',
  firstName: 'Branson',
  middleName: 'John',
  lastName: 'Frami',
  address: '32188 Larkin Turnpike',
  city: 'Charleston',
  state: 'South Carolina',
  country: 'United States',
},
{
  id: '10',
  firstName: 'Branson',
  middleName: 'John',
  lastName: 'Frami',
  address: '32188 Larkin Turnpike',
  city: 'Charleston',
  state: 'South Carolina',
  country: 'United States',
},
{
  id: '11',
  firstName: 'Branson',
  middleName: 'John',
  lastName: 'Frami',
  address: '32188 Larkin Turnpike',
  city: 'Charleston',
  state: 'South Carolina',
  country: 'United States',
},
];

if (!proyectos.isSuccess ) return "Loading...";
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
      <CasesRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Proyectos
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Proyectos </Typography>
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
  gridColumn="span 2"
  gridRow="span 3"
  p="1.5rem"
  borderRadius="1.5rem"
  mt="10px"
  height="fit-content"
  >
  <Grid container>
          <Grid item xs={12} mt={2}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <PeopleAltRoundedIcon sx={{ fontSize: 50, color:'white' }}/>
                </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 16, fontWeight:'bold', mt:2 }} gutterBottom>
                    Administrar Equipos
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:2, mt:1 }} 
                    fullWidth
                    onClick={event => handleLinkAdm(event, 'adm')}
                    >  
                    Iniciar
                   </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>
          <Grid item xs={12} mt={2}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <SettingsApplicationsRoundedIcon sx={{ fontSize: 50, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 16, fontWeight:'bold', mt:2 }} gutterBottom>
                    Gestión de Proyectos
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:2, mt:1 }} 
                    fullWidth
                    onClick={event => handleLinkGest(event, 'gest')}
                    >  
                    Iniciar
                   </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>

          <Grid item xs={12} mt={2}>
           <Card className='text-center zoom' sx={{ borderRadius:6, boxShadow:8, bgcolor: theme.palette.background.alt }}>
             <CardContent>
              <Grid container>
                <Grid item xs={6}>
                <Avatar sx={{ width: 80, height: 80, bgcolor: 'teal', mt:2, mb:2, ml:1 }}>
                   <CalendarMonthRoundedIcon sx={{ fontSize: 50, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 16, fontWeight:'bold', mt:3 }} gutterBottom>
                    Actividades
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:2, mt:2 }} 
                    fullWidth
                    onClick={event => handleLinkAct(event, 'act')}
                    >  
                    Iniciar
                   </Button>
                </Grid>
              </Grid>
             </CardContent>
           </Card>
          </Grid>

        </Grid>
  </Box>

  <Box 
  gridColumn="span 6"
  gridRow="span 3"
  backgroundColor={theme.palette.background.alt}
  p="1.5rem"
  borderRadius="1.5rem"
  mt="40px"
  height="fit-content"
  sx={{ boxShadow: 4 }}
  >
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Typography variant='h5' sx={{ fontWeight:'bold' }}> Listado de Proyectos </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Box container sx={{ display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
      <Button variant='contained' startIcon={ <CreateNewFolderIcon /> } sx={{ bgcolor:'teal', color:'white' }} size='small' onClick={event => handleLinkClick(event, 'nuevo')}> Nuevo Proyecto </Button>
    </Box>
    </Grid>
  </Grid>
  <MaterialReactTable
      columns={columns}
      data={proyectos.data}
      localization={MRT_Localization_ES}
      enableRowActions 
      positionActionsColumn="last" 
      renderRowActions={({
        row
      }) => <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        gap: '0.5rem'
      }}> 
      <Button
        id="basic-button"
        sx={{ bgcolor:'teal', color:'white' }}
        variant="contained"
        aria-controls={openDropDown ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openDropDown ? 'true' : undefined}
        onClick={handleDropDown}
        endIcon={ <ArrowDropDownIcon /> }
      >
        Opciones
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openDropDown}
        onClose={handleCloseDropDown}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={event => handleLinkEst(event, 'est',row)}> <LeaderboardRoundedIcon sx={{ mr:1 }} /> Estadísticas </MenuItem>
        <MenuItem onClick={handleCloseDropDown}> <CloseIcon sx={{ mr:1 }} />  Desactivar Proyecto </MenuItem>
      </Menu>

      </div>}

      muiTopToolbarProps={{ 
        sx: {
          backgroundColor: theme.palette.background.alt,
        }, 
       }}
      muiTableHeadCellProps={{
        align: 'center',
        sx: {
          backgroundColor: theme.palette.background.alt,
        },
      }}
      muiBottomToolbarProps={{ 
        sx: {
          backgroundColor: theme.palette.background.alt,
        },
       }}
      muiTableBodyProps={{
        sx: {
          '& tr:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.light,
          },
        },
      }}
      muiTableBodyCellProps={{
        align: 'center'
      }}
      muiTablePaperProps={{
        elevation: 0, //change the mui box shadow
        //customize paper styles
      }}
      initialState={{
        pagination: {
          pageSize: 5,
          pageIndex: 0
        }
      }} muiTablePaginationProps={{
        rowsPerPageOptions: [5, 10, 20, 30, 50, 100],
        showFirstButton: false,
        showLastButton: false,
        SelectProps: {
          native: true
        },
        labelRowsPerPage: 'Número de filas visibles'
      }}
      
      renderDetailPanel={({ row }) => (
        <Box
          sx={{
            display: 'grid',
            margin: 'auto',
            gridTemplateColumns: '1fr 1fr',
            width: '100%',
          }}
        >
          <Typography><strong>Fecha Inicio: </strong> {row.original.fecha_inicio}</Typography>
          <Typography><strong>Fecha Fin: </strong> {row.original.fecha_fin}</Typography>
          <Typography><strong>Codigo: </strong> {row.original.codigo}</Typography>
          <Typography><strong>Socios: </strong> {row.original.socios}</Typography>
        </Box>
      )}
    />
  </Box>
        
    </Box>
  </Box>
  </Box>
    
  );
}