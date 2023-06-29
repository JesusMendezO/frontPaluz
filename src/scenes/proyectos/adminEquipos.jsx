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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HomeIcon from '@mui/icons-material/Home';
import CasesRoundedIcon from '@mui/icons-material/CasesRounded';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupIcon from '@mui/icons-material/Group';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import clienteAxios from '../../config/clienteAxios';
import { useGetEquiposQuery } from "state/api";
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

const AdminEquipos = () => {
  let equipos = useGetEquiposQuery();
   const nav = useNavigate();

    function handleClickBreadCrumbs(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    //Modal Handlers
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openAlert, setOpenAlert] = React.useState(false);
    const handleOpenAlert = () => {
    setOpenAlert(true);
    handleCloseAlert();
    handleClose();
   }
   const handleCloseAlert = () => setTimeout(() => {
     setOpenAlert(false);
   }, 2000);

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

    const handleLinkAdd = (event, message) => {
      if (message === 'agregar') {
        nav("/agregarMiembros")
      }
    };

    const columns = useMemo(() => [
      {
        accessorKey: 'id',
        header: 'id',
        size: 10,
      },
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
  const handleSubmit = async event=> {
    event.preventDefault();
    let dataform = new FormData(event.currentTarget);
  
  
    try {
      
        const { data1 } = await clienteAxios.post('/crearequipos/', {
  
         nombre:(dataform.get('nombreEquipo')),
         descripcion :(dataform.get('descripcion'))
       
       
  
  
  
  
  //        nombres: (dataform.get('nombreProyecto')),
  //        apellidos: (dataform.get('codigoProyecto')),
  //        cedula: (dataform.get('descripcion')),
  //        correo: dataform.get('email'),
  //        telefono: dataform.get('textmask'),
  //        //fnacimiento:new Date(selectedDate).toLocaleDateString('es-ES') ,
  //        ocupacion: dataform.get('ocupacion'),
  //        direccion: dataform.get('direccion'),
        })
        .then(function (response) {
            //console.log(response.data.idToken)
            //localStorage.setItem('token',JSON.stringify(response.data) )
            //setAuth(data)
            //event.target.reset();
            handleOpenAlert();
       })
       .catch(function (error) {
  //        event.preventDefault();
        
      
  //        console.log('error')
  //       // document.getElementById(":r7:").value='';
  
        
       
        });
    
        
       console.log(data1);
      
   } catch (error) {
      
    }
  
 
  
  };
 console.log(equipos);
  if (!equipos.isSuccess ) return "Loading...";

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
      <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Administrar Equipos
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Administrar Equipos </Typography>
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
           <Box component="form" noValidate onSubmit={handleSubmit} sx={style}>
             <Typography variant="h4" component="div" sx={{ mb:2, fontWeight:'bold' }}>
                 Crear Equipo
             </Typography>
             <Divider />
             <Grid container spacing={2} mt={2} mb={3}>
              <Grid item xs={12} sm={12}>
            <TextField
              name="nombreEquipo"
              required
              fullWidth
              id="nombreEquipo"
              label="Nombre de Equipo"
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
              <Button type="submit"  variant='contained' sx={{ bgcolor:'teal', color:'white' }} size='large' fullWidth> Guardar </Button>
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
      <Typography variant='h5' sx={{ fontWeight:'bold' }}> Listado de Equipos </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
     <Box container sx={{ display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
        <Button variant='contained' startIcon={<GroupAddIcon />} sx={{ bgcolor:'teal', color:'white' }} onClick={handleOpen}> Nuevo Equipo </Button>
     </Box>
    </Grid>
  </Grid>

  <MaterialReactTable 
  columns={columns}
  data={equipos.data}
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
    <MenuItem onClick={handleCloseDropDown}> <EditIcon sx={{ mr:1 }} /> Editar Equipo </MenuItem>
    <MenuItem onClick={event => handleLinkAdd(event, 'agregar')}> <PersonAddAltOutlinedIcon sx={{ mr:1 }} /> Añadir Miembros </MenuItem>
    <MenuItem onClick={handleCloseDropDown}> <DeleteIcon sx={{ mr:1 }} /> Eliminar Equipo </MenuItem>
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
  <Modal
        open={openAlert}
        onClose={handleCloseAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='text-center'>
            <TaskAltOutlinedIcon color='success' sx={{ fontWeight:'bold',mt:3, fontSize:80 }}/>
          </Typography>
          <Typography id="modal-modal-description" className='text-center' sx={{ mt: 2, fontSize:20, fontWeight:'bold' }}>
            ¡El equipo se ha creado exitosamente!
          </Typography>
        </Box>
      </Modal>       
  </Box>
  </Container>
  </Box>
  </Box>
  )
}

export default AdminEquipos
