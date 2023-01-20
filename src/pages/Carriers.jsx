import React from 'react'
import AOpenPositions from '../components/CarrierPageComp/aOpenPositions/AOpenPositions'
import OpenPositions from '../components/CarrierPageComp/openPositions/OpenPositions'
import Steps from '../components/CarrierPageComp/steps/Steps'
import Idk from '../components/ServicesComp/dd/Idk'

const Carriers = () => {
  return (
    <>
        <Idk/>
        <Steps/>
        {/* <OpenPositions/> */}
        <AOpenPositions/>
    </>
  )
}

export default Carriers
