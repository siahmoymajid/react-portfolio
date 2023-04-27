import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

function About({ avatar, bio, title}) {

  return (
    <>
    
    <Row className="m-auto">
      <Col xs={10}>
                <h2 className="display-4 text-end">{title}</h2>

        <p className='text-end'>
        {bio}
        </p>
      </Col>

    </Row>
    </>
  );
}

export default About;
