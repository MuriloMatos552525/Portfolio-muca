import React from "react";
import { Col, Row } from "react-bootstrap";
// Exemplos de ícones para Cloud/DevOps/Ferramentas
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure, SiGooglecloud, SiOracle, SiAzuredevops, SiPowerbi } from "react-icons/si";
import { ImOffice } from "react-icons/im";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Clouds */}
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
      </Col>

      {/* DevOps / Ferramentas */}
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* Microsoft 365 (usando ícone "office" como referência) */}
        <ImOffice />
      </Col>
    </Row>
  );
}

export default Toolstack;
