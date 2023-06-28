import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import EditIcon from '@mui/icons-material/Edit';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import GroupIcon from '@mui/icons-material/Group';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius:5,
    p: 4,
  };

const AgregarMiembros = () => {

   const nav = useNavigate();

    function handleClickBreadCrumbs(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    
    //Modal Handlers
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();

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

    const handleLinkAdmin = (event, message) => {
        if (message === 'administrar') {
          nav("/adminEquipos")
        }
      };

    const columns = useMemo(() => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 10,
      },
      {
        accessorKey: 'firstName',
        header: 'First Name',
      },
      {
        accessorKey: 'middleName',
        header: 'Middle Name',
      },
      {
        accessorKey: 'lastName',
        header: 'Last Name',
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
    <Link
      underline="hover"
      sx={{ display:'flex', alignItems:'center' }}
      color="inherit"
      href="/adminEquipos"
      onClick={event => handleLinkAdmin(event, 'administrar')}
    >
      <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Administrar Equipos
    </Link>
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <GroupAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Agregar Miembros
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Agregar Miembros: Nombre de Equipo </Typography>
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
      <Container>
         <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
         >
           <Box sx={style}>
             <Typography variant="h4" component="div" sx={{ mb:2, fontWeight:'bold' }}>
                 Crear Equipo
             </Typography>
             <Divider />
             <Grid container spacing={2} mt={2} mb={3}>
              <Grid item xs={12} sm={6}>
            <TextField
              name="nombreEquipo"
              required
              fullWidth
              id="nombreEquipo"
              label="Nombre de Equipo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              type='number'
              id="miembros"
              label=" Cantidad de Miembros"
              name="miembros"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              fullWidth
              id="descripcion"
              label="Descripción"
              name="descripcion"
            />
          </Grid>
          </Grid>
          <Divider />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="center" >
            <Grid item sm={6} xs={6}>
              <Button variant='contained' color='error' size='large' fullWidth onClick={handleClose}> Cancelar </Button>
            </Grid>
            <Grid item sm={6} xs={6}>
              <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} size='large' fullWidth> Guardar </Button>
            </Grid>
          </Grid>
           </Box>
          </Modal>
          <Box 
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="1.5rem"
          mt="5px"
          height="fit-content"
          sx={{ boxShadow: 4 }}
         >
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6}>
      <Typography variant='h5' sx={{ fontWeight:'bold' }}> Listado de Voluntarios </Typography>
    </Grid>
  </Grid>

  <MaterialReactTable 
  columns={columns}
  data={data}
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
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
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
    <MenuItem onClick={handleCloseDropDown}> <EditIcon sx={{ mr:1 }} /> Agregar Miembro </MenuItem>
    <MenuItem onClick={handleCloseDropDown}> <EditIcon sx={{ mr:1 }} /> Quitar Miembro </MenuItem>
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
      <Typography>Address: {row.original.address}</Typography>
      <Typography>City: {row.original.city}</Typography>
      <Typography>State: {row.original.state}</Typography>
      <Typography>Country: {row.original.country}</Typography>
    </Box>
  )}
  />
         
  </Box>
  </Container>
  </Box>
  </Box>
  )
}

export default AgregarMiembros
