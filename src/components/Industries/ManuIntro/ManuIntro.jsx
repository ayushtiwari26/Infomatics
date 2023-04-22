import React from 'react'
import './ManuIntro.css'
import Manu from '../../../assets/images/manuimg.png'
const ManuIntro = () => {
  return (
    <>
    <div className="manumain">
      <div className="manuright">
        <div className="manusub">Microsoft Dynamics BC and Dynamics 365 for<br/> Manufacturing Industry </div>
        <div className="manuhead"><hr className="new5"/>Supporting Manufacturers with powerful Industry 4.0 tools</div>
        <div className="manupara">Microsoft Dynamics 365 for Manufacturers is a best-in-class software for manufacturers that combines CRM and ERP systems with powerful business applications and industry-specific add-ons. As more companies simplify their process-heavy operations through digitization, today’s best manufacturing software must also nurture outstanding customer satisfaction processes. The impact of digitization on manufacturing has been astounding. Across the supply chain, technology has revolutionized daily production and commercial performance, delivering drastically improved operational efficiency and stronger bottom lines. Its time to take manufacturing businesses to take the next step. Microsoft Dynamics 365 for Manufacturers is the ideal software for customer engagement, 
                                  manufacturing business analytics, and general oversight of daily operations and financials.</div>
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