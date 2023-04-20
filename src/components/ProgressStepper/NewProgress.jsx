import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const NewProgress = () => {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
           <TextField id="meta" name='meta' label="Progreso de la Meta" type='number' variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Status </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={10}> Completado </MenuItem>
          <MenuItem value={20}> Encaminado </MenuItem>
          <MenuItem value={30}> Limitado </MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField multiline maxRows={4} id="desc" name='desc' label="Descripción" variant="outlined" fullWidth/>
      </Grid>
      </Grid>
    </Box>
  )
}

export default NewProgress
