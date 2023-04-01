import React from 'react'
import LeaderTestimony from '../components/AboutPageComp/leadCard/LeaderTestimony'
import VerticalTabs from '../components/AboutPageComp/verticalTabs/VerticalTabs'
import Navbar from '../components/navbar/Navbar'
import Benefits from '../components/AboutPageComp/benefits/Benefits'
import CompanyTeam from '../components/AboutPageComp/companyTeam/CompanyTeam'
import MyNav from '../components/navbar/MyNav'
import Timeline from '../components/AboutPageComp/timeline/Timeline'
import AboutHero from '../components/AboutPageComp/aboutHero/AboutHero'


const About = () => {
    return (
      <>
        <AboutHero />
        <CompanyTeam/>
        <VerticalTabs/>
        <Timeline/>
        <Benefits/>
        {/* <LeaderTestimony/> */}
      </>
  )
}

export default About