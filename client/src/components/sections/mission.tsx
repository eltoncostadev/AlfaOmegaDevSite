import { Target, Eye, Handshake, Rocket, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Mission() {
  return (
    <section id="missao" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-cyan-300 mb-4">Missão e Visão</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-sans">
            Os valores que nos guiam e nossos objetivos para o futuro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <Card className="bg-card rounded-xl p-8 shadow-lg border border-cyan-500/30">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-cyan-400">Nossa Missão</h3>
              </div>
              <p className="text-card-foreground leading-relaxed text-center font-sans">
                Fornecer soluções tecnológicas inovadoras e personalizadas que impulsionem 
                o crescimento e a eficiência dos nossos clientes, estabelecendo parcerias 
                duradouras baseadas na confiança e na excelência técnica.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="bg-card rounded-xl p-8 shadow-lg border border-cyan-500/30">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-heading font-semibold text-cyan-400">Nossa Visão</h3>
              </div>
              <p className="text-card-foreground leading-relaxed text-center font-sans">
                Ser reconhecida como a consultoria de desenvolvimento de software de referência, 
                conhecida pela capacidade de transformar ideias complexas em soluções digitais 
                que geram valor real para os negócios.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-semibold text-cyan-400 text-center mb-8">Nossos Valores</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-white" />
              </div>
              <h4 className="font-heading font-semibold text-cyan-300 mb-2">Transparência</h4>
              <p className="text-muted-foreground text-sm font-sans">Comunicação clara e honesta em todos os projetos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-white" />
              </div>
              <h4 className="font-heading font-semibold text-cyan-300 mb-2">Inovação</h4>
              <p className="text-muted-foreground text-sm font-sans">Sempre buscando as melhores tecnologias e práticas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white" />
              </div>
              <h4 className="font-heading font-semibold text-cyan-300 mb-2">Excelência</h4>
              <p className="text-muted-foreground text-sm font-sans">Comprometimento com a qualidade em cada entrega</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
