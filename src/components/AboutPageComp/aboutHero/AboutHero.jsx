import React from 'react'
import './AboutHero.css'
import black from '../../../assets/images/pr8.jpg'

const aboutHero = () => {
  return (
    <div className="aboutback">
       <div style={{
              backgroundImage:`url(${black})`,
              backgroundRepeat:'no-repeat', 
              backgroundSize:'cover', 
              }}className='aboutImg'>
            <div className="aboutHero">
               <div className="aboutH1">We're changing the</div>
               <div className="aboutH2">whole game.</div>
                    <div className='aboutbutt'>
                          <div className="aboutBtn1">
                             <button class="button-29" role="button">Get Started</button>
                          </div>
                          <div className="aboutBtn2">
                              <button class="button-28" role="button">Book Demo</button>
                          </div>
                    </div>
                  </div>
            
          </div>
    </div>
  )
}

export default aboutHero