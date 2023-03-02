import React from 'react'
import './Hero.css'
// import erp3 from '../../../assets/images/pr11.jpg'
import erp3 from '../../../assets/images/pr10.jpg'
import { Button } from '@mui/material'
import { Parallax} from 'react-parallax';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
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
                    <Button style={{
                                borderRadius: 35,
                                backgroundColor: "#BFD5DB",
                                color:'black',
                                padding: "12px 0px",
                                fontSize: "17px",
                                fontWeight:'550',
                                fontFamily:'Montserrat',
                                letterSpacing:'-0.5px'
                                }}
                            variant="contained">Request a free Demo</Button>
                </div>

                    {/* <div className='sideHero2'>
                    
        </div> */}
            </div>
            
    </div>
    </>
  )
}

export default Hero



