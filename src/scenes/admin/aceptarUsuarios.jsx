import React from "react";
import { Box, Button, Grid, useTheme, useMediaQuery} from "@mui/material";
import { useGetAdminsQuery } from "state/api";
import { DataGrid, esES } from "@mui/x-data-grid";
import { VerifiedUser, HealthAndSafety, Groups2Outlined, PersonOff } from "@mui/icons-material";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Header from "components/Header";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CustomColumnMenu from "components/DataGridCustomColumnMenu";
import StatBoxAdmin from "components/StatBoxAdmin";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import AcceptTab from "components/AcceptTab";

const AceptarUsuarios = () => {
  
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

  //const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    {
      field: 'nombre',
      headerName: 'Nombre',
      width: 120,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'apellido',
      headerName: 'Apellido',
      width: 120,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'email',
      headerName: 'Correo Electrónico',
      width: 120,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'ocupacion',
      headerName: 'Ocupación',
      width: 150,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'proyecto',
      headerName: 'Proyecto',
      width: 150,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'rol',
      headerName: 'Rol',
      width: 120,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'estado',
      headerName: 'Estado',
      width: 120,
      headerAlign: 'center',
      align: 'center'
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
        <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} onClick={handleOpen}> Opciones </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
      >
        <Box sx={style}>
          <AcceptTab />
        </Box>
       </Modal>
      </Box>
        );
      }
    },
  ];
  
  const rows = [
    { id: 1, apellido: 'Snow', nombre: 'Jon', cedula: 35, },
    { id: 2, apellido: 'Lannister', nombre: 'Cersei', cedula: 42 },
    { id: 3, apellido: 'Lannister', nombre: 'Jaime', cedula: 45 },
    { id: 4, apellido: 'Stark', nombre: 'Arya', cedula: 16 },
    { id: 5, apellido: 'Targaryen', nombre: 'Daenerys', cedula: null },
    { id: 6, apellido: 'Melisandre', nombre: null, cedula: 150 },
    { id: 7, apellido: 'Clifford', nombre: 'Ferrara', cedula: 44 },
    { id: 8, apellido: 'Frances', nombre: 'Rossini', cedula: 36 },
    { id: 9, apellido: 'Roxie', nombre: 'Harvey', cedula: 65 },
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
    <Link
      underline="hover"
      sx={{ display:'flex', alignItems:'center' }}
      color="inherit"
      href="/admin"
    >
      <AdminPanelSettingsOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Administrador
    </Link>
    <Typography
      sx={{ display:'flex', alignItems:'center' }}
      color="text.primary"
    >
      <AdminPanelSettingsOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Aceptar Usuarios
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Aceptar Usuarios </Typography>
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
            borderRadius="0.55rem"
            mt="40px"
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
        {/*<DataGrid
          className="text-center"
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />*/}

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

        </Box>
      </Box>
  );
};

export default AceptarUsuarios;
