import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Cuidadora há 3 anos",
      content: "Este e-book mudou completamente a rotina alimentar da minha mãe. As receitas são práticas e ela tem apresentado melhoras significativas. Recomendo muito!",
      rating: 5,
    },
    {
      name: "João Silva",
      role: "Familiar de paciente",
      content: "Estava perdido sobre como preparar refeições adequadas. O cardápio semanal me poupou horas de pesquisa e planejamento. Valeu cada centavo!",
      rating: 5,
    },
    {
      name: "Ana Paula Oliveira",
      role: "Nutricionista",
      content: "Como profissional da área, fiquei impressionada com a qualidade nutricional das receitas. Um guia completo e cientificamente embasado.",
      rating: 5,
    },
    {
      name: "Carlos Eduardo",
      role: "Cuidador familiar",
      content: "As 50 receitas são variadas e deliciosas. Meu pai, que tinha perdido o apetite, voltou a comer com prazer. Gratidão por este trabalho!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            O Que Nossos Leitores Dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Centenas de famílias já transformaram a alimentação de quem amam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
