import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { Typewriter } from 'react-simple-typewriter'
import astronaut from '../assets/images/astronaut.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import "../styles/Hero.css"
import {useTranslation} from 'react-i18next'

function Hero() {
  const {t} = useTranslation(['hero'])


  return (
    <section className="hero" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft animate__slow" : ''}>

                <span className="tagline">{t('welcome')} 😊</span>

                <h1>{t('intro')}<br/>{t('pron')} <span style={{ color: 'red', fontWeight: 'bold' }}>
                <Typewriter
                words={[t('animatedText1'), t('animatedText2'), t('animatedText3')]} 
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={130}
                delaySpeed={1100}
                />
                </span>
                   
                </h1>
                  <p>{t('detailText1')} <br/><br/>
                  {t('detailText2')}</p>
                 
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={astronaut} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
