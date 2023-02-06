import React from 'react'
import './ClientsPoster.css'
import bg from '../../../assets/images/Clients.jpg'
import logo1 from '../../../assets/images/logo1.jpg'
import facebook from "../../../assets/images/sa.jpg"
import face from "../../../assets/images/powerBi.png"
import twitter from "../../../assets/images/whoAreWe.png"
import linkedin from "../../../assets/images/sql.png"
import linked from "../../../assets/images/sap.png"
import { Button } from '@mui/material'
import {blabla} from '../../../assets/constants/testimonyCheck'

const ClientsPoster = () => {
  return (
    <>
    <div  className="Clientback">
        <div style={{
            backgroundImage:`url(${bg})` ,
              backgroundRepeat:'no-repeat', 
              backgroundSize:'cover', 
              backgroundPosition:'center'
              }}className='ClientsInfo'>
            <div className='ClientHero'>
               <div className='ClientH1'> Infomatics Clients</div>
               <div className='ClientH2'> Infomatics client ecosystem is critical to our customer's success.</div>

            </div>
        </div>
        <div className='ClientsBox'>
                <div className='ClientsHead'>
                    <div className='CliHead'>
                        <h3 className='ClientsOur'>Our Clients</h3>
                        <h4 className='ClientsLook'>Take a look at our clients</h4>
                        <p className='ClientsWe'>We did a great job with these companies. You can be next to work with!</p>
                    </div>
                </div>
            
                <div className='Clientslogo'>
                    {blabla.map((item)=>{
                        return(
                        <div className='ClientsCol'>
                            <div className='Client1'><img src={item.titlefa}/></div>
                            <div className='Client1'><img src={item.img2}/></div>
                            <div className='Client1'><img src={item.img3}/></div>
                            <div className='Client1'><img src={item.img4}/></div>
                            <div className='Client1'><img src={item.img5}/></div>
                        </div>
                        )
                    })}
                </div>
                
                <div className="Clientslast">
                    
                    <p className='Clientlasthead'>Be Smart Lets us do our job.</p>
                    <div>
                        <Button style={{
                                    borderRadius: 35,
                                    backgroundColor: "#027ad6",
                                    color:'white',
                                    padding: "12px 70px",
                                    fontSize: "17px",
                                    fontWeight:'550',
                                    fontFamily:'Montserrat',
                                    letterSpacing:'-0.5px'
                                    }}
                                variant="contained">Try Us Out
                        </Button>
                    </div>
                </div>
            </div>
    
    </div>
    </>
  )
}

export default ClientsPoster