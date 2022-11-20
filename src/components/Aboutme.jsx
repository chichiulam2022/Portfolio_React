import React from 'react'
import 'animate.css'
import '../styles/Aboutme.css'
import {useTranslation} from 'react-i18next'
import profilepic from '../assets/images/profile_pic_me.jpg'
import { FiDownload } from 'react-icons/fi';
import {BsFillFileEarmarkPdfFill} from 'react-icons/bs'
import TrackVisibility from 'react-on-screen';
import 'animate.css'

function Aboutme() {

const {t} = useTranslation(['aboutme'])
  return (
    <div>
      <section className="aboutme" id="aboutme">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="aboutme-bx wow zoomIn">
                        <h2>{t('title')}</h2>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className="text-container">
                            <p>{t('intro')}</p>
                            <p>{t('text1')}</p>
                            <p>{t('text3')} <a href='/resume.pdf' download 
                            className={isVisible ? "animate__animated animate__flash animate__repeat-2" : ''}
                            >{t('resume')} <FiDownload/> <BsFillFileEarmarkPdfFill/></a> {t('engonly')}.</p>
                              <img src={profilepic} alt='cow' className={`col-4
                              ${isVisible ? "animate__animated animate__wobble" : ''}`}/>
                        </div>}
                        </TrackVisibility>
                     
                    </div>
                </div>
            </div>   
        </div>
      </section>
    </div>
  )
}

export default Aboutme
