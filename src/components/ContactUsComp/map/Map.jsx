import React, { useMemo } from 'react'
import './Map.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { Rating } from '@mui/material';

import useStyles from './styles'

import mapStyles from './mapStyles'
// 21.268064871325173, 81.59350096558912





const AnyReactComponent = () => (
  <div>
    <LazyLoadImage
      alt="Marker Icon"
      src="/images/marker.png"
      width={40}
      height={40}
    />
  </div>
);


const Mmap = () => {
  const classes = useStyles()

  const isMobile = useMediaQuery('(min-width:600px)')
  const height = isMobile ? '70vh' : '50vh';
  const width = isMobile ? '100%' : '100%';

  const coordinates = {lat:21.268064871325173, lng:81.59350096558912}

  return (
    <>
      <div style={{height:height, width:width}}>
        <GoogleMapReact
          bootstrapURLKeys={{key:'AIzaSyA_RZL5lINS6wY6R4ISLIEvrMedWmpjeLc'}}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={18}
          margin={[50, 50, 50, 50]}
          options={{disableDefaultUI:true, zoomControl:true, styles:mapStyles}}
        >

          <AnyReactComponent
            lat={21.268064871325173}
            lng={81.59350096558912}
          />

        </GoogleMapReact>

      </div>
    </>
  )
}

export default Mmap

