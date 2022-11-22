import React from 'react'
import './ProductHero.css'
import dashboard from '../../../../assets/images/dashboard.png'

const ProductHero = () => {
  return (
    <>
    <div className="container-fluid prodImgContainer">
        <div className="row ">
            <div className="col prodImgSize"><img src={dashboard}/></div>
            <div className="col prodImgNichu">
                <p>Product Name</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci, ipsum!</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductHero
