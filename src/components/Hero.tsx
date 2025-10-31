import { Star, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ebookMockup from "@/assets/ebook-mockup.jpg";

const Hero = () => {
  const scrollToPrice = () => {
    const element = document.getElementById("preco");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="gradient-hero py-20 lg:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0">
              ✨ Novo E-book Disponível
            </Badge>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl">
                Cardápio Semanal para{" "}
                <span className="text-primary">Alzheimer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Cardápio elaborado para proporcionar conforto e bem-estar às pessoas com 
                Alzheimer. Pare de perder tempo planejando refeições - temos tudo pronto para você!
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 (127 avaliações)</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToPrice}
                className="font-semibold text-lg h-12 px-8"
              >
                Adquirir por R$ 47,90
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" })}
                className="font-semibold text-lg h-12 px-8"
              >
                Ver Benefícios
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">+500 famílias ajudadas</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">50 receitas testadas</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl opacity-50 rounded-full" />
            <img 
              src={ebookMockup}
              alt="E-book Cardápio Semanal Alzheimer"
              className="relative w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
