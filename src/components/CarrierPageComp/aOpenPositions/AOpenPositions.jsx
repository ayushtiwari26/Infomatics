import { Button } from '@material-ui/core'
import React from 'react'
import './AOpenPositions.css'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import {openPositions} from '../../../assets/constants/carrierPage';

const AOpenPositions = () => {
  return (
    <>
    <div id='AOpenPosition'>
      {openPositions.map((item)=>{
        return(
          <div className='openPosPar'>
            <div className='openPosLeft'>
                <p className='openTitle'>{item.post}</p>
                <p className='openMoto'>{item.postMoto}</p>
                <div>
                    <span className='openBtnee'><Button variant='outlined' color="blue" className='openBtnConfig' startIcon={<LocationCityRoundedIcon />}>{item.workLocation}</Button></span>
                    <span><Button variant='outlined' color="blue" className='openBtnConfig' startIcon={<AccessTimeRoundedIcon />}>{item.employementType}</Button></span>
                </div>
            </div>
            <div className='openPosRight'>
                <Button variant='outlined' color="blue" endIcon={<NorthEastRoundedIcon />}>Apply</Button>
            </div>
          </div>
        )
        })}
      </div>
    </>
  )
}

export default AOpenPositions