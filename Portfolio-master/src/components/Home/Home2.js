import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          {/* Col Esquerda */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITA-ME <span className="purple"> APRESENTAR </span>
            </h1>
            <p className="home-about-body">
            Olá! Sou desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas pela FIAP, apaixonado por tecnologia desde a infância e sempre atento às últimas tendências do mercado. <br />
              <br />
              Meu foco atual está em{" "}
              <i>
                <b className="purple">
                  desenvolvimento de software e tecnologias cloud
                </b>
              </i>
              , procurando sempre trazer um impacto positivo através do que
              construo. <br />
              <br />
              Também possuo experiência com{" "}
              <i>
                <b className="purple">Java</b>, Spring Boot, React.js e outras
                stacks modernas.
              </i>
              <br />
              <br />
              Estou em constante aprendizado, buscando oportunidades de crescer
              como desenvolvedor e contribuir em projetos que façam diferença.
            </p>
          </Col>

          {/* Col Direita */}
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Redes Sociais */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>VOCÊ PODE ME ENCONTRAR EM</h1>
            <p>
              Fique à vontade para se <span className="purple">conectar </span>comigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/MuriloMatos552525"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>


              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/murilo-matos-681a49270"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/murilo.matos__"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Home2;
