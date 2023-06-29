import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
import Header from "components/Header";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { DataGrid, esES } from "@mui/x-data-grid";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
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

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'acciones',
        headerName: 'Acciones',
        width: 150,
        headerAlign: 'center',
        align: 'center',
        renderCell: (cellValues) => {
          return (
        <Box>
          <Button variant='contained' sx={{ bgcolor:'#e6b800', color:'black' }} > <EditIcon /> </Button>
          <Button variant='contained' color='error' sx={{ ml:1 }}> <DeleteIcon /> </Button>
        </Box>
          );
        }
      },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

const AdminEquipos = () => {

    function handleClickBreadCrumbs(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();
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
      href="/proyectos"
    >
      <CasesRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Proyectos
    </Link>
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Administrrar Equipos
    </Typography>
  </Breadcrumbs>
</Box>
     <Box
       gridColumn="span 2"
       gridRow="span 1"
       display="flex"
       flexDirection="column"
       justifyContent="space-between"
       p="1.25rem 1rem"
       flex="1 1 100%"
       borderRadius="0.55rem"
      >
         <CssBaseline />
 
         <Container>
         <Box container sx={{ display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
             <Button variant='contained' startIcon={<GroupAddIcon />} sx={{ bgcolor:'teal', color:'white' }} onClick={handleOpen}> Agregar Equipo </Button>
         </Box>
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
              <Button variant='contained' color='error' size='large' fullWidth> Cancelar </Button>
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
         borderRadius="0.55rem"
         mt="20px"
         height="75vh"
         sx={{
         "& .MuiDataGrid-root": {
           border: "none",
         },
         "& .MuiDataGrid-cell": {
         borderBottom: "none",
         },
         "& .MuiDataGrid-columnHeaders": {
           backgroundColor: theme.palette.background.alt,
           color: theme.palette.secondary[100],
           borderBottom: "none",
         },
         "& .MuiDataGrid-virtualScroller": {
           backgroundColor: theme.palette.primary.light,
         },
         "& .MuiDataGrid-footerContainer": {
           backgroundColor: theme.palette.background.alt,
           color: theme.palette.secondary[100],
           borderTop: "none",
         },
         "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
           color: `${theme.palette.secondary[200]} !important`,
         },
       }}
         >
         <DataGrid
        rows={rows}
        columns={columns}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
         </Box>
         </Container>
      </Box>
    </Box>
  )
}

export default AdminEquipos
