import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Goal = () => {
  return (
    <Grid container spacing={2} className="text-center">
      <Grid item xs={12} sm={6}>
        <Typography variant='h4' sx={{ fontWeight:'bold' }}>
          Descripción
        </Typography>
        <Typography mt={3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet odio quam enim quas doloribus repellat 
          alias eligendi distinctio?
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Typography variant='h4' sx={{ fontWeight:'bold' }}>
          Meta
        </Typography>
        <Typography variant='h4' mt={3}>
          123456
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Goal
