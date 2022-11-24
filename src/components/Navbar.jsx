import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import gmail from "../assets/images/gmail.svg";
import heroku from "../assets/images/heroku.svg";
import "../styles/NavBar.css";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("/home");
  const [scrolled, setScrolled] = useState(false);
  const [emoji1, setEmoji1] = useState('👨🏽‍💻')
  const [emoji2, setEmoji2] = useState('🌎')
  
  //to detect if it's scrolled or not
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
        setEmoji1 ('🧑🏽‍🚀')
        setEmoji2 ('🚀')

      } else {
        setScrolled(false);
        setEmoji1 ('👨🏽‍💻')
        setEmoji2 ('🌎')
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  // language handle check
  const [lang, setLang] = useState("en");

  // translation
  const {t, i18n} = useTranslation(["navbar"]);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const handleLangChange = (e) => {
    setLang(e.target.value);
  };

  return (
    <Navbar expand="lg" className={`px-4 ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand className="logo" href="/">
          <h1>{emoji1} Chi Chiu Lam {emoji2}</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              <p>{t("home")}</p>
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              <p>{t("skills")}</p>
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              <p>{t("projects")}</p>
            </Nav.Link>
            <Nav.Link
              href="#aboutme"
              className={
                activeLink === "aboutme" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutme")}
            >
              <p>{t("aboutme")}</p>
            </Nav.Link>
          

            <Form
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}
              className="lang-form"
            >
              <Form.Check
                inline
                type="switch"
                id="custom-switch"
                label="English 🇨🇦"
                value="en"
                checked={lang === "en"}
                onChange={handleLangChange}
              />
              <Form.Check
                inline
                type="switch"
                label="Français 🇨🇦"
                id="disabled-custom-switch"
                value="fr"
                checked={lang === "fr"}
                onChange={handleLangChange}
              />
            </Form>
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://github.com/chichiulam2022">
                <img src={github} alt="github" />
                <span class="hide">Github</span>

              </a>
              <a href="https://dashboard.heroku.com/apps">
                <img src={heroku} alt="heroku" />
                <span class="hide">Heroku</span>
              </a>
              <a href="https://www.linkedin.com/in/chi-chiu-lam-7142a771/">
                <img src={linkedin} alt="linkedin" />
                <span class="hide">LinkedIn</span>
              </a>
              <a href="mailto:lamcc90@gmail.com">
                <img src={gmail} alt="gmail" />
                <span class="hide">Gmail</span>
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;