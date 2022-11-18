import { Container, Row, Col } from "react-bootstrap";
import astronaut from '../assets/images/astronaut.png'
import '../styles/Contactme.css'
import TrackVisibility from 'react-on-screen';

function Contactme() {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__bounceInDown animate__slow" : ""} src={astronaut} alt="Contact Me"/>
              }
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
                <div>
                <h3>Contact Me:</h3>
                <form>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" placeholder="Last Name"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" placeholder="Email Address" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" placeholder="Message"></textarea>
                      <button type="submit">Submit</button>
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
