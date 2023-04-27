import React from 'react'
import { Image, Col, Row } from 'react-bootstrap'

const Project = ({ project, i}) => {
    console.log(project);
  return (
    project &&
    <Row className=' my-3 text-end'>
      
      <Col xs={10} md={6}>
        <h3>{project.title}</h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className='mx-3 link-secondary'>Demo</a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className='link-secondary'>GitHub</a>
        <p>{project.description}</p>
     </Col>
     <Col xs={10} md={6}>
      <Image fluid src={`/assets/images/${project.image}`} />
      </Col>
    </Row>
   
  )
}

export default Project