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
    <section className="hero px-4" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeInLeft animate__slow" : ''}>
                <span className="tagline">{t('welcome')} 😊</span>
                <h1>{t('pronoun')} <span className='namespan'>{t('name')}</span>.<br/>
                {t('single_pronoun')} <code className="typewriter-text">
                <Typewriter
                words={[t('animatedText1'), t('animatedText2'), t('animatedText3')]} 
                loop={false}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={140}
                delaySpeed={1200}
                />
                </code>
                </h1>
                <br/>
                  <h5>{t('detailText')}</h5>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img className="astronaut_img" src={astronaut} alt="Header Img"/>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
