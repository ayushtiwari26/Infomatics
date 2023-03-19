    import React, { useState, useEffect } from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import Stepper from '@material-ui/core/Stepper';
    import Step from '@material-ui/core/Step';
    import StepLabel from '@material-ui/core/StepLabel';
import { transform } from 'framer-motion';

    const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(2),
        position: 'relative',
    },
    stepper: {
        width: '100%',
        margin: '0 auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform:'translate(-50%, -50%)',
        right: 0,
        zIndex: 1,
    },
    step: {
        // cursor: 'pointer',
        // position: 'relative',
        // width: 'calc(100% / 4)',
        // minWidth: 100,
        // '&:not(:last-child)::after': {
        // content: '""',
        // position: 'absolute',
        // top: '50%',
        // transform: 'translateY(-50%)',
        // left: '100%',
        // width: 'calc(100% / 4 - 50px)',
        // height: 2,
        // backgroundColor: theme.palette.grey[400],
        // },
        // '&.active:not(:last-child)::after': {
        // backgroundColor: theme.palette.primary.main,
        // },
        
    },
    stepLabel: {
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
    },
    
    }));

    const steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4'
    ];

    export default function Tp() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [visibleSteps, setVisibleSteps] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const stepsCount = Math.floor(scrollTop / (windowHeight / 2)) + 1;

        setVisibleSteps(Math.min(stepsCount, steps.length));
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={classes.root} style={{height:'50vh'}}>

        <Stepper
            activeStep={activeStep}
            alternativeLabel
            className={classes.stepper}
        >
            {steps.slice(0, visibleSteps).map((label, index) => (
            <Step
                key={label}
                className={`${classes.step} ${index === activeStep ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
            >
                <StepLabel
                classes={{ label: classes.stepLabel }}
                StepIconProps={{
                    classes: {
                    root: classes.stepIcon,
                    active: classes.stepIconActive,
                    },
                }}
                >
                {label}
                </StepLabel>
            </Step>
            ))}
        </Stepper>
        </div>
    );
    }
