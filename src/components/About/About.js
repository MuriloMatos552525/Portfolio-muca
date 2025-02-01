import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Sobre mim */}
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Sobre <strong className="purple">Mim</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* Tecnologias */}
        <h1 className="project-heading">
          Minhas <strong className="purple">Linguagens & Frameworks</strong>
        </h1>
        <Techstack />

        {/* Ferramentas */}
        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que utilizo
        </h1>
        <Toolstack />

        {/* Calendário GitHub */}
        <Github />
      </Container>
    </Container>
  );
}

export default About;
