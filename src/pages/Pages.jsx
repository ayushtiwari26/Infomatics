import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProM from '../components/ProductPageComp/proM/ProM'
import About from './About'
import ContactUs from './ContactUs'
import Landing from './Landing'
import Services from './Services'

const Pages = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route exact path={'/about-us'} element={<About/>} />
        <Route exact path={'/contact-us'} element={<ContactUs/>} />
        <Route path={'/services/:serName'} element={<Services />} />
        <Route path={'/products/:productName'} element={<ProM/>} />
        {/* <Route path={'/recipe/:name'} element={<Recipe />} /> */}
    </Routes>
  )
}

export default Pages
