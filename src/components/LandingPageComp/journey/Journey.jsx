import React, { useEffect } from 'react'
import './Journey.css'
import aos from 'aos';
import 'aos/dist/aos.css';

const Journey = () => {
    useEffect(()=>{
        aos.init({duration:1000})
    })
  return (
    <div data-aos='fade-right' className='Journeybg' >
        <div className='JourneySec'>
          <div className="JPara">
              <h4 className='Our'>Our Journey</h4>
              <p className='JourneyPara'>We believe every company starts from scratch, challenges are the new normal
                and it teaches us a perfect lesson to run a successful bussiness. Like every other company, we also faced many challenges such as HR, salary 
                stucture, staff, etc. Over the period we have defeated the challenges and 
                became one of the best ERP sofware company in the every industry.
                <br/><br/>
                <span className='Obs'>"Obstacles act as injection"</span>
              </p>
            </div>
          <div className='JourneyImg'>
            <div class="Q1">
              <div className='Q11'>
                <h2 class="blue">100+</h2><p className='H2'>Members</p>
              </div>
             </div>
            
            <div class="Q2">
              <div className='Q12'>
                <h2 class="green">1000+ </h2><p className='H2'>Clients</p>
              </div>
            </div>
            
            <div class="Q3">
              <div className='Q13'>
                <h2 class="green">25 Yrs</h2><p className='H2'>Business</p>
              </div>
            </div>
            
            <div class="Q4">
              <div className='Q14'>
                <h2 class="blue">2+</h2><p className='H2'>Office</p>
              </div>
            </div>
          </div>
        </div>
      </div>

            
  )
}


export default Journey
