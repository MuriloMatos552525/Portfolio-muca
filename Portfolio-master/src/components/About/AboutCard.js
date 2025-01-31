import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Olá, eu sou <span className="purple">Murilo Matos </span>
            de <span className="purple">São Paulo, SP, Brasil.</span>
            <br />
            <br />
            Sou formado em Análise e Desenvolvimento de Sistemas pela FIAP. Apaixonado por tecnologia desde a infância, estou sempre atualizado sobre as últimas tendências e inovações. Minha habilidade autodidata me permite aprender rapidamente e me adaptar a novas ferramentas e metodologias com facilidade.
            <br />
            <br />
            Possuo conhecimento sólido em desenvolvimento de software e busco contribuir ativamente para projetos que façam a diferença, levando minha dedicação e impacto positivo a cada trabalho. Nas horas vagas, gosto de:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Ver Filmes
            </li>
            <li className="about-activity">
              <ImPointRight /> Jogar
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Sempre busco construir coisas que façam a diferença!"
          </p>
          <footer className="blockquote-footer">Murilo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
