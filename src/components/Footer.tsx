import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Viva com Memória</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transformando a vida de famílias que cuidam de pessoas com Alzheimer através da alimentação adequada.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contato@vivacommemoria.com.br</p>
              <p>Suporte: seg-sex, 9h-18h</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground block transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground block transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground block transition-colors">
                Política de Reembolso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Viva com Memória. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
