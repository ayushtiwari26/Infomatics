import React, { useState } from 'react'
import { useRef } from 'react';
import "../ApplyForm/applyForm.css"
import { MenuItem, TextField } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



const ApplyForm = () => {

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[6789]\d{9}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setEmailError('Please enter a valid email');
    } else {
      setEmailError('');
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    if (!validatePhoneNumber(value)) {
      setPhoneNumberError('Please enter a valid phone number');
    } else {
      setPhoneNumberError('');
    }
  };


  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const files = e.target.files;
    // Handle selected files here
    console.log(files);
    
    // Max file size in bytes (5MB)
    const maxSize = 4 * 1024 * 1024;
    
    // Validate file size
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > maxSize) {
        alert('File size exceeds the maximum limit of 4MB');
        return;
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <div className="applyForm">
        <div className="applyJob">
          <div className="applyHere">
            <h1>Job Location</h1>
          </div>
          <div className="applyLocation">
            <div><h3>Raipur</h3></div>
            {/* <div><h3>Remote</h3></div> */}
          </div>
          </div>
        
          <div className="applyJoin">
            <div className="applyDivide">
              <div className="applyPos">
                  <h5>Position*</h5>  
                  <TextField
                    className="modalInputSize"
                    select
                    label="Select"
                    prop sx={{width: 500}}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Twenty</MenuItem>
                    <MenuItem value={21}>Twenty one</MenuItem>
                    <MenuItem value={22}>Twenty one and a half</MenuItem>
                  </TextField>
            </div>
              <div className="applyEx">
              <h5>Experience(yrs)*</h5>
              <TextField
                className="modalInputSize"
                select
                label="Select"
                prop sx={{width: 500}}>
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </TextField>
              
              </div >
        </div>
        <div className="applyDivide">

          <div className='applyName'>
              <h5>Name*</h5>
              <TextField prop sx={{width: 500}} label="Name" className="modalInputSize" id="outlined-basic"  variant="outlined" />
            </div>
          <div className='applyEmail'>
            <h5>Email*</h5>
              <TextField prop sx={{width: 500}} 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              className="modalInputSize"
              value={email}
              onChange={handleEmailChange}
              error={emailError !== ''}
              helperText={emailError}/>
            </div>
        </div>
        <div className="applyDivide">

            <div className='applyPhoneNum'>
                <h5>Phone Number*</h5>
                  <TextField prop sx={{width: 500}} 
                    id="outlined-basic" 
                    label="Phone Number" 
                    variant="outlined" 
                    className="modalInputSize"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    error={phoneNumberError !== ''}
                    helperText={phoneNumberError}/>
              </div>

            <div className='applyGender'>
            <h5>Gender*</h5>
                <FormControl sx={{marginTop: "20px"}}>
                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                          <FormControlLabel value="female" control={<Radio />} label="Female" />
                          <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                  </FormControl>
                </div>
        </div>
        <div className="applyDivide">
            <div className='applyDob'>
              <h5>DOB*</h5>
                <FormControl>
                  <LocalizationProvider  dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker prop sx={{width: 500}} label="MM/DD/YYYY" />
                    </DemoContainer>
                  </LocalizationProvider>
              </FormControl>
              </div >
                <div className='applyMessage'>
                <h5>Cover Letter</h5>
                  <TextField  prop sx={{width: 500}} id="outlined-basic" label="Message" variant="outlined" className="modalInputSize"/>
                </div>
          </div>
          <div className="applyDivide">
            <div className='applyCompany'>
            <h5>Company (If any)</h5>
              <TextField  prop sx={{width: 500}} id="outlined-basic" label="Current Company" variant="outlined" className="modalInputSize"/>
            </div>
            <div className='applyCTC'>
            <h5>Current CTC(in Lacs)</h5>
              <TextField  prop sx={{width: 500}} id="outlined-basic" label="Current CTC" variant="outlined" className="modalInputSize"/>
            </div>
          </div>
          <div className="applyDivide">
            <div className='applyAdd'>
              <h5>Address*</h5>
                <TextField  prop sx={{width: 500}} id="outlined-basic" label="Address" variant="outlined" className="modalInputSize"/>
              </div>
              <div className='applyQuali'>
                <h5>Qualification*</h5>  
                <TextField className="modalInputSize" select label="Select" prop sx={{width: 500}}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Twenty</MenuItem>
                  <MenuItem value={21}>Twenty one</MenuItem>
                  <MenuItem value={22}>Twenty one and a half</MenuItem>
                </TextField>
            </div>
          </div>

          <div className="applyUpload">
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileSelect}
              accept=".pdf,.doc,.docx"
            />
            <button id='uploadButton' class="btn btn-primary" onClick={handleButtonClick}>Upload File</button>
            <p>(Format: PDF, DOC | Size: Upload upto 4 MB)</p>
          </div>

          <div className="applySend">
                <button id='applysubmit'>
                     Submit
                </button>
                </div>
        </div>
      </div>
    
    </>
  )
}


export default ApplyForm

