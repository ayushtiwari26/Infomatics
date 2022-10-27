import React, { useState } from 'react'
import './LeadersRely.css'
import { motion } from "framer-motion";
import Upwork from '../../assets/images/Upwork.png'
import Fiverr from "../../assets/images/fiverr.png";
import Amazon from "../../assets/images/amazon.png";
import Shopify from "../../assets/images/Shopify.png";
import Facebook from "../../assets/images/Facebook.png";
import Industry from '../../assets/images/industry.jpg';
import { Button, Drawer, Tab, Tabs } from '@mui/material';


const LeadersRely = () => {
    
  return (
    <div className="container mar" >
        <div className="row">
            <div className="col">
                <img src={Industry} alt='' className='industryImg'/>
                <div className="row inds">
                    <span>Industry leaders who rely on Infomatics</span>
                </div>
            </div>
            

            <div className="col">
                <div className="works" id="works">
                    <div className="w-right">
                    <motion.div
                        initial={{ rotate: 45 }}
                        whileInView={{ rotate: 0 }}
                        viewport={{ margin: "-40px" }}
                        transition={{ duration: 3.5, type: "spring" }}
                        className="w-mainCircle"
                        >
                        <div className="w-secCircle">
                            <img src={Upwork} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Fiverr} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Facebook} alt="" />
                        </div>
                    </motion.div>
                    {/* <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div> */}
                </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default LeadersRely
