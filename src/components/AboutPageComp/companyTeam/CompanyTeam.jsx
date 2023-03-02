import React from 'react'
import './CompanyTeam.css'
const CompanyTeam = () => {
  return (
    <>
    <div className="CompanyBg">
        <div className="CompanyHead">
            <div className="Companyteam">
                <h2>About Us <br/><span className="ComInfo"> Infomatics</span></h2>

            </div>
            <div className="Companypara"><p>Lorem ipsum dolor sit 
                                            amet consectetur adipisicing elit. Incidunt praesentium ducimus provident 
                                            placeat architecto explicabo non accusantium aperiam doloribus quod, ab 
                                            quam quidem unde perferendis, minima quas dolorem facilis! Debitis!Lorem ipsum dolor sit 
                                            amet consectetur adipisicing elit. Incidunt praesentium ducimus provident 
                                            placeatLorem ipsum dolor sit 
                                            amet consectetur adipisicing elit. Incidunt praesentium ducimus provident 
                                            placeatquam quidem unde perferendis, minima quas dolorem facilis! Debitis!Lorem ipsum dolor sit 
                                            amet consectetur adipisicing elit. Incidunt praesentium ducimus provident 
                                            placeatLorem ipsum dolor sit 
                                            amet consectetur adipisicing elit. Incidunt praesentium ducimus provident 
                                            placeatquam quidem unde perferendis, minima quas dolorem facilis! Debitis!Lorem ipsum dolor sit 
                                            amet consectetur adipisicing elit. Incidunt praesentium ducimus provident 
                                            placeatLorem ipsum dolor sit 
                                            amet consectetur adipisicing elit. Incidunt praesentium ducimus provident 
                                            placeat</p>
            </div>
            <div className="CompanyNum"><p>01</p></div>
        </div>
        <div className="CompanyImg">
            <div className="Companyemp">
                <div><img src={'./images/Bhai.jpg'}/></div>
                <div><img src={'./images/didi2.jpg'}/></div>
                <div><img src={'./images/Bhai.jpg'}/></div>
            </div>
            <div className="CompanyDetail">
                <div>
                    <h4>Ayush Tiwari</h4>
                </div>
                <div>
                    <p>Worldwide manager</p>
                </div>
              
            </div>
            <div className="ComImg">
                <img  src={'./images/Didi.jpg'}/>
            </div>
        </div>
        {/* <div className="ComImg">
                <img  src={'./images/grp2.jpg'}/>
            </div> */}
    </div>
    </>
  )
}

export default CompanyTeam