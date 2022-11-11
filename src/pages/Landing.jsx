import React from 'react'
import Dir from '../components/LandingPageComp/dir/Dir'
import Hero from '../components/LandingPageComp/hero/Hero'
import Journey from '../components/LandingPageComp/journey/Journey'
import Mobile from '../components/LandingPageComp/mobile/Mobile'
import Platforms from '../components/LandingPageComp/platform/Platforms'
import Testimony from '../components/LandingPageComp/testimony/Testimony'


const Landing = () => {
  return (
    <div>
      <Hero/>
          <div className="row">
            <Journey/>
            <Platforms/>
            <Mobile/>
            <Dir/>
            <Testimony/>
            </div>
        
    </div>
  )
}

export default Landing
