import React from 'react'
import 'animate.css'
import '../styles/Aboutme.css'
import {useTranslation} from 'react-i18next'
import profilepic from '../assets/images/profile_pic_me.jpg'

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
