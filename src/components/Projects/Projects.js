import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Importação das imagens
import greenEnergyImg from "../../Assets/Projects/greenenergy.jpg";
import hapvidaImg from "../../Assets/Projects/hapvida.jpg";
import plusoftImg from "../../Assets/Projects/plusoft.jpg";
import oceans20Img from "../../Assets/Projects/oceans20.jpg";
import portoImg from "../../Assets/Projects/porto.png";
import kraftHeinzImg from "../../Assets/Projects/kraftheinz.jpg";

// Array com os dados dos projetos
const projects = [
  {
    imgPath: greenEnergyImg,
    isBlog: false,
    title: "Green Energy: Energia Limpa para um Futuro Sustentável",
    description: `**Descrição do Projeto:**  
Este projeto impulsiona o uso de fontes limpas e renováveis, reduzindo a dependência de combustíveis fósseis e minimizando emissões de gases de efeito estufa. A solução aprimora a geração, distribuição e consumo de energia sustentável, tornando-a mais acessível e confiável.

**Meu Papel:**  
- Desenvolvimento de aplicação web em Spring Framework (Java), com arquitetura MVC ou API REST, usando Spring Data JPA, Bean Validation e Spring Security.  
- Configuração de banco de dados em nuvem (relacional ou NoSQL), com scripts DDL.  
- Implantação de pipelines de CI/CD (Azure DevOps) e configuração de ambiente em nuvem (ACR/ACI ou App Services).  
- Uso de mensageria (Kafka, RabbitMQ ou semelhante) e integração com IA Generativa via Spring AI.  
- Cobertura de testes com JUnit e Selenium, além de revisão de Pull Requests e logs de execução.

**Principais Tecnologias:**  
Java, Spring Boot, Azure DevOps, Docker/Container, Mensageria, IA Generativa, Selenium.`,
    ghLink: "https://github.com/ProspAI/ProspEco-Java.git"
  },
  {
    imgPath: hapvidaImg,
    isBlog: false,
    title: "Inovação e Tecnologia em Saúde – HapVida/NotreDame Intermédica",
    description: `**Descrição do Projeto:**  
Desenvolvido em parceria com a Hapvida/NotreDame Intermédica, este projeto busca revolucionar o setor de saúde, da prevenção de doenças à automação de processos médicos. A solução integra Inteligência Artificial para análise preditiva, auxiliando diagnósticos e tomadas de decisão mais ágeis.

**Meu Papel:**  
- Criação de APIs REST em Java, aplicando Domain-Driven Design (DDD) para organizar entidades e regras de negócio.  
- Implementação de modelos de Machine Learning em Python (API Flask) para análise preditiva de riscos.  
- Desenvolvimento Front-end em Next.js, integrado ao back-end em Java, com deploy contínuo na Vercel.

**Principais Tecnologias:**  
Java, Spring Boot, Python (Flask), Next.js, CI/CD (Vercel).`,
    ghLink: "https://github.com/Hallktech-2-0/GlobalSolutionJava",
    demoLink: "https://global-solution-web-sage.vercel.app/"
  },
  {
    imgPath: plusoftImg,
    isBlog: false,
    title: "ProspAI – Segmentação Inovadora de Dados (Plusoft)",
    description: `**Descrição do Projeto:**  
O ProspAI é um aplicativo que revoluciona a segmentação de dados de usuários com IA, gerando insights estratégicos e indicando canais de comunicação adequados para cada público.

**Meu Papel:**  
- Desenvolvimento de API REST em Java, aplicando princípios RESTful (Nível 3, HATEOAS), Spring Security, Kafka e Swagger.  
- Camada de apresentação (MVC) com Thymeleaf, JS, HTML e CSS.  
- Integração de módulos em .NET 8 para escalabilidade e flexibilidade.

**Principais Tecnologias:**  
Java, Spring Boot, Kafka, Thymeleaf, .NET 8, Azure AI, Swagger.`,
    ghLink: "https://github.com/ProspAI/ProspAI-Java"
  },
  {
    imgPath: oceans20Img,
    isBlog: false,
    title: "Blue Future – Oceans20 (O20)",
    description: `**Descrição do Projeto:**  
Iniciativa alinhada às ODS e à ONU (Oceans20), para mitigar enchentes e promover a sustentabilidade dos oceanos. O aplicativo ProspOcean usa IoT e visão computacional para monitoramento em tempo real, classificação de resíduos e engajamento de usuários em reciclagem e educação ambiental.

**Meu Papel:**  
- Desenvolvimento de um back-end robusto em Java, estruturando uma API REST escalável e segura.  
- Integração de serviços para mapear incidentes, classificar resíduos e gerar relatórios ambientais.

**Principais Funcionalidades:**  
- Mapas Interativos, Relatórios de Incidentes, Classificação de Resíduos, Educação Ambiental, Campanhas de Limpeza, Monitoramento de Espécies Marinhas, Plataforma de Doações.`,
    ghLink: "https://github.com/ProspAI/ProspOcean-Java"
  },
  {
    imgPath: portoImg,
    isBlog: false,
    title: "Oxigênio Aceleradora – Porto Seguro: Vistorias de Bicicletas com IA",
    description: `**Descrição do Projeto:**  
Solução para agilizar vistorias de bicicletas por meio de IA, fazendo análise de imagens para identificar avarias, verificar acessórios e gerar orçamentos detalhados.

**Meu Papel:**  
- Criação de APIs REST em Java (DDD) para orquestrar o fluxo de dados entre o front-end e o banco de dados.  
- Desenvolvimento de modelos de IA em Python (API) para classificação e cálculo de cotações em tempo real.  
- Implementação de front-end (Next.js) integrado ao back-end em Java, com deploy na Vercel.

**Principais Tecnologias:**  
Java, Spring Boot, Python, Next.js, Vercel, DDD.`,
    ghLink: "https://github.com/Hallktech-2-0/Sprint4-JAVA",
    demoLink: "https://sprint4-web-one.vercel.app/"
  },
  {
    imgPath: kraftHeinzImg,
    isBlog: false,
    title: "AI Feeding the Future – Microsoft/KraftHeinz",
    description: `**Descrição do Projeto:**  
Projeto global que utiliza IA para combater a fome e a escassez de alimentos. A arquitetura segue princípios de Domain-Driven Design (DDD), modelando entidades como Estoque, Fornecedor e Distribuição.

**Meu Papel:**  
- Desenvolvimento em Java, com criação de entidades, métodos de sobrecarga/sobrescrita e testes via Scanner/JOptionPane em uma classe principal.  
- Aplicação de boas práticas de DDD para garantir a clareza no domínio e facilitar a escalabilidade.

**Principais Tecnologias:**  
Java, DDD, Boas práticas de Arquitetura, IA aplicada à gestão de alimentos.`,
    ghLink: "https://github.com/Exemplo/KraftHeinz" // Atualize com o link correto, se disponível
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Projetos</strong> Recentes
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns dos principais projetos universitários e parcerias em que trabalhei.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
