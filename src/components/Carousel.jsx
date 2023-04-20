import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews); 

const images = [
  {
    imgPath:
      'https://paluz.org/wp-content/uploads/2021/11/IMG_4953-1024x683.jpg',
  },
  {
    imgPath:
      'https://paluz.org/wp-content/uploads/2021/11/WhatsApp-Image-2021-11-10-at-2.53.00-AM-1024x683.jpeg',
  },
  {
    imgPath:
      'https://paluz.org/wp-content/uploads/2021/11/1630691666912-1024x683.jpg',
  },
  {
    imgPath:
      'https://paluz.org/wp-content/uploads/2021/11/1624304459716-1024x683.jpg',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1000, flexGrow: 1 }}>
    
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 315,
                  display: 'block',
                  maxWidth: 900,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Carousel;