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
    <main className="relative min-h-screen overflow-hidden bg-[#071A31] text-white flex flex-col items-center px-6 py-10 sm:py-14">
      <div className="pointer-events-none absolute -left-48 -top-56 h-[36rem] w-[36rem] rounded-full bg-[#286AA5]/25 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-64 right-[-8rem] h-[40rem] w-[40rem] rounded-full bg-[#1674C7]/20 blur-[145px]" />
      <div className="relative z-10 w-full max-w-3xl">

        <Link href="/" aria-label="Voltar para a página inicial" className="mb-8 flex items-center sm:mb-10">
          <BrandLogo />
        </Link>

        {step === 0 && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-11">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#7CC4FF]">Análise de aquisição</span>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-5xl">
              Como está sua{" "}
              <span className="bg-[linear-gradient(90deg,#54A7F5,#8BD4FF)] bg-clip-text text-transparent">aquisição digital?</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/65">
              5 perguntas para avaliar a estrutura atual de mídia e geração de oportunidades.
            </p>
            <button
              onClick={() => setStep(1)}
              className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[#246FBF] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(36,111,191,0.25)] transition hover:bg-[#164C86] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7CC4FF]"
            >
              Iniciar análise →
            </button>
          </div>
        )}

        {step >= 1 && step <= 5 && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-10">
            <div className="flex gap-2 mb-8">
              {questions.map((_, i) => (
                <div key={i} className={`h-[3px] flex-1 rounded-full transition-all ${i < step ? "bg-[#4A9FEF]" : "bg-white/10"}`} />
              ))}
            </div>
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#7CC4FF]">Pergunta {step} de 5</span>
            <h2 className="mb-8 mt-4 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">{currentQ.text}</h2>
            <div className="flex flex-col gap-3 mb-8">
              {currentQ.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`rounded-2xl border px-5 py-4 text-left text-sm leading-relaxed transition-all ${
                    selected === i
                      ? "border-[#4A9FEF] bg-[#246FBF]/20 text-white shadow-[0_10px_30px_rgba(36,111,191,0.12)]"
                      : "border-white/10 bg-white/[0.025] text-white/70 hover:border-[#4A9FEF]/60 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#246FBF] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#164C86] disabled:cursor-not-allowed disabled:opacity-30"
            >
              {step === 5 ? "Ver análise" : "Próxima →"}
            </button>
          </div>
        )}

        {step === 6 && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-10">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#7CC4FF]">Sua análise</span>
            <div className="mt-6 flex items-center gap-5 mb-8">
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#4A9FEF] bg-[#246FBF]/10 shadow-[0_0_45px_rgba(74,159,239,0.16)]">
                <span className="text-2xl font-black text-[#7CC4FF]">{pct}%</span>
              </div>
              <div>
                <p className="font-bold text-white text-base">{titles[tier]}</p>
                <p className="text-sm text-white/70 mt-1">{descs[tier]}</p>
              </div>
            </div>

            <p className="text-[10px] uppercase tracking-[0.25em] text-white/60 mb-4">Principais gargalos identificados</p>
            <div className="flex flex-col gap-3 mb-8">
              {gargalos[tier].map((g, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm font-bold text-[#7CC4FF] mb-2">{g.t}</p>
                  <p className="text-sm text-white/55 leading-relaxed">{g.d}</p>
                </div>
              ))}
            </div>

            <div className="mb-4 rounded-2xl border border-[#4A9FEF]/30 bg-[#246FBF]/10 p-6 text-center">
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                A INVD pode aprofundar a leitura da sua operação para{" "}
                <span className="text-white font-semibold">definir públicos, canais e oportunidades de mídia</span>{" "}
                de acordo com os objetivos do seu negócio.
              </p>
              <a
                href={`https://api.whatsapp.com/send/?phone=5561993253597&text=${encodeURIComponent(perfilMsg[tier])}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#246FBF] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#164C86]"
              >
                Falar com a INVD agora →
              </a>
            </div>

            <button
              onClick={() => { setStep(0); setAnswers({}); setSelected(null); }}
              className="w-full text-center text-xs text-white/60 hover:text-white transition mt-2"
            >
              Reiniciar diagnóstico
            </button>
          </div>
        )}

        <footer className="mt-10 border-t border-white/5 pt-6 sm:mt-12">
          <div className="flex flex-col gap-2 text-xs text-white/60 text-center">
            <p>© 2026 INVD — Todos os direitos reservados.</p>
            <p>Inteligência em Vendas no Digital</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
