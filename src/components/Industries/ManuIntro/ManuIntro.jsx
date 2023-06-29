import React from 'react'
import './ManuIntro.css'
import Manu from '../../../assets/images/manuimg2.png'
const ManuIntro = () => {
  return (
    <>
    <div className="manumain">
      <div className="manuright">
        <div className="manusub">Forged for Success: Elevate Your Steel Manufacturing  </div>
        <div className="manuhead"><hr className="new5"/> Transform Your Steel Production and Stay Ahead of the Curve with Infomatics ERP</div>
        <div className="manupara">Infomatics provides advanced ERP software solutions that cater to the specific needs of the steel 
        manufacturing industry. Our software is designed to help steel manufacturers streamline their processes, manage inventory 
        levels, track production in real-time, and optimize their logistics and supply chain operations. With Infomatics' ERP software,
         you can stay ahead of the competition by reducing costs, increasing efficiency, and transforming your steel manufacturing
          processes. Contact us today to learn more about how our software can help your business thrive.</div>
      </div>
      <div className="manuleft">
        
        <div className="manufirst"> 
          <img src={Manu}/>
        </div>
       
        </div>
    </div>
  </>
  )
}

export default ManuIntro