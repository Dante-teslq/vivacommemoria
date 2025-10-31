import { AlertTriangle, Heart, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const problems = [
  {
    icon: AlertCircle,
    title: "Dificuldades Motoras",
    description: "O Alzheimer causa dificuldades motoras e cognitivas, tornando a preparação e consumo de alimentos um grande desafio diário.",
  },
  {
    icon: Heart,
    title: "Hábitos Alimentares",
    description: "A progressão da doença afeta significativamente os hábitos alimentares e as preferências de sabor do paciente.",
  },
  {
    icon: Clock,
    title: "Falta de Tempo",
    description: "Cuidadores passam horas planejando refeições adequadas, tempo que poderia ser usado para cuidados diretos.",
  },
  {
    icon: AlertTriangle,
    title: "Nutrição Inadequada",
    description: "Sem orientação especializada, muitos pacientes não recebem a nutrição necessária para retardar os sintomas.",
  },
];

const Problems = () => {
  return (
    <section id="problema" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 mb-4">
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
          <h2 className="text-3xl lg:text-5xl">
            Os Desafios da Alimentação no Alzheimer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sabemos que cuidar de alguém com Alzheimer é desafiador, especialmente quando se trata da alimentação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                  <problem.icon className="h-6 w-6 text-destructive" />
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
