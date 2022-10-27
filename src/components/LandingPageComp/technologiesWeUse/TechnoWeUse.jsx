import React from 'react'
import './TechnoWeUse.css'
import js from '../../../assets/images/js.png'
import sql from '../../../assets/images/sql.png'
import o from '../../../assets/images/o.png'
import htm from '../../../assets/images/htm.png'
import cs from '../../../assets/images/cs.png'
import sap from '../../../assets/images/sap.png'
import mn from '../../../assets/images/mn.png'

const TechnoWeUse = () => {
  return (
<div className='container-fluid  imgsty'>
      <div className='gradient-text'> TECHNOLOGIES WE USE</div><br/>
        <div className="row">
            <div className="col"><img src={js} alt='techno1'/></div>
            <div className="col"><img src={sql} alt='techno2'/></div>
            <div className="col"><img src={o} alt='techno3'/></div>
            <div className="col"><img src={sap} alt='techno4'/></div>

        </div><br/><br/>
        <div className="row">
            <div className="col"><img src={sap} alt='techno5'/></div>
            <div className="col"><img src={cs} alt='techno6'/></div>
            <div className="col"><img src={mn} alt='techno7'/></div>
            <div className="col"><img src={htm} alt='techno8'/></div>
        </div>
      
    </div>
  )
}

export default TechnoWeUse
