import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Sistema E-commerce",
      description: "Plataforma completa de vendas online com gestão de produtos, pedidos e integração com meios de pagamento.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "App Mobile de Gestão",
      description: "Aplicativo móvel para gestão empresarial com relatórios em tempo real e dashboard interativo.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "Python", "Redis"]
    },
    {
      title: "Sistema de Analytics",
      description: "Plataforma de análise de dados com visualizações avançadas e relatórios customizados.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "Java", "MongoDB"]
    },
    {
      title: "Sistema de Saúde",
      description: "Sistema hospitalar com gestão de pacientes, prontuários eletrônicos e agendamentos.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Angular", "C#", "SQL Server"]
    },
    {
      title: "Fintech Platform",
      description: "Plataforma financeira com carteira digital, transferências e análise de investimentos.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Node.js", "Blockchain"]
    },
    {
      title: "Plataforma EAD",
      description: "Sistema de ensino à distância com videoaulas, exercícios e acompanhamento de progresso.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "Python", "MongoDB"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Portfólio</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="link" className="text-primary font-medium hover:text-blue-700 p-0">
                  Ver Detalhes →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
}
