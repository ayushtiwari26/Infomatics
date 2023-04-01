import { Button } from '@material-ui/core'
import React from 'react'
import './AOpenPositions.css'
import { TextField } from '@mui/material'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import LocationCityRoundedIcon from '@mui/icons-material/LocationCityRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import {openPositions} from '../../../assets/constants/carrierPage';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AOpenPositions = () => {
  return (
    <>
    <div className='AOpenPosition'>
      <div className="openHead">
      <p className='AOpenJoinP'>Join the forefront of innovation at Infomatics.</p>
      <p className='AOpenJoinPcont'>Join a team of dynamic professionals at a company that prioritizes employee growth and innovation for driving progress and continuous learning.</p>
      <br/>
      <p className='AOpenJoinPcont'>
      <button type="button" class="btn btn-dark">View all</button>
      <button type="button" class="btn btn-outline-dark">Marketing</button>
      <button type="button" class="btn btn-outline-dark">Development</button>
      <button type="button" class="btn btn-outline-dark">Managment</button>
      </p>
      <br/>
      </div>
      <div className="openSet">
      <div className="openPosDiv">{openPositions.map((item)=>{
        return(
          <div className='openPosPar'>

            <div className='openPosLeft'>
                <p className='openTitle'>{item.post}</p>
                <p className='openMoto'>{item.postMoto}</p>
                <div>
                    <span className='openBtnee'>
                      <Button variant='outlined' color="blue" className='openBtnConfig' 
                      startIcon={<LocationCityRoundedIcon />}>
                        {item.workLocation}
                      </Button></span>
                    <span>
                      <Button variant='outlined' color="blue" className='openBtnConfig' 
                      startIcon={<AccessTimeRoundedIcon />}>{item.employementType}</Button>
                      </span>
                </div>
            </div>

            <div className='openPosRight'>
                <Button variant='outlined' color="blue" endIcon={<NorthEastRoundedIcon />}>Apply</Button>
            </div>

          </div>
        )
        })}
        </div>
      {/* <div className="openFormDiv">
        <div className="openFree">Feel Free To Apply</div>
        
          <div className="openPos">
          <p>Position*</p>  
          <TextField
            className="modalInputSize"
            select
            label="Select"
            prop sx={{width: 300}}
           >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </TextField>
        </div>
        <div className="openEx">
        <p>Experience(yrs)*</p>
        <TextField
          className="modalInputSize"
          select
          label="Select"
          prop sx={{width: 300}}>
        <MenuItem value="">
        <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </TextField>
        
        </div >
        <div className='openName'>
              <p>Name*</p>
              <TextField prop sx={{width: 300}} label="Name" className="modalInputSize" id="outlined-basic"  variant="outlined" />
            </div>
        <div className='openEmail'>
            <p>Email*</p>
              <TextField prop sx={{width: 300}} id="outlined-basic" label="Email" variant="outlined" className="modalInputSize"/>
            </div>
        <div className='openPhoneNum'>
            <p>Phone Number*</p>
              <TextField prop sx={{width: 300}} id="outlined-basic" label="Phone Number" variant="outlined" className="modalInputSize"/>
            </div>
        <div className='openGender'>
        <p>Gender*</p>
            <FormControl>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
              </FormControl>
            </div>
        <div className='openDob'>
          <p>DOB*</p>
            <FormControl>
              <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker prop sx={{width: 300}} label="dd/mm/yyyy" />
                </DemoContainer>
              </LocalizationProvider>
          </FormControl>

           </div >
            <div className='openMessage'>
            <p>Message*</p>
              <TextField  prop sx={{width: 300}} id="outlined-basic" label="Message" variant="outlined" className="modalInputSize"/>
            </div>
            <div className='openCompany'>
            <p>Company*</p>
              <TextField  prop sx={{width: 300}} id="outlined-basic" label="Current Company" variant="outlined" className="modalInputSize"/>
            </div>
            <div className='openCTC'>
            <p>CTC(in Lacs)*</p>
              <TextField  prop sx={{width: 300}} id="outlined-basic" label="Current CTC" variant="outlined" className="modalInputSize"/>
            </div>
            <div className='OpenAdd'>
            <p>Address*</p>
              <TextField  prop sx={{width: 300}} id="outlined-basic" label="Address" variant="outlined" className="modalInputSize"/>
            </div>
            <div className='OpenQuali'>
              <p>Qualification*</p>  
              <TextField className="modalInputSize" select label="Select" prop sx={{width: 300}}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Twenty</MenuItem>
              <MenuItem value={21}>Twenty one</MenuItem>
              <MenuItem value={22}>Twenty one and a half</MenuItem>
              </TextField>
           </div>
           
      </div> */}
      
      </div>
      
      </div>

    </>
  )
}

export default AOpenPositions