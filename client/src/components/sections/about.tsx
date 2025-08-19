export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Sobre Nós</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Conheça a Alfa e Omega Dev e nossa trajetória no desenvolvimento de soluções tecnológicas
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Equipe da Alfa e Omega Dev trabalhando" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">Nossa História</h3>
            <p className="text-slate-600 leading-relaxed">
              Fundada com o propósito de ser o início e o fim das soluções tecnológicas para nossos clientes, 
              a Alfa e Omega Dev nasceu da paixão por transformar desafios complexos em soluções elegantes e eficientes.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nossa equipe é composta por desenvolvedores experientes, arquitetos de software e consultores especializados 
              que trabalham incansavelmente para entregar resultados excepcionais.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-slate-600">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">5+</div>
                <div className="text-slate-600">Anos de Experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
