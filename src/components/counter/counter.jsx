import React from 'react'
import community from '../../assets/img/icons/community.png'
import events from '../../assets/img/icons/events.png'
import group from '../../assets/img/icons/group.png'
import professionals from '../../assets/img/icons/professionals.png'
const counter = () => {
    return (
        <section className="dark-bg pt-80 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={community} alt="idea" width={30} />
                            <h2><span className="counter font-700 white-color">80</span></h2>
                            <h3 className="white-color">Student Members</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={events} alt="idea" width={30} />
                            <h2><span className="counter font-700 white-color">50</span></h2>
                            <h3 className="white-color">Events</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={professionals} alt="idea" width={30} />
                            <h2><span className="counter font-700 white-color">5</span></h2>
                            <h3 className="white-color">Professional Members</h3>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="counter-wrap">
                            <img src={group} alt="idea" width={30} />
                            <h2><span className="counter font-700 white-color">5</span></h2>
                            <h3 className="white-color">Chapters</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default counter