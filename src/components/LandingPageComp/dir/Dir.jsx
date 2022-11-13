import { Button } from '@mui/material'
import React from 'react'
import './Dir.css'
import B2 from '../../../assets/images/B2.jpg'


const Dir = () => {
  return (
<div className='container-fluid DirBase' >
    <div className='DirRight'>
      <div className='DirDown'>
        <p className='DirPara'> We believe every company starts from scratch, challenges are the new normal
          and it teaches us a perfect lesson to run a successful bussiness. Like every other company, we also faced many challenges such as HR, salary 
          stucture, staff, etc. Over the period we have defeated the challenges and 
          became one of the best ERP sofware company in the every industry.
        <br/>
        </p>
        <p className='DirLiza'>Liza Tiwari, Chief Accounting officer, Google</p>
          <button className='DirBut' type='submit'>Read the Story.
          </button>

      </div>
      </div>
        <div className="DirUp">
          <img className='Dirgirl' src={B2} alt='ImgGirl'/>
        </div>
  </div>
  )
}

export default Dir
