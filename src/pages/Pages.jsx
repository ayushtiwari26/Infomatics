import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProM from '../components/ProductPageComp/proM/ProM'
import About from './About'
import Contact from './Contact'
import Landing from './Landing'
import Services from './Services'
import Industries from './Industries'

const Pages = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route exact path={'/about-us'} element={<About/>} />
        <Route exact path={'/contact-us'} element={<Contact/>} />

        <Route path={'/services/:serName'} element={<Services />} />
        <Route exact path={'/industries'} element={<Industries/>} />

        <Route path={'/products/:productName'} element={<ProM/>} />
        {/* <Route path={'/recipe/:name'} element={<Recipe />} /> */}
    </Routes>
  )
}

export default Pages
