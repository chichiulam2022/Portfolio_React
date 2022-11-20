import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "../styles/Projects.css"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

//images
import movieapp from '../assets/images/movieapp.png'
import weatherapp from '../assets/images/weatherapp.png'
import trivia from '../assets/images/trivia.png'
import socialNetwork from '../assets/images/social_network.png'
import employer from '../assets/images/employer.png'
import noteTaker from '../assets/images/note_taker.png'
import nomadTravels from '../assets/images/nomad_travels.png'
import jokes from '../assets/images/jokes.png'
import pokemon from '../assets/images/pokemon.png'
import frontCode from '../assets/images/front-code.png'
import dataBases from '../assets/images/databases.png'
import fullStack from '../assets/images/fullstack.png'
import reactIcon from  '../assets/images/react_icon.png'
import mysql from '../assets/images/mysql_icon.png'
import mongodb from '../assets/images/mongodb_icon.png'
import api from '../assets/images/api.png'
import ProjectCard from './ProjectCard';
import { useTranslation } from "react-i18next";

function Projects() {

  const {t} = useTranslation(['projects', 'FEprojects', 'BEprojects', "Fullprojects", 'tabs'])

    const frontEndProjects = [
        {
          title: t('title_movie', { ns: 'FEprojects' }),
          description: t('description_movie', { ns: 'FEprojects' }),
          imgUrl: movieapp,
          link: 'https://github.com/chichiulam2022/movie_app'
        },
        {
          title: t('title_weather', { ns: 'FEprojects' }),
          description: t('description_weather', { ns: 'FEprojects' }),
          imgUrl: weatherapp,
          link: 'https://github.com/chichiulam2022/weather_app'
        },
        {
          title: t('title_trivia', { ns: 'FEprojects' }),
          description: t('description_trivia', { ns: 'FEprojects' }),
          imgUrl: trivia,
          link: 'https://github.com/chichiulam2022/trivia_quiz_app'
        }
      ];

      const backEndProjects = [
        {
          title: t('title_employer', { ns: 'BEprojects' }),
          description: t('description_employer', { ns: 'BEprojects' }),
          imgUrl: employer,
          link: 'https://github.com/chichiulam2022/employer_tracker'
        },
        {
          title: t('title_social', { ns: 'BEprojects' }),
          description: t('description_social', { ns: 'BEprojects' }),
          imgUrl: socialNetwork,
          link: 'https://github.com/chichiulam2022/Social_Network_API'
        },
        {
          title: t('title_note', { ns: 'BEprojects' }),
          description: t('description_social', { ns: 'BEprojects' }),
          imgUrl: noteTaker,
          link: 'https://github.com/chichiulam2022/note_taker_'
        }
      ];

      const fullStackProjects = [
        {
          title: t('title_travel', { ns: 'Fullprojects' }),
          description: t('description_travel', { ns: 'Fullprojects' }),
          imgUrl: nomadTravels,
          link: 'https://github.com/chichiulam2022/travel_blog'
        },
        {
          title: t('title_challenge', { ns: 'Fullprojects' }),
          description: t('description_challenge', { ns: 'Fullprojects' }),
          imgUrl: jokes,
          link: 'https://github.com/chichiulam2022/dont-laugh-challenge-Webpack_Project'
        },
        {
          title: t('title_poke', { ns: 'Fullprojects' }),
          description: t('description_poke', { ns: 'Fullprojects' }),
          imgUrl: pokemon,
          link: 'https://github.com/chichiulam2022/dont-laugh-challenge-Webpack_Project'
        }
      ];

  return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
                <div className='project-bx'>
                  <h2>{t('title')}</h2>
                  <p>{t('text1')}</p><br/>
                  <p><i><b>{t('italic')}</b></i> {t('text2')}</p>                 
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                              <Nav.Link eventKey="first" id='tab1'>{t('title1', { ns: 'tabs' })}<br/>
                                <img className='code-icon'src={frontCode} alt="frontend"/>&nbsp;
                                <img className='code-icon'src={api} alt="api"/>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">{t('title2', { ns: 'tabs' })}<br/>
                                <img className='code-icon'src={dataBases} alt="databases"/>&nbsp;
                                <img className='code-icon'src={mysql} alt="mysql"/>
                                <img className='code-icon'src={mongodb} alt="mongodb"/>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">{t('title3', { ns: 'tabs' })}<br/>
                                <img className='code-icon'src={fullStack} alt="fullstack"/>&nbsp;
                                <img className='code-icon'src={reactIcon} alt="react"/>
                                
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>

                        <TrackVisibility>
                            {({ isVisible }) =>
                          <Tab.Content id="slideInUp"
                          className={isVisible ? "animate__animated animate__flash animate__slow" : ""}>

                            {/* frontend projects */}
                            <Tab.Pane eventKey="first">
                              <Row>
                                {
                                  frontEndProjects.map((project, index) => {
                                    return (
                                      <ProjectCard key={index} {...project}/>
                                    )
                                  })
                                }
                              </Row>
                            </Tab.Pane>

                            {/* backend projects */}
                            <Tab.Pane eventKey="second">
                              <Row>
                                {
                                  backEndProjects.map((project, index) => {
                                    return (
                                      <ProjectCard key={index} {...project}/>
                                    )
                                  })
                                }
                              </Row>
                            </Tab.Pane>

                            {/* fullstack projects */}
                            <Tab.Pane eventKey="third">
                              <Row>
                                {
                                  fullStackProjects.map((project, index) => {
                                    return (
                                      <ProjectCard key={index} {...project}/>
                                    )
                                  })
                                }
                              </Row>
                            </Tab.Pane>
                          </Tab.Content>}
                        </TrackVisibility>
                        </Tab.Container>       
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
  )
}

export default Projects