import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { Box, Button, useTheme, useMediaQuery} from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Modal from '@mui/material/Modal';

const Voluntariado = () => {
  
  //Theme
  const theme = useTheme();

  //BreadCrumbs
  function handleClickBreadCrumbs(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

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

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


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
      <VolunteerActivismIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Voluntariado
    </Typography>
  </Breadcrumbs>
  <Typography variant="h3" sx={{ fontWeight:'bold', mt:2 }}> Voluntariado </Typography>
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
    <Grid item xs={2}>
      <Button variant='contained' size='small' sx={{ bgcolor:'teal', color:'white' }}> Crear Nueva </Button>
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
          Opciones
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
        
    </Box>
  </Box>
  </Box>
  );
};

export default Voluntariado;
