import React, { useCallback, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import DeleteIcon from '@mui/icons-material/Delete';

const ImagePicker = () => {
    const [logo, setLogo] = useState("");

    const handleCreateBase64 = useCallback(async (e) =>{
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setLogo(base64);
        e.target.value = "";
    },[]);

    const convertToBase64 =(file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            if(!file){
                alert("Por favor, selecciones una imagen");
            } else {
                fileReader.readAsDataURL(file);
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
            }
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const deleteImage = (e) => {
        e.preventDefault();
        setLogo(null);
    };
  return (
    <div>
    <Grid container spacing={1} className="text-center" sx={{ display:'flex', justifyContent:'flex-end', alignItems:'center' }}>
        <Grid item sm={1} xs={12}>
        {logo ? (
          <span>
            <div>
              <Avatar sx={{ width: 100, height: 100, border:'4px solid', mt:1}} src={logo} alt="logo" />
            </div>
          </span>
    ) : null}
        </Grid>
        <Grid item sm={6} xs={12}>
        <Tooltip title="Cargar Logo">
        <Button variant="contained" color="success" aria-label="upload picture" component="label" sx={{ mt:3, color:'white' }}>
    <input
      id="contained-button-file"
      type="file"
      accept="image/*, png, jpeg, jpg"
      style={{ display: "none" }}
      name="logo"
      onChange={handleCreateBase64}
    />
     <PhotoCamera />
    </Button>
    </Tooltip>
    <div>
      <label htmlFor="contained-button-file">
        <div>
          {logo ? (
            <div>
                <Tooltip title="Eliminar Logo">
                  <Button variant="contained" sx={{ mt:1 }} color='error' onClick={deleteImage}> <DeleteIcon /> </Button>
                </Tooltip>
            </div>
          ) : null}
        </div>
      </label>
    </div>
        </Grid>
    </Grid>
  </div>
  )
}

export default ImagePicker
