import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({ title, description, imgUrl, link }) {
  return (
    <Col size={12} md={4}>
      <div className="proj-img-box">
        <a href={link}>
          <img src={imgUrl} alt="projects" />
          <div className="proj-text">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  );
}

export default ProjectCard;

