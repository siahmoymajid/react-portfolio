import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import Heading from '../components/Heading';
import profilePicture from "../public/assets/images/profile.jpg"

function About({ name, bio, role, picture }) {

  return (
    <>
      <Row>
        <Col lg={6} xl={4}>
          <Image src={profilePicture} width={400} height={400} className="shadow-50 rounded-circle overflow-hidden align-self-start justify-self-center d-block border-4 bg-dark p-2" alt={name} />
        </Col>
        <Col md={8}>
          <Heading name={name} role={role && role} />
          <p className='text-start'>
            {bio}
          </p>
        </Col>
      </Row>
    </>
  );
}

export default About;
