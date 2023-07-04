import React from 'react'
import './Platforms.css';
import Button from '@mui/material/Button';
import et from '../../../assets/images/et.png'
import cloud from '../../../assets/images/cloud.png'
import cpu from '../../../assets/images/cpu.png'
import { TextField, Typography } from '@mui/material'
import { useState } from 'react';
import back from "../../../assets/images/back.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";


const Platforms = () => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {openModal && (
        <div className="ModalBacks">
          <div onClick={()=>setOpenModal(!openModal)} style={{ width: '100vw',
  height: '100vh',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  position: 'fixed',
  background: 'rgba(49,49,49,0.8)'}}></div>
          <div className="modalContents">
              <button onClick={()=>setOpenModal(!openModal)} className="ModCloses">X</button>
            <div className='ModalTitles'>Book Demo</div>
                <div className='ModalNamess'>
                  <TextField id="standard-basic" label="Name*" variant="standard" className="modalInputSizes"/>
                </div>
              <div className='ModalEmails'>
                  <TextField id="standard-basic" label="Email*" variant="standard" className="modalInputSizes"/>
              </div>
                  <div className='ModalPhoneNums'>
                <TextField id="standard-basic" label="Phone Number" variant="standard" className="modalInputSizes"/>
            </div>
            <div className='ModalMessages'>
                <TextField id="standard-basic" label="Message*" variant="standard" className="modalInputSizes"/>
            </div>

            <div className="Modfooters">
              <a href="#" className="ModAs"><span className="ModSubs">Submit</span><i className="ModI"></i></a>
            </div>
            </div>
        </div>
  )}
    <div className="plateBg"style={{ backgroundImage:`url(${back})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',}}> 
        <div className="plateHead">
          <h1>ERP Application Plateform</h1> 
          <p>Best fitting and sustainable infrastucture for your business.</p>
        </div>
        <div className="plateCardDeck">
          <div className="card1">
          <div className="cardHead"><h3>ENTERPRISE</h3></div>
            <LazyLoadImage src={et} class="card-img-top" alt="enterprise-img" loading='lazy'/>
            <div className="cardbody">
                <div className="cardSub"><p>Complete ERP Suite for all organizational levels</p></div>
                <div className="cardButton">
                  <Button className='platebutt' style={{color:"black"}} variant="outlined" onClick={()=>setOpenModal(!openModal)}>
                          Know More
                  </Button></div>
            </div>
          </div>
          <div className="card1">
          <div className="cardHead2"><h3>ON-CLOUD</h3></div>
            <LazyLoadImage src={cloud} class="card-img-top" alt="enterprise-img" loading='lazy'/>
            <div className="cardbody">
                <div className="cardSub"><p>Self servised cloud based ERP applications for SMEs</p></div>
                <div className="cardButton">
                  <Button className='platebutt' style={{color:"black"}} variant="outlined" onClick={()=>setOpenModal(!openModal)}>
                          Know More
                  </Button></div>
            </div>
          </div>
          <div className="card3">
          <div className="cardHead3"><h3>ON-PREMISE</h3></div>
            <LazyLoadImage src={cpu} class="card-img-top" alt="enterprise-img" loading='lazy'/>
            <div className="cardbody">
                <div className="cardSub"><p>Subscription based On-Premise Login Business Application</p></div>
                <div className="cardButton">
                  <Button className='platebutt' style={{color:"black"}} variant="outlined" onClick={()=>setOpenModal(!openModal)}>
                          Know More
                  </Button></div>
            </div>
          </div>
        </div>
        
    </div>
    {/* <div className='ak' style={{backgroundImage:`url(${back})`}}>
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
    </div> */}
    </>
  )
}

export default Platforms