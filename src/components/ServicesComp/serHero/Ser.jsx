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
            <div className="col serfirstSide">
              <p>01</p>
              <p>Lean product managment</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi itaque animi nemo autem aut libero porro rerum fugiat! Veniam, asperiores? Laudantium possimus deserunt accusamus expedita cupiditate repellat animi eius!</p>
            </div>
            <div className="col serfirstSide">
              <p>02</p>
              <p>Test Driven Development</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur expedita quis ipsam ratione omnis rerum est ex, quas minus, architecto autem tempore repellendus voluptatum delectus molestias! Eos hic earum inventore!</p>
            </div>
            <div className="col serfirstSide">
            <p>03</p>
              <p>DevSecOps Compliant</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur expedita quis ipsam ratione omnis rerum est ex, quas minus, architecto autem tempore repellendus voluptatum delectus molestias! Eos hic earum inventore!</p>
            </div>
            <div className="col serfirstSide">
            <p>04</p>
              <p>Site Reliability Engineering</p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur expedita quis ipsam ratione omnis rerum est ex, quas minus, architecto autem tempore repellendus voluptatum delectus molestias! Eos hic earum inventore!</p>
            </div>
        </div>           
        </div>
        </div>
    
        <div className='row'>
          <div className="col-8 serNicRow">
            <ul className='serAccordion'>
              <li>
                <input type={'radio'} name='accordion' id='first' checked/>
                <label for='first' className='serLabel'>What is product development</label>
                <div className='serContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos, vitae aspernatur asperiores cumque eius consectetur nemo in corrupti commodi veniam dolor est facilis neque omnis aperiam velit perspiciatis vel sunt? Unde iste optio hic, reprehenderit cumque ratione provident vero accusamus quaerat placeat facere ullam odit! Nisi dolorum aperiam, sunt enim labore vel quaerat voluptatibus hic rerum voluptatem soluta facere. Magni modi iusto repellat nemo, esse dignissimos deleniti dolorem neque?</div>
              </li>
    
              <li>
                <input type={'radio'} name='accordion' id='second'/>
                <label for='second' className='serLabel'>What we offer</label>
                <div className='serContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos, vitae aspernatur asperiores cumque eius consectetur nemo in corrupti commodi veniam dolor est facilis neque omnis aperiam velit perspiciatis vel sunt? Unde iste optio hic, reprehenderit cumque ratione provident vero accusamus quaerat placeat facere ullam odit! Nisi dolorum aperiam, sunt enim labore vel quaerat voluptatibus hic rerum voluptatem soluta facere. Magni modi iusto repellat nemo, esse dignissimos deleniti dolorem neque?</div>
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


