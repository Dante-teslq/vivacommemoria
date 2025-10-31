import { Sparkles, Calendar, BookOpen, Apple, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Calendar,
    title: "Planejamento Semanal",
    description: "7 dias de cardápio completo com café da manhã, almoço, lanche e jantar",
  },
  {
    icon: BookOpen,
    title: "50 Receitas Testadas",
    description: "Receitas desenvolvidas especificamente para pessoas com Alzheimer",
  },
  {
    icon: Apple,
    title: "Guia Nutricional",
    description: "Informações sobre nutrientes essenciais para retardar os sintomas",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Alimentar",
    description: "Orientações sobre texturas e consistências adequadas",
  },
  {
    icon: Users,
    title: "Suporte Familiar",
    description: "Dicas práticas para envolver a família no processo alimentar",
  },
  {
    icon: Sparkles,
    title: "Receitas Simples",
    description: "Instruções claras e passo a passo para facilitar o preparo",
  },
];

const Solution = () => {
  return (
    <section id="solucao" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl lg:text-5xl">
            A Solução Completa para Alimentação no Alzheimer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nosso e-book oferece um sistema completo de alimentação, desenvolvido por especialistas, 
            para garantir nutrição adequada e prazerosa durante toda a jornada da doença.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
