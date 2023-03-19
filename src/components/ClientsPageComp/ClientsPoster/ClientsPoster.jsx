import React from 'react'
import './ClientsPoster.css'
import bg from '../../../assets/images/Clients.jpg'
import black from '../../../assets/images/black.jpg'
import { Button } from '@mui/material'
import {blabla} from '../../../assets/constants/testimonyCheck'

const ClientsPoster = () => {
  return (
    <>
    <div className="sizebg">
    <div  className="Clientback">
        
        <div style={{
            backgroundImage:`url(${black})` ,
              backgroundRepeat:'no-repeat', 
              backgroundSize:'cover', 
              }}className='ClientsInfo'>
            <div className="ClientHero">
               <div className="ClientH1"> Infomatics Clients</div>
               <div className="ClientH2"> Infomatics client ecosystem is critical to our customer's success.</div>
            </div>
        </div>
    </div>
    </div>

    </>
  )
}

export default ClientsPoster