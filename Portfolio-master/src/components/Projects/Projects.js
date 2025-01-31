import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Se tiver imagens, importe-as aqui, por exemplo:
import greenEnergyImg from "../../Assets/Projects/greenenergy.jpg";
import hapvidaImg from "../../Assets/Projects/hapvida.jpg";
import plusoftImg from "../../Assets/Projects/plusoft.jpg";
import oceans20Img from "../../Assets/Projects/oceans20.jpg";
import portoImg from "../../Assets/Projects/porto.png";
import kraftHeinzImg from "../../Assets/Projects/kraftheinz.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos</strong> Recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns dos principais projetos universitários e parcerias
          em que trabalhei.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/** 1) Green Energy */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={greenEnergyImg} // se tiver
              isBlog={false}
              title="Green Energy: Energia Limpa para um Futuro Mais Sustentável"
              description="
                Este projeto tem como objetivo impulsionar o uso de fontes limpas e renováveis, 
                contribuindo para reduzir a dependência de combustíveis fósseis e minimizar a emissão de gases de efeito estufa. 
                A solução proposta visa melhorar os processos de geração, distribuição e consumo de energia sustentável, 
                tornando-a mais acessível e confiável para diversos setores da sociedade.

                Meu papel no projeto:
                - Aplicação Web em Spring Framework: Desenvolvida com Java e arquitetura MVC ou em formato de API REST, 
                  utilizando anotações Spring, Spring Data JPA, Bean Validation e Spring Security.
                - Banco de Dados em Nuvem: Persistência de dados em um banco relacional (ou NoSQL) hospedado na nuvem, 
                  com script de criação (DDL) em script.sql.
                - DevOps e Cloud Computing: Repositório Git no Azure Repos, pipelines de Build e Release (CI/CD) no Azure DevOps, 
                  arquivos YAML versionados e configuração do ambiente de nuvem (ACR/ACI ou App Services).
                - Mensageria e IA Generativa: Filas assíncronas com Spring e integração com Spring AI para recursos de IA Generativa.
                - Teste e Validação Contínua: Cobertura de testes com JUnit e Selenium, logs de execução das pipelines e 
                  aprovação de pull requests seguindo políticas de revisão.
              "
              ghLink="https://github.com/ProspAI/ProspEco-Java.git" // link do repositório se existir
            />
          </Col>

          {/** 2) Inovação e Tecnologia - HapVida/Notredame */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hapvidaImg}
              isBlog={false}
              title="Inovação e Tecnologia Moldando o Futuro da Saúde - HapVida/Notredame Intermédica"
              description="
                Desenvolvido em parceria com a Hapvida NotreDame Intermédica, este projeto visa revolucionar o setor de saúde, 
                desde a prevenção de doenças até a automação de processos médicos. 
                A solução integra IA avançada para análise preditiva, auxiliando profissionais de saúde em diagnósticos e decisões mais rápidas.

                Contribuições principais:
                - Desenvolvimento em Java (DDD): Criação das entidades, regras de negócio e APIs REST para orquestrar o fluxo de informações.
                - Implementação de IA: Modelos de aprendizado de máquina em Python para identificar padrões de risco e sugerir intervenções preventivas (API Flask).
                - Desenvolvimento Web Responsivo: Front-end em Next.js consumindo APIs Java, deploy na Vercel para disponibilidade contínua.

                O resultado é uma solução moderna, escalável e integrada, melhorando a experiência de pacientes e profissionais de saúde, 
                promovendo prevenção e automação de processos.
              "
              ghLink="https://github.com/Hallktech-2-0/GlobalSolutionJava"
              demoLink="https://global-solution-web-sage.vercel.app/"
            />
          </Col>

          {/** 3) Uma Solução Inovadora de Segmentação de Dados - Plusoft */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plusoftImg}
              isBlog={false}
              title="Uma Solução Inovadora de Segmentação de Dados - Plusoft"
              description="
                O ProspAI é um aplicativo para transformar a segmentação de dados de usuários por meio de Inteligência Artificial, 
                fornecendo insights estratégicos sobre preferências de comunicação e indicando mídias específicas para cada público.

                Principais recursos:
                - API REST em Java (RESTful Nível 3, HATEOAS, Actuator, Kafka, Spring Security, Lombok, Azure AI, Swagger, etc.)
                - Camada de apresentação (MVC) com Thymeleaf, JS, HTML e CSS.
                - Participação em .NET8 para integração e escalabilidade.

                Essa iniciativa no desafio FIAP x Plusoft mostra como a análise de dados e a personalização de conteúdo podem alavancar 
                resultados de marketing e atendimento ao cliente.
              "
              ghLink="https://github.com/ProspAI/ProspAI-Java"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/** 4) Blue Future - Oceans20 (O20) */}
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={oceans20Img}
              isBlog={false}
              title="Blue Future - Oceans20 (O20)"
              description="
                Projeto para mitigar impactos ambientais de enchentes e promover a sustentabilidade dos oceanos, 
                alinhado às diretrizes das ODS e da ONU (Oceans20). A solução — ProspOcean — combina IoT e visão computacional 
                para monitoramento em tempo real, classificação de resíduos e engajamento do usuário em reciclagem e educação ambiental.

                Funcionalidades:
                - Mapas Interativos, Relatórios de Incidentes, Classificação de Resíduos, Educação Ambiental, 
                  Campanhas de Limpeza, Monitoramento de Espécies Marinhas e Plataforma de Doações.
                
                Meu Papel:
                - Desenvolvimento do Backend em Java, criação de uma API REST robusta que suporta todas as funcionalidades 
                  do aplicativo, garantindo escalabilidade e segurança.
              "
              ghLink="https://github.com/ProspAI/ProspOcean-Java"
            />
          </Col>

          {/** 5) Oxigênio Aceleradora – Porto Seguro */}
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={portoImg}
              isBlog={false}
              title="Oxigênio Aceleradora – Porto Seguro: Vistorias de Bicicletas com IA"
              description="
                Projeto para agilizar vistorias de bicicletas usando IA para análise automatizada de imagens. 
                Identifica avarias, verifica acessórios e gera cotação detalhada, revisada por um colaborador.

                Contribuições:
                - Java (DDD): APIs REST para fluxo de dados entre front-end e banco de dados.
                - IA: Modelos em Python disponibilizados via API para classificação/regressão e cálculo de cotações em tempo real.
                - Desenvolvimento Web Responsivo: Integração do front-end (Next.js) com back-end Java, deploy na Vercel. 
                  Solução escalável e integrada que otimiza inspeções e reduz erros manuais.
              "
              ghLink="https://github.com/Hallktech-2-0/Sprint4-JAVA"
              demoLink="https://sprint4-web-one.vercel.app/"
            />
          </Col>

          {/** 6) AI Feeding the Future - Microsoft/KraftHeinz */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kraftHeinzImg}
              isBlog={false}
              title="AI Feeding the Future - Microsoft/KraftHeinz"
              description="
                Projeto global para aplicar IA no combate à fome e escassez de alimentos. 
                Contribuí como desenvolvedor Java, usando Domain-Driven Design (DDD) para estruturar o sistema. 
                Criação de entidades (Estoque, Fornecedor, Distribuição), métodos de sobrecarga/sobrescrita, e uma classe principal com main para testes via Scanner/JOptionPane.

                O resultado é uma solução integrada que demonstra como a IA e boas práticas de desenvolvimento podem prevenir a fome, 
                atuando em toda a cadeia de distribuição de alimentos.
              "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
