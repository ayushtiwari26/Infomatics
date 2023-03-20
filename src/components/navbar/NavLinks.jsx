import React, {useState } from 'react'
import './Navbar.css'
import infoLogo from '../../assets/images/infoLogo.png'
import {motion} from 'framer-motion'
import { Button} from '@mui/material';
import { HiMenu } from 'react-icons/hi'
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import {servicesPage} from '../../assets/constants/servicesPage'
import {productHero} from '../../assets/constants/productsPage'

const NavLinks = (props) => {
  const [open , setOpen]= useState(false)
  const [serviceChild, setServiceChild] = useState(false)
  const [productChild, setProductChild] = useState(false)
  const hambergerIcon = (
    <HiMenu
      className="Hamberger"
      size={"50px"}
      onClick={() => {
        setOpen(!open);
      }}
    />
  );
  const closeIcon = <VscChromeClose className="Hamberger" size={"50px"} onClick={() =>setOpen(!open)}/>
  const closeMobileMenu = () => setOpen(false);



  function handleServiceChildStatus(){
    setServiceChild(!serviceChild)
  }

  const animateFrom={opacity:0, y:-40}
  const animateTo={opacity:1, y:0}


  
    return (
        <>
            <div
              className={`navbarSideOverlay ${open ? 'visible' : ''}`}
              onClick={() => setOpen(false)}
            />

      <nav className="Nav">
        <div className="logow">
            <div className="logo">
                <a href='/'><img src={infoLogo} alt="Infomatics logo" /></a> 
            </div>
         </div>
         {open ? closeIcon: hambergerIcon }
         {open &&
            <>
            <div isMobile={true} closeMobileMenu={closeMobileMenu} className="NavContainer">
            
              <div className="Navbar">
                  <motion.div 
                    className="NavHome"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.10}}>
                      <Button className='hoverNavbarSideDiv'>
                        <img src='/images/home.png'/>
                        <a href='/' >Home</a>
                      </Button>
                  </motion.div>
                
                  <motion.div className="NavAbout"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.20}}>
                      <Button className='hoverNavbarSideDiv'>
                        <img src='/images/aboutUsIcon.png'/>
                        <a href='/about-us'>About Us</a></Button>
                  </motion.div>
                  
                  <hr/>
                  <motion.div className="NavServices" 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.30}}
                    >
                    <Button onClick={handleServiceChildStatus}
                      sx={{marginBottom:1}}
                      className='hoverNavbarSideDiv'>
                        <img src='/images/servicesIcon.png'/>
                      <Link to='#'>Services</Link>
                    </Button>
                  
                    {serviceChild===true && servicesPage.map((item)=>{
                      return(
                        <p className='childSerSmallScreen'>
                        <Button onClick={handleServiceChildStatus} className='hoverNavbarSideDiv'>
                          <img src='/images/verifyIcon.png'/>
                          <Link to={item.id} className='linkChildFOntSize'>{item.name}</Link>
                        </Button>
                      </p>
                      )
                    })}

                  </motion.div>
                    <hr/>

                  <motion.div className="NavProd"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.40}}>
                      <Button
                        onClick={()=>{setProductChild(!productChild)}}
                        sx={{marginBottom:1}}
                        className='hoverNavbarSideDiv'>
                          <img src='/images/productIcon.png'/>
                        <Link to='#'>Product</Link>
                      </Button>
                      {productChild===true && productHero.map((item)=>{
                      return(
                        <p className='childSerSmallScreen'>
                        <Button onClick={handleServiceChildStatus} className='hoverNavbarSideDiv'>
                          <img src='/images/verifyIcon.png'/>
                          <Link to={item.id} className='linkChildFOntSize'>{item.title}</Link>
                        </Button>
                      </p>
                      )
                    })}
                  </motion.div>
                    <hr/>

                  <motion.div className="NavInd"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.50}}>
                    <Button className='hoverNavbarSideDiv'> 
                    <img src='/images/industriesIcon.png'/>
                    <a href='/industries'>Industries</a></Button>
                  </motion.div>

                  <motion.div className="NavCli "
                   initial={animateFrom}
                   animate={animateTo}
                   transition={{delay:0.70}}>
                  <Button className='hoverNavbarSideDiv'> 
                  <img src='/images/clientsICon.png'/>
                  <a href='/clients'>Clients</a></Button>
                  </motion.div>

                  <motion.div className="NaCarr "
                   initial={animateFrom}
                   animate={animateTo}
                   transition={{delay:0.80}}>
                  <Button className='hoverNavbarSideDiv'> 
                  <img src='/images/careerIcon.png'/>
                  <a href='/carrier'>Carrier</a></Button>
                  </motion.div>

                  <motion.div className="NavCon "
                   initial={animateFrom}
                   animate={animateTo}
                   transition={{delay:0.90}}>
                  <Button className='hoverNavbarSideDiv'>
                  <img src='/images/contactUsIcon.png'/>
                    <a href='/contact-us'>Contact-Us</a></Button>
                  </motion.div>

              </div>
            
            </div>

            </>
          }
        </nav>
        
        </>
      )
    }
    

    

export default NavLinks