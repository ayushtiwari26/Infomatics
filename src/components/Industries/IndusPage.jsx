import React, { useState } from 'react';
import "./IndusPage.css"
import DemoForm from "../demoForm/DemoForm"

import ImgFirst from "../../assets/images/ImgFirst.jpg"
import Trading from "../../assets/images/Trading.jpg"
import Dis from "../../assets/images/dis.jpg"
import fleet from "../../assets/images/fleet.jpg"
import real from "../../assets/images/real.jpg"
import rice from "../../assets/images/rice.jpg"
import indus from '../../../src/assets/images/indus.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component";


const IndusPage = () => {
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () => {
      setShowForm(!showForm);
  
    };
  return (
    <>
     <div style={{
          backgroundImage:`url(${indus})`, 
          backgroundRepeat:'no-repeat', 
          backgroundSize:'cover', 
          backgroundAttachment: 'fixed'
          }} className='IndusBack'>
          <div className='IndusHeading'>
              <div className='Induspara col'>
                <p>Industries</p>
                <p>Infomatics has customers from a broad range of industries.</p>
              </div>
          </div>
        </div>

    <div className="container-fluid">
        <div className="row IndusRow">
            {/* <p className='Industries'>Industries</p>
            <p className='InduSub'>Infomatics has customers from a broad range of industries.</p> */}
        </div>
        <div className="row IndusRow2">
            <div className="col IndusImg">
                 <LazyLoadImage src={ImgFirst} className="Indusphoto"  alt='Iron' loading='lazy'/>
            </div>
            <div className="col IndusWord">
                    <p className='IndusIron'>Sponge Iron and Steel</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#' onClick={handleButtonClick}>Know More</a></p>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row IndusRow3">
            <div className="col IndusImg2">
                 <LazyLoadImage src={Trading} className="Indusphoto"  alt='Iron' loading='lazy'/>
            </div>
            <div className="col IndusWord2">
                    <p className='IndusIron'> Trading</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#' onClick={handleButtonClick} >Know More</a></p>
            </div>
        </div>
    </div>
    <div className="container-fluid">

    <div className="row IndusRow2">
            <div className="col IndusImg">
                 <LazyLoadImage src={Dis} className="Indusphoto"  alt='Iron' loading='lazy'/>
            </div>
            <div className="col IndusWord">
                    <p className='IndusIron'>Distribution</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#' onClick={handleButtonClick}>Know More</a></p>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row IndusRow3">
            <div className="col IndusImg2">
                 <LazyLoadImage src={fleet} className="Indusphoto"  alt='Iron' loading='lazy'/>
            </div>
            <div className="col IndusWord2">
                    <p className='IndusIron'> Fleet Management</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#' onClick={handleButtonClick}>Know More</a></p>
            </div>
        </div>
    </div>

    <div className="container-fluid">

    <div className="row IndusRow2">
            <div className="col IndusImg">
                 <LazyLoadImage src={real} className="Indusphoto"  alt='Iron' loading='lazy'/>
            </div>
            <div className="col IndusWord">
                    <p className='IndusIron'>Construction [ Real Estate ]</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#' onClick={handleButtonClick}>Know More</a></p>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row IndusRow3">
            <div className="col IndusImg2">
                 <LazyLoadImage src={rice} className="Indusphoto"  alt='Iron' loading='lazy'/>
            </div>
            <div className="col IndusWord2">
                    <p className='IndusIron'> Rice Mill</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#' onClick={handleButtonClick}>Know More</a></p>
            </div>
        </div>
    </div>
    {showForm && <DemoForm openmodal={showForm} setopenmodal={setShowForm}/>}
    </>
  )
}

export default IndusPage