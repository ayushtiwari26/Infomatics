import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import infoLogo from '../../assets/images/infoLogo.png'
import styled, { keyframes} from 'styled-components';
import {fadeInDown} from 'react-animations';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {navbarServicesDiv, navbarProductsDiv} from '../../assets/constants/navbarConstant'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: 35,
    padding: "10px 22px",
    fontSize: "18px",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      boxShadow: "none",
      scale: "1",
    },
  },
}));


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
    const classes = useStyles();
    const [navChev, setNavchev] = useState(true)
    const [navProducts, setNavProducts] = useState(true)
    const [navIndus, setNavIndus]= useState(true)
  function handleChev(){
    setNavchev(!navChev)
  }

  let domNode = useClickOutside(()=>{
    setNavchev(true)
    setNavProducts(true)
    setNavIndus(true)
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

            <li className={navIndus===true?'navArrow':'navBackArrow uProLine'}>
                <span onClick={()=>{setNavIndus(!navIndus)}}>
                  Industries
                  </span>
              {/* <a href='/industries'>Industries</a> */}
            </li>

            {/* <li><a href='#'>Resources</a></li> */}

            <li><a href="/clients">Clients</a></li>
            <li><a href="/carrier">Carrier</a></li>
            <li>
              <a href='/contact-us' >
                <Button className={classes.button} variant="outlined">Contact us</Button>
              </a>     
            </li>
        </ul>
    </nav>
{navIndus===false?
          <>
          <BouncyDiv2 ref={domNode} className='Indus'>
            <div className="Indusnav">
              <div className="Induscol">
                <div className='indusnavhead'>Manufacturing</div>
                <ul className='indusnavlist'>
                  <li>
                    <Link reloadDocument to={`/industries/steel`} onClick={
                        ()=>{
                          setNavIndus(!navIndus)
                        }
                        }>
                          </Link>
                  </li>
                  <li>Metals & Minerals Industries</li>
                  <li>Batch Manufacturing</li>
                  <li>Discrete Manufacturing</li>
                </ul>
              </div>
               <div className="Induscol">
                <div className='indusnavhead2'>Trading</div>
                <ul className='indusnavlist'>
                  <li>Coal</li>
                  <li>Cement</li>
                  <li>Iron Ore</li>
                
                </ul>
              </div>
              <div className="Induscol">
                <div className='indusnavhead3'>Logistics and C&F</div>
                <ul className='indusnavlist'>
                  <li>Coal</li>
                  <li>Cement</li>
                  <li>Iron Ore</li>
                  <li>Agro Commodity</li>
                  <li>Steel</li>
                </ul>
              </div>
              <div className="Induscol">
                <div className='indusnavhead4'>Other Servies</div>
                <ul className='indusnavlist'>
                  <li>Education</li>
                  <li>Lifestyle</li>
                  <li>Entertainment</li>
                  
                </ul>
              </div>
              
            </div>
          </BouncyDiv2>
          

          </>:null
}
{navChev===false?
          <>
          <BouncyDiv ref={domNode} className='container-fluid'>
          <div className="row navHead">
            <div className="col-sm">

              {navbarServicesDiv.map((item)=>{
                return(
                  <div className='row rowServicesBorder'>
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
  border-top: 2px solid var(--blue);
  padding-left: 7%;
  top:4rem;
  z-index: 1000;
  background-color: white;
  animation: 1s ${bounceAnimation};
`;
const BouncyDiv2 = styled.div`
  position: fixed;
  border-top: 2px solid var(--blue);
  // padding-left: 7%;
  // top:4rem;
  z-index: 1000;
  background-color: white;
  animation: 1s ${bounceAnimation};
`;





export default Navbar