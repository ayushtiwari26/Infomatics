import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import ContactUs from './ContactUs'
import Landing from './Landing'
import Services from './Services'
import Industries from '../components/Industries/IndusPage'
import Products from './Products'
import Carriers from './Carriers'
import Clients from './Clients'
// import Clients from './Clients'

const Pages = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route exact path={'/about-us'} element={<About/>} />
        <Route exact path={'/contact-us'} element={<ContactUs/>} />
        <Route exact path={'/services/:serName'} element={<Services />}/>
        <Route path={'/products/:productName'} element={<Products/>} />
        <Route exact path={'/industries'} element={<Industries/>} />
        <Route exact path={'/carrier'} element={<Carriers/>} />
        <Route exact path={'/clients'} element={<Clients/>} />
        {/* <Route path={'/recipe/:name'} element={<Recipe />} /> */}
    </Routes>
  )
}

export default Pages
