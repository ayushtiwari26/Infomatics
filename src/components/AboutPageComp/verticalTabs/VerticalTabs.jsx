import React from 'react'
import './VerticalTabs.css'
import {useState} from 'react'
import { Avatar } from '@mui/material'
import checkList from '../../../assets/images/checkList.png'
import whoAreWe from '../../../assets/images/whoAreWe.png'
import award from '../../../assets/images/award.png'
import faq from '../../../assets/images/faq.png'

const VerticalTabs = () => {
    const [tab, setTab] = useState(1)

    return (
  
      <>
      <div className="container-fluid tabBg">
        
        <div className='fcontainer'>
          <div className="f1C">
              <div className={tab===1?'Ftitle2':'ftitle'} onClick={()=>{setTab(1)}}>
                WHO ARE WE
              </div>
              <div className={tab===2?'Ftitle2':'ftitle'} onClick={()=>{setTab(2)}}>
                WHAT WE DO
              </div>
              <div className={tab===3?'Ftitle2':'ftitle'} onClick={()=>{setTab(3)}}>
                AWARDS
              </div>
              <div className={tab===4?'Ftitle2':'ftitle'} onClick={()=>{setTab(4)}}>
                FAQ
              </div>
          </div>
  
          <div className='f2C'>
            <div className="fitem">
  
              {tab===1?
              <>
              <div>
              <Avatar sx={{ width: 55, height: 55,}} alt="Check list" src={whoAreWe} />
              </div>
              <div className="iconTab">Who are we ?</div>
              <p className='Content'>Now is the winter of our discontent
                                    Made glorious summer by this sun of York;
                                    And all the clouds that lour'd upon our house
                                    In the deep bosom of the ocean buried.
                                    Now are our brows bound with victorious wreaths;
                                    Our bruised arms hung up for monuments;
                                    Our stern alarums changed to merry meetings,
                                    Our dreadful marches to delightful measures.
                                    Grim-visaged war hath smooth'd his wrinkled front;
                </p>
                </>
                :null}
  
              {tab===2?
              <>
              <div>
              <Avatar sx={{ width: 55, height: 55}} alt="Check list" src={checkList} />
              </div>
              <div className="iconTab">What we do ?</div>
              <p className='Content'>And now, instead of mounting barded steeds
                                To fright the souls of fearful adversaries,
                                He capers nimbly in a lady's chamber
                                To the lascivious pleasing of a lute.
                                But I, that am not shaped for sportive tricks,
                                Nor made to court an amorous looking-glass;
                                I, that am rudely stamp'd, and want love's majesty
                                To strut before a wanton ambling nymph;
                                I, that am curtail'd of this fair proportion,
  
                </p>
                </>
                :null}
  
              {tab===3?
              <>
              <div>
              <Avatar sx={{ width: 55, height: 55}} alt="Check list" src={award} />
              </div>
              <div className="iconTab">Awards</div>
              <p className='Content'>Langed war hath smooth'd his sun of this fair proportion,
                            ove's majesty
                            To strut before a want lour'd upon our house
                            In the deep bosom of this sun of fearful adversaries,
                            Nor made glorious pleasing nymph;
                            I, that am not shaped for sportive tricks,
                            Nor made glorious summer by this wrinkled front;
                            And now, instead of this summer by this sun of this sun of
                            our bruised arms hung up for made glorious wrinkled front;
                            And now, instead of mountings,
                                </p>
                </>
                :null}
              
              {tab===4?
              <>
              <div>
              <Avatar sx={{ width: 55, height: 55}} alt="Check list" src={faq} />
              </div>
              <div className="iconTab">FAQ</div>
              <p className='Content'>Nor monuments;
                            Our steeds
                            To the ocean buried.
                            Nor made to court an ambling nymph;
                            I, that lour'd upon our house
                            In the ocean buried.
                            Now is the lascivious pleasing nymph;
                            I, that am not shaped front;
                            And now, instead of York;
                            And now, instead of fearful marches to delight the ocean buried.
                            Now are our brows bound war hath smooth'd his fair proportive
                </p>
                </>
                :null}
  
            </div>
          </div>
          
  
          
  
        </div>
        </div>
      </>
    )
}

export default VerticalTabs