import React from 'react'
import './ProductHero.css'
import {productHero} from '../../../../assets/constants/productsPage'
import { LazyLoadImage } from "react-lazy-load-image-component";

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
                  <div className="col prodImgSize"><LazyLoadImage src={item.img} loading='lazy'/></div>
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
