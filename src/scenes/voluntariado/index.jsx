import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import MaterialReactTable from 'material-react-table';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { Box, Button, useTheme, useMediaQuery} from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import EditIcon from '@mui/icons-material/Edit';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import UserIcon from '@mui/icons-material/Person';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SummarizeRoundedIcon from '@mui/icons-material/SummarizeRounded';
import VoluntList from 'components/VoluntList';

const Voluntariado = () => {

  const nav = useNavigate();
  
  //Theme
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  //BreadCrumbs
  function handleClickBreadCrumbs(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

//Modal Styles
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

const styleVol = {
  position: 'inherit',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isSmallScreen ? '90%' : '50%', 
  bgcolor: theme.palette.background.alt,
  border: '2px solid #000',
  borderRadius: 4,
  boxShadow: 1,
  p: 4,
};

//Modals
const [open, setOpen] = React.useState(false);
const handleOpen = () => {
  setAnchorEl(null);
  setOpen(true);}
const handleClose = () => setOpen(false);

const [openModal, setOpenModal] = React.useState(false);
const handleOpenModal = () => {
  setAnchorEl(null);
  setOpenModal(true);}
const handleCloseModal = () => setOpenModal(false);

const [openMF, setOpenMF] = React.useState(false);
const handleOpenMF = () => {
  setAnchorEl(null);
  setOpenMF(true);}
const handleCloseMF = () => setOpenMF(false);

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
  if (message === 'convocatorias') {
    nav("/crearConvocatoria") 
  }
};
const handleLinkHome = (event, message) => {
  if (message === 'home') {
    nav("/inicio")
  }
};


const columns = useMemo(() => [
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
      href={"/inicio"}
      onClick={event => handleLinkHome(event, 'home')}
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
                   <UserIcon sx={{ fontSize: 50, color:'white' }}/>
                </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 16, fontWeight:'bold', mt:4 }} gutterBottom>
                    Perfil
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:2, mt:2 }} 
                    fullWidth
                    >  
                    Ver
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
                   <LeaderboardRoundedIcon sx={{ fontSize: 50, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 16, fontWeight:'bold', mt:4 }} gutterBottom>
                    Estadísticas
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:2, mt:2 }} 
                    fullWidth
                    >  
                    Ver
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
                   <EmojiEventsIcon sx={{ fontSize: 50, color:'white' }}/>
                  </Avatar>
                </Grid>
                <Grid item xs={6}>
                  <Typography sx={{ fontSize: 16, fontWeight:'bold', mt:4 }} gutterBottom>
                    Logros
                  </Typography>
                  <Button 
                    variant='contained' 
                    size='lg' 
                    sx={{ bgcolor:'teal', color:'white', borderRadius:2, mt:2 }} 
                    fullWidth
                    >  
                    Ver
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
      <Typography variant='h5' sx={{ fontWeight:'bold' }}> Listado de Convocatorias </Typography>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Box container sx={{ display:'flex', justifyContent:'flex-end', alignItems:'flex-end' }}>
      <Button variant='contained' startIcon={ <MoreTimeIcon /> } sx={{ bgcolor:'teal', color:'white' }} size='small' onClick={event => handleLinkClick(event, 'convocatorias')}> Nueva Convocatoria </Button>
    </Box>
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
        <MenuItem onClick={handleCloseDropDown}> <EditIcon sx={{ mr:1 }} /> Editar Actividad </MenuItem>
        <MenuItem onClick={handleOpen}> <AssignmentTurnedInIcon sx={{ mr:1 }} /> Completar Actividad </MenuItem>
        <MenuItem onClick={handleOpenModal}> <SummarizeRoundedIcon sx={{ mr:1 }} /> Listado de Voluntarios </MenuItem>
        <MenuItem onClick={handleCloseDropDown}> <CheckIcon sx={{ mr:1 }} />  Confirmar Asistencia </MenuItem>
        <MenuItem onClick={handleOpenMF}> <CloseIcon sx={{ mr:1 }} />  Cancelar Asistencia </MenuItem>
      </Menu>

      <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
      >
        <Box sx={style}>
          <Typography variant="h4" mb={1}> Completar Actividad </Typography>
          <Divider sx={{ mb:2 }} />
          <Typography variant='h6' className='text-center' sx={{ mb:1.5 }}> Ingrese un comentario final </Typography>
          <TextField
          name="cFinal"
          fullWidth
          id="cFinal"
          label="Comentario Final"
          />
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

      <Modal
      open={openMF}
      onClose={handleCloseMF}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
      >
        <Box sx={style}>
          <Typography variant="h4" mb={1}> Cancelar Asistencia </Typography>
          <Divider sx={{ mb:2 }} />
          <Typography variant='h6' className='text-center' sx={{ mb:1.5 }}> Motivo de Falta </Typography>
          <TextField
          name="mFalta"
          fullWidth
          id="mFalta"
          label="Motivo de Falta"
          />
          <Divider sx={{ mt:4 }} />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleCloseMF}> Cancelar </Button>
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
    </Box>
  </Box>
   <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      slotProps={{ backdrop: { style: { opacity: 0.2 } } }}
    >
      <Box sx={styleVol}>
          <VoluntList />
          <Divider sx={{ mt:2 }} />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleCloseModal}> Salir </Button>
             </Grid>
          </Grid>
      </Box>
   </Modal>
  
  </Box>
  );
};

export default Voluntariado;
