import { Code, Linkedin, Github, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Code className="text-white" />
              </div>
              <span className="text-lg font-bold">Alfa e Omega Dev</span>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Transformando ideias em soluções digitais inovadoras. 
              Sua parceira de confiança em desenvolvimento de software.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick("#sobre")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#missao")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Missão e Visão
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#tecnologia")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Tecnologias
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#portfolio")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Portfólio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#contato")}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-slate-300">
              <li>Consultoria em Software</li>
              <li>Desenvolvimento Web</li>
              <li>Aplicativos Mobile</li>
              <li>Sistemas Empresariais</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Alfa e Omega Dev. Todos os direitos reservados. 
            | Consultoria especializada em desenvolvimento de software 
            | Transformando ideias em soluções digitais
          </p>
        </div>
      </div>
    </footer>
  );
}
