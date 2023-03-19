import React, { useEffect, useRef, useState } from 'react'
import './ContactPoster.css'
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import contactus from "../../../assets/images/contactus.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


const ContactPoster = () => {
    const steps = [
        'Select master blaster campaign settings',
        'Create an ad group',
        'Create an ad',
      ];
  const [showDot1, setShowDot1] = useState(false);
  const [showDot2, setShowDot2] = useState(false);
  const [showDot3, setShowDot3] = useState(false);
  const [showDot4, setShowDot4] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionBottom = sectionTop + sectionRef.current.offsetHeight;
      const windowTop = window.pageYOffset;
      const windowBottom = windowTop + window.innerHeight;

      if (windowBottom >= sectionTop + 150) {
        setShowDot1(true);
      } else {
        setShowDot1(false);
      }

      if (windowBottom >= sectionTop + 300) {
        setShowDot2(true);
      } else {
        setShowDot2(false);
      }

      if (windowBottom >= sectionTop + 420) {
        setShowDot3(true);
      } else {
        setShowDot3(false);
      }

      if (windowBottom >= sectionTop + 540) {
        setShowDot4(true);
      } else {
        setShowDot4(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
    <section className="erp-journey" ref={sectionRef}>
      <div className="erp-journey-dots">
        <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
            <Step key={label} className={`erp-journey-dot ${showDot4 ? "show" : ""}`}>
                <StepLabel>{label}</StepLabel>
            </Step>
            ))}
        </Stepper>
        </Box>
        <div className={`erp-journey-dot ${showDot1 ? "show" : ""}`} />
        <div className={`erp-journey-text-item ${showDot1 ? "show" : ""}`}>
          Text between dot 1 and dot 2
        </div>

        <div className={`erp-journey-dot ${showDot2 ? "show" : ""}`} />
        <div className={`erp-journey-text-item ${showDot2 ? "show" : ""}`}>
          Text between dot 2 and dot 3
        </div>

        <div className={`erp-journey-dot ${showDot3 ? "show" : ""}`} />
        <div className={`erp-journey-text-item ${showDot3 ? "show" : ""}`}>
          Text between dot 3 and dot 4
        </div>

        <div className={`erp-journey-dot ${showDot4 ? "show" : ""}`} />
        <div className={`erp-journey-text-item ${showDot4 ? "show" : ""}`}>
          Text after dot 4
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactPoster