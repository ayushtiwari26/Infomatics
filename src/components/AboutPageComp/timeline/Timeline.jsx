import React from 'react'
import './Timeline.css'

const Timeline = () => {
  return (
    <>
    <div className="row">
        <div className="col timeline-heading">Company's journey</div>
    </div>
    <section id="conference-timeline">
    <div class="timeline-start"></div>
    <div class="conference-center-line"></div>
    <div class="conference-timeline-content">


      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span class="article-number">01</span></p>
          </div>
          <span class="timeline-author">John Doe</span>
        </div>
        <div class="content-right-container">
          <div class="content-right">
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. <span class="article-number">02</span></p>
          </div>
          <span class="timeline-author">John Doe</span>
        </div>
        <div class="meta-date">
          <span class="date">2016</span>
          {/* <span class="month">APR</span> */}
        </div>
      </div>


      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span class="article-number">01</span></p>
          </div>
          <span class="timeline-author">John Doe</span>
        </div>
        <div class="content-right-container">
          <div class="content-right">
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. <span class="article-number">02</span></p>
          </div>
          <span class="timeline-author">John Doe</span>
        </div>
        <div class="meta-date">
          <span class="date">18</span>
          <span class="month">APR</span>
        </div>
      </div>

      <div class="timeline-article">
        <div class="content-left-container">
          <div class="content-left">
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. Mankind, let us preserve and increase this beauty, and not destroy it! <span class="article-number">01</span></p>
          </div>
          <span class="timeline-author">John Doe</span>
        </div>
        <div class="content-right-container">
          <div class="content-right">
            <p>When I orbited the Earth in a spaceship, I saw for the first time how beautiful our planet is. <span class="article-number">02</span></p>
          </div>
          <span class="timeline-author">John Doe</span>
        </div>
        <div class="meta-date">
          <span class="date">18</span>
          <span class="month">APR</span>
        </div>
      </div>
    </div>
    <div class="timeline-end"></div>
    </section>
    </>
  )
}

export default Timeline