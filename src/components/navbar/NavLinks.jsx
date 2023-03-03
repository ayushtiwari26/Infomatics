import React, {useState } from 'react'
import './Navbar.css'
import infoLogo from '../../assets/images/infoLogo.png'
import {motion} from 'framer-motion'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import DomainRoundedIcon from '@mui/icons-material/DomainRounded';
import ImportExportRoundedIcon from '@mui/icons-material/ImportExportRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import BlurOnRoundedIcon from '@mui/icons-material/BlurOnRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import { Button} from '@mui/material';
import { HiMenu } from 'react-icons/hi'
import {VscChromeClose} from 'react-icons/vsc'
import { Link } from 'react-router-dom';
import {servicesPage} from '../../assets/constants/servicesPage'
import {productHero} from '../../assets/constants/productsPage'


const NavLinks = (props) => {
  const [open , setOpen]= useState(false)
  const hambergerIcon = <HiMenu className="Hamberger" size={"50px"} onClick={() =>setOpen(!open)} />
  const closeIcon = <VscChromeClose className="Hamberger" size={"50px"} onClick={() =>setOpen(!open)}/>
  const closeMobileMenu = () => setOpen(false);

  const [serviceChild, setServiceChild] = useState(false)
  const [productChild, setProductChild] = useState(false)

  function handleServiceChildStatus(){
    setServiceChild(!serviceChild)
    console.log('hello')
  }

  const animateFrom={opacity:0, y:-40}
  const animateTo={opacity:1, y:0}


  
    return (
        <>
        
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
                      <Button startIcon={<HomeRoundedIcon />} className='hoverNavbarSideDiv'>
                        <a href='/' >Home</a>
                      </Button>
                  </motion.div>
                
                  <motion.div className="NavAbout"
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.20}}>
                      <Button startIcon={<PersonRoundedIcon />}><a href='/about-us'>About Us</a></Button>
                  </motion.div>
                  
                  <hr/>
                  <motion.div className="NavServices" 
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{delay:0.30}}
                    >
                    <Button startIcon={<ConstructionRoundedIcon /> }  onClick={handleServiceChildStatus}
                      sx={{marginBottom:1}}>
                      <Link to='#'>Servies</Link>
                    </Button>
                  
                    {serviceChild===true && servicesPage.map((item)=>{
                      return(
                        <p className='childSerSmallScreen'>
                        <Button startIcon={<BlurOnRoundedIcon />} onClick={handleServiceChildStatus} >
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
                      <Button startIcon={<CategoryRoundedIcon />} 
                        onClick={()=>{setProductChild(!productChild)}}
                        sx={{marginBottom:1}}>
                        <Link to='#'>Product</Link>
                      </Button>
                      {productChild===true && productHero.map((item)=>{
                      return(
                        <p className='childSerSmallScreen'>
                        <Button startIcon={<ClearAllRoundedIcon />} onClick={handleServiceChildStatus} >
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
                    <Button startIcon={<DomainRoundedIcon />}> <a href='/industries'>Industries</a></Button>
                  </motion.div>

                  <motion.div className="NavCli"
                   initial={animateFrom}
                   animate={animateTo}
                   transition={{delay:0.70}}>
                  <Button startIcon={<Diversity1RoundedIcon  />}> <a href='/clients'>Clients</a></Button>
                  </motion.div>

                  <motion.div className="NaCarr"
                   initial={animateFrom}
                   animate={animateTo}
                   transition={{delay:0.80}}>
                  <Button startIcon={<WorkRoundedIcon/>}> <a href='/carrier'>Carrier</a></Button>
                  </motion.div>

                  <motion.div className="NavCon"
                   initial={animateFrom}
                   animate={animateTo}
                   transition={{delay:0.90}}>
                  <Button startIcon={<AddIcCallRoundedIcon />}><a href='/contact-us'>Contact-Us</a></Button>
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