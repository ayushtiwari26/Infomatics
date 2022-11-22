import React, { useEffect, useState } from 'react'
import './Testimony.css'
import myboy from '../../../assets/images/per1.jpg'
import { Avatar, duration } from '@mui/material'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { IconContext } from 'react-icons';
import aos from 'aos';
import 'aos/dist/aos.css';
import {testimonyCheck} from '../../../assets/constants/testimonyCheck'
import { Variants, motion } from 'framer-motion';

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

const testAnimate2={
  offscreen:{
    x:200,
    opacity:0
  },
  onscreen:{
    x:0,
    opacity:1,
    transition:{
      duration:1.5,
      type:'spring',
      bounce:0.6
    }
  }
}



const Testimony = () => {
  const [testNum, setTestNum] = useState(0) 
  return(
    <div className='container-fluid testiMyMain'>
    <div className='TestiTitle'>
      <span>Testimonials</span>
      <p>Happiness is a by-product of an effort to make someone else happy</p>
    </div>

    <div className="container conMar">
    <motion.div className="row lll"
      initial={'offscreen'}
      whileInView={'onscreen'}
      viewport={{once:false, amount:0.5}}
      // transition={{staggerChildren:0.5}}
      >

      <motion.div className="row"
        >
          {testNum>0?<IconContext.Provider value={{className:'ioLeft'}}> <IoIosArrowDropleft size={45} onClick={()=>{setTestNum(testNum-1)}}/> </IconContext.Provider>:null}
          <motion.div
            variants={testAnimate}>
            <Avatar
                alt="Cindy Baker" src={myboy}
                sx={{ width: 186, height: 186}}
                className={'avatarCss'}
                />
            <h4 className='DirName'>{testimonyCheck[testNum].testName}</h4>
            <h5 className='DirDes'>{testimonyCheck[testNum].testDesignation}</h5>
          </motion.div>

            <motion.div className="col testText" variants={testAnimate2}><ImQuotesLeft/><br/>{testimonyCheck[testNum].testTestimony}<br/><ImQuotesRight/></motion.div>
            {testNum<6?<IconContext.Provider value={{className:'ioRight'}}> <IoIosArrowDropright size={45} onClick={()=>{setTestNum(testNum+1)}}/> </IconContext.Provider>:null}
        </motion.div>       
    </motion.div>  
    </div>
    </div>
  )
}



export default Testimony

  {/* {testimonyCheck.map((item, index)=>(
    <div key={index}>
      <PreTestimony testName={item.testName} testDesignation={item.testDesignation} testTestimony={item.testTestimony}/>
    </div>
  ))} */}
