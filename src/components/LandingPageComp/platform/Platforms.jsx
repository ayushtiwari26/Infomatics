import React from 'react'
import './Platforms.css';
import Button from '@mui/material/Button';
import et from '../../../assets/images/et.png'
import cloud from '../../../assets/images/cloud.png'
import cpu from '../../../assets/images/cpu.png'
import { TextField } from '@mui/material'
import { useState } from 'react';
import back from "../../../assets/images/back.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";


const Platforms = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {openModal && (
        <div className="ModalBack">
          <div onClick={()=>setOpenModal(!openModal)} className="overlay"></div>

          
          <div className="modalContent">
              <button onClick={()=>setOpenModal(!openModal)} className="ModClose">X</button>
            <div className='ModalTitle'>Book Demo</div>
                <div className='ModalName'>
                  <TextField id="standard-basic" label="Name*" variant="standard" className="modalInputSize"/>
                </div>
              <div className='ModalEmail'>
                  <TextField id="standard-basic" label="Email*" variant="standard" className="modalInputSize"/>
              </div>
                  <div className='ModalPhoneNum'>
                <TextField id="standard-basic" label="Phone Number" variant="standard" className="modalInputSize"/>
            </div>
            <div className='ModalMessage'>
                <TextField id="standard-basic" label="Message*" variant="standard" className="modalInputSize"/>
            </div>

            <div className="Modfooter">
              <a href="#" className="ModA"><span className="ModSub">Submit</span><i className="ModI"></i></a>
            </div>
            </div>
        </div>
  )}
    <div className='ak' style={{backgroundImage:`url(${back})`}}>
    <div className='' >
        <div className='heading'>
            <div className='head'>ERP Application Platforms</div>
           
                <p className='para'>Best fitting and sustainable infrastucture for your business.</p>
            
        </div>
    <div className='card-deck'>
    <div className='card'>
        <LazyLoadImage src={et} class="card-img-top" alt="enterprise-img" loading='lazy'/>
        <div className='card-body'>
        <h5 className='card-title C1'>ENTERPRISE</h5>
        <p className='card-text'>Complete ERP Suite for all organizational levels</p>
        <Button className='butt' style={{color:"black"}} variant="outlined" onClick={()=>setOpenModal(!openModal)}>
         Know More
        </Button>
        </div>
    </div>
    <div className='card'>
        <LazyLoadImage src={cloud} class="card-img-top" alt="cloud-img" loading='lazy'/>
        <div className='card-body'>
        <h5 className='card-title C2'>ON-CLOUD</h5>
        <p className='card-text'>Self servised cloud based ERP applications for SMEs</p>
        <Button className='butt' style={{color:"black" }}  variant="outlined" onClick={()=>setOpenModal(!openModal)}>
          Know More
        </Button>
        </div>
    </div>
    <div className='card'>
        <LazyLoadImage src={cpu} class="card-img-top" alt="cpu-img" loading='lazy'/>
        <div className='card-body'>
          <h5 className='card-title C3'>ON-PREMISE</h5>
          <p className='card-text'>Subscription based On-Premise Login Business Application</p>
          <Button  className='butt'style={{color:"black"}}  variant="outlined" onClick={()=>setOpenModal(!openModal)}>
            Know More
          </Button>
        </div>
    </div>

    </div>

    </div>
    </div>
    </>
  )
}

export default Platforms