import React, { useEffect, useState } from 'react'
import './ClientSay.css'
import myboy from '../../../assets/images/per1.jpg'
import { Avatar} from '@mui/material'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { IconContext } from 'react-icons';
import 'aos/dist/aos.css';
import {testimonyCheck} from '../../../assets/constants/testimonyCheck'
import {motion } from 'framer-motion';

const testAnimate={
    offscreen:{
      x:-200,
      opacity:0
    },
    onscreen:{
      x:0,
      opacity:1,
      transition:{
        // delay:2,
        duration:1.5,
        type:'spring',
        bounce:0.6
      }
    },
  }

const ClientsSay = () => {
    const [testNum, setTestNum] = useState(0) 
  return (
    <>
    <div className='SayBg'>
    <div className="Sayback">
        <div className="Sayleft"><div className='ClientWhat'>What Our Customer Are Saying</div></div>
        <div className="Sayright">
            <div className="Sayhead">{testimonyCheck[testNum].testTestimonyTitle}</div>
            <div className="SayPara">{testimonyCheck[testNum].testTestimony}</div>
            
            <div className="container ClientconMar">
            <motion.div className="row lll"
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:false, amount:0.5}}
            transition={{staggerChildren:0.5}}
            >

            <motion.div className="row">
                {testNum>0?<IconContext.Provider value={{className:'ioLeft'}}> <IoIosArrowDropleft size={45} onClick={()=>{setTestNum(testNum-1)}}/> </IconContext.Provider>:null}
                <motion.div
                    variants={testAnimate}>
                    <Avatar
                        alt="Cindy Baker" src={myboy}
                        sx={{ width: 126, height: 126}}
                        className={'ClientavatarCss'}
                        />
                    <h4 className='ClientDirName'>{testimonyCheck[testNum].testName}</h4>
                    <h5 className='ClientDirDes'>{testimonyCheck[testNum].testDesignation}</h5>
                </motion.div>
                    {testNum<6?<IconContext.Provider value={{className:'ioRight'}}> <IoIosArrowDropright size={45} onClick={()=>{setTestNum(testNum+1)}}/> </IconContext.Provider>:null}
                </motion.div>       
            </motion.div>  
            </div>

                </div>
            </div>
    </div>


    </>
  )
}

export default ClientsSay