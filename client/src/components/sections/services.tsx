import { FaCode, FaCogs, FaSyncAlt, FaLightbulb, FaChartBar, FaDatabase, FaCloud, FaLock, FaTools, FaUserGraduate, FaNetworkWired } from "react-icons/fa";
import { MdOutlineArchitecture, MdOutlineIntegrationInstructions, MdOutlineSupportAgent } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const services = [
  {
    icon: <FaCode size={32} color="#1976d2" />,
    title: "Desenvolvimento customizado",
    description:
      "Criação de aplicações web, mobile e desktop sob medida para as necessidades específicas do cliente, utilizando tecnologias modernas e melhores práticas de desenvolvimento.",
  },
  {
    icon: <MdOutlineArchitecture size={32} color="#1976d2" />,
    title: "Arquitetura de sistemas",
    description:
      "Design e planejamento da estrutura técnica de aplicações, incluindo escolha de tecnologias, padrões arquiteturais (microserviços, monolíticos, serverless) e definição de integrações entre sistemas.",
  },
  {
    icon: <GiUpgrade size={32} color="#1976d2" />,
    title: "Modernização de sistemas legados",
    description:
      "Atualização de aplicações antigas para tecnologias atuais, migração para nuvem e refatoração de código para melhorar performance e manutenibilidade.",
  },
  {
    icon: <FaLightbulb size={32} color="#1976d2" />,
    title: "Análise e estratégia tecnológica",
    description:
      "Avaliação do cenário atual de TI da empresa e desenvolvimento de roadmaps tecnológicos alinhados aos objetivos de negócio.",
  },
  {
    icon: <FaSyncAlt size={32} color="#1976d2" />,
    title: "Transformação digital",
    description:
      "Apoio na implementação de processos digitais, automação e adoção de novas tecnologias para modernizar operações empresariais.",
  },
  // {
  //   icon: <FaCogs size={32} color="#1976d2" />,
  //   title: "Governança de TI",
  //   description:
  //     "Estabelecimento de processos, políticas e frameworks para gestão eficiente dos recursos tecnológicos.",
  // },
  {
    icon: <MdOutlineIntegrationInstructions size={32} color="#1976d2" />,
    title: "Integração de sistemas",
    description:
      "Conectar diferentes aplicações e plataformas, criando APIs, webhooks e soluções de middleware para facilitar o fluxo de informações.",
  },
  // {
  //   icon: <FaChartBar size={32} color="#1976d2" />,
  //   title: "Business Intelligence e Analytics",
  //   description:
  //     "Desenvolvimento de dashboards, relatórios e soluções de análise de dados para apoiar a tomada de decisões estratégicas.",
  // },
  {
    icon: <FaDatabase size={32} color="#1976d2" />,
    title: "Migração e integração de dados",
    description:
      "Transferência segura de dados entre sistemas, limpeza e padronização de bases de dados.",
  },
  {
    icon: <FaNetworkWired size={32} color="#1976d2" />,
    title: "Implementação de DevOps",
    description:
      "Configuração de pipelines de CI/CD, automação de deploys e estabelecimento de cultura de colaboração entre desenvolvimento e operações.",
  },
  {
    icon: <FaCloud size={32} color="#1976d2" />,
    title: "Migração para nuvem",
    description:
      "Planejamento e execução da migração de infraestrutura e aplicações para provedores como AWS, Azure ou Google Cloud.",
  },
  {
    icon: <FaLock size={32} color="#1976d2" />,
    title: "Segurança e compliance",
    description:
      "Implementação de medidas de segurança, auditoria de código e adequação a regulamentações como LGPD.",
  },
  {
    icon: <FaTools size={32} color="#1976d2" />,
    title: "Manutenção evolutiva e corretiva",
    description:
      "Atualizações contínuas, correção de bugs e implementação de novas funcionalidades em sistemas existentes.",
  },
  {
    icon: <MdOutlineSupportAgent size={32} color="#1976d2" />,
    title: "Monitoramento e suporte técnico",
    description:
      "Acompanhamento da performance das aplicações e suporte especializado para resolução de problemas.",
  },
  {
    icon: <FaUserGraduate size={32} color="#1976d2" />,
    title: "Treinamento e capacitação",
    description:
      "Desenvolvimento de competências técnicas das equipes internas do cliente através de workshops, treinamentos e mentoria.",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
  <section id="servicos" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-cyan-300 mb-4">Nossos Serviços</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-sans">
            Temos uma ampla gama de serviços para ajudar sua organização a criar, modernizar e otimizar suas soluções tecnológicas
          </p>
        </div>
        <div className="relative w-full mt-4">
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: 0,
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              background: "#fff",
              boxShadow: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 3,
              scrollBehavior: "smooth",
              px: { xs: 1, sm: 2, md: 6 },
              py: 2,
            }}
          >
            {services.map((service, idx) => (
              <Card
                key={idx}
                sx={{
                  minWidth: { xs: 300, sm: 300, md: 300 },
                  maxWidth: { xs: 300, sm: 300, md: 300 },
                  minHeight: { xs: 300, sm: 300, md: 300 },
                  maxHeight: { xs: 300, sm: 300, md: 300 },
                  flex: "0 0 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  p: 2,
                  height: "100%",
                  boxSizing: "border-box",
                  fontFamily: "inherit",
                  justifyContent: "flex-start",
                  backgroundColor: "#172133",
                  border: "1px solid #1ec6e6",
                  color: "#7ff6ff",
                  borderRadius: "12px",
                  boxShadow: "0 2px 16px 0 rgba(30,198,230,0.08)",
                }}
              >
                <Box sx={{ mb: 1 }}>{service.icon}</Box>
                <CardContent sx={{ p: 0, fontFamily: "inherit", flex: 1 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontFamily: "inherit",
                      fontWeight: 600,
                      fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.25rem" },
                      color: "#1ec6e6",
                      textAlign: "center",
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "inherit",
                      fontSize: { xs: "0.92rem", sm: "1rem" },
                      wordBreak: "break-word",
                      whiteSpace: "normal",
                      color: "#7ff6ff",
                      textAlign: "center",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: 0,
              top: "50%",
              zIndex: 2,
              transform: "translateY(-50%)",
              background: "#fff",
              boxShadow: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    </section>
  );
}