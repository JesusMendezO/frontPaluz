import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { mockData } from "./mockData";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import icon from 'assets/paluz-icon-2.png'
import Result from "./Result";
import useSearchIndex from "./useSearchIndex";
import clienteAxios from '../../config/clienteAxios';
import { useGetSemanasQuery } from "state/api";



const miniSearchOptions = {
  fields: ["cedula", "nombre_rep", "nombre"],
  storeFields: ["cedula", "nombre_rep", "nombre"],
  searchOptions: {
    boost: { title: 2, description: 1 },
    prefix: true,
    fuzzy: 0.25,
  },
};

export default function SearchPage() {
  //Theme
  const theme = useTheme();
  const [data, setData]= React.useState([]);
  const [ejecutar, setEjecutar]= React.useState(true);
  const [inputValue, setInputValue] = useState("");
  const voluntariosO = async ()=> {
    

   

    try {
      
      const { data1 } = await clienteAxios.get('/beneficiarios/')
      .then(function (response) {
       // setAlerta({})
       
       setData(response.data);
     setEjecutar(false);
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
  if(ejecutar){
    voluntariosO() ;
  }
  

  console.log(data)
  const { results, search, searchIndex } = useSearchIndex(
    data,
    miniSearchOptions,
    {}
  );
console.log(results);
  return (
    <div className="flex flex-col items-center justify-start p-8 max-w-[1200px] mx-auto min-h-full">
      <Grid container justifyContent="center" mt={1}>
          <Grid item xs={7} sm={2}>
            <Box 
            component="img"
            alt="logo"
            src={icon}
            height="140px"
            width="140px"
            >
            </Box>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" mt={3}>
            <Grid item xs={12} sm={8}>
              <Typography className='text-center'> Ingrese la cédula de identidad del beneficiario </Typography>
            </Grid>
        </Grid>
        <Grid container justifyContent="center" mt={2}>
            <Grid item xs={12} sm={6}>
              <TextField
              type="text"
              value={inputValue}
              label="Buscar Beneficiarios..."
              fullWidth
              sx={{ bgcolor:theme.palette.background.alt}}
              onChange={(e) => {
                search(e.target.value);
                setInputValue(e.target.value);
              }}
              />                
            </Grid>
          </Grid>
          <Stack  direction={{ xs: 'column', sm: 'column' }}>
           {results.length
           ? results.map((result) => <Result key={result.id} result={result} />)
           :""} 
          </Stack>
    </div>
  );
}
