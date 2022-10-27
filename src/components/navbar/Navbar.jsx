import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import infoLogo from '../../assets/images/infoLogo.png'
import { IconContext } from "react-icons";
import {RiArrowDropDownLine} from "react-icons/ri";
import {ImCross} from 'react-icons/im'
import styled, { keyframes } from 'styled-components';
import {fadeInDown, tada} from 'react-animations';
import { Button } from '@mui/material';


let useClickOutside = (handler)=>{
  let domNode = useRef();

  useEffect(()=>{
    let maybeHandler = (event) =>{
      if(!domNode.current.contains(event.target)){
        handler()
      }
    }

    document.addEventListener('mousedown', maybeHandler)

    return()=>{
      document.removeEventListener('mousedown', maybeHandler)
    }
  })

  return domNode
}


const Navbar = () => {
  const [navChev, setNavchev] = useState(true)

  function handleChev(){
    setNavchev(!navChev)
    
  }

  let domNode = useClickOutside(()=>{
    setNavchev(true)
  })
  return (
    <>
    <nav>
        <div className="logo">
            <img src={infoLogo} alt="Infomatics logo" />
        </div>
        <div className="hamburger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
        <ul className="nav-links uline">
            <li>
              <a href="/">Home</a>
            </li>
            <li className={navChev===false?'uProLine':''}>
              {navChev ? 
                  <a href="#ssss" onClick={handleChev}>
                  Solutions 
                  <IconContext.Provider value={{className:'chever'}}> <RiArrowDropDownLine size={35}/> </IconContext.Provider>
                  </a>
              :
              <a href="#ssss" onClick={handleChev}>
              Solutions 
              <IconContext.Provider value={{className:'chever2'}}> <ImCross size={11}/> </IconContext.Provider>
              </a>
              }
              
            </li>
            <li><a href='/about-us'>About us</a></li>
            <li><a href="#ss">Services</a></li>
            <li><a href="#ss">Carrier</a></li>
            {/* <li><button className="login-button" href="#ss">Login</button></li> */}
            <li><Button style={{
                            borderRadius: 35,
                            padding: "10px 26px",
                            fontSize: "18px"
                        }}
                    variant="outlined">Contact us</Button></li>
        </ul>
    </nav>
    <br/><br/><br/><br/>

    {navChev===false?
          <>
          <BouncyDiv ref={domNode} className='container-fluid'>
          <div className="row navHead">
            <div className="col-sm">
              <span className='row navHead justify-content-left'>Finance</span>
              <a href='#'><div className="row justify-content-left navBItem">Accounting</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Invoicing</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Expenses</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Spreadsheet (BI)</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Sign</div></a>
            </div>
            <div className="col-sm">
              <span className='row navHead justify-content-left'>Sales</span>
              <a href='#'><div className="row justify-content-left navBItem">Subscription</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Rental</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Connector</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Sales (BI)</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Point of sale</div></a>
            </div>
            <div className="col-sm">
              <span className='row navHead justify-content-left'>Human Resource</span>
              <a href='#'><div className="row justify-content-left navBItem">Employees</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Recruitment</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Appraisels</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Time off</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Referrals</div></a>
            </div>
            <div className="col-sm">
              <span className='row navHead justify-content-left'>Marketing</span>
              <a href='#'><div className="row justify-content-left navBItem">Social marketing</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Email marketing</div></a>
              <a href='#'><div className="row justify-content-left navBItem">SMS marketing</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Marketing Automation</div></a>
              <a href='#'><div className="row justify-content-left navBItem">Events</div></a>
            </div>
          </div>
        </BouncyDiv>
        </>
    :null}
    </>
    
  )
}

const bounceAnimation = keyframes`${fadeInDown}`;
const BouncyDiv = styled.div`
  position: fixed;
  padding-left: 7%;
  top:8.1%;
  /* transform: translateX(-50%); */
  z-index: 1000;
  background-color: white;
  animation: 1s ${bounceAnimation};
`;




export default Navbar