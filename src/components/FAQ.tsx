import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o acesso ao e-book?",
    answer: "Após a confirmação do pagamento, você receberá imediatamente um e-mail com o link para download do e-book em formato PDF. O acesso é vitalício e você poderá baixar o material quantas vezes precisar.",
  },
  {
    question: "As receitas são adequadas para todas as fases do Alzheimer?",
    answer: "Sim! O e-book contém orientações específicas para cada fase da doença, incluindo dicas de adaptação de texturas e consistências conforme a progressão do Alzheimer.",
  },
  {
    question: "Preciso ter experiência na cozinha?",
    answer: "Não é necessário! Todas as receitas são pensadas para serem simples e práticas, com instruções claras passo a passo. Mesmo quem tem pouca experiência consegue preparar as refeições.",
  },
  {
    question: "O e-book inclui opções para restrições alimentares?",
    answer: "Sim, o material traz sugestões de substituições para diferentes restrições alimentares, como diabetes, hipertensão e intolerâncias. Sempre consulte o médico ou nutricionista para adaptações específicas.",
  },
  {
    question: "Posso imprimir o e-book?",
    answer: "Sim! Você pode imprimir o e-book completo ou apenas as páginas que desejar para facilitar o uso na cozinha.",
  },
  {
    question: "Tem garantia?",
    answer: "Sim! Oferecemos 7 dias de garantia. Se por qualquer motivo você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento, sem perguntas.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o e-book
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
