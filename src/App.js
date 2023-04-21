import logo from './logo.svg';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <Row>
      <Col>
        <Main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          ullam similique non sit illo ipsa dolore asperiores sint, laboriosam
          dolorum beatae natus necessitatibus earum quos perferendis enim
          architecto vel esse.
        </Main>
        <Footer>Copy right by Sia</Footer>
      </Col>
    </Row>
  );
}

export default App;
