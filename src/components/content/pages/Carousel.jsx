import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Etkinlik.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'banner-1',
    imgPath: 'https://r.resimlink.com/7cAaOuoLTW9U.jpg',
  },
  {
    label: 'banner-2',
    imgPath: 'https://r.resimlink.com/rYTq_.jpg',
  },
  {
    label: 'banner-3',
    imgPath: 'https://r.resimlink.com/o705DyBUeQ_E.jpg',
  },
];

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (<>
    <Box sx={{ width: '100%', objectFit: 'cover', flexGrow: 1, height: '300px' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                src={step.imgPath}
                alt={step.label}
                style={{ width: '100%', height: 'auto' }}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  
  </>)
}

export default Carousel;