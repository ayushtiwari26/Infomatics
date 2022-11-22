import React from 'react'
import './ProM.css'
import erp21 from '../../../assets/images/erp21.jpg'
import Tilt from 'react-tilt'
import {RiShieldUserFill} from 'react-icons/ri'
import dashboard from '../../../assets/images/dashboard.png'
import ProdIllusSection from './prodIllusSection/ProdIllusSection'

const ProM = () => {
  return (
    <>

    <div className="row prodCardPar">
        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard"
        style={{borderTop: '2px solid var(--blue)'}}>
            <p className=''>Text1</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit dignissimos soluta accusamus molestias placeat tenetur nemo vel quod nisi.</p>
            <span><RiShieldUserFill size={35} style={{fill:'var(--blue)'}}/></span>
        </Tilt>
        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard"
        style={{borderTop: '2px solid red'}}>
            <p className=''>Text1</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit dignissimos soluta accusamus molestias placeat tenetur nemo vel quod nisi.</p>
            <span><RiShieldUserFill size={35} style={{fill:'red'}}/></span>
        </Tilt>
        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard"
        style={{borderTop: '2px solid orange'}}>
            <p className=''>Text1</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit dignissimos soluta accusamus molestias placeat tenetur nemo vel quod nisi.</p>
            <span><RiShieldUserFill size={35} style={{fill:'orange'}}/></span>
        </Tilt>
    </div>

    <div className="row prodCardPar">
        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard"
        style={{borderTop: '2px solid #204969'}}>
            <p className=''>Text1</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit dignissimos soluta accusamus molestias placeat tenetur nemo vel quod nisi.</p>
            <span><RiShieldUserFill size={35} style={{fill:'#204969'}}/></span>
        </Tilt>
        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard"
        style={{borderTop: '2px solid #955251'}}>
            <p className=''>Text1</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit dignissimos soluta accusamus molestias placeat tenetur nemo vel quod nisi.</p>
            <span><RiShieldUserFill size={35} style={{fill:'#955251'}}/></span>
        </Tilt>
        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard"
        style={{borderTop: '2px solid #F7CAC9'}}>
            <p className=''>Text1</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sit dignissimos soluta accusamus molestias placeat tenetur nemo vel quod nisi.</p>
            <span><RiShieldUserFill size={35} style={{fill:'#F7CAC9'}}/></span>
        </Tilt>
    </div>




    </>
  )
}

export default ProM