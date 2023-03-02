import React from 'react'
import Ser from '../components/ServicesComp/serHero/Ser'
import {Link, useParams} from "react-router-dom"
import { useEffect } from 'react';
import Idk from '../components/ServicesComp/dd/Idk';

const Services = () => {
  const {serName } = useParams();

  return (
    <>
    {/* <Idk/> */}
    <Ser params={serName}/>
    </>
  )
}

export default Services
