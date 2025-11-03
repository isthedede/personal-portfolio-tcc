import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-toyama-beige">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-dancing text-toyama-orange text-center mb-10">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Vocês fazem peças sob medida?</AccordionTrigger>
            <AccordionContent>
              Sim. Personalizamos tamanhos, cores e temas conforme a ocasião. Envie referências no contato.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Qual o prazo de produção?</AccordionTrigger>
            <AccordionContent>
              Varia conforme a complexidade e quantidade. Em média, 3–7 dias úteis após confirmação.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Fazem entrega?</AccordionTrigger>
            <AccordionContent>
              Sim, combinamos retirada ou entrega local. Para outras regiões, consulte condições e frete.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;


