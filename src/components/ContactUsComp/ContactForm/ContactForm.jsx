import React from 'react'
import './ContactForm.css'
import { TextField , Button} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import getInTouch from "../../../assets/images/getInTouch.png"
import { LazyLoadImage } from "react-lazy-load-image-component";
import SmallMap from '../../../assets/images/sscontact2.png'

const ContactForm = () => {
  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?center=21.268064871325173,81.59350096558912&zoom=5&size=100&key=AIzaSyDNS5PYQ9DPmYOLmjMZwLJ5Su99bzgoDSo  `;
  return (
    <div className="ConBG">
        <div className="ConCard">
            <div className="ConImg" style={{backgroundImage: `url(${SmallMap})`}}>
              {/* <img src="/images/sscontact.png" alt="" srcset="" /> */}
            </div>
            <div className="ConForm">
            <p className="ConUs">Contact Us</p>
              <form>
                <div className='FName'>
                  <TextField id="standard-basic" label="First Name" variant="standard" />
                </div>
                <div className='LName'>
                  <TextField id="standard-basic" label="Last Name" variant="standard" />
                </div>
                <div className='ConEmail'>
                  <TextField id="standard-basic" label="Email" variant="standard" />
                </div>
                <div className='PhoneNum'>
                  <TextField id="standard-basic" label="Phone Number" variant="standard" />
                </div>
                <div className='Message'>
                  <TextField id="standard-basic" label="Message" variant="standard" />
                </div>
                <div className="ConBut">
                <Button variant="contained"  sx={{
                      borderRadius: 50
                    }} endIcon={<SendIcon style={{fill:'white'}}/>}>
                     Send
                </Button>
                </div>
              </form>

              <div className='ConEmailUs'>
                <p className='Conmail'>Email Us<br/>harshittiwari@gmail.com</p>
              </div>
              <div className='ConBottom'><span className='ConFoot'>harshittiwari@gmail.com &nbsp;</span>
              <span className='ConFoot'>Facebook &nbsp;</span>
              <span className='ConFoot'>Twitter &nbsp;</span></div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm