import "./ModalComp.css"
import { TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';


const ModalComp = () => {

  const [openModal, setOpenModal]= useState(false);

  const toggleModal = ()=> {
    setOpenModal(!openModal)
  }
  return (
    <>
    <div className="ModalBut">
    <button onClick={toggleModal}>Open</button>
    </div>
    {openModal && (
      <div className="ModalBack">
        <div onClick={toggleModal} className="overlay"></div>

        
        <div className="modalContent">
            <button onClick={toggleModal} className="ModClose">X</button>
          <div className='ModalTitle'>Book Demo</div>
              <div className='ModalName'>
                <TextField id="standard-basic" label="Name" variant="standard" />
              </div>
            <div className='ModalEmail'>
                <TextField id="standard-basic" label="Email" variant="standard" />
            </div>
                <div className='ModalPhoneNum'>
              <TextField id="standard-basic" label="Phone Number" variant="standard" />
          </div>
          <div className='ModalMessage'>
              <TextField id="standard-basic" label="Message" variant="standard" />
          </div>

          <div className="Modfooter">
            {/* <button
            onClick={toggleModal}
              id="cancelBtn"
            >
              Cancel
            </button> */}
            <a href="#" className="ModA"><span className="ModSub">Submit</span><i className="ModI"></i></a>
          </div>
          </div>
      </div>
    
  
)}
</>
  
  )
}

export default ModalComp