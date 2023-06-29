import React from 'react'
import "./Benefits.css"
import arrow from "../../../assets/images/arrow.jpeg"
import tick from "../../../assets/images/check.jpeg"
const Benefits = () => {
  return (
        <>
        <div className="benefitBg">
            <div className="benefitHead">ERP For Steel Industry Benefits</div>
            <div className="benefitPara" style={{lineHeight:'30px'}}>Infomatics provides advanced ERP software solutions designed specifically for the steel manufacturing industry. Our software can help steel manufacturers optimize their processes, manage inventory levels, track production in real-time, and streamline logistics and supply chain operations. With Infomatics' ERP software, you can increase your production efficiency, reduce costs, and transform your steel manufacturing processes. Our software provides advanced analytics and reporting features that enable you to make informed decisions and stay ahead of the competition.  </div>
            <div className="benefitPoint">
                <div className="beneCol1">
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>Optimize your steel production process with real-time monitoring</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>Improve inventory management and reduce wastage of raw materials</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>Enhance supply chain and logistics efficiency to meet tight deadlines</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>Enhance supply chain and logistics efficiency to meet tight deadlines</div></div>
                </div>
                <div className="beneCol1">
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Streamline financial management and track expenses in real-time</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Increase profitability with optimized production and inventory management</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Improve customer satisfaction by delivering orders on time and with quality</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Stay compliant with industry regulations and standards</div></div>
                </div>
                
            </div>
        </div>
        </>
  )
}

export default Benefits