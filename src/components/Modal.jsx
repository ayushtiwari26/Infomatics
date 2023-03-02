import React from 'react'
// import './Modal.css';
import { TextField } from '@mui/material'

const Modal = (props) => {

  return (
    <>
      {props.openModal && (
        <div className="ModalBack">
          <div onClick={props.handleModal} className="overlay"></div>
    
          <div className="modalContent">
            <button onClick={props.handleModal} className="ModClose">X</button>
            <div className='ModalTitle'>Book Demo</div>
            <div className='ModalName'>
              <TextField id="standard-basic" label="Name*" variant="standard" className="modalInputSize"/>
            </div>
            <div className='ModalEmail'>
              <TextField id="standard-basic" label="Email*" variant="standard" className="modalInputSize"/>
            </div>
            <div className='ModalPhoneNum'>
              <TextField id="standard-basic" label="Phone Number" variant="standard" className="modalInputSize"/>
            </div>
            <div className='ModalMessage'>
              <TextField id="standard-basic" label="Message*" variant="standard" className="modalInputSize"/>
            </div>
    
            <div className="Modfooter">
              <a href="#" className="ModA">
                <span className="ModSub">Submit</span>
                <i className="ModI"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;
