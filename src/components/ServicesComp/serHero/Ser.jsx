import React, { useState } from 'react'
import './Ser.css'
import {Link, useParams} from "react-router-dom"
import TypeWriter from 'typewriter-effect'
import {servicesPage} from '../../../assets/constants/servicesPage'

const Ser = (props) => {
  const { id } = useParams();
  const selectedService = servicesPage.find((service) => service.id === id);

  return (
    <>
      {selectedService && (
        <>
          <div style={{
            backgroundImage:`url(/images/servicesHeroMain/${selectedService.sid}.jpg)`, 
            backgroundRepeat:'no-repeat', 
            backgroundSize:'cover', 
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center top'
          }} className='serHero'>
            <div className='serSide'>
              <div className='serPos col'>
                <p>{selectedService.name}</p>
                <p className='serMotoDesign'>{selectedService.moto}</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col serType">
              <p className='wideRange'>We offer wide range of services :  {' '}</p>
              <span>
                <TypeWriter
                  options={{
                    autoStart:true,
                    loop:true,
                    delay:40,
                    strings:[
                      'Product development',
                      'Custom application development',
                      'Web based software development',
                      'Enterprise application development',
                      'Software Implementation',
                      'Software Maintenance and Support',
                      'Mobile App Development',
                      'Database Admin Services'
                    ],
                  }}
                />
              </span>

          <div className='row' style={{margin:'5% 3%'}}>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <p className='SerwhatweofferP'>{selectedService.whatWeOffer}</p>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 serStartRightSide">
              <img src={`/images/servicesSide/${selectedService.id}.jpg`}
                           style={{
                            maxHeight:'350px',
                            width:'90%',
                            maxWidth:'500px'
                            }}/>
            </div>
          </div>
              <p className='serHIghlightsTitle'>Highlights</p>
              <div className="row serfirstSidePar"> 
                       
                {selectedService.content.map((AContent) => (
                  <div key={AContent.ActualId} className="col serfirstSide">
                    <p>{AContent.ActualId}</p>
                    <p>{AContent.ActualTitle}</p>
                    <p>{AContent.ActualContent}</p>
                  </div>
                ))}
              </div>           
            </div>
          </div>

          <div className='otherServicesTitle'>Other Services</div>
        </>
      )}

      {servicesPage.map((item) => (
        item.id !== id && (
          <div key={item.id} className="serServices">
            <img src={`/images/servicesIcon${item.sid}.png`} className='servicesExtraimg'/>
            <div style={{marginBottom:'4%'}}>
              <a href={`/services/${item.id}`} style={{color:'black'}} >
                {item.name}
              </a>              
            </div>
          </div>
        )
      ))}
    </>
  )
}

export default Ser;




