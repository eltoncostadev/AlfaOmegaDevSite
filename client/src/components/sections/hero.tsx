import { Button } from "@/components/ui/button";

export default function Hero() {
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
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
            Transformamos <span className="text-primary">Ideias</span> em{" "}
            <span className="text-secondary">Soluções Digitais</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Somos especialistas em consultoria e desenvolvimento de software,
            oferecendo soluções inovadoras e personalizadas para impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavClick("#contato")}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Fale Conosco
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavClick("#portfolio")}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
