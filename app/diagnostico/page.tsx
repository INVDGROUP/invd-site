"use client";
import { useState } from "react";

export default function Diagnostico() {
  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=5561993253597&text=Ol%C3%A1! Fiz o diagn%C3%B3stico r%C3%A1pido da INVD e quero conversar sobre os resultados.";

  const questions = [
    {
      id: "q1",
      text: "Como sua empresa conquista a maioria dos novos clientes hoje?",
      options: [
        "Quase tudo por indicação de clientes atuais",
        "Mistura de indicação e alguns anúncios",
        "Tráfego pago e presença digital estruturada",
        "Prospecção ativa e comercial estruturado",
      ],
    },
    {
      id: "q2",
      text: "Como você descreveria o posicionamento da sua marca no mercado?",
      options: [
        "Não temos um posicionamento claro definido",
        "Temos mas não comunicamos bem",
        "É claro internamente mas o mercado não percebe",
        "Somos referência reconhecida no nosso segmento",
      ],
    },
    {
      id: "q3",
      text: "Quando um potencial cliente pergunta o preço, o que geralmente acontece?",
      options: [
        "Frequentemente perdemos para concorrente mais barato",
        "Às vezes perdemos por preço mas não sempre",
        "O preço raramente é o fator decisivo",
        "Cobramos premium e somos escolhidos pelo valor",
      ],
    },
    {
      id: "q4",
      text: "Como está sua presença digital hoje?",
      options: [
        "Fraca — site desatualizado e redes sem consistência",
        "Regular — postamos mas sem estratégia clara",
        "Razoável — temos presença mas não gera resultado",
        "Forte — presença digital gera leads e autoridade",
      ],
    },
    {
      id: "q5",
      text: "Qual é o principal obstáculo para crescer mais rápido hoje?",
      options: [
        "Não sabemos como atrair mais clientes de forma previsível",
        "Temos clientes mas nossa margem está apertada",
        "Crescemos mas perdemos qualidade e controle",
        "Falta estrutura de marketing e vendas integrada",
      ],
    },
  ];

  const gargalos = {
    low: [
      { t: "Posicionamento indefinido", d: "Sua marca não comunica valor com clareza, o que força competição por preço e dificulta crescimento sustentável." },
      { t: "Captação dependente de indicação", d: "Sem canais de aquisição estruturados, o crescimento fica limitado à rede atual — instável e imprevisível." },
      { t: "Presença digital fraca", d: "Sem presença digital estratégica, sua empresa é invisível para clientes que poderiam estar buscando exatamente o que você oferece." },
    ],
    mid: [
      { t: "Marketing sem direção comercial", d: "Há esforço em comunicação mas sem alinhamento com vendas — o resultado não se converte em receita previsível." },
      { t: "Posicionamento pouco percebido", d: "O mercado ainda não reconhece claramente o diferencial da sua empresa, o que fragiliza a precificação e a escolha do cliente." },
      { t: "Escala sem estrutura", d: "Para crescer no próximo nível é necessário integrar tráfego, conteúdo e processo comercial em um ecossistema coeso." },
    ],
    high: [
      { t: "Oportunidade de escala acelerada", d: "Com a estrutura que você já tem, um plano estratégico de tráfego e posicionamento pode multiplicar os resultados atuais." },
      { t: "Integração de canais", d: "A conexão entre marketing, vendas e presença digital pode estar gerando ineficiências que limitam o crescimento." },
      { t: "Autoridade de mercado", d: "Empresas no seu estágio se beneficiam de branding e presença consistente para consolidar liderança e defender margem." },
    ],
  };

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<number | null>(null);

  const currentQ = questions[step - 1];

  const handleSelect = (idx: number) => setSelected(idx);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = { ...answers, [currentQ.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);
    if (step === 5) setStep(6);
    else setStep(step + 1);
  };

  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const pct = Math.round((score / 15) * 100);
  const tier = pct <= 33 ? "low" : pct <= 66 ? "mid" : "high";
  const titles = {
    low: "Empresa em risco de estagnação",
    mid: "Potencial alto, execução travada",
    high: "Empresa madura com gargalos pontuais",
  };
  const descs = {
    low: "Vários pilares precisam de reestruturação urgente.",
    mid: "Você tem base, mas falta estratégia para escalar.",
    high: "Boa base — o próximo passo é otimizar e acelerar.",
  };

  return (
    <main className="min-h-screen bg-[#111] text-white flex flex-col items-center px-6 py-16">
      <div className="w-full max-w-lg">

        <div className="mb-10 flex items-center">
          <img src="/logo.png" alt="INVD" className="h-6 w-auto object-contain" />
        </div>

        {step === 0 && (
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C0005A]">Diagnóstico gratuito</span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.04em]">
              Sua empresa está no<br />
              <span className="text-[#C0005A]">limite do crescimento?</span>
            </h1>
            <p className="mt-5 text-sm leading-7 text-white/50">
              5 perguntas para identificar onde está o gargalo do seu negócio.
            </p>
            <button
              onClick={() => setStep(1)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#C0005A] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#970047]"
            >
              Iniciar diagnóstico →
            </button>
          </div>
        )}

        {step >= 1 && step <= 5 && (
          <div>
            <div className="flex gap-2 mb-8">
              {questions.map((_, i) => (
                <div key={i} className={`h-[3px] flex-1 rounded-full transition-all ${i < step ? "bg-[#C0005A]" : "bg-white/10"}`} />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C0005A]">Pergunta {step} de 5</span>
            <h2 className="mt-4 text-xl font-bold leading-snug mb-8">{currentQ.text}</h2>
            <div className="flex flex-col gap-3 mb-8">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`text-left rounded-xl border px-5 py-4 text-sm leading-relaxed transition-all ${
                    selected === i
                      ? "border-[#C0005A] bg-[#C0005A]/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:border-[#C0005A]/50 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="w-full inline-flex items-center justify-center rounded-full bg-[#C0005A] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#970047] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {step === 5 ? "Ver diagnóstico" : "Próxima →"}
            </button>
          </div>
        )}

        {step === 6 && (
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C0005A]">Seu diagnóstico</span>
            <div className="mt-6 flex items-center gap-5 mb-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#C0005A] flex items-center justify-center">
                <span className="text-2xl font-black text-[#C0005A]">{pct}%</span>
              </div>
              <div>
                <p className="font-bold text-white text-base">{titles[tier]}</p>
                <p className="text-sm text-white/50 mt-1">{descs[tier]}</p>
              </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-4">Principais gargalos identificados</p>
            <div className="flex flex-col gap-3 mb-8">
              {gargalos[tier].map((g, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-bold text-[#C0005A] mb-2">{g.t}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{g.d}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#C0005A]/30 bg-[#C0005A]/10 p-5 mb-4 text-center">
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                A INVD faz um diagnóstico completo e gratuito para{" "}
                <span className="text-white font-semibold">identificar exatamente onde está o seu gargalo</span>{" "}
                e o que precisa mudar para escalar.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#C0005A] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#970047]"
              >
                Falar com a INVD agora →
              </a>
            </div>

            <button
              onClick={() => { setStep(0); setAnswers({}); setSelected(null); }}
              className="w-full text-center text-xs text-white/25 hover:text-white/50 transition mt-2"
            >
              Reiniciar diagnóstico
            </button>
          </div>
        )}

        <footer className="mt-16 pt-6 border-t border-white/5">
          <div className="flex flex-col gap-2 text-xs text-white/25 text-center">
            <p>© 2026 INVD — Todos os direitos reservados.</p>
            <p>Inteligência em Negócios, Vendas e Digital</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
