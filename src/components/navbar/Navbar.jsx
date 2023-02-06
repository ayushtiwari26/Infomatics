import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import infoLogo from '../../assets/images/infoLogo.png'
import styled, { keyframes} from 'styled-components';
import {fadeInDown} from 'react-animations';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {navbarServicesDiv, navbarProductsDiv} from '../../assets/constants/navbarConstant'


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
    const [navProducts, setNavProducts] = useState(true)

  function handleChev(){
    setNavchev(!navChev)
  }

  let domNode = useClickOutside(()=>{
    setNavchev(true)
    setNavProducts(true)
  })
  return (
    <>
    <nav>
        <div className="logo">
          <a href='/'><img src={infoLogo} alt="Infomatics logo" /></a>  
        </div>
        <ul className="nav-links uline">
            <li><a href='/about-us'>About us</a></li>

            <li className={navChev===true?'navArrow':'navBackArrow uProLine'}>
                  <span onClick={handleChev}>
                  Services
                  </span>
            </li>

            <li className={navProducts===true?'navArrow':'navBackArrow uProLine'}>
                  <span onClick={()=>{setNavProducts(!navProducts)}}>
                  Products
                  </span>
            </li>

            <li><a href='/industries'>Industries</a></li>

            <li><a href='#'>Resources</a></li>

            <li><a href="/clients">Clients</a></li>
            <li><a href="/carrier">Carrier</a></li>
            <li><a href='/contact-us' className='navConButton'><Button style={{
                            borderRadius: 35,
                            padding: "10px 26px",
                            fontSize: "18px"
                        }}
                    variant="outlined">Contact us</Button></a></li>
        </ul>
    </nav>
    <br/><br/><br/><br/>

{navChev===false?
          <>
          <BouncyDiv ref={domNode} className='container-fluid'>
          <div className="row navHead">
            <div className="col-sm">

              {navbarServicesDiv.map((item)=>{
                return(
                  <div className='row'>
                    <div className="col">
                      <Link reloadDocument to={`/services/${item.id1}`} onClick={
                        ()=>{
                          setNavchev(!navChev)
                        }
                        }>
                          
                        <div className="navBItem">
                          {item.name1}
                        </div>
                      </Link>
                    </div>


                    <div className="col">
                      <Link reloadDocument to={`/services/${item.id2}`} onClick={
                        ()=>{
                          setNavchev(!navChev)
                        }
                        }>
                          
                        <div className="navBItem">
                          {item.name2}
                        </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link reloadDocument to={`/services/${item.id3}`} onClick={
                        ()=>{
                          setNavchev(!navChev)
                        }
                        }>
                          
                        <div className="navBItem">
                          {item.name3}
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>  
          </div>
        </BouncyDiv>
        </>
    :null}

{navProducts===false?
          <>
          <BouncyDiv ref={domNode} className='container-fluid'>
          <div className="row navHead">
            <div className="col-sm">

              {navbarProductsDiv.map((item)=>{
                return(
                  <div className='row'>
                    <div className="col">
                      <Link reloadDocument to={`/products/${item.id1}`} onClick={
                        ()=>{
                          setNavProducts(!navProducts)
                        }
                        }>
                          
                        <div className="navBItem">
                          {item.name1}
                        </div>
                      </Link>
                    </div>


                    <div className="col">
                      <Link reloadDocument to={`/products/${item.id2}`} onClick={
                        ()=>{
                          setNavProducts(!navProducts)
                        }
                        }>
                          
                        <div className="navBItem">
                          {item.name2}
                        </div>
                      </Link>
                    </div>

                    <div className="col">
                      <Link reloadDocument to={`/products/${item.id3}`} onClick={
                        ()=>{
                          setNavProducts(!navProducts)
                        }
                        }>
                          
                        <div className="navBItem">
                          {item.name3}
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
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
  z-index: 1000;
  background-color: white;
  animation: 1s ${bounceAnimation};
`;




export default Navbar