import { FaCode, FaCogs, FaSyncAlt, FaLightbulb, FaChartBar, FaDatabase, FaCloud, FaLock, FaTools, FaUserGraduate, FaNetworkWired } from "react-icons/fa";
import { MdOutlineArchitecture, MdOutlineIntegrationInstructions, MdOutlineSupportAgent } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
          <Button
            onClick={() => scroll("left")}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-lg hidden md:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 scroll-smooth px-1 sm:px-2 md:px-6 py-2"
          >
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="min-w-[300px] max-w-[300px] min-h-[300px] max-h-[300px] flex-none flex flex-col items-start p-4 h-full justify-start bg-[#172133] border border-[#1ec6e6] text-[#7ff6ff] rounded-xl shadow-[0_2px_16px_0_rgba(30,198,230,0.08)]"
              >
                <div className="mb-2">{service.icon}</div>
                <CardContent className="p-0 flex-1 flex flex-col">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl text-[#1ec6e6] text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base break-words text-[#7ff6ff] text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button
            onClick={() => scroll("right")}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white shadow-lg hidden md:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}