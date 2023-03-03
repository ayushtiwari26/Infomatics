import { Button } from '@mui/material'
import React from 'react'
import './Dir.css'
import B2 from '../../../assets/images/B2.jpg'
import {RiDoubleQuotesL} from 'react-icons/ri'
import { LazyLoadImage } from "react-lazy-load-image-component";

const Dir = () => {
  return (
<div className='back' >
      <div className='Backu'>
        <div className='kkk'>
                  <div className="dirleft">
                        <p className='p1'> We believe every company starts from scratch, challenges are the new normal
                          and it teaches us a perfect lesson to run a successful bussiness. Like every other company, we also faced many challenges such as HR, salary 
                          stucture, staff, etc. Over the period we have defeated the challenges and 
                          became one of the best ERP sofware company in the every industry.
                          <br/>
                        </p>
                        <p className='p2'>Liza Tiwari, Chief Accounting officer, Google</p>
                  </div>
                  <div className="dirleft2">
                      <Button 
                      style={{
                      borderRadius: 35,
                      color:"black",
                      backgroundColor: "#BFD5DB",
                      padding: "12px 26px",
                      fontWeight:"700" ,
                      }}>
                        Read the Story.
                      </Button>
                  </div>
        </div>
              <div className='k2'>
                <img className='img' src={B2} alt="Director's pic"/>
              </div>
            </div>

    </div>
  )
}

export default Dir
