import React from 'react'
import './ProdIllusSection.css'
import {productIllus} from '../../../../assets/constants/productsPage'

const ProdIllusSection = (props) => {
  return (
    <>
    {productIllus.map((parItem)=>{        
        if(props.params === parItem.id)
        { 
            return(
            <>
                {
                    parItem.content.map((item)=>{
                        return(
                            <>
                                <div className="container">
                                <div className={item.sid % 2 === 0?'proIllusRow':'proIllusRowReverse'}>
                                    <div className="col proIlluslidiv">
                                        <p>{item.title}</p>
                                        {item.li.map((sub)=>{
                                            return(
                                                <li>{sub.liData}</li>
                                            )
                                        })}
                                    </div>
                                    <div className="col illusFinanceimgdiv">
                                        <img src={item.img} className='illusFinanceimg'/>
                                    </div>
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

export default ProdIllusSection
