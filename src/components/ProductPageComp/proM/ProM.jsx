import React from 'react'
import './ProM.css'
import Tilt from 'react-tilt'
import {productCard} from '../../../assets/constants/productsPage'

const ProM = (props) => {
    return(
        <>
        {productCard.map((parItem)=>{        
        if(props.params === parItem.id)
        { 
            return(
            <>
                {
                    parItem.content.map((item)=>{
                        return(
                            <>
                                <div className="prodCardGrandPar">
                                    <div className="row prodCardPar">
                                        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard">
                                            <p className=''>{item.title}</p>
                                            <p>{item.data}</p>
                                        </Tilt>
                                        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard">
                                            <p className=''>{item.title2}</p>
                                            <p>{item.data2}</p>
                                        </Tilt>
                                        <Tilt options={{easing:"cubic-bezier(.03,.98,.52,.99)", scale:1.02}} className="col prodCard">
                                            <p className=''>{item.title3}</p>
                                            <p>{item.data3}</p>
                                        </Tilt>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )
        }
    })}
    </>
    )
}

export default ProM