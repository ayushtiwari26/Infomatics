import React, { useState } from 'react'
import './Ser.css'
import {Link, useParams} from "react-router-dom"
import serHeroImage from '../../../assets/images/serHeroImg.jpg'
import TypeWriter from 'typewriter-effect'
import {servicesPage} from '../../../assets/constants/servicesPage'

const Ser = (props) => {
    return (
      <>
      {servicesPage.map((item)=>{
        if(props.params===item.id){
          return(
            <>
            <div style={{
              backgroundImage:`url(${serHeroImage})`, 
              backgroundRepeat:'no-repeat', 
              backgroundSize:'cover', 
              backgroundAttachment: 'fixed'
              }} className='serHero'>
            <div className='serSide'>
              <div className='serPos col'>
                <p>{item.name}</p>
                <p>Always deliver more than expected</p>
              </div>
          </div>
        </div>
        <div className="row">
        <div className="col serType"><p className='wideRange'>We offer wide range of services :  {' '}</p>
                            <span><TypeWriter
                            options={{
                              autoStart:true,
                              loop:true,
                              delay:40,
                              strings:[
                                'Product development',
                                'Custom application development',
                                'Web based software development',
                                'Enterprise application development'
                              ],
                            }}
                            /></span>
        <div className="row serfirstSidePar">          
              {
                item.content.map((AContent)=>{
                  return(
                    <>
                    <div className="col serfirstSide">
                      <p>{AContent.ActualId}</p>
                      <p>{AContent.ActualTitle}</p>
                      <p>{AContent.ActualContent}</p>
                    </div>
                    </>
                  )
                })
              }
            
        </div>           
        </div>
        </div>
    
        <div className='row'>
          <div className="col serNicRow">
            <ul className='serAccordion'>
              <li>
                <input type={'radio'} name='accordion' id='first' checked/>
                <label for='first' className='serLabel'>What is {item.name}</label>
                <div className='serContent'>{item.whatIsId}</div>
              </li>
    
              <li>
                <input type={'radio'} name='accordion' id='second'/>
                <label for='second' className='serLabel'>What we offer</label>
                <div className='serContent'>{item.whatWeOffer}</div>
              </li>
            </ul>
          </div>
          <br/>
        </div>
        <div className='otherServicesTitle'>Other Services</div>
          </>
          )
        }
        else{

          return(
          <>
            <div className="serServices">
              <img src={`/images/servicesIcon${item.sid}.png`} className='servicesExtraimg'/>
              <div style={{marginBottom:'4%'}}>
                <Link to={'/'} style={{color:'black'}} >
                  {item.name}
                </Link>              
              </div>
            </div>
          </>
      
          )
        }
      }
        )
      }
      </>
    )
  


}

export default Ser


