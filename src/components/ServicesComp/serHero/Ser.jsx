import React from 'react'
import './Ser.css'
import {Link, useParams} from "react-router-dom"
import serHeroImage from '../../../assets/images/serHeroImg.jpg'
import TypeWriter from 'typewriter-effect'
import {servicesPage} from '../../../assets/constants/servicesPage'
import {AiFillCheckCircle} from 'react-icons/ai'

const Ser = (props) => {

    return (
      <>
      {servicesPage.map((item)=>{
        if(props.params===item.id){
          {console.log('i am here')}
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
          <div className="col-8 serNicRow">
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
          <div className="col-3 serSideBar">
          <p>Other services</p>
          <p>
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
    
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
    
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
    
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
    
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
    
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
    
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
    
            <div className="row serServices">
            <Link to={'/'}>
              <AiFillCheckCircle fill='var(--blue)' size={20} className='serAiFill'/>
              Service1
            </Link>
            </div>
          </p>
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


