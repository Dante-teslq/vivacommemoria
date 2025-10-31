import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Viva com Memória</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("problema")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Problema
          </button>
          <button 
            onClick={() => scrollToSection("solucao")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Solução
          </button>
          <button 
            onClick={() => scrollToSection("beneficios")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection("preco")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Preço
          </button>
        </nav>

        <Button onClick={() => scrollToSection("preco")} className="font-semibold">
          Adquirir Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
