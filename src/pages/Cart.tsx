import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Cart = () => {
  useEffect(() => {
    // Track AddToCart event with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'AddToCart', {
        content_name: 'E-book Viva com Memória',
        content_category: 'E-book',
        value: 47.90,
        currency: 'BRL'
      });
    }
  }, []);

  const handleCheckout = () => {
    // Track InitiateCheckout event with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: 'E-book Viva com Memória',
        content_category: 'E-book',
        value: 47.90,
        currency: 'BRL'
      });
    }
    window.open("https://pay.cakto.com.br/qhk5zwq_641726", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-primary" />
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">Seu Carrinho</h1>
              <p className="text-muted-foreground">Revise seu pedido antes de finalizar</p>
            </div>

            <Card className="gradient-card border-2 border-primary/20 shadow-2xl mb-6">
              <CardHeader>
                <CardTitle className="text-2xl">E-book Viva com Memória</CardTitle>
                <CardDescription>Guia completo de alimentação para memória</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
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

                <div className="border-t pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground line-through">De R$ 97,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold">Total:</span>
                    <span className="text-4xl font-bold text-primary">R$ 47,90</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Pagamento único • Acesso imediato
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full text-lg h-14 font-semibold"
                  onClick={handleCheckout}
                >
                  Finalizar Compra
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
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
