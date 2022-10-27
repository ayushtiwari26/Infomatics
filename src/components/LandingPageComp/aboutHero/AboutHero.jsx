
import React, { useState } from 'react'
import './AboutHero.css'
import { Button, Drawer, Tab, Tabs } from '@mui/material';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';
import {FaQq} from 'react-icons/fa'
import {MdWork} from 'react-icons/md'
import {BsFillQuestionSquareFill} from 'react-icons/bs'
import {CgAwards} from 'react-icons/cg'



const AboutHero = () => {
    const [ashu, setAshu] = useState(1)
  return (
    <div className="AHMain">
        <div className="row">
            <div className="col-4">
                <div className='vMainIndex'>
   
                <Tabs
                orientation="vertical"
                variant="scrollable"
                scrollButtons={false}
                aria-label="scrollable prevent tabs example"
                >
                <Tab label="Who we are" className={ashu===1?'vIndex':'vIndex2'} onClick={()=>{setAshu(1)}}/>
                
                <Tab label="What we do" className={ashu===2?'vIndex':'vIndex2'} onClick={()=>{setAshu(2)}} />
                <Tab label="Nowness awards" className={ashu===3?'vIndex':'vIndex2'} onClick={()=>{setAshu(3)}} />
                <Tab label="fAQ" className={ashu===4?'vIndex':'vIndex2'} onClick={()=>{setAshu(4)}} />
            </Tabs>
                </div>
            </div>

            <div className="col-8 sideAbout">
                {ashu===1?<p>"Balasya Mulam Vigyanam"—the source of strength is science-drives the nation in peace and war. DRDO has firm determination to make the nation strong and self-reliant in terms of science and technology, especially in the field of military technologies.</p>:null}
                {ashu===2?<p>hello2</p>:null}
                {ashu===3?<p>hello3</p>:null}
                {ashu===4?<p>hello4</p>:null}
            </div>
        </div>
    </div>
  )
}


export default AboutHero
