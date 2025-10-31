import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Economia de tempo no planejamento de refeições",
  "Nutrição balanceada e adequada para cada fase da doença",
  "Receitas testadas e aprovadas por famílias",
  "Instruções claras e fáceis de seguir",
  "Dicas de adaptação para preferências individuais",
  "Lista de compras semanal organizada",
  "Informações nutricionais detalhadas",
  "Sugestões de substituições alimentares",
  "Orientações sobre higiene e segurança alimentar",
  "Acesso vitalício ao material",
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl">
              O que você vai receber
            </h2>
            <p className="text-lg text-muted-foreground">
              Um guia completo e prático para transformar a alimentação de quem você ama, 
              com tudo o que você precisa para começar hoje mesmo.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
