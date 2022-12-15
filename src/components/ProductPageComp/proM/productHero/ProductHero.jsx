import React from 'react'
import './ProductHero.css'
import {productHero} from '../../../../assets/constants/productsPage'

const ProductHero = (props) => {
  return (
    <>
    <div className="container-fluid prodImgContainer">
        <div className="row ">
          {
            productHero.map((item)=>{
              if(props.params === item.id){
                return(
                  <>
                  <div className="col prodImgSize"><img src={item.img}/></div>
                  <div className="col prodImgNichu">
                      <p>{item.title}</p>
                      <p>{item.titleDesc}</p>
                  </div>
                  </>
                )
              }
            })
          }

        </div>
    </div>
    </>
  )
}

export default ProductHero
