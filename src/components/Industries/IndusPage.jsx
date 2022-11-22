import React from 'react'
import "./IndusPage.css"
import ImgFirst from "../../assets/images/ImgFirst.jpg"
import Trading from "../../assets/images/Trading.jpg"
import Dis from "../../assets/images/dis.jpg"
import fleet from "../../assets/images/fleet.jpg"
import real from "../../assets/images/real.jpg"
import rice from "../../assets/images/rice.jpg"
import Link from '@mui/material/Link';


const IndusPage = () => {
  return (
    <>
    {/* <div className='IndusBg'>
        <div className='Indushead'>
                <p className='Industries'>Industries</p>
                <p className='SubIndus'>Infomatics has customers from a broad range of industries.</p>
            
        </div>
        <div className='FirstCompo'>
                <div className='ImgDiv'>
                    <img src={ImgFirst} alt='Iron'/>
                </div>
                <div className='Ironpara'>
                    <p className='IndusIron'>Sponge Iron and Steel	</p>
                    <p className='SubPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <Link
                        component="button"
                        variant="body2"
                        fontSize="16px"
                    > View more
                    </Link>
                </div>
        </div>
    </div>
    <div className='IndusBg'>
        <div className='SecondCompo'>
                
                <div className='Ironpara2'>
                    <p className='IndusIron'> Power Plant	</p>
                    <p className='SubPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <Link
                        component="button"
                        variant="body2"
                        fontSize="16px"
                    > View more
                    </Link>
                </div>
                <div className='ImgDiv2'>
                    <img src={Power} alt='Iron'/>
                </div>
        </div>
    </div> */}
    {/* <div className="container-fluid IndusBg">
        <div className="row Indushead"> 
                    <p className='Industries'>Industries</p>
                    <p className='SubIndus'>Infomatics has customers from a broad range of industries.</p>
        </div>
        <div className="row">
            <div className="col Indusimg">             
              <img src={ImgFirst} className="Indusphoto"  alt='Iron'/>
            </div>
            <div className="col Indusright">
                <div className="Ironpara">
                    <p className='IndusIron'>Sponge Iron and Steel</p>
                    <p className='SubPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <Link
                        component="button"
                        variant="body2"
                        fontSize="16px"
                    > View more
                    </Link>
            </div>
        </div>
    </div>

    </div> */}

    <div className="container-fluid">
        <div className="row IndusRow">
            <p className='Industries'>Industries</p>
            <p className='InduSub'>Infomatics has customers from a broad range of industries.</p></div>
        <div className="row IndusRow2">
            <div className="col IndusImg">
                 <img src={ImgFirst} className="Indusphoto"  alt='Iron'/>
            </div>
            <div className="col IndusWord">
                    <p className='IndusIron'>Sponge Iron and Steel</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#'>View More</a></p>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row IndusRow3">
            <div className="col IndusImg2">
                 <img src={Trading} className="Indusphoto"  alt='Iron'/>
            </div>
            <div className="col IndusWord2">
                    <p className='IndusIron'> Trading</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#'>View More</a></p>
            </div>
        </div>
    </div>
    <div className="container-fluid">

    <div className="row IndusRow2">
            <div className="col IndusImg">
                 <img src={Dis} className="Indusphoto"  alt='Iron'/>
            </div>
            <div className="col IndusWord">
                    <p className='IndusIron'>Distribution</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#'>View More</a></p>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row IndusRow3">
            <div className="col IndusImg2">
                 <img src={fleet} className="Indusphoto"  alt='Iron'/>
            </div>
            <div className="col IndusWord2">
                    <p className='IndusIron'> Fleet Management</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#'>View More</a></p>
            </div>
        </div>
    </div>

    <div className="container-fluid">

    <div className="row IndusRow2">
            <div className="col IndusImg">
                 <img src={real} className="Indusphoto"  alt='Iron'/>
            </div>
            <div className="col IndusWord">
                    <p className='IndusIron'>Construction [ Real Estate ]</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#'>View More</a></p>
            </div>
        </div>
    </div>

    <div className="container-fluid">
        <div className="row IndusRow3">
            <div className="col IndusImg2">
                 <img src={rice} className="Indusphoto"  alt='Iron'/>
            </div>
            <div className="col IndusWord2">
                    <p className='IndusIron'> Rice Mill</p>
                    <p className='IndusPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, 
                                            sit perferendis nulla, repellendus temporibus dolores distinctio quaerat aliquid officia possimus 
                                            voluptatum nostrum quod error repudiandae consequuntur, tenetur neque eaque earum.</p>
                    <p className='InduaBut'><a href='#'>View More</a></p>
            </div>
        </div>
    </div>
    </>
  )
}

export default IndusPage