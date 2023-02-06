import React from 'react'
import Navbar from './Navbar'
import NavLinks from './NavLinks'
import './Navbar.css'
const MyNav = () => {
  return (
    <>
    <div className="MyNav">
      <div className="Navbar">
            <Navbar/>
      </div>
            <div className="NavLinks">
            <NavLinks/>
            </div>
    </div>
    </>
  )
}

export default MyNav