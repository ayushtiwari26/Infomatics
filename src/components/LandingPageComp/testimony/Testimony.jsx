import React, { useEffect } from 'react'
import './Testimony.css'
import myboy from '../../../assets/images/per1.jpg'
import { Avatar } from '@mui/material'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { IconContext } from 'react-icons';
import aos from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence, motion } from 'framer-motion';

const Testimony = () => {
  useEffect(()=>{
    aos.init({duration:1000})
    })  
  return (
    <>
    <div data-aos='zoom-in' className='container-fluid testiMyMain'>
        <div className='TestiTitle'>
          <span>Testimonials</span>
          <p>Happiness is a by-product of an effort to make someone else happy</p>
        </div>
        <div className="container conMar">

            <div className="row lll">

                <div className="row">
                    <IconContext.Provider value={{className:'ioLeft'}}> <IoIosArrowDropleft size={45}/> </IconContext.Provider>
                    <div>
                    <Avatar
                        alt="Cindy Baker" src={myboy}
                        sx={{ width: 186, height: 186}}
                        className={'avatarCss'}
                        />
                        <h4 className='DirName'>Someone</h4>
                        <h5 className='DirDes'>Something</h5>
                    </div>

                    <div className="col testText"><ImQuotesLeft/><br/>My experience with this company has been phenomenal.
                            The work culture that I have seen is that of extreme competence.
                            The team that techment has put together to work on our program is second to none; 
                            they are a first-class organisation. 
                            Our efficiency is now probably 100% more than our older system<br/><ImQuotesRight/></div>
                    </div>
                    <IconContext.Provider value={{className:'ioRight'}}> <IoIosArrowDropright size={45}/> </IconContext.Provider>
            </div>
        </div>
    </div>
    </>
  )
}



export default Testimony
