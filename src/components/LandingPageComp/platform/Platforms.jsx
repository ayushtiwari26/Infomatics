import React from 'react'
import './Platforms.css';
import Button from '@mui/material/Button';
import et from '../../../assets/images/et.png'
import cloud from '../../../assets/images/cloud.png'
import cpu from '../../../assets/images/cpu.png'

const Platforms = () => {
    
  return (
    <div className='ak'>
    <div className='' >
        <div className='heading'>
            <h1 className='head'>ERP Application Platforms</h1>
           
                <p className='para'>Best fitting and sustainable infrastucture for your business.</p>
            
        </div>
    <div className='card-deck'>
    <div className='card'>
        <img src={et} class="card-img-top" alt="enterprise-img"/>
        <div className='card-body'>
        <h5 className='card-title C1'>ENTERPRISE</h5>
        <p className='card-text'>Complete ERP Suite for all organizational levels</p>
        <Button className='butt' style={{color:"black"}} variant="outlined">
         View More
        </Button>
        </div>
    </div>
    <div className='card'>
        <img src={cloud} class="card-img-top" alt="cloud-img"/>
        <div className='card-body'>
        <h5 className='card-title C2'>ON-CLOUD</h5>
        <p className='card-text'>Self servised cloud based ERP applications for SMEs</p>
        <Button className='butt' style={{color:"black" }}  variant="outlined" >
          View More
        </Button>
        </div>
    </div>
    <div className='card'>
        <img src={cpu} class="card-img-top" alt="cpu-img"/>
        <div className='card-body'>
          <h5 className='card-title C3'>ON-PREMISE</h5>
          <p className='card-text'>Subscription based On-Premise Login Business Application</p>
          <Button  className='butt'style={{color:"black"}}  variant="outlined">
            View More
          </Button>
        </div>
    </div>

    </div>

    </div>
    </div>
  )
}

export default Platforms