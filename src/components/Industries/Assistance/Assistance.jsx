import React from 'react'
import "./Assistance.css"
import assistance from "../../../assets/images/assistance.svg"
import ticket from "../../../assets/images/ticket.png"
import support from "../../../assets/images/support.png"
import chat from "../../../assets/images/chat.png"

const Assistance = () => {
  return (
    <>
        <div className="asDiv">
            <div className="asText">
                <div className="asHead">Need Assistance ?</div>
                <div className="asPara">Our support team is available for you in business hours</div>
                <div className="asEmoji">
                    <div className="asSym">
                        <div className="symboldiv"><img src={support} alt="assistance img"/></div>
                        <div className="textDiv">Support Portal</div>
                    </div>
                    <div className="asSym">
                        <div className="symboldiv"><img src={ticket} alt="assistance img"/></div>
                        <div className="textDiv">harshit@gmail.com</div>
                    </div>
                    <div className="asSym">
                        <div className="symboldiv"><img src={chat} alt="assistance img"/></div>
                        <div className="textDiv">91-8082949957</div>
                    </div>
                </div>
            </div>
            <div className="asImg">
                <img src={assistance} alt="assistance img"/>
            </div>
        </div>
    </>
  )
}

export default Assistance