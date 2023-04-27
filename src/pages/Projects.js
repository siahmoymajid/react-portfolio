import React from 'react'
import { CardGroup, Col, Row } from 'react-bootstrap'
import Project from '../components/Project'

const Projects = ({projects}) => {
  console.log(projects);
  return (
    projects && 
     <Row>
      <Col xs={10} className='m-auto'>
    {projects.map((p, i) => (
        <Project key={i} project={p} i={i} />
    ))}
    </Col>
    </Row>
  )
}

export default Projects