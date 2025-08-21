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
    <section 
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(59, 130, 246, 0.85)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
            Transformamos <span className="text-cyan-300">Ideias</span> em{" "}
            <span className="text-blue-300">Soluções Digitais</span>
          </h1>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto font-sans">
            Somos especialistas em consultoria e desenvolvimento de software,
            oferecendo soluções inovadoras e personalizadas para impulsionar seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleNavClick("#contato")}
              className="bg-cyan-400 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors duration-200 font-heading"
            >
              Fale Conosco
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavClick("#portfolio")}
              className="border-2 border-cyan-300 text-cyan-300 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-300 hover:text-slate-900 transition-colors duration-200 font-heading"
            >
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
      {/* Overlay pattern for extra visual depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="1"/></g></svg>')`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
    </section>
  );
}
