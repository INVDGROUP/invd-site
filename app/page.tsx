"use client";
import { useEffect } from "react";
import type { ReactNode } from "react";

function SectionEyebrow({
  children,
  align = "left",
  tone = "dark",
}: {
  children: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const color = tone === "light" ? "text-white/48" : "text-[#071F2A]/48";
  return (
    <div
      className={`mb-6 flex items-center gap-3 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-10 bg-[#0997F7]" />
      <span className={`text-[10px] font-semibold uppercase tracking-[0.34em] ${color}`}>
        {children}
      </span>
      {align === "center" && <span className="h-px w-10 bg-[#0997F7]" />}
    </div>
  );
}

function PrimaryCta({
  href,
  children,
  onClick,
  className = "",
}: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`cta-primary inline-flex items-center justify-center rounded-lg bg-[#0997F7] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#0478C7] ${className}`}
    >
      {children}
      <span className="ml-2">?</span>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const services = [
    {
      title: "Tráfego Pago",
      text: "Campanhas de alta performance em Meta e Google com gestão contínua, otimização de custo por aquisição e foco em escala de resultados para empresas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#0997F7" strokeWidth="1.3"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
      ),
    },
    {
      title: "Social Media",
      text: "Gestão estratégica de redes sociais com conteúdo que posiciona sua empresa como referência e gera autoridade no mercado.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#0997F7" strokeWidth="1.3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      title: "Branding",
      text: "Reposicionamento e fortalecimento de marca com identidade visual, narrativa e presença que diferenciam sua empresa da concorrência.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#0997F7" strokeWidth="1.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      ),
    },
    {
      title: "Consultoria Comercial",
      text: "Diagnóstico de funil, reestruturação de processos e alinhamento entre marketing e time comercial para escalar vendas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#0997F7" strokeWidth="1.3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Presença Digital",
      text: "Estruturação completa do ecossistema digital — sites, automações e integração entre canais para empresas que querem crescer online.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#0997F7" strokeWidth="1.3"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      ),
    },
  ];

  const pillars = [
    {
      title: "Inteligência",
      text: "Decisões orientadas por dados e análise profunda do mercado.",
      letter: "I",
    },
    {
      title: "Negócios",
      text: "Visão estratégica que conecta marketing com crescimento real.",
      letter: "N",
    },
    {
      title: "Vendas",
      text: "Processos e estrutura que transformam presença em receita.",
      letter: "V",
    },
    {
      title: "Digital",
      text: "Domínio dos canais que definem o mercado contemporâneo.",
      letter: "D",
    },
  ];

  const differentials = [
    {
      title: "Pensamento estratégico, não operacional",
      text: "Antes de executar, diagnosticamos. Cada passo nasce de uma leitura profunda do negócio, mercado e público.",
    },
    {
      title: "Marketing orientado a vendas",
      text: "Não medimos vaidade. Nosso indicador são metas, custo de aquisição e retorno sobre investimento.",
    },
    {
      title: "Parceria, não fornecimento",
      text: "Atuamos como extensão do seu time, com proximidade, transparência e alinhamento constante.",
    },
    {
      title: "Integração completa de canais",
      text: "Conectamos tráfego, conteúdo, branding e vendas em um ecossistema que multiplica resultado.",
    },
  ];

  const cases = [
    {
      title: "Select Fit",
      subtitle: "Fitness & Equipamentos",
      service: "Posicionamento · Tráfego Pago · Social Media",
      metric: "9x",
      metricLabel: "de crescimento de receita desde o início da parceria",
      text: "Reposicionamento completo da marca com estruturação de presença digital, gestão de tráfego pago e social media integrados.",
      link: "https://instagram.com/selectfit_",
      featured: true,
    },
    {
      title: "Escola Cense",
      subtitle: "Educação",
      service: "Tráfego Pago",
      metric: "+matrículas",
      metricLabel: "com redução de custo por aquisição",
      link: "https://instagram.com/escolacence",
      featured: false,
    },
    {
      title: "Rede Cade",
      subtitle: "Saúde & Clínicas",
      service: "Estruturação Comercial · Tráfego Pago",
      metric: "2x",
      metricLabel: "de receita com canal digital estruturado do zero",
      link: "https://instagram.com/redecadeoficial",
      featured: false,
    },
  ];

  const heroMetrics = [
    {
      value: "+150k",
      label: "Leads gerados",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 18V6m0 12h16M8 14l3-3 3 2 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      value: "+R$7Mi",
      label: "Em receita para clientes",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v18m4-14.5H9.8a3 3 0 0 0 0 6H14a3 3 0 0 1 0 6H7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      value: "5 anos",
      label: "De mercado",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 6v6l4 2m5-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const methodSteps = [
    {
      step: "01",
      title: "Diagn?stico",
      text: "Mapeamos opera??o, posicionamento, canais e gaps de crescimento antes de propor qualquer solu??o.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 5h16M4 12h10M4 19h7m7-2 2 2m-7-3a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Estrat?gia",
      text: "Criamos um plano sob medida conectando marca, tr?fego, conte?do e vendas ao momento real da empresa.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19 19 5M8 5h11v11M5 8v11h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Execu??o",
      text: "Atuamos pr?ximos ao time, com acompanhamento, ajustes cont?nuos e foco em crescimento sustent?vel.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m5 12 4 4L19 6M5 20h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Otimiza??o",
      text: "Medimos os sinais certos, refinamos canais e transformamos aprendizado em crescimento previs?vel.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 16c3-7 7 4 10-3 1.3-3 3-5 6-5M4 20h16M18 5h2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=5561993253597&text&type=phone_number&app_absent=0";
  const trackWhatsAppClick = (location: string) => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      button_location: location,
      link_url: whatsappLink,
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#002B3A] text-white selection:bg-[#0997F7] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#002B3A]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo da INVD"
              className="h-7 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/58 md:flex">
            <a href="#sobre" className="transition hover:text-[#0997F7]">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-[#0997F7]">
              Servi?os
            </a>
            <a href="#metodo" className="transition hover:text-[#0997F7]">
              Como trabalhamos
            </a>
            <a href="#cases" className="transition hover:text-[#0997F7]">
              Cases
            </a>
            <a href="#diferenciais" className="transition hover:text-[#0997F7]">
              Diferenciais
            </a>
            <a href="#resultados" className="transition hover:text-[#0997F7]">
              Resultados
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="cta-primary rounded-lg bg-[#0997F7] px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-[#0478C7]"
          >
            Fale com a INVD
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#002B3A]">
        <div className="dark-grid absolute inset-0 opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,43,58,0.22)_0%,rgba(0,43,58,0.94)_72%,rgba(0,43,58,1)_100%)]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#0997F7]/45 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-24 lg:grid-cols-[minmax(0,1fr)_420px] lg:px-10 lg:pb-28 lg:pt-32">
          <div className="max-w-3xl">
            <SectionEyebrow tone="light">
              Ag?ncia de marketing em Bras?lia para empresas que querem escalar
            </SectionEyebrow>

            <h1 className="font-impact reveal text-5xl font-black leading-[1.04] tracking-normal text-white md:text-7xl lg:text-[5.3rem]">
              Estrat?gia que
              <span className="block">posiciona e</span>
              <span className="blue-marker relative inline-block">
                acelera.
                <span className="absolute -bottom-1 left-1 h-px w-[92%] bg-gradient-to-r from-[#0997F7] to-transparent" />
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-7 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
              Somos especialistas em reposicionamento, reestrutura??o e escala para empresas que j? faturam mas n?o crescem no ritmo certo. Tr?fego pago, social media e estrat?gia integrada com foco em resultado real.
            </p>

            <div className="reveal reveal-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <PrimaryCta
                href={whatsappLink}
                onClick={() => trackWhatsAppClick("hero")}
              >
                Quero escalar com a INVD
              </PrimaryCta>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white/78 transition hover:-translate-y-0.5 hover:border-[#0997F7]/60 hover:bg-white/[0.03] hover:text-white"
              >
                Como trabalhamos
              </a>
            </div>
          </div>

          <div className="panel-glow reveal reveal-delay-2 rounded-2xl border border-[#0997F7]/22 bg-white/[0.045] p-4 backdrop-blur-xl md:p-5">
            <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/48">
                Performance INVD
              </span>
              <span className="h-2 w-2 rounded-full bg-[#C0005A] shadow-[0_0_18px_rgba(192,0,90,0.7)]" />
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/10 bg-[#063747]/70 p-5 transition hover:border-[#0997F7]/45 hover:bg-[#073D4E]"
                >
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[#0997F7]/25 bg-[#0997F7]/10 text-[#0997F7]">
                    {metric.icon}
                  </div>
                  <span className="font-impact block text-4xl leading-none text-white">
                    {metric.value}
                  </span>
                  <span className="mt-2 block text-[11px] uppercase tracking-[0.2em] text-white/48">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 h-12 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(9,151,247,0.12),rgba(255,255,255,0.02))] px-4 py-3">
              <svg viewBox="0 0 280 36" className="h-full w-full text-[#0997F7]" fill="none" aria-hidden="true">
                <path d="M2 29 C34 24 43 12 70 18 C94 23 99 6 126 10 C156 14 158 26 186 20 C213 14 222 5 248 9 C263 11 270 17 278 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M2 29 C34 24 43 12 70 18 C94 23 99 6 126 10 C156 14 158 26 186 20 C213 14 222 5 248 9 C263 11 270 17 278 12" stroke="currentColor" strokeOpacity=".18" strokeWidth="8" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#0997F7]/60 to-transparent" />
      </section>

      <section id="sobre" className="paper-bg text-[#071F2A]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
          <div>
            <SectionEyebrow>Sobre a INVD</SectionEyebrow>

            <h2 className="font-impact max-w-xl text-4xl font-black leading-[1.08] tracking-normal md:text-5xl">
              Ag?ncia de marketing <span className="blue-marker">estrat?gico</span> para empresas que querem crescer de verdade<span className="text-[#C0005A]">.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#071F2A]/72 md:text-base">
              A INVD ? uma ag?ncia de marketing em Bras?lia para empresas que faturam mas travam no crescimento. Atuamos com reposicionamento de marca, reestrutura??o de marketing e escala de resultados ? sempre com vis?o comercial e performance mensur?vel.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#071F2A]/58 md:text-base">
              N?o somos fornecedor. Somos parceiros estrat?gicos que atuam pr?ximos ? decis?o, reestruturando o que voc? comunica, vende e escala no mercado.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="surface-card relative overflow-hidden rounded-2xl border border-[#D8E1E8] bg-white/90 p-6"
              >
                <span className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0997F7] via-[#0997F7]/45 to-transparent" />
                <span className="absolute right-4 top-3 font-impact text-5xl text-[#B9E2FF]/70">
                  {item.letter}
                </span>
                <h3 className="relative text-sm font-black uppercase tracking-[0.12em] text-[#071F2A]">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-sm leading-6 text-[#071F2A]/62">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="relative overflow-hidden bg-[#002B3A]">
        <div className="dark-grid absolute inset-0 opacity-35" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="relative mx-auto max-w-2xl text-center">
            <SectionEyebrow align="center" tone="light">O que fazemos</SectionEyebrow>

            <h2 className="font-impact text-4xl font-black leading-[1.08] tracking-normal md:text-5xl">
              Solu??es para empresas
              <br />
              que querem <span className="blue-marker">crescer</span>
            </h2>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-hover reveal group relative min-h-[230px] overflow-hidden rounded-2xl border border-[#0997F7]/16 bg-[#073747]/78 p-7 backdrop-blur"
              >
                <span className="absolute right-5 top-4 font-impact text-6xl leading-none text-white/[0.055] transition group-hover:text-[#0997F7]/14">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mb-7 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#0997F7]/25 bg-[#0997F7]/10 text-[#0997F7]">
                  {service.icon}
                </div>
                <h3 className="relative text-xl font-bold text-white">{service.title}</h3>
                <p className="relative mt-4 text-sm leading-7 text-white/58">{service.text}</p>
                <span className="absolute bottom-6 right-6 text-white/20 transition group-hover:text-[#0997F7]">
                  <ArrowIcon />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="relative overflow-hidden bg-[#002B3A] text-white">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <SectionEyebrow tone="light">Como trabalhamos</SectionEyebrow>

            <h2 className="font-impact text-4xl font-black leading-[1.08] tracking-normal md:text-6xl">
              Como funciona o m?todo
              <span className="blue-marker mt-2 block w-fit">INVD<span className="text-[#C0005A]">.</span></span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Empresas que faturam mas n?o escalam geralmente t?m um problema de estrat?gia, n?o de execu??o. Por isso come?amos pelo diagn?stico.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2">
            {methodSteps.map((item, index) => (
              <div
                key={item.step}
                className="card-hover relative rounded-2xl border border-white/10 bg-white/[0.035] p-7"
              >
                <span className="absolute left-0 top-7 hidden h-20 w-px bg-gradient-to-b from-transparent via-[#0997F7]/65 to-transparent md:block" />
                <div className="mb-6 flex items-start justify-between gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0997F7]/25 bg-[#0997F7]/10 text-[#0997F7]">
                    {item.icon}
                  </div>
                  <span className="font-impact text-5xl leading-none text-white/[0.08]">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-impact text-3xl font-black leading-tight text-[#0997F7]">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/72">{item.text}</p>
                {index < methodSteps.length - 1 && (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-[#0997F7]/25 md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("metodo")}
              className="cta-primary inline-flex items-center justify-center rounded-lg bg-[#0997F7] px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#0478C7]"
            >
              Quero escalar minha empresa
              <span className="ml-2">?</span>
            </a>
          </div>
        </div>
      </section>

      <section id="cases" className="relative overflow-hidden bg-[#002B3A]">
        <div className="dark-grid absolute inset-0 opacity-25" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="relative mx-auto max-w-2xl text-center">
            <SectionEyebrow align="center" tone="light">Cases e resultados</SectionEyebrow>

            <h2 className="font-impact text-4xl font-black leading-[1.08] tracking-normal md:text-5xl">
              Marketing com vis?o
              <br />
              e resultados reais
              <span className="text-[#C0005A]">.</span>
            </h2>
          </div>

          <div className="relative mt-14 grid gap-5 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.5fr_1fr]">
            {cases.filter(c => c.featured).map(item => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="card-hover reveal group relative row-span-2 flex min-h-[390px] flex-col justify-between overflow-hidden rounded-2xl border border-[#0997F7]/18 bg-[#073747]/82 p-8"
              >
                <svg className="absolute bottom-8 right-8 h-28 w-56 text-[#0997F7]/18 transition group-hover:text-[#0997F7]/26" viewBox="0 0 240 112" fill="none" aria-hidden="true">
                  <path d="M4 86 C38 78 45 42 78 54 C112 66 110 20 145 26 C180 31 178 74 210 52 C222 44 229 35 236 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  <path d="M4 104h232" stroke="currentColor" strokeOpacity=".28" />
                </svg>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/38">{item.subtitle}</span>
                  <h3 className="mt-4 text-3xl font-black text-white">{item.title}</h3>
                  <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#0997F7]/78">{item.service}</p>
                  <p className="mt-6 max-w-xl text-sm leading-7 text-white/62">{item.text}</p>
                </div>
                <div className="relative mt-8 border-t border-white/10 pt-7">
                  <span className="font-impact block text-6xl leading-none text-white">{item.metric}</span>
                  <span className="mt-2 block max-w-sm text-sm leading-6 text-white/48">{item.metricLabel}</span>
                </div>
              </a>
            ))}

            <div className="flex flex-col gap-4">
              {cases.filter(c => !c.featured).map(item => (
                <a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-hover reveal group flex min-h-[190px] flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-7"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/38">{item.subtitle}</span>
                    <h3 className="mt-3 text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0997F7]/74">{item.service}</p>
                  </div>
                  <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                    <div>
                      <span className="font-impact block text-4xl leading-none text-white">{item.metric}</span>
                      <span className="mt-2 block text-xs leading-5 text-white/46">{item.metricLabel}</span>
                    </div>
                    <span className="text-white/20 transition group-hover:text-[#0997F7]"><ArrowIcon /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="paper-bg text-[#071F2A]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <SectionEyebrow>Por que a INVD</SectionEyebrow>

            <h2 className="font-impact text-4xl font-black leading-[1.08] tracking-normal md:text-5xl">
              Por que empresas
              <br />
              escolhem a
              <span className="blue-marker"> INVD</span><span className="text-[#C0005A]">.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="surface-card reveal rounded-2xl border border-[#D8E1E8] bg-white/92 p-7"
              >
                <span className="mb-5 block h-1 w-12 rounded-full bg-[#0997F7]" />
                <h3 className="text-base font-black text-[#071F2A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#071F2A]/62">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="resultados"
        className="relative overflow-hidden border-t border-white/10 bg-[#002B3A]"
      >
        <div className="dark-grid absolute inset-0 opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(9,151,247,0.18),_transparent_42%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="panel-glow relative mx-auto max-w-4xl rounded-3xl border border-[#0997F7]/18 bg-white/[0.045] px-6 py-14 text-center backdrop-blur md:px-12">
            <h2 className="font-impact text-4xl font-black leading-[1.08] tracking-normal md:text-6xl">
              Pronto para escalar
              <br />
              sua empresa de verdade
              <span className="text-[#C0005A]">?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/68 md:text-base">
              Converse com nosso time e descubra como a INVD pode reposicionar sua marca, reestruturar seu marketing e escalar seus resultados com estrat?gia e performance.
            </p>

            <PrimaryCta
              href={whatsappLink}
              onClick={() => trackWhatsAppClick("cta_resultados")}
              className="mt-10"
            >
              Quero escalar com a INVD
            </PrimaryCta>
          </div>

          <div className="relative mt-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Parceiros certificados
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <span className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/75">
                Google Partner
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/75">
                Kommo Partner
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/75">
                Meta Blueprint Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#002B3A]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
            <div>
              <a href="#" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Logo da INVD"
                  className="h-8 w-auto object-contain"
                />
              </a>
              <p className="mt-5 max-w-xs text-sm leading-7 text-white/52">
                Intelig?ncia em Neg?cios, Vendas e Digital. Estrat?gia que
                posiciona e acelera.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/invdgroup/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/50 transition hover:border-[#0997F7] hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/invdgroup"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-white/50 transition hover:border-[#0997F7] hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/42">
                Navega??o
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/64">
                <a href="#sobre" className="block transition hover:text-[#0997F7]">Sobre</a>
                <a href="#servicos" className="block transition hover:text-[#0997F7]">Servi?os</a>
                <a href="#metodo" className="block transition hover:text-[#0997F7]">Como trabalhamos</a>
                <a href="#cases" className="block transition hover:text-[#0997F7]">Cases</a>
                <a href="#diferenciais" className="block transition hover:text-[#0997F7]">Diferenciais</a>
                <a href="#resultados" className="block transition hover:text-[#0997F7]">Resultados</a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/42">
                Servi?os
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/64">
                <span className="block">Tr?fego Pago</span>
                <span className="block">Social Media</span>
                <span className="block">Branding</span>
                <span className="block">Consultoria</span>
                <span className="block">Presen?a Digital</span>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/42">
                Contato
              </p>
              <div className="mt-5">
                <a
                  href="https://api.whatsapp.com/send/?phone=5561993253597"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-[#0997F7] hover:bg-white/[0.03] hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <p>? 2026 INVD ? Ag?ncia de Marketing em Bras?lia ? Todos os direitos reservados.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-white/30 transition hover:text-white"
            >
              Voltar ao topo ?
            </button>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackWhatsAppClick("botao_fixo")}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-md bg-[#0997F7] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(9,151,247,0.35)] transition hover:bg-[#0478C7]"
      >
        WhatsApp
      </a>
    </main>
  );
}
