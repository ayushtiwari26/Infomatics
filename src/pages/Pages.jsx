import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import Landing from './Landing';
import Services from './Services';
import Industries from '../components/Industries/IndusPage';
import Products from './Products';
import Carriers from './Carriers';
import Clients from './Clients';
import PageNotFound from '../components/pageNotFound/PageNotFound';
import MyNav from '../components/navbar/MyNav';
import Footer from '../components/footer/Footer';
import ProductChild from './ProductChild';

// create a layout component that includes MyNav and Footer
const Layout = ({ children }) => (
  <>
    {/* <MyNav /> */}
    {children}
    <Footer />
  </>
);

const Pages = () => {
  return (
    // wrap Routes with the Layout component
    <Routes>
      <Route path={'/'} element={<Layout><Landing /></Layout>} />
      <Route exact path={'/about-us'} element={<Layout><About /></Layout>} />
      <Route exact path={'/contact-us'} element={<Layout><ContactUs /></Layout>} />
      <Route exact path={'/services/:id'} element={<Layout><Services /></Layout>} />
      <Route exact path={'/products/:productName'} element={<Layout><Products /></Layout>} />
      <Route exact path={'/productschild'} element={<Layout><ProductChild /></Layout>} />
      <Route exact path={'/industries'} element={<Layout><Industries /></Layout>} />
      <Route exact path={'/carrier'} element={<Layout><Carriers /></Layout>} />
      <Route exact path={'/clients'} element={<Layout><Clients /></Layout>} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};

export default Pages;

