import {Container, Row, Col} from "react-bootstrap";
import Header from "./Header";


function Main() {
  return (
    <Container fluid>
      <Row class= "d-flex min-vh-100">
        <Col className="min-vh-100 bg-secondry text-primary" xs={5}>   
        <Header/>
        </Col>
        <Col xs={7}>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default Main;
