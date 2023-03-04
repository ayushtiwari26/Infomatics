import React from 'react'
import './Mobile.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from 'framer-motion'; 

const Mobile = () => {
    const testAnimate={
        offscreen:{
          x:30,
          opacity:0
        },
        onscreen:{
          x:0,
          opacity:1,
          transition:{
            duration:0.4,
          }
        },
      }

      const testAnimate2={
        offscreen:{
          x:-30,
          opacity:0
        },
        onscreen:{
          x:0,
          opacity:1,
          transition:{
            duration:0.4,
          }
        },
      }


  return (
    <div className='container'>
        <div className="mobHead">Whole ERP in your hands</div>
        <div className="mobSubHead">simplify and streamline day-to-day business processes</div>
        <motion.div className="row"
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:false, amount:0.5}}
            transition={{staggerChildren:0.2}}>
            <div className="col mobfirst">
                <motion.div variants={testAnimate2} className="col mobAlign2">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>LOGIC MWS1</p>
                        <p>This app improves workflow and efficiency of the warehouse process</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate2} className="col mobAlign2">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>LOGIC MWS2</p>
                        <p>This app improves workflow and efficiency of the warehouse process</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate2} className="col mobAlign2 ">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>LOGIC MWS3</p>
                        <p>This app improves workflow and efficiency of the warehouse process</p>
                    </div>
                </motion.div>
            </div>

            <div className="col mobileScreen d-none d-md-none d-lg-block">
            <iframe src='https://my.spline.design/iphone14procopy-d7fcd295886ff8ccf3dbf712d86aa587/' frameborder='0' height='100%'></iframe>
            </div>
            
            <div className="col">
            <motion.div variants={testAnimate} className="col mobAlign">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>LOGIC MWS4</p>
                        <p>This app improves workflow and efficiency of the warehouse process</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate} className="col mobAlign">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>LOGIC MWS5</p>
                        <p>This app improves workflow and efficiency of the warehouse process</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate} className="col mobAlign">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>LOGIC MWS6</p>
                        <p>This app improves workflow and efficiency of the warehouse process</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Mobile