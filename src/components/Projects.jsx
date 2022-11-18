import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "../styles/Projects.css"
import movieapp from '../assets/images/movieapp.png'
import weatherapp from '../assets/images/weatherapp.png'
import trivia from '../assets/images/trivia.png'
import socialNetwork from '../assets/images/social_network.png'
import employer from '../assets/images/employer.png'
import noteTaker from '../assets/images/note_taker.png'
import nomadTravels from '../assets/images/nomad_travels.png'
import jokes from '../assets/images/jokes.png'
import pokemon from '../assets/images/pokemon.png'
import ProjectCard from './ProjectCard';
import { useTranslation } from "react-i18next";

function Projects() {

  const {t} = useTranslation(['projects', 'FEprojects', 'tabs'])

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
          title: "Employer Tracker",
          description: "Built with MySQL, this app stores company information such as employee, department, and role.",
          imgUrl: employer,
          link: 'https://github.com/chichiulam2022/employer_tracker'
        },
        {
          title: "Social Media Network",
          description: "A social network API written pure JavaScript with MongoDB/Mongoose.",
          imgUrl: socialNetwork,
          link: 'https://github.com/chichiulam2022/Social_Network_API'
        },
        {
          title: "Note Taker",
          description: "This project allows users to take and save their notes using Express.",
          imgUrl: noteTaker,
          link: 'https://github.com/chichiulam2022/note_taker_'
        }
      ];

      const fullStackProjects = [
        {
          title: "NoMadTravels",
          description: "A social travel blog where users can login to view and add blog posts as well as upload pictures.",
          imgUrl: nomadTravels,
          link: 'https://github.com/chichiulam2022/travel_blog'
        },
        {
          title: `Don't Laugh Challenge HAHAHAHA`,
          description: `A PWA webpack project written with "icanhazdadjoke" API that generates random jokes`,
          imgUrl: jokes,
          link: 'https://github.com/chichiulam2022/dont-laugh-challenge-Webpack_Project'
        },
        {
          title: "Pokedex",
          description: "A simple React Pokémon game with PokéAPI.",
          imgUrl: pokemon,
          link: 'https://github.com/chichiulam2022/dont-laugh-challenge-Webpack_Project'
        }
      ];

  return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
                <div>
                  <h2>{t('title')}</h2>
                  <p>{t('text1')}</p><br/>
                  <p><i><b>{t('italic')}</b></i> {t('text2')}</p>                 
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                              <Nav.Link eventKey="first" id='tab1'>{t('title1', { ns: 'tabs' })}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">{t('title2', { ns: 'tabs' })}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">{t('title3', { ns: 'tabs' })}</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content id="slideInUp">


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
                          </Tab.Content>
                        </Tab.Container>       
                      </div>
                    </Col>
                  </Row>
                </Container>
              </section>
  )
}

export default Projects
