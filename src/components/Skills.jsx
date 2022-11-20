import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../styles/Skills.css'
import {useTranslation} from 'react-i18next'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

// images
import JS from '../assets/images/js.svg'
import html from '../assets/images/html.svg'
import css from '../assets/images/css.svg'
import react from '../assets/images/react_icon.png'
import bootstrap from '../assets/images/bootstrap.svg'
import mysql from '../assets/images/mysql.png'
import mongodb from '../assets/images/mongodb.png'
import graphql from '../assets/images/graphql.png'
import express from '../assets/images/express.svg'


const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

function Skills() {

  const {t} = useTranslation(['skills'])

  return (
    
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={`skill-bx wow zoomIn
                    ${isVisible ? "animate__animated animate__flipInX" : ''}`}>
                        <h2>{t('title')}</h2>
                        <p>{t('description')}</p>
                        <Carousel responsive={responsive} infinite={false} arrows={false} showDots={true} 
                        swipeable={true} draggable={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={JS} alt="javascript" />
                                <p>JavaScript + ES6</p> 
                            </div>
                            <div className="item">
                                <img src={html} alt="html" />
                                <p>HTML 5</p>
                            </div>
                            <div className="item">
                                <img src={css} alt="css" />
                                <p>CSS</p>
                            </div>
                            <div className="item">
                                <img src={react} alt="react" />
                                <p>React</p>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="bootstrap" />
                                <p>Bootstrap</p>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="mysql" />
                                <p>MySQL</p>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="mongodb" />
                                <p>MongoDB</p>
                            </div>
                            <div className="item">
                                <img src={graphql} alt="graphql" />
                                <p>GraphQL</p>
                            </div>
                            <div className="item">
                                <img src={express} alt="express" />
                                <p>Express</p>
                            </div>
                        </Carousel>
                    </div>}
                    </TrackVisibility>
                </div>
            
            </div>
        </div>
    </section>
    
  )
}

export default Skills
