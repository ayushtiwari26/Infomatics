import React from 'react'
import "./Benefits.css"
import arrow from "../../../assets/images/arrow.png"
import tick from "../../../assets/images/check.png"
const Benefits = () => {
  return (
        <>
        <div className="benefitBg">
            <div className="benefitHead">ERP For Real Estate Company Benefits</div>
            <div className="benefitPara">ERP is a robust tool. Being flexible & versalite provide enterprise revolutionary 
                solution. We provide technology-driven ERP solution with comparestion modified ti manage every aspect of real estate.bussiness. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic pariatur, fuga blanditiis nam fugit molestiae eos. Aperiam adipisci aliquam assumenda aut atque earum quos, aliquid ullam! Exercitationem repudiandae quas possimus.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt labore, adipisci ab reiciendis, architecto pariatur quo id </div>
            <div className="benefitPoint">
                <div className="beneCol1">
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>One-stop solution for end-to-end real estate management</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Finances and accounting</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>Proper Management of building maintance</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Customize and integration friendly</div></div>
                </div>
                <div className="beneCol1">
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>One-stop solution for end-to-end real estate management</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Finances and accounting</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={arrow}/></div><div className='beneLine'>Proper Management of building maintance</div></div>
                    <div className="listitem1"><div className='imgdiv'><img src={tick}/></div><div className='beneLine'>Customize and integration friendly</div></div>
                </div>
                
            </div>
        </div>
        </>
  )
}

export default Benefits