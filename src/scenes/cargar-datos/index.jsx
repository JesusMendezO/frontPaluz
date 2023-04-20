import React, { useCallback } from 'react';
import { Box, Card, CardContent, Button } from "@mui/material";
import { useDropzone } from 'react-dropzone'
import AttachFileOutlined from '@mui/icons-material/AttachFileOutlined';
import Header from "components/Header";

const Upload = () => {
  const maxSize = 1048576;

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);

  const { isDragActive, getRootProps, getInputProps, isDragReject, acceptedFiles, rejectedFiles } = useDropzone({
    onDrop,
    minSize: 0,
    maxSize,
  });

  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
  return (
    <Box m="1.5rem 2.5rem" >
      <Header title="Cargar Archivos" subtitle="Selecciona un documento de Excel para Cargarlo a la Base de Datos" />
      <Box mt="40px"height="75vh">
         <Card>
            <CardContent sx={{ alignItems:'flex-center' }}>
            <div className="container text-center mt-5 fw-bold h5">
            <div {...getRootProps()}>
               <input {...getInputProps()} />
               {!isDragActive && 'Click aquí o arrastra un archivo de Excel para subirlo'}
               {isDragActive && !isDragReject && " ¡Suelta el archivo aquí! "}
               {isDragReject && "¡Tipo de archivo no permitido!"}
               {isFileTooLarge && (
            <div className="text-danger mt-2">
              File is too large.
            </div>
            )}
            <ul className="list-group mt-5 mb-4">
              {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
                <li className="list-group-item list-group-item-success">
                  {acceptedFile.name}
                </li>
              ))}
           </ul>
           </div>
           <Button variant="contained" size="large" color="success" startIcon={<AttachFileOutlined />} > Cargar Archivo </Button>
           </div>
            </CardContent>
         </Card>
      </Box>
    </Box> 
  )
}

export default Upload
