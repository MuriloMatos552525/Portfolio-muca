import React from "react";
import { Col, Row } from "react-bootstrap";
// Exemplos de ícones que correspondem às suas tecnologias
import { FaJava, FaPython, FaSwift, FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiCsharp, SiSpring, SiDotnet, SiNextdotjs } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Linguagens */}
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSwift />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJsSquare />
      </Col>

      {/* Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* React/React Native (podemos usar o ícone de React para ambos) */}
        <FaReact />
      </Col>

      {/* Web */}
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* REST APIs */}
        <AiOutlineApi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
    </Row>
  );
}

export default Techstack;
