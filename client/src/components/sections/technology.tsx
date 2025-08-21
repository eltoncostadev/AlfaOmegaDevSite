import { Card } from "@/components/ui/card";

export default function Technology() {
  const frontendTechs = [
    { name: "React", icon: "⚛️", color: "text-cyan-400" },
    { name: "Vue.js", icon: "🟢", color: "text-emerald-400" },
    { name: "Angular", icon: "🅰️", color: "text-rose-400" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-400" },
    { name: "HTML5", icon: "🌐", color: "text-orange-400" },
    { name: "CSS3", icon: "🎨", color: "text-blue-400" }
  ];

  const backendTechs = [
    { name: "Node.js", icon: "🟢", color: "text-emerald-400" },
    { name: "Python", icon: "🐍", color: "text-cyan-400" },
    { name: "Java", icon: "☕", color: "text-rose-400" },
    { name: "C#", icon: "#️⃣", color: "text-purple-400" },
    { name: "PHP", icon: "🐘", color: "text-indigo-400" },
    { name: "Ruby", icon: "💎", color: "text-red-400" }
  ];

  const databaseTechs = [
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-400" },
    { name: "MongoDB", icon: "🍃", color: "text-emerald-400" },
    { name: "AWS", icon: "☁️", color: "text-orange-400" },
    { name: "Google Cloud", icon: "☁️", color: "text-cyan-400" },
    { name: "Azure", icon: "☁️", color: "text-blue-400" },
    { name: "Docker", icon: "🐳", color: "text-cyan-400" }
  ];

  const TechGrid = ({ title, techs }: { title: string; techs: any[] }) => (
    <div>
      <h3 className="text-xl font-heading font-semibold text-cyan-400 mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {techs.map((tech, index) => (
          <Card key={index} className="bg-card rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-cyan-500/30 hover:border-cyan-400/50">
            <div className={`text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
            <p className="font-heading font-medium text-card-foreground">{tech.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tecnologia" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-cyan-300 mb-4">Tecnologias</h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-sans">
            Utilizamos as mais modernas tecnologias para criar soluções robustas e escaláveis
          </p>
        </div>

        <div className="space-y-12">
          <TechGrid title="Frontend Development" techs={frontendTechs} />
          <TechGrid title="Backend Development" techs={backendTechs} />
          <TechGrid title="Banco de Dados & Cloud" techs={databaseTechs} />
        </div>
      </div>
    </section>
  );
}
