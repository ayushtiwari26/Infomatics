import React from 'react'
import  './OurCus.css'
import {blabla} from '../../../assets/constants/testimonyCheck'

import heart from '../../../assets/images/death.png'
import c1 from '../../../assets/images/c1.jpg'
import c2 from '../../../assets/images/c2.jpg'
import c3 from '../../../assets/images/c3.jpg'
import c4 from '../../../assets/images/c4.jpg'
import c5 from '../../../assets/images/c5.jpg'
import c6 from '../../../assets/images/c6.jpg'
const OurCus = () => {
  return (
    <>
        <div className="OurBack">
            <div className="OurTitle">
                <div className="OurStiker"><img src={heart} alt='sticker'></img></div>
                <div className="Ourhead">Our Clients</div>
                <div className="OurMoto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus repellat ex aliquid, ut rerum laudantium 
                                         inventore amet fugit eum facilis cumque cum perspiciatis, vitae id nemo ea aut praesentium. Aliquam.</div>
            </div>
            <div className="OurImgs">
                <div className="OurMain1">
                    <div className="OurImg1"><img src={c1} alt='sticker'></img></div>
                    <div className="OurImg2"><img src={c2} alt='sticker'></img></div>
                </div>
                <div className="OurMain2">
                    <div className="OurImg3"><img src={c3} alt='sticker'></img></div>
                    <div className="OurImg4"><img src={c4} alt='sticker'></img></div>
                </div>
                <div className="OurMain3">
                    <div className="OurImg5"><img src={c5} alt='sticker'></img></div>
                    <div className="OurImg6"><img src={c6} alt='sticker'></img></div>
                </div>

            </div>
            
        </div>
        <div className='Clientslogo'>
                    {blabla.map((item)=>{
                        return(
                        <div className='ClientsCol'>
                            <div className='Client1'><img src={item.img4}/></div>
                            <div className='Client1'><img src={item.img2}/></div>
                            <div className='Client1'><img src={item.img3}/></div>
                            <div className='Client1'><img src={item.img4}/></div>
                            
                        </div>
                        )
                    })}
                </div>
    </>
  )
}

export default OurCus