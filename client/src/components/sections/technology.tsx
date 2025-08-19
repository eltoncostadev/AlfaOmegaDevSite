import { Card } from "@/components/ui/card";

export default function Technology() {
  const frontendTechs = [
    { name: "React", icon: "⚛️", color: "text-blue-500" },
    { name: "Vue.js", icon: "🟢", color: "text-green-500" },
    { name: "Angular", icon: "🅰️", color: "text-red-500" },
    { name: "JavaScript", icon: "🟨", color: "text-yellow-500" },
    { name: "HTML5", icon: "🌐", color: "text-orange-500" },
    { name: "CSS3", icon: "🎨", color: "text-blue-600" }
  ];

  const backendTechs = [
    { name: "Node.js", icon: "🟢", color: "text-green-600" },
    { name: "Python", icon: "🐍", color: "text-blue-400" },
    { name: "Java", icon: "☕", color: "text-red-600" },
    { name: "C#", icon: "#️⃣", color: "text-purple-600" },
    { name: "PHP", icon: "🐘", color: "text-indigo-600" },
    { name: "Ruby", icon: "💎", color: "text-red-500" }
  ];

  const databaseTechs = [
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-600" },
    { name: "MongoDB", icon: "🍃", color: "text-green-600" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "Google Cloud", icon: "☁️", color: "text-blue-500" },
    { name: "Azure", icon: "☁️", color: "text-blue-600" },
    { name: "Docker", icon: "🐳", color: "text-blue-400" }
  ];

  const TechGrid = ({ title, techs }: { title: string; techs: any[] }) => (
    <div>
      <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {techs.map((tech, index) => (
          <Card key={index} className="bg-slate-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className={`text-4xl mb-2 ${tech.color}`}>{tech.icon}</div>
            <p className="font-medium text-slate-800">{tech.name}</p>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <section id="tecnologia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Tecnologias</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
