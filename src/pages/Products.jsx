import React from 'react'
import ProdIllusSection from '../components/ProductPageComp/proM/prodIllusSection/ProdIllusSection'
import ProductHero from '../components/ProductPageComp/proM/productHero/ProductHero'
import ProM from '../components/ProductPageComp/proM/ProM'
import {useParams} from "react-router-dom"

const Products = () => {
  const {productName } = useParams();
  return (
    <>
        <ProductHero params={productName}/>
        <ProdIllusSection params={productName}/>
        <ProM params={productName}/>
    </>
  )
}

export default Products
