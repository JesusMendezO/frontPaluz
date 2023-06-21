import React from "react";
import { useTheme } from "@mui/material";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';

export default function Result({ result }) {
  console.log(result)
  //Theme
  const theme = useTheme();
  return (
    <Container maxWidth="xs">
      <Grid>
      <Grid item mt={2} mb={1} mr={1}>
         <Card sx={{ borderRadius:8, boxShadow:5, bgcolor:theme.palette.background.alt, border:"solid 1px"}}>
           <CardContent>
             <div className="card-body">
               <h6 className="card-title"> <strong>{result.nombre}</strong> </h6>
               <p className="mt-3">{result.nombre_rep}</p>
               
               <div className="card-actions justify-end">
                 <button className="btn btn-block mt-2" style={{ backgroundColor:'teal', color:'white' }}>
                    Ver más
                 </button>
               </div>
             </div>
           </CardContent>
         </Card>
      </Grid>
    </Grid>
    </Container>
  );
}
