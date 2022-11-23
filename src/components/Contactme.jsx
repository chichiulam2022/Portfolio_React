import { Container, Row, Col } from "react-bootstrap";
import astronaut from '../assets/images/astronaut.png'
import '../styles/Contactme.css'
import {useTranslation} from 'react-i18next'

function Contactme() {

const {t} = useTranslation(['contactme'])
  return (
    <section className="contact px-4" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
                <img src={astronaut} alt="Contact Me"/>
          </Col>

          <Col size={12} md={6}>
                <div>
                <h3>{t('contact_me')}</h3>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder={t('first_name')} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder={t('last_name')}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder={t('email')} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder={t('phone')}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder={t('message')}></textarea>
                      <button type="submit">{t('submit')}</button>
                    </Col>
                  </Row>
                </form>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contactme
