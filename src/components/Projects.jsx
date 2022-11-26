import React from "react";
import { Row, Tab, Nav } from "react-bootstrap";
import "../styles/Projects.css";
import {SiGithub} from 'react-icons/si'

//images
import movieapp from "../assets/images/movieapp.gif";
import weatherapp from "../assets/images/weatherapp.gif";
import trivia from "../assets/images/trivia.gif";
import socialNetwork from "../assets/images/social_network.gif";
import employer from "../assets/images/employer.gif";
import noteTaker from "../assets/images/note_taker.gif";
import nomadTravels from "../assets/images/nomad_travels.gif";
import jokes from "../assets/images/jokes.gif";
import pokemon from "../assets/images/pokemon.gif";
import frontCode from "../assets/images/front-code.png";
import dataBases from "../assets/images/databases.png";
import fullStack from "../assets/images/fullstack.png";
import reactIcon from "../assets/images/react_icon.png";
import mysql from "../assets/images/mysql_icon.png";
import mongodb from "../assets/images/mongodb_icon.png";
import api from "../assets/images/api.png";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import TrackVisibility from "react-on-screen";

//three.js
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function Projects() {
  const { t } = useTranslation([
    "projects",
    "FEprojects",
    "BEprojects",
    "Fullprojects",
    "tabs",
  ]);

  const frontEndProjects = [
    {
      title: t("title_movie", { ns: "FEprojects" }),
      description: t("description_movie", { ns: "FEprojects" }),
      imgUrl: movieapp,
      github_link: "https://github.com/chichiulam2022/movie_app",
      d_link: 'https://chichiulam2022.github.io/movie_app/'
    },
    {
      title: t("title_weather", { ns: "FEprojects" }),
      description: t("description_weather", { ns: "FEprojects" }),
      imgUrl: weatherapp,
      github_link: "https://github.com/chichiulam2022/weather_app",
      d_link: 'https://chichiulam2022.github.io/weather_app/'
    },
    {
      title: t("title_trivia", { ns: "FEprojects" }),
      description: t("description_trivia", { ns: "FEprojects" }),
      imgUrl: trivia,
      github_link: "https://github.com/chichiulam2022/trivia_quiz_app",
      d_link: 'https://chichiulam2022.github.io/trivia_quiz_app/'
    },
  ];

  const backEndProjects = [
    {
      title: t("title_employer", { ns: "BEprojects" }),
      description: t("description_employer", { ns: "BEprojects" }),
      imgUrl: employer,
      github_link: "https://github.com/chichiulam2022/employer_tracker",
      d_link: 'https://user-images.githubusercontent.com/108379616/191663348-73981fbb-552e-4fca-8492-ea7c0fad6eae.webm'
    },
    {
      title: t("title_social", { ns: "BEprojects" }),
      description: t("description_social", { ns: "BEprojects" }),
      imgUrl: socialNetwork,
      github_link: "https://github.com/chichiulam2022/Social_Network_API",
      d_link: 'https://drive.google.com/file/d/1zPI3WqX-xlWicukojLooBFEiD_uVMtzu/view'
    },
    {
      title: t("title_note", { ns: "BEprojects" }),
      description: t("description_social", { ns: "BEprojects" }),
      imgUrl: noteTaker,
      github_link: "https://github.com/chichiulam2022/note_taker_",
      d_link: 'https://notetaker-chichiulam.herokuapp.com/'
    },
  ];

  const fullStackProjects = [
    {
      title: t("title_travel", { ns: "Fullprojects" }),
      description: t("description_travel", { ns: "Fullprojects" }),
      imgUrl: nomadTravels,
      github_link: "https://github.com/chichiulam2022/travel_blog",
      d_link: 'https://nomadtravelblog.herokuapp.com/'
    },
    {
      title: t("title_challenge", { ns: "Fullprojects" }),
      description: t("description_challenge", { ns: "Fullprojects" }),
      imgUrl: jokes,
      github_link: "https://github.com/chichiulam2022/dont-laugh-challenge-Webpack_Project",
      d_link: 'https://dontlaughchallengehaha.netlify.app/'
    },
    {
      title: t("title_poke", { ns: "Fullprojects" }),
      description: t("description_poke", { ns: "Fullprojects" }),
      imgUrl: pokemon,
      github_link: "https://github.com/chichiulam2022/Pokedex_React.js",
      d_link: 'https://pokedexapireactapp.netlify.app'
    },
  ];

  return (
    <section className="project px-4">
      <Canvas style={{ height: "35vh", width: "100vw", opacity: "1" }}>
            <Stars count={1240} radius={150} saturation={0} speed={4} depth={20} />
        </Canvas>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility once offset={160}>
              {({ isVisible }) => (
                <div
                  className={`project-bx
                      ${isVisible ? "animate__animated animate__flipIn animate__slow" : "hidden"}`}
                  id="project"
                >
                  <h2>{t("title")}</h2>
                  <p>{t("text1")}<h4 style={{display: 'inline', color:'#8A2BE2'}}><SiGithub/></h4> .</p>
                  <p><i style={{fontWeight: '900', color: 'orange'}}>{t("italic")}</i>{t("text2")}</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" id="tab1">
                          {t("title1", { ns: "tabs" })}
                          <br />
                          <img
                            className="code-icon"
                            src={frontCode}
                            alt="frontend"
                          />
                          &nbsp;
                          <img className="code-icon" src={api} alt="api" />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          {t("title2", { ns: "tabs" })}
                          <br />
                          <img
                            className="code-icon"
                            src={dataBases}
                            alt="databases"
                          />
                          &nbsp;
                          <img className="code-icon" src={mysql} alt="mysql" />
                          <img
                            className="code-icon"
                            src={mongodb}
                            alt="mongodb"
                          />
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          {t("title3", { ns: "tabs" })}
                          <br />
                          <img
                            className="code-icon"
                            src={fullStack}
                            alt="fullstack"
                          />
                          &nbsp;
                          <img
                            className="code-icon"
                            src={reactIcon}
                            alt="react"
                          />
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                      {/* frontend projects */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {frontEndProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* backend projects */}
                      <Tab.Pane eventKey="second">
                        <Row>
                          {backEndProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* fullstack projects */}
                      <Tab.Pane eventKey="third">
                        <Row>
                          {fullStackProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;