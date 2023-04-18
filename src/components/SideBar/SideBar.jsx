import React, { useEffect, useLayoutEffect } from 'react'
import { useState } from 'react'
import {CgMenuGridR} from 'react-icons/cg'

import '../SideBar/SideBar.css'


const SideBar = () => {
    const [tab, setTab] = useState(1)
    const [sidebarVisible, setSidebarVisible] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1000) {
          setSidebarVisible(false);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };

    
  return (
    <>
    <div className='sideCon'>
          <div className={`sidelabel ${sidebarVisible===true?'sideLabel2':'sideLabel'}`}>
              <div className={tab===1?'side2':'side1'} onClick={()=>{setTab(1)}}>
              Material Management
              </div>
              <div className={tab===2?'side2':'side1'} onClick={()=>{setTab(2)}}>
              Finance & Accounts
              </div>
              <div className={tab===3?'side2':'side1'} onClick={()=>{setTab(3)}}>
              Sales and Distribution
              </div>
              <div className={tab===4?'side2':'side1'} onClick={()=>{setTab(4)}}>
              Plant Maintenance
              </div>
              <div className={tab===5?'side2':'side1'} onClick={()=>{setTab(5)}}>
              Production planning and control
              </div>
              <div className={tab===6?'side2':'side1'} onClick={()=>{setTab(6)}}>
              Quality Control
              </div>
              <div className={tab===7?'side2':'side1'} onClick={()=>{setTab(7)}}>
              Service Management
              </div>
              <div className={tab===8?'side2':'side1'} onClick={()=>{setTab(8)}}>
              Gate Control
              </div>
              <div className={tab===9?'side2':'side1'} onClick={()=>{setTab(9)}}>
              Weighbridge Automation
              </div>
              <div className={tab===10?'side2':'side1'} onClick={()=>{setTab(10)}}>
              Fixed Asset Management
              </div>
              <div className={tab===11?'side2':'side1'} onClick={()=>{setTab(11)}}>
              Human Resource Management
              </div>
              <div className={tab===12?'side2':'side1'} onClick={()=>{setTab(12)}}>
              Admin
              </div>
              <div className={tab===13?'side2':'side1'} onClick={()=>{setTab(13)}}>
              Project Management
              </div>
              <div className={tab===14?'side2':'side1'} onClick={()=>{setTab(14)}}>
              Project Management
              </div>

          </div>
  
          <div className='sideItem'>
          <div className='sideToggleMain' onClick={toggleSidebar}><CgMenuGridR/></div>
            <div className="sideChange">
              {tab===1?
              <>
              <p className='sideContent'>Now is the winter of our discontent
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
              <p className='sideContent'>And now, instead of mounting barded steeds
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
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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
              <p className='sideContent'>Nor monuments;
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

              {tab===5?
              <>
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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

              {tab===6?
              <>
              <p className='sideContent'>Now is the winter of our discontent
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

              {tab===7?
              <>
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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

              {tab===8?
              <>
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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

              {tab===9?
              <>
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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

              {tab===10?
              <>
              <p className='sideContent'>Now is the winter of our discontent
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

             {tab===11?
              <>
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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

              {tab===12?
              <>
              <p className='sideContent'>Now is the winter of our discontent
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

              {tab===13?
              <>
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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
              {tab===14?
              <>
              <p className='sideContent'>Langed war hath smooth'd his sun of this fair proportion,
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
            </div>
          </div>
          </div>
    </>
  )
}

export default SideBar