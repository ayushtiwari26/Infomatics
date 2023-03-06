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
                        <LazyLoadImage src="/images/mobProjectManagment.png" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>Project managment</p>
                        <p>Plan, organize, and manage projects efficiently.</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate2} className="col mobAlign2">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="/images/mobTransportManagment.png" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>Transport Managment</p>
                        <p> Optimize transportation of goods and services while reducing costs.</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate2} className="col mobAlign2 ">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="/images/mobHRManagment.png" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>HR</p>
                        <p>Streamline human resources processes from recruitment to payroll.</p>
                    </div>
                </motion.div>
            </div>

            <div className="col mobileScreen d-none d-md-none d-lg-block">
            {/* <iframe src='https://my.spline.design/iphone14procopy-d7fcd295886ff8ccf3dbf712d86aa587/' frameborder='0' height='100%'></iframe> */}
            {/* <iframe src='https://my.spline.design/iphone14procopy-d7fcd295886ff8ccf3dbf712d86aa587/' frameborder='0' height='100%'></iframe> */}
            <iframe src='https://my.spline.design/iphone14procopy-d7fcd295886ff8ccf3dbf712d86aa587/' frameborder='0' height='100%'></iframe>
            </div>
            
            <div className="col">
            <motion.div variants={testAnimate} className="col mobAlign">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="/images/mobWarehouseManagment.png" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>WMS (Warehouse Managment)</p>
                        <p>Improve warehouse operations and inventory accuracy.</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate} className="col mobAlign">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="/images/mobProcurementManagment.png" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>Eprocurement </p>
                        <p>Simplify procurement processes from requisition to payment.</p>
                    </div>
                </motion.div>
                <motion.div variants={testAnimate} className="col mobAlign">
                    <div className='mobSideImgDiv'>
                        <LazyLoadImage src="/images/mobSalesManagment.png" alt="" className='mobSideImg' loading='lazy'/>
                    </div>
                    <div className='mobSideTextDiv'>
                        <p>Sales</p>
                        <p>Manage sales process from lead generation to order fulfillment.</p>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </div>
  )
}

export default Mobile