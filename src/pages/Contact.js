import React from 'react'
import { Form,Button,Row, Col } from 'react-bootstrap';
import { Textarea } from 'react-bootstrap-icons';

const Contact = ({data}) => {
  console.log(data);
  return (
    <Row className="m-auto">
      <Col xs={10}>
        <h2 className="display-4 text-end">{data.title}</h2>

        <div className="text-end">

        
          <Form
            action="https://formsubmit.co/smajid2008@hotmail.com"
            method="POST"
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Subject" />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <textarea className="form-control"> </textarea>
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}


export default Contact