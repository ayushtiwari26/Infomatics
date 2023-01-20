import React from 'react'
import './ContactPoster.css'
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import contactus from "../../../assets/images/contactus.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";


const ContactPoster = () => {
  return (
    <>
        <div className='contactPosterDiv'>
            <div>
                <div alt='contact background Image' style={{
                    backgroundImage:`url(${contactus})`, 
                    backgroundRepeat:'no-repeat', 
                    backgroundSize:'cover', 
                    backgroundAttachment: 'fixed'
                    }} className='ContBack'>
                    <div className='ContHeading'>
                        <div className='Contpara col'>
                            <p>Contact Us</p>
                            <p>Infomatics is ready to collaborate.</p>
                        </div>
                    </div>
                    </div>
                </div>
            <div className='contactRow'>
            <div className="contactCol">
                <h2>For Business Queries:</h2>
                <p className='ConPara'><FaRegEnvelope className='ConIcon'/><span> </span>harshittiwari@gmail.com</p>
                <p className='ConPara'> <FiPhoneCall className='ConIcon'/><span> </span>+91 - 8109794547</p>
                <p className='ConPara'> <FiPhoneCall className='ConIcon'/><span> </span>+91 - 8109794547</p>
            </div>
            <div className="contactCol">
                <h2>For Technical Support:</h2>
                <p className='ConPara'> <FiPhoneCall className='ConIcon'/><span> </span>+91 - 8109794547</p>
                <p className='ConPara'> <FiPhoneCall className='ConIcon'/><span> </span>+91 - 8109794547</p>
                <p className='ConPara'> <FiPhoneCall className='ConIcon'/><span> </span>+91 - 8109794547</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default ContactPoster