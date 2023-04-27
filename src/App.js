import "./App.scss";
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Root from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import { Col, Row, Image } from "react-bootstrap";
import Socials from "./components/Socials";
import jsonData from "./data/data.json";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
function App() {
  const [data, setData] = useState(jsonData)
  const { name, role, email, bio, picture } = data.about;
  const { github, linkedin } = data.socials;
  const {projects} = data.projects;
  const {skills} = data.skills;

  useEffect(() => {
    setData(jsonData)
  }, [])

  return (
    data && 
    <BrowserRouter>
      <div className="d-flex h-100 text-center text-bg-dark w-100 ">
        <Row className="d-flex justify-content-center align-items-center w-100 flex-md-row flex-column">
          <Col md={6} className="bg-light text-dark h-100 d-flex flex-column py-5 ps-5 pe-0 ">
            <div className="d-flex flex-column justify-content-between align-items-center border-5 border-top border-bottom border-start border-dark h-100">
              <Header name={name} role={role && role} />
              <Image src={`/assets/images/${picture}`}   width={400} height={400} className="border border-dark" />
              <Socials github={github} linkedin={linkedin} email={email} />

            </div>
          </Col>
          <Col md={6} className="bg-dark text-light vh-100 d-flex flex-column py-5 pe-5 ps-0 ">
            <div className="d-flex flex-column justify-content-between align-items-baseline border-5 border-top border-bottom border-end border-light h-100">
              <Routes>
                  <Route path="about" element={<About title={data.pages.about} bio={bio} avatar={picture} />} />
                  <Route path="projects" element={<Projects title={data.pages.projects} projects={projects} />} />
                  <Route path="contact" element={<Contact data={data.contact} title={data.pages.contact} />} />
                   <Route path="resume" element={<Resume data={data.resume} title={data.pages.resume} />} />
                  <Route path="/" element={<Home />}/>
                  <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </div>
    </BrowserRouter>
                  
  );
}

export default App;
