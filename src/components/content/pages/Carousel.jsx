import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'banner-1',
        imgPath: '../../images/carousel/banner-1.jpg',
    },
    {
        label: 'banner-2',
        imgPath: '../../images/carousel/banner-2.jpg',
    },
    {
        label: 'banner-3',
        imgPath: '../../images/carousel/banner-3.jpg',
    },
];

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
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

export default Carousel