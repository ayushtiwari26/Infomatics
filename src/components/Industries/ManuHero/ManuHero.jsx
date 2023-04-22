import React from 'react'
import "./ManuHero.css"
import Manus from '../../../assets/images/manuhero.jpg'
const ManuHero = () => {
  return (
    <>
       <div className="manuhero">
      <div className="overlay">
      <div className="vertical-line"></div>
        <div className="heading-container">
         
          <h1 className="heading">Manufacturing</h1>
          <p className="subheading">ERP FOR MANUFACTURING INDUSTRIES</p>
        </div>
      </div>
      <img src={Manus} alt="Manus"/>
    </div>
  </>
  )
}

export default ManuHero