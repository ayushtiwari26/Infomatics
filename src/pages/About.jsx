import React from 'react'
import LeaderTestimony from '../components/AboutPageComp/leadCard/LeaderTestimony'
import VerticalTabs from '../components/AboutPageComp/verticalTabs/VerticalTabs'
import Navbar from '../components/navbar/Navbar'
import Benefits from '../components/AboutPageComp/benefits/Benefits'
import CompanyTeam from '../components/AboutPageComp/companyTeam/CompanyTeam'
import MyNav from '../components/navbar/MyNav'

const About = () => {
    return (
      <>
        <CompanyTeam/>
        <VerticalTabs/>
        <Benefits/>
        {/* <LeaderTestimony/> */}
      </>
  )
}

export default About