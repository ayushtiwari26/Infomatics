import React from 'react'
import "./ReadMe.css"
import Our from "../../../assets/images/OurStory.jpg"
const ReadMe = () => {
  return (
    <>
        <div className="OurDiv">
            <div className="Ourhero">
                <div className="OurHead">Our Story</div>
                <div className="OurImg"><img src={Our}/></div>
                <div className="OurPara">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                         Cupiditate iusto itaque voluptate nesciunt dolorem veritatis qui deleniti quam, ipsum laborum nemo aperiam laboriosam quisquam, 
                                         excepturi cumque ab magni omnis necessitatibus.
                                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quisquam ut modi delectus ullam aut, voluptatum explicabo illum quaerat culpa, voluptate, obcaecati cum? Corrupti eius veniam mollitia repellat, quas quisquam!</div>
            </div>

        </div>
    </>
  )
}

export default ReadMe