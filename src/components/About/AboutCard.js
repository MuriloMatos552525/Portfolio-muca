import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, meu nome é <span className="purple">Murilo Matos</span> e sou de <span className="purple">São Paulo, SP, Brasil</span>.
            <br />
            <br />
            Sou desenvolvedor de software júnior, formado em Análise e Desenvolvimento de Sistemas pela FIAP. Desde a infância, sempre fui fascinado por tecnologia e inovação.
            <br />
            <br />
            Tenho experiência com <b className="purple">Java, Spring Boot, React.js</b> e tecnologias <b className="purple">cloud</b> como AWS, Azure e Google Cloud. Estou sempre buscando aprendizado e evolução para me tornar um profissional melhor e contribuir ativamente para projetos de impacto.
            <br />
            <br />
            Já participei de projetos acadêmicos e colaborativos, como o <b className="purple">ProspAI</b> e <b className="purple">ProspOcean</b>, onde trabalhei no desenvolvimento de APIs REST, automação de processos e integrações com inteligência artificial.
            <br />
            <br />
            Além da tecnologia, gosto de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ver filmes e séries
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar videogames
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar e conhecer novas culturas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Estou sempre aberto a desafios e oportunidades para crescer como desenvolvedor."
          </p>
          <footer className="blockquote-footer">Murilo Matos</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
