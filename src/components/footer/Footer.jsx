import React from 'react'
import '../footer/Footer.css';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaArrowRight} from 'react-icons/fa';
import facebook from "../../assets/images/Facebook.png"
import twitter from "../../assets/images/twitter.png"
import linkedin from "../../assets/images/linkedin.png"
import newlogo from '../../assets/images/infoNewLogo.png'
import { Avatar } from '@mui/material';
import { IconContext } from 'react-icons';

function mediaIcon(){

    return(

          <div className='fotSocialmedia'>
            <Avatar sx={{ width: 35, height: 35}} alt="Check list" src={facebook} />
            <Avatar sx={{ width: 35, height: 35}} alt="Check list" src={twitter} />
            <Avatar sx={{ width: 35, height: 35}} alt="Check list" src={linkedin} />
          </div>

    )
  }

const Footer = () => {
  return (
    <div className="footerMain">
        <div className="fotRow">
            <div className="fotCol">
                <img className="footerinfoLogo" src={newlogo} alt='logo'/>
                <p>This footer is for infomatics. We can place anything here.
                  Now, i have no clue. so just typing anything
                </p>
            </div>
            <div className="fotCol">
                <h3>Office <div className="underline"><span></span></div></h3>
                <p>Kabir nagar</p>
                <p>Raipur,Chattisgarh</p>
                <p>Pin 492099,India</p>
                <p className='email-id'>harshittiwari@gmail.com</p>
                <h4>+91 - 8109794547</h4>
            </div>
            <div className="fotCol">
                <h3>Links <div className="underline"><span></span></div></h3>
                <ul className='footUl'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Services</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Features</a></li>
                    <li><a href='/'>Contacts</a></li>
                </ul>
            </div>
            <div className="fotCol">
                <h3>Contact Us <div className="underline"><span></span></div></h3>
                <form className='footForm'>
                    <IconContext.Provider value={{className:'ev'}}> <FaRegEnvelope style={{fill: 'white'}}/> </IconContext.Provider>
                    <input type="email" placeholder="Enter your email-id" required/>
                    <button type="submit"><FaArrowRight style={{fill: 'white'}} className='arrow'/></button>
                </form>
                <div>
                  {mediaIcon()}
                </div>
                </div>
        </div>
        <hr
        className='hr'
        style={{
          background: '#fff',
          height: '1px',
        }}/>
        <p className='copy'>Informatics 2022 - All Rights Reserved</p>

    </div>
  )
}

export default Footer