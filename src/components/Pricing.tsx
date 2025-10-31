import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Star } from "lucide-react";

const Pricing = () => {
  const handlePurchase = () => {
    window.open("https://pay.kiwify.com.br/exemplo", "_blank");
  };

  return (
    <section id="preco" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <Card className="gradient-card border-2 border-primary/20 shadow-2xl">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="inline-flex items-center justify-center gap-1 text-yellow-500 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <CardTitle className="text-3xl lg:text-4xl">
                Investimento Especial
              </CardTitle>
              <CardDescription className="text-lg">
                Comece hoje a transformar a alimentação de quem você ama
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              <div className="text-center space-y-2">
                <div className="text-muted-foreground line-through text-xl">
                  De R$ 97,00
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-primary">
                  R$ 47,90
                </div>
                <p className="text-muted-foreground">
                  Pagamento único • Acesso imediato
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "50 receitas completas e testadas",
                  "Cardápio semanal pronto",
                  "Guia nutricional completo",
                  "Lista de compras organizada",
                  "Acesso vitalício",
                  "Atualizações gratuitas",
                  "Suporte por e-mail",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full text-lg h-14 font-semibold"
                onClick={handlePurchase}
              >
                Garantir Meu E-book Agora
              </Button>

              <div className="text-center space-y-2 pt-4">
                <p className="text-sm text-muted-foreground">
                  🔒 Pagamento 100% seguro
                </p>
                <p className="text-sm text-muted-foreground">
                  ✅ Garantia de 7 dias
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
