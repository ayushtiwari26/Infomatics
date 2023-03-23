import React, { useEffect, useState } from 'react';
import './Pt.scss';

const Pt = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const currentStep = Math.floor((window.scrollY + (windowHeight / 2)) / windowHeight);

      setActiveStep(currentStep);
      console.log(currentStep)

      if (currentStep >= steps.length) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const steps = [
    {
      label: 'Step 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      label: 'Step 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      label: 'Step 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      label: 'Step 4',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];

  return (
    <div className={`journey${isSticky ? ' journey--sticky' : ''}`}>
      <div className="journey__timeline">
        {steps.map((step, index) => (
          <React.Fragment key={step.label}>
            {index !== 0 && (
              <div
                className={`journey__line${activeStep >= index ? ' journey__line--active' : ''}`}
              />
            )}
            <div className={`journey__dot${index <= activeStep ? ` journey__dot--active` : ''}`}>
              <div className="journey__dot-label">{step.label}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="journey__steps">
        {steps.map((step, index) => (
          <div key={step.label} className="journey__step">
            <div className="journey__step-description">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pt;


