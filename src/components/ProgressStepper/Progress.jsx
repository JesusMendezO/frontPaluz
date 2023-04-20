import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Progress = () => {
  return (
    <Grid container spacing={2} className="text-center">
      <Grid item xs={12} sm={4}>
        <Typography variant='h5' sx={{ fontWeight:'bold' }}>
          Última actualización
        </Typography>
        <Typography variant='h6' mt={2}>
          01/01/2023
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4}>
      <Typography variant='h5' sx={{ fontWeight:'bold' }}>
          Meta a la Fecha
        </Typography>
        <Typography variant='h6' mt={2}>
          123456
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4}>
      <Typography variant='h5' sx={{ fontWeight:'bold' }}>
          Status a la Fecha
        </Typography>
        <Typography variant='h6' mt={2}>
          Encaminado
        </Typography>
      </Grid>
      <Grid item sm={12} mt={2}>
        <Typography variant='h5' sx={{ fontWeight:'bold' }}>
          Descripción
        </Typography>
        <Typography variant='h6' mt={1.5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempore laudantium corporis aliquid, 
          amet ipsa dignissimos. 
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Progress
