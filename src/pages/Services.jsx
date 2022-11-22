import React from 'react'
import Ser from '../components/ServicesComp/serHero/Ser'
import {Link, useParams} from "react-router-dom"
import { useEffect } from 'react';

const Services = () => {
  const {serName } = useParams();

  return (
    <Ser params={serName}/>
  )
}

export default Services
