import React from 'react'
import {useParams} from "react-router-dom"
import ManuHero from '../components/Industries/ManuHero/ManuHero'
import ManuIntro from '../components/Industries/ManuIntro/ManuIntro'
import Assistance from '../components/Industries/Assistance/Assistance'
import Benefits from "../../src/components/Industries/Benefits/Benefits"

const Industries = () => {
    const {indusName} = useParams();

  return (
    <>
      <ManuHero />
      <ManuIntro />
      <Benefits/>
      <Assistance/>
    </>
  )
}

export default Industries