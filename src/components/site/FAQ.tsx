import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Fui demitido sem justa causa, quais são meus direitos?", a: "Você tem direito ao aviso prévio, 13º proporcional, férias proporcionais com 1/3, saldo de salário, FGTS com multa de 40% e acesso ao seguro-desemprego, entre outros, conforme o caso." },
  { q: "Posso cobrar horas extras não pagas?", a: "Sim. Toda jornada além das 8 horas diárias ou 44 semanais (salvo regime especial) deve ser remunerada com adicional mínimo de 50%. É possível cobrar judicialmente os valores referentes aos últimos 5 anos." },
  { q: "Trabalhei sem carteira assinada. Tenho direitos?", a: "Sim. Comprovado o vínculo empregatício, você tem direito ao reconhecimento da relação de emprego e a todas as verbas trabalhistas do período, incluindo FGTS, férias, 13º e contribuições previdenciárias." },
  { q: "Quanto tempo tenho para entrar com uma ação trabalhista?", a: "O prazo é de até 2 anos após o fim do contrato de trabalho, podendo cobrar os últimos 5 anos de direitos não pagos durante o vínculo." },
  { q: "Sofri acidente de trabalho. O que devo fazer?", a: "Procure atendimento médico imediato, exija a emissão da CAT (Comunicação de Acidente de Trabalho) pelo empregador e busque orientação jurídica para garantir estabilidade, auxílio-doença acidentário e eventuais indenizações." },
  { q: "O atendimento pode ser online?", a: "Sim. Realizo atendimentos por WhatsApp, vídeo chamada e e-mail para clientes de todo o Rio Grande do Sul, com a mesma qualidade e proximidade do atendimento presencial." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-red font-semibold">
            Perguntas Frequentes
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl text-[var(--brand-dark)] leading-tight">
            Tire suas <span className="text-brand-red">dúvidas</span>
          </h2>
          <div className="mt-6 h-1 w-20 gradient-red rounded mx-auto" />
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-lg border border-[var(--border)] bg-[var(--muted)] px-6 reveal"
            >
              <AccordionTrigger className="text-left font-semibold text-[var(--brand-dark)] hover:text-brand-red hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--muted-foreground)] leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}