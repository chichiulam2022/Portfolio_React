import React from "react";
import { Col } from "react-bootstrap";
import {SiGithub} from 'react-icons/si'

function ProjectCard({ title, description, imgUrl, github_link, d_link }) {
  return (
    <Col size={12} md={4}>
      <div className="proj-img-box"> 
          <img src={imgUrl} alt="projects" />
          <div className="proj-text">
            <a href={d_link}>
              <h4>{title}</h4>
            </a>
            <span>{description}</span>
            <br/><br/>
            <a href={github_link}>
              <h2 className="github_icon" style={{color:'#8A2BE2'}}><SiGithub/></h2>
            </a>
          </div>
     
      </div>
    </Col>
  );
}

export default ProjectCard;

