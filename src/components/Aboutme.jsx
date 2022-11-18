import React from 'react'
import 'animate.css'
import '../styles/Aboutme.css'
import {useTranslation} from 'react-i18next'
import profilepic from '../assets/images/profile_pic_me.jpg'
import { FiDownload } from 'react-icons/fi';


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
                        <div className='text-container'>
                            <p>{t('intro')}</p>
                            <p>{t('text1')}</p>
                            <p><i>{t('text2')}</i></p>
                            <p>{t('text3')} <a href='/resume.pdf' download>{t('resume')} <FiDownload/></a> {t('engonly')}.</p>
                          
                            <img src={profilepic} alt='' className='col-4'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Aboutme
