import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import email from '../assets/images/email.png'
import '../styles/NavBar.css'
import { useTranslation } from "react-i18next";


const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // translation
  const {i18n, t} = useTranslation(['navbar'])
  
  const handleLanguageChange = e => {
    i18n.changeLanguage(e.target.value)
    console.log(e.target.value)
  }

//to detect if it's scrolled or not
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // language handle check
  const [lang, setLang] = useState('en')
  
  const handleLangChange = e => {
    setLang(e.target.value)
  }


  return (
      <Navbar expand="md" className={ scrolled ? "scrolled" : ""}>
          <Container>
              <Navbar.Brand className='logo' href="/">
                <h1>Chi Chiu Lam</h1>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>

                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                      <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><p>{t('home')}</p></Nav.Link>
                      <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><p>{t('skills')}</p></Nav.Link>
                      <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><p>{t('projects')}</p></Nav.Link>
                      <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}><p>{t('aboutme')}</p></Nav.Link>
                    
                      <Form value={localStorage.getItem("i18nextLng")}
                            onChange={handleLanguageChange} >
                        <Form.Switch 
                          type="switch"
                          id="custom-switch"
                          label="English 🇨🇦"
                          value='en'
                          checked={lang === 'en'}
                          onChange = {handleLangChange}
                        />
                        <Form.Switch 
                          type="switch"
                          label="Français 🇨🇦"
                          id="disabled-custom-switch"
                          value='fr'
                          checked={lang === 'fr'}
                          onChange = {handleLangChange} 
                        />
                      </Form>
          </Nav>

            <span className="navbar-text">

              <div className="social-icon">
                <a href="https://github.com/chichiulam2022"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/chichiu-lam-7142a771/"><img src={linkedin} alt="linkedin" /></a>
                <a href="mailto:lamcc90@gmail.com"><img src={email} alt="email" /></a>
              </div>
            </span>
          </Navbar.Collapse>
          </Container>
      </Navbar>   
  )
}

export default NavBar
