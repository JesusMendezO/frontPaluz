import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { Box, Button, Grid, useTheme, useMediaQuery} from "@mui/material";
import { DataGrid, esES } from "@mui/x-data-grid";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';

const Admin = () => {
  
  //Theme
  const theme = useTheme();

  //BreadCrumbs
  function handleClickBreadCrumbs(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

  const style = {
    position: 'inherit',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: theme.palette.background.alt,
    border: '2px solid #000',
    borderRadius: 4,
    boxShadow: 1,
    p: 4,
  };
  
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Rol de Usuario Select
  const [rol, setRol] = React.useState('');
  const handleChangeRol = (event) => {
    setRol(event.target.value);
  };

  // Estado De Usuario Select
  const [est, setEst] = React.useState('');
  const handleChangeEst = (event) => {
    setEst(event.target.value);
  };

  //Tipo de Voluntario Select
  const [vol, setVol] = React.useState('');
  const handleChangeVol = (event) => {
    setVol(event.target.value);
  };
  
  
  //const { data, isLoading } = useGetAdminsQuery();

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
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Inicio
    </Link>
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <AdminPanelSettingsOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Administrador
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> administración de usuarios </Typography>
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
          <Grid container spacing={2}>
           <Grid item xs={10}>
             <Typography variant='h5'> Listado de Convocatorias </Typography>
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
          <Button variant="contained" color="success" sx={{ bgcolor:'teal', color:'white' }} onClick={() => {
            handleOpen();
            console.info('Opciones', row);
          }}>
              Opciones
            </Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
             Nombre de Usuario
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ocupación
          </Typography>
          <Divider sx={{ mt:3 }}>
            <Chip label="ROL DEL USUARIO" />
          </Divider>
          <Box sx={{ minWidth: 120, mt:3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> Roles de Usuario </InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Roles de Usuario"
              value={rol}
              onChange={handleChangeRol}
              >
                <MenuItem value={10}> Administrador </MenuItem>
                <MenuItem value={20}> Coordinador </MenuItem>
                <MenuItem value={30}> Voluntario </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider sx={{ mt:3 }}>
            <Chip label="ESTADO DEL USUARIO" />
          </Divider>
          <Box sx={{ minWidth: 120, mt:3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> Estado del Usuario </InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Estado del Usuario"
              value={est}
              onChange={handleChangeEst}
              >
                <MenuItem value={11}> Activo </MenuItem>
                <MenuItem value={21}> Inactivo </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider sx={{ mt:3 }}>
            <Chip label="TIPO DE VOLUNTARIO" />
          </Divider>
          <Box sx={{ minWidth: 120, mt:3 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> Tipo de Voluntario </InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tipo de Voluntario"
              value={vol}
              onChange={handleChangeVol}
              >
                <MenuItem value={11}> Técnico </MenuItem>
                <MenuItem value={21}> Eventual </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Divider sx={{ mt:4 }} />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleClose}> Cancelar </Button>
             </Grid>
             <Grid item>
               <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} > Aceptar </Button>
             </Grid>
             </Grid>
        </Box>
       </Modal>
            </div>}
      muiTopToolbarProps={{ 
        sx: {
          backgroundColor: theme.palette.background.alt,
        }, 
       }}
      muiTableHeadCellProps={{
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
      />
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;