import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Goal from './Goal';
import Progress from './Progress';
import NewProgress from './NewProgress';


const steps = ['Meta', 'Progreso Hasta la Fecha', 'Progreso Actual'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Goal />;
    case 1:
      return <Progress />;
    case 2:
      return <NewProgress />;
    default:
      throw new Error('Paso Desconocido');
  }
}

export default function ProgressSteps(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Typography component="h1" variant="h4" align="center">
            Progreso del Indicador
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Box className='text-center'>
                 <Typography variant="h3" mb={3} gutterBottom>
                   ¡Proceso Terminado!
                 </Typography>
                 <Button variant='contained' size='large' sx={{ color:'white', bgcolor:'teal' }} onClick={props.onCloseModal}> Salir </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} color='error' variant='contained' sx={{ mt: 3, ml: 1 }}>
                    Atrás
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1, bgcolor:'teal', color:'white' }}
                >
                  {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                </Button>
              </Box>
            </React.Fragment>
          )}
      </Container>
    </>
  );
}
