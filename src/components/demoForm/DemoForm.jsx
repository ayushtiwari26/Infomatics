import React, { useState, useRef, useEffect } from 'react';
import { TextField } from '@mui/material'

import './DemoForm.css'

const DemoForm = (props) => {
    const [inputValue, setInputValue] = useState('');
    const setCloseModal= ()=>{
      props.setopenmodal(!props.openmodal)
    }
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    

  return (
    <>
    {props.openmodal && (
        <div className="ModalBack" >
          <div  onClick={setCloseModal} className="overlay"></div>

          
          <div className="modalContent">
              <button onClick={setCloseModal} className="ModClose">X</button>
            <div className='ModalTitle'>Book Demo</div>
                <div className='ModalName'>
                  <TextField   onChange={handleInputChange} id="standard-basic" label="Name*" variant="standard" className="modalInputSize"/>
                </div>
              <div className='ModalEmail'>
                  <TextField  onChange={handleInputChange} id="standard-basic" label="Email*" variant="standard" className="modalInputSize"/>
              </div>
                  <div className='ModalPhoneNum'>
                <TextField   onChange={handleInputChange} id="standard-basic" label="Phone Number" variant="standard" className="modalInputSize"/>
            </div>
            <div className='ModalMessage'>
                <TextField  onChange={handleInputChange} id="standard-basic" label="Message*" variant="standard" className="modalInputSize"/>
            </div>

            <div className="Modfooter">
              <a href="#" className="ModA"><span className="ModSub">Submit</span><i className="ModI"></i></a>
            </div>
            </div>
        </div>
     )} 
  </>
  )
}

export default DemoForm