import React, { useEffect } from 'react'
import './Journey.css'
import aos from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion"

const Journey = () => {
    useEffect(()=>{
        aos.init({duration:1000})
    })
  return (
    <div data-aos='fade-right' className='container-fluid CC' >
      <div className='row '>
        <div className='col-6 kk'>
              <h4 className='a1'>Our Journey</h4>
              <p className='z1'>We believe every company starts from scratch, challenges are the new normal
                and it teaches us a perfect lesson to run a successful bussiness. Like every other company, we also faced many challenges such as HR, salary 
                stucture, staff, etc. Over the period we have defeated the challenges and 
                became one of the best ERP sofware company in the every industry.
                <br/><br/>
                <span className='h1'>"Obstacles act as injection"</span>
              </p>
        </div>
        <div className='col-6-float-container B1'>

          

          <div class="float-child Q1">
                <div class="blue">100+ <br/><p className='H2'>Team members</p></div>
            </div>

            <div class="float-child Q2">
                <div class="green">1000+ <br/><p className='H2'>Clients</p></div>
            </div>
            <div class="float-child Q3">
                 <div class="green">25 Yrs<br/> <p className='H2'> in Business</p></div>
            </div>
            

            <div class="float-child Q4">
                <div class="blue">2+ <br/><p className='H2'>Office</p></div>
            </div>

            </div>
            </div>
            </div>

            
  )
}


export default Journey
