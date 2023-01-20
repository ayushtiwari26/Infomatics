import React, { useMemo } from 'react'
import './Map.css'
import { LazyLoadImage } from "react-lazy-load-image-component";
// 21.268064871325173, 81.59350096558912


const Mmap = () => {

  return (
    <div className="PreMap">
      <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1ZlXMmNBmbTd-QeY9bDrGbge5pspsCLE&ehbc=2E312F" width="100%" height="100%" loading='lazy'></iframe>
      <div className='MmaRightStyle'>
        <p className='pOfMmaRightStyle'>
        HDD-1/123, Phase (III, Kabir Nagar, Raipur, Chhattisgarh 492099)
        <br/>
        {/* Get directions */}
        </p>
      </div>
    </div>
  )
}

export default Mmap

