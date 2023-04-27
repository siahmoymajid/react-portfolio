import { Container, Row, Col } from 'react-bootstrap'
import { Github, Linkedin, Envelope } from 'react-bootstrap-icons';

function Socials({ github, linkedin, email }) {
  return (
      <Row className='d-flex justify-content-start align-items-center mt-auto mb-3'>
        <Col>
          <a className="icon-link link-dark" href={github} target='_blank' rel="noopener noreferrer" >
            <Github />
          </a>
        </Col>
        <Col>
          <a className="icon-link link-dark" href={linkedin}  target='_blank' rel="noopener noreferrer" >
            <Linkedin />
          </a>
        </Col>
        <Col>
          <a className="icon-link link-dark" href={`mailto:${email}`} target='_blank' rel="noopener noreferrer">
            <Envelope />
          </a>
        </Col>
        <Col className='ms-auto copyright text-nowrap'>Copyright &copy; Sia Majid</Col>
      </Row>

  );
}

export default Socials;