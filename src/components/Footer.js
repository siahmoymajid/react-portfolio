import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <Container className='mt-auto text-dark font-size-sm mb-3 copyright'>
      <Row className='d-flex justify-content-center align-items-center'>
        <Col>Copyright &copy; Sia Majid</Col>
      </Row>
    </Container>
  );
}

export default Footer;