"use client";
import Link from "next/link";
import { useState } from "react";
import BrandLogo from "../components/brand-logo";

export default function Diagnostico() {
const questions = [
    {
      id: "q1",
      text: "Como sua empresa conquista a maioria dos novos clientes hoje?",
      options: [
        "Quase tudo por indicação de clientes atuais",
        "Mistura de indicação e alguns anúncios",
        "Tráfego pago e presença digital estruturada",
        "Campanhas recorrentes com aquisição estruturada",
      ],
    },
    {
      id: "q2",
      text: "Como sua empresa define os públicos das campanhas digitais?",
      options: [
        "Ainda não temos públicos bem definidos",
        "Usamos segmentações amplas sem muitos critérios",
        "Temos perfis de público definidos, mas pouco testados",
        "Segmentamos, testamos e refinamos com dados",
      ],
    },
    {
      id: "q3",
      text: "Como os resultados das campanhas são acompanhados hoje?",
      options: [
        "Não acompanhamos indicadores com frequência",
        "Olhamos métricas básicas de vez em quando",
        "Acompanhamos custo por lead e conversões",
        "Usamos dados para otimizar mídia e aquisição continuamente",
      ],
    },
    {
      id: "q4",
      text: "Como a comunicação dos anúncios é planejada hoje?",
      options: [
        "Sem planejamento ou mensagem definida",
        "Criamos anúncios pontualmente, sem linha consistente",
        "Temos mensagens definidas, mas testamos pouco",
        "Planejamos, testamos e ajustamos a comunicação por público",
      ],
    },
    {
      id: "q5",
      text: "Qual é o principal obstáculo para melhorar sua aquisição hoje?",
      options: [
        "Não sabemos quais canais e públicos priorizar",
        "Investimos em mídia, mas sem estratégia clara",
        "Geramos contatos, mas com pouca qualidade",
        "Precisamos otimizar uma operação que já funciona",
      ],
    },
  ];

  const gargalos = {
    low: [
      { t: "Aquisição pouco estruturada", d: "Sem objetivos, públicos e canais definidos, o investimento em mídia perde direção e consistência." },
      { t: "Dependência de indicação", d: "Quando não há uma estratégia digital de aquisição, a geração de novas oportunidades fica limitada à rede atual." },
      { t: "Mensuração insuficiente", d: "Sem indicadores claros, a empresa tem pouca informação para decidir onde investir e o que otimizar." },
    ],
    mid: [
      { t: "Mídia sem direcionamento claro", d: "Já existe investimento, mas objetivos, públicos ou mensagens ainda podem estar desconectados da estratégia de aquisição." },
      { t: "Comunicação pouco testada", d: "A operação pode evoluir ao testar abordagens e entender quais mensagens geram mais interesse em cada público." },
      { t: "Otimização irregular", d: "Acompanhamento e ajustes mais consistentes podem melhorar a eficiência dos investimentos em mídia." },
    ],
    high: [
      { t: "Evolução da eficiência", d: "A base atual permite aprofundar testes de públicos, mensagens e canais para buscar melhores resultados de aquisição." },
      { t: "Integração de dados", d: "A mensuração entre plataformas pode ampliar a leitura da jornada e apoiar decisões mais precisas." },
      { t: "Novas oportunidades de mídia", d: "Uma operação madura pode explorar novos segmentos, formatos e hipóteses com controle e aprendizado contínuo." },
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
    low: "Aquisição em fase inicial",
    mid: "Operação com potencial de evolução",
    high: "Aquisição estruturada",
  };
  const descs = {
    low: "Há espaço para organizar objetivos, públicos e mensuração.",
    mid: "A base existe; agora é preciso ganhar direção e consistência.",
    high: "O próximo passo é aprofundar testes e otimizações.",
  };

  const perfilMsg = {
    low: "Olá! Fiz a análise de aquisição da INVD e quero estruturar melhor meus canais, públicos e campanhas.",
    mid: "Olá! Fiz a análise de aquisição da INVD. Já invisto em mídia, mas quero ganhar mais direção e consistência.",
    high: "Olá! Fiz a análise de aquisição da INVD. Tenho uma operação estruturada e quero aprofundar testes e otimizações.",
  };

  return (
    <main className="min-h-screen bg-[#111] text-white flex flex-col items-center px-6 py-16">
      <div className="w-full max-w-lg">

        <Link href="/" aria-label="Voltar para a página inicial" className="mb-10 flex items-center">
          <BrandLogo />
        </Link>

        {step === 0 && (
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#7C003E]">Análise de aquisição</span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.04em]">
              Como está sua<br />
              <span className="text-[#7C003E]">aquisição digital?</span>
            </h1>
            <p className="mt-5 text-sm leading-7 text-white/50">
              5 perguntas para avaliar a estrutura atual de mídia e geração de oportunidades.
            </p>
            <button
              onClick={() => setStep(1)}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#7C003E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#5C0030]"
            >
              Iniciar análise →
            </button>
          </div>
        )}

        {step >= 1 && step <= 5 && (
          <div>
            <div className="flex gap-2 mb-8">
              {questions.map((_, i) => (
                <div key={i} className={`h-[3px] flex-1 rounded-full transition-all ${i < step ? "bg-[#7C003E]" : "bg-white/10"}`} />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#7C003E]">Pergunta {step} de 5</span>
            <h2 className="mt-4 text-xl font-bold leading-snug mb-8">{currentQ.text}</h2>
            <div className="flex flex-col gap-3 mb-8">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`text-left rounded-xl border px-5 py-4 text-sm leading-relaxed transition-all ${
                    selected === i
                      ? "border-[#7C003E] bg-[#7C003E]/10 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/70 hover:border-[#7C003E]/50 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="w-full inline-flex items-center justify-center rounded-full bg-[#7C003E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#5C0030] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {step === 5 ? "Ver análise" : "Próxima →"}
            </button>
          </div>
        )}

        {step === 6 && (
          <div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#7C003E]">Sua análise</span>
            <div className="mt-6 flex items-center gap-5 mb-8">
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-[#7C003E] flex items-center justify-center">
                <span className="text-2xl font-black text-[#7C003E]">{pct}%</span>
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
                  <p className="text-sm font-bold text-[#7C003E] mb-2">{g.t}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{g.d}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#7C003E]/30 bg-[#7C003E]/10 p-5 mb-4 text-center">
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                A INVD pode aprofundar a leitura da sua operação para{" "}
                <span className="text-white font-semibold">definir públicos, canais e oportunidades de mídia</span>{" "}
                de acordo com os objetivos do seu negócio.
              </p>
              <a
                href={`https://api.whatsapp.com/send/?phone=5561993253597&text=${encodeURIComponent(perfilMsg[tier])}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#7C003E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#5C0030]"
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
            <p>Inteligência em Vendas no Digital</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
