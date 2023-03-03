import React, { useState } from 'react';

import './Hero.css'
import erp3 from '../../../assets/images/pr10.jpg'
import { Button } from '@mui/material'
import DemoForm from "../../demoForm/DemoForm"

const Hero = () => {
  const [openModal, setCloseModal] = useState(false)
  const [showForm, setShowForm] = useState(false);
  const handleButtonClick = () => {
    setShowForm(!showForm);
    setCloseModal(!openModal);
  };

  return (
    <>
      <div style={{
            backgroundImage:`url(${erp3})`, 
            backgroundRepeat:'no-repeat', 
            backgroundSize:'cover', 
            backgroundAttachment: 'fixed',
            }} 
        className='mainHero'>
            <div className="sideMainHero">
                <div className='sideHero'>

                    <div className="headSide1">Grow your</div>
                    <div className="headSide2">Business</div>
                    <div className="headSide3">With us</div>
                    <br/>
             
                    <Button
                    onClick={handleButtonClick} 
                    style={{
                                borderRadius: 35,
                                backgroundColor: "#BFD5DB",
                                color:'black',
                                padding: "12px 0px",
                                fontSize: "17px",
                                fontWeight:'550',
                                fontFamily:'Montserrat',
                                letterSpacing:'-0.5px'
                                }}
                            variant="contained">
                              Request a free Demo
                             
                      </Button>
                      {showForm && <DemoForm/>}
                     
                      
                </div>
            </div>
    </div>
    </>
  )
}

export default Hero



