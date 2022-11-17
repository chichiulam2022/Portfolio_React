import React from 'react'
import 'animate.css'
import '../styles/Aboutme.css'
import TrackVisibility from 'react-on-screen';
import {useTranslation} from 'react-i18next'
import profilepic from '../assets/images/profile_pic_me.jpg'

function Aboutme() {

const {t} = useTranslation(['skills'])
  return (
    <div>
      <section className="aboutme" id="aboutme">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ''}>
                    <div className="aboutme-bx wow zoomIn">
                        <h2>{t('title')}</h2>
                        <p>{t('description')}</p>
                        <img src={profilepic} alt='' className='col-4'/>
                    </div>
                </div>}
                </TrackVisibility>    
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Aboutme
