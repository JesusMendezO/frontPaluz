import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material";
import UploadService from "../services/UploadExcelService";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const UploadExcel = (props) => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const upload = () => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);

    UploadService.upload(currentFile, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        return UploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("¡No se pudo cargar el archivo!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  //Theme
  const theme = useTheme();

  return (
    <div>
      <div>
        <Typography variant="h4" className="text-center" mb={2}> Cargar Base de Datos </Typography>
        <Divider mb={3} />
      </div>
      {currentFile && (
        <div className="progress mt-3" style={{ height:'30px', borderRadius:10}}>
          <div
            className="progress-bar progress-bar-info"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
      </div>
      )}

      <div className="container text-center mt-2">
         <div className="justify-content-center">
             <label className="form-label">
               <input className="form-control form-control-sm" type="file" onChange={selectFile} />
             </label>
         </div>
         <div  className="justify-content-center">
           <button
            className="btn"
            disabled={!selectedFiles}
            onClick={upload}
            style={{ backgroundColor:'teal', color:'white', marginRight:5 }}
            >
              Cargar
           </button>
           <button
            className="btn btn-danger"
            onClick={props.onCloseModal}
            >
              Salir
           </button>
         </div>
      </div>
      <div className="alert alert-light text-center mt-3" role="alert" style={{ backgroundColor:theme.palette.background.alt, color:theme.palette.secondary.light  }}>
        <p style={{ fontSize:12 }}> {message} </p>
      </div>

      <div>
        <div className="h6 text-center mt-1 mb-2"> Archivos Cargados </div>
        <Divider />
        <ul className="list-group list-group-flush mt-3">
          {fileInfos.length !== 0 ?
            fileInfos.map((file, index) => (
              <li className="list-group-item text-center" key={index} style={{ fontSize:12, backgroundColor:theme.palette.background.alt, color:theme.palette.secondary.light }} >
                <a href={file.url}>{file.name}</a>
              </li>
            )) : <li className="list-group-item text-center" style={{ fontSize:12, backgroundColor:theme.palette.background.alt, color: theme.palette.secondary.light  }}> No hay bases de datos cargadas. </li>}
        </ul>
      </div>
    </div>
  );
};

export default UploadExcel;