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
import clienteAxios from '../../config/clienteAxios';
import { useGetUsuariosQuery } from "state/api";


const Admin = () => {

  const theme = useTheme();
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
  let usuarios= useGetUsuariosQuery();
  const [open, setOpen] = React.useState(false);
  const [data, setData]= React.useState([]);
  const [dataT, setDatat]= React.useState([]);
  const handleOpen = (e, row) =>{
    console.log(row)
    roles();
    tipo();
    setOpen(true);
    
  } 
  const handleClose = () => 
  
  
  {setOpen(false);
  
    setRol('');  
    setEst('');
    setVol('');
  }
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

 const handleSubmit = () =>{}

 
  //const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    {
      field: 'nombres',
      headerName: 'Nombre',
      width: 120,
      headerAlign: 'center',
      align: 'center'
    },
    {
      field: 'apellidos',
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
      field: 'tipo',
      headerName: 'tipo',
      width: 150,
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
        <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }} onClick={
          (e) =>  handleOpen(e, cellValues.row)

          
         }> Opciones </Button>
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
                       {
        data.map((dato,index)=>(

           <MenuItem value={dato.idroles}>
          {dato.descripcion}
          </MenuItem>
          
          
        ))
       



      }
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
                <MenuItem value={1}> Activo </MenuItem>
                <MenuItem value={0}> Inactivo </MenuItem>
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
                             {
        dataT.map((dato,index)=>(

           <MenuItem value={dato.idtipo}>
          {dato.nombre}
          </MenuItem>
          
          
        ))
       



      }
              </Select>
            </FormControl>
          </Box>
          <Divider sx={{ mt:4 }} />
          <Grid container sx={{ mt:2 }} spacing={1} justifyContent="flex-end" >
             <Grid item>
               <Button variant='contained' color='error' onClick={handleClose}> Cancelar </Button>
             </Grid>
             <Grid item>
               <Button variant='contained' sx={{ bgcolor:'teal', color:'white' }}  > Aceptar </Button>
             </Grid>
             </Grid>
        </Box>
       </Modal>
      </Box>
        );
      }
    },
  ];
  const roles = async ()=> {
    

   

    try {
      
      const { data1 } = await clienteAxios.get('/rol/')
      .then(function (response) {
       // setAlerta({})
       
       setData(response.data)
       console.log(data)
       return
      })
      .catch(function (error) {
      
        
      
        console.log('error')
       return
      });
    
      
      
      
  } catch (error) {
      return
  }

  };
  
  const tipo = async ()=> {
    

   

    try {
      
      const { data1 } = await clienteAxios.get('/tipo/')
      .then(function (response) {
       // setAlerta({})
       
       setDatat(response.data)
       console.log(data)
       return
      })
      .catch(function (error) {
      
        
      
        console.log('error')
       return
      });
    
      
      
      
  } catch (error) {
      return
  }

  };
 

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
console.log(usuarios.data)
if (!usuarios.data) return "Loading..."
  return (
    <Box m="1.5rem 3rem">
      <Header title="administración de usuarios" />
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
        rows={usuarios.data}
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

export default Admin;