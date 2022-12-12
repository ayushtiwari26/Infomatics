import React, { useEffect } from 'react'
import './LeaderTestimony.css'
import Avatar from '@mui/material/Avatar';
import pic from '../../../assets/images/AlbertEinstein.jpg';
import pic1 from '../../../assets/images/apjkalam.jpg';
import pic2 from '../../../assets/images/SubhashChandrabOSe.jpg';
import pic3 from '../../../assets/images/Raman.jpg';
import aos from 'aos';
import 'aos/dist/aos.css';
import facebook from '../../../assets/images/Facebook.png';
import twitter from '../../../assets/images/twitter.png';
import linkedin from '../../../assets/images/linkedin.png';


function mediaIcon(){
    return(
          <div className='socialmedia'>
            <Avatar sx={{ width: 25, height: 25}} alt="Check list" src={facebook} />
            <Avatar sx={{ width: 25, height: 25}} alt="Check list" src={twitter} />
            <Avatar sx={{ width: 25, height: 25}} alt="Check list" src={linkedin} />
          </div>
    )
  }

  function Card({avatar,name,cont}){
    return(
            <div data-aos="fade-right" className='SemiLead'>
                <div className='row-1 avatar'>
                    <Avatar sx={{height:90, width:90}} src={avatar}></Avatar>
                </div>
                <div className='row-2 avatarSec'>
                    {name}
                </div>
                <div className='row-3 cont'>
                <p>{cont}</p>
                </div>
                <div className='row-4'>
                {mediaIcon()}
                </div>
            </div>
    )   
}

function NameHolder({PName}){
    return(
        <div className='NameHolder'>{PName}</div>
    )
}

const LeaderTestimony = () => {

    useEffect(()=>{
        aos.init({duration: 2000});
    },[]);

  return (
    <div>
        {/* Founder Card */}
        <div className='Founder'>
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                        <img src={pic}>
                        
                        </img> 
                    </div>
                    <div className='col-9 Fcol'>
                        <p>
                            A human being is a part of the whole called by us universe,a part limited in time and space. He experiences himself, 
                            his thoughts and feeling as something separated from the rest, 
                            a kind of optical delusion of his consciousness. 
                            This delusion is a kind of prison for us, restricting us to our 
                            personal desires and to affection for a few persons nearest to us. 
                            Our task must be to free ourselves from this prison by widening our 
                            circle of compassion to embrace all living creatures and the whole of nature in its beauty.
                        </p>
                    </div>
                    <div className='row NHolder'>
                        <div className='col-9'>
                            <NameHolder PName={[" What's in the name",<br/> ,"William Shakespeare"]}/>
                        </div>
                        <div className='col iconBiich'>
                        {mediaIcon()}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Leader Card */}
        <div className='leadTitle'>
            <div>Our leadership team</div>
            <span>The strength of the team is each member. The strength of each member is the team</span>
        </div>
        
        <div className='Leader'>
            <div className='Container-fluid'>
                <div className='row scr'>
                    <div className='col'>
                    <Card name={["APJ Abdul Kalam",<br/>,"Missile Man"]} avatar={pic1} cont={[<br/>," Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck. "]}/>
                    </div>
                    <div className='col'>
                    <Card name={["Subhash Chandra Bose",<br/>,"Freedom Fighter"]} avatar={pic2} cont={[<br/>,"Reality is, after all, too big for our frail understanding to fully comprehend. Nevertheless, we have to build our life on the theory which contains the maximum truth"]}/>
                    </div>
                    <div className='col'>
                    <Card name={["C.V. Raman",<br/>,"Indian Physicist"]} avatar={pic3} cont={[<br/>,"You can't always choose who comes into your life but you can learn what lesson they teach you Success can come to you by courageous Devotion to the task lying in front of you."]}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default LeaderTestimony