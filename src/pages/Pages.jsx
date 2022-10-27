import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Landing from './Landing'

const Pages = () => {
  return (
    <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route exact path={'/about-us'} element={<About/>} />
        {/* <Route path={'/recipe/:name'} element={<Recipe />} /> */}
    </Routes>
  )
}

export default Pages
