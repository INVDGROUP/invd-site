"use client";
import { useEffect } from "react";
import Image from "next/image";
import BrandLogo from "./components/brand-logo";
import CasesCarousel, { type CaseItem } from "./components/cases-carousel";
export default function Home() {
  const services = [
    {
      title: "Gestão de Tráfego Pago",
      text: "Planejamento, gestão e otimização contínua de campanhas no Meta Ads e Google Ads para gerar demanda qualificada e oportunidades comerciais.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7C003E" strokeWidth="1.3"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
      ),
    },
    {
      title: "Estratégia de Aquisição",
      text: "Definição de objetivos, públicos, canais e jornadas para estruturar uma aquisição de clientes consistente.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7C003E" strokeWidth="1.3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Inteligência e Mensuração",
      text: "Monitoramento de indicadores, análise de dados e integração de mensuração conforme o projeto para orientar decisões de mídia.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#7C003E" strokeWidth="1.3"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
      ),
    },
  ];

  const pillars = [
    {
      title: "Inteligência",
      text: "Compreender o negócio, o mercado, o público e os dados para orientar decisões.",
      letter: "I",
    },
    {
      title: "Comunicação",
      text: "Desenvolver mensagens relevantes que aproximam marcas de seus públicos.",
      letter: "C",
    },
    {
      title: "Estratégia",
      text: "Definir objetivos, direcionamentos e oportunidades para cada operação.",
      letter: "E",
    },
    {
      title: "Performance",
      text: "Acompanhar resultados e otimizar continuamente os investimentos em mídia.",
      letter: "P",
    },
  ];

  const differentials = [
    {
      title: "Inteligência antes da mídia",
      text: "Cada decisão parte da compreensão do negócio, do mercado, do público e dos dados disponíveis.",
    },
    {
      title: "Comunicação que aproxima",
      text: "Orientamos mensagens relevantes para conectar cada marca às pessoas certas em cada etapa da jornada.",
    },
    {
      title: "Estratégia para aquisição",
      text: "Objetivos, canais, públicos e oportunidades são organizados em uma operação de mídia coerente.",
    },
    {
      title: "Performance com consistência",
      text: "Acompanhamos indicadores e otimizamos os investimentos continuamente, com clareza sobre cada decisão.",
    },
  ];

  const cases: CaseItem[] = [
    {
      title: "Select Fit",
      subtitle: "Fitness & Equipamentos",
      service: "Estratégia de Aquisição · Tráfego Pago",
      metric: "9x",
      metricLabel: "de crescimento de receita desde o início da parceria",
      text: "Planejamento de mídia e gestão de tráfego pago orientados à aquisição de clientes.",
      link: "https://instagram.com/selectfit_",
      logo: "/cases/select-fit.png",
    },
    {
      title: "Escola CENCE",
      subtitle: "Educação",
      service: "Tráfego Pago",
      metric: "+matrículas",
      metricLabel: "com redução de custo por aquisição",
      link: "https://instagram.com/escolacence",
      text: null,
      logo: "/cases/escola-cence-transparent.png",
    },
    {
      title: "Rede CADE",
      subtitle: "Saúde & Clínicas",
      service: "Planejamento de Mídia · Tráfego Pago",
      metric: "2x",
      metricLabel: "de receita com canal digital estruturado do zero",
      link: "https://instagram.com/redecadeoficial",
      text: null,
      logo: "/cases/rede-cade.png",
    },
    {
      title: "Kbal Fitness",
      subtitle: "Academia",
      service: null,
      metric: null,
      metricLabel: null,
      text: null,
      link: null,
      logo: "/cases/kbal-fitness-transparent.png",
    },
    {
      title: "Gilson Rufino",
      subtitle: "Consultoria empresarial",
      service: null,
      metric: null,
      metricLabel: null,
      text: null,
      link: null,
      logo: "/cases/gilson-rufino.png",
    },
    {
      title: "V2 Tech",
      subtitle: "Tecnologia",
      service: null,
      metric: null,
      metricLabel: null,
      text: null,
      link: null,
      logo: "/cases/v2-tech.png",
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
    <main className="min-h-screen bg-[#050505] text-[#F5F5F3] selection:bg-[#7C003E] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-8 text-[11px] text-white/70 md:flex">
            <a href="#sobre" className="transition hover:text-white">
              Sobre
            </a>
            <a href="#servicos" className="transition hover:text-white">
              Serviços
            </a>
            <a href="#metodo" className="transition hover:text-white">
              Como trabalhamos
            </a>
            <a href="#diferenciais" className="transition hover:text-white">
              Diferenciais
            </a>
            <a href="#cases" className="transition hover:text-white">
              Case
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="rounded-sm bg-[#7C003E] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F5F3]"
          >
              Fale com a INVD
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[#050505]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] border-l border-white/[0.06] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] lg:block" />
        <div className="pointer-events-none absolute right-[10%] top-0 h-full w-px bg-[#7C003E]/30" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-24 lg:grid-cols-[1fr_20rem] lg:px-10 lg:pb-32 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#8A8A8A]">
                Agência de marketing em Brasília para empresas que querem escalar
              </span>
            </div>

            <h1 className="reveal text-5xl font-black leading-[0.9] tracking-[-0.055em] text-[#F5F5F3] md:text-7xl lg:text-[5.6rem]">
              Estratégia que
              <span className="block text-[#7C003E]">posiciona e</span>
              <span className="block text-[#7C003E]">acelera.</span>
            </h1>

            <p className="reveal reveal-delay-1 mt-7 max-w-xl text-sm leading-7 text-[#8A8A8A] md:text-base">
              Somos especialistas em reposicionamento, reestruturação e escala para empresas que já faturam mas não crescem no ritmo certo. Tráfego pago, social media e estratégia integrada com foco em resultado real.
            </p>

            <div className="reveal reveal-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("hero")}
                className="inline-flex items-center justify-center rounded-sm bg-[#7C003E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Quero escalar com a INVD
                <span className="ml-2">→</span>
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center rounded-sm border border-white/25 px-7 py-4 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Como trabalhamos
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 border-y border-white/10 py-6 lg:flex lg:flex-col lg:justify-center lg:gap-7 lg:py-8">
            <p className="hidden text-[9px] font-semibold uppercase tracking-[0.32em] text-[#8A8A8A] lg:block">Performance em números</p>
            <div className="reveal reveal-delay-1 border-l border-[#7C003E] pl-3 lg:pl-6">
              <span className="block text-2xl font-black tracking-[-0.05em] text-[#F5F5F3] sm:text-3xl lg:text-5xl">+150k</span>
              <span className="mt-2 block text-[8px] uppercase tracking-[0.14em] text-[#8A8A8A] lg:text-[10px] lg:tracking-[0.22em]">Leads gerados</span>
            </div>
            <div className="hidden h-px w-full bg-white/10 lg:block" />
            <div className="reveal reveal-delay-2 border-l border-[#7C003E] pl-3 lg:pl-6">
              <span className="block text-2xl font-black tracking-[-0.05em] text-[#F5F5F3] sm:text-3xl lg:text-5xl">+R$7Mi</span>
              <span className="mt-2 block text-[8px] uppercase tracking-[0.14em] text-[#8A8A8A] lg:text-[10px] lg:tracking-[0.22em]">Em receita para clientes</span>
            </div>
            <div className="hidden h-px w-full bg-white/10 lg:block" />
            <div className="reveal reveal-delay-3 border-l border-[#7C003E] pl-3 lg:pl-6">
              <span className="block text-2xl font-black tracking-[-0.05em] text-[#F5F5F3] sm:text-3xl lg:text-5xl">5 anos</span>
              <span className="mt-2 block text-[8px] uppercase tracking-[0.14em] text-[#8A8A8A] lg:text-[10px] lg:tracking-[0.22em]">De mercado</span>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#F5F5F3] text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/45">
                Sobre a INVD
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Inteligência aplicada à comunicação e à aquisição de clientes<span className="text-[#7C003E]">.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/65 md:text-base">
              A INVD Group é uma empresa de marketing digital e publicidade especializada em gestão de tráfego pago. Combinamos inteligência, comunicação e estratégias de mídia para conectar negócios aos seus potenciais clientes.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/45 md:text-base">
              Nossa atuação considera mercado, comportamento do consumidor, planejamento e dados para desenvolver uma presença digital orientada à geração de demanda e oportunidades comerciais.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-sm border border-[#D9D9D9] bg-white p-6 transition hover:border-[#7C003E]/45"
              >
                <span className="absolute right-4 top-3 text-4xl font-black text-[#D9D9D9] transition group-hover:text-[#7C003E]/25">
                  {item.letter}
                </span>
                <h3 className="text-sm font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                O que fazemos
              </span>
              <span className="h-px w-10 bg-[#7C003E]" />
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Estratégias de mídia
              <br />
              para gerar <span className="text-[#7C003E]">demanda</span>
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal group flex flex-col items-start gap-5 border-t border-white/15 px-1 py-8 transition hover:border-[#7C003E] sm:flex-row sm:items-center sm:gap-8 sm:px-4"
              >
                <span className="w-16 shrink-0 text-5xl font-black tracking-[-0.05em] text-white/10 transition group-hover:text-[#7C003E]/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 bg-white/[0.025]">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/50">{service.text}</p>
                </div>
                <span className="shrink-0 text-xl text-white/20 transition group-hover:translate-x-1 group-hover:text-[#7C003E]">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#F5F5F3] text-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/45">
                Como trabalhamos
              </span>
              <span className="h-px w-10 bg-[#7C003E]" />
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Da compreensão à otimização —
              <span className="text-[#7C003E]"> estratégia em cada etapa</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/55 md:text-base">
              Campanhas consistentes começam antes da veiculação. Entendemos o contexto, definimos o direcionamento e acompanhamos os dados para evoluir a operação.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Inteligência",
                text: "Compreendemos o negócio, o mercado, o público e os objetivos que devem orientar a estratégia de aquisição.",
                highlight: false,
              },
              {
                step: "02",
                title: "Estratégia",
                text: "Definimos públicos, canais, mensagens e direcionamentos de mídia de acordo com o contexto de cada operação.",
                highlight: true,
              },
              {
                step: "03",
                title: "Execução e Otimização",
                text: "Gerimos as campanhas, acompanhamos indicadores e realizamos ajustes contínuos para melhorar a eficiência do investimento.",
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`border bg-white p-8 transition hover:-translate-y-1 ${
                  item.highlight ? "border-[#7C003E]" : "border-[#D9D9D9]"
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#7C003E]">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl font-black text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/55">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("metodo")}
              className="inline-flex items-center justify-center rounded-sm bg-[#7C003E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#050505]"
            >
              Quero estruturar minha aquisição
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="cases" className="bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                Case
              </span>
              <span className="h-px w-10 bg-[#7C003E]" />
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Estratégia aplicada
              <br />
               a diferentes mercados
              <span className="text-[#7C003E]">.</span>
            </h2>
          </div>

          <CasesCarousel items={cases} />
        </div>
      </section>

      <section id="diferenciais" className="bg-[#F5F5F3] text-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/45">
                Por que a INVD
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Por que empresas
              <br />
              escolhem a
              <span className="text-[#7C003E]"> INVD</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="reveal border-l-2 border-[#D9D9D9] bg-white p-7 transition hover:border-l-[#7C003E]"
              >
                <h3 className="text-sm font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="relative overflow-hidden border-t border-white/10 bg-[#050505]"
      >
        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#7C003E]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Pronto para gerar
              <br />
              novas oportunidades
              <span className="text-[#7C003E]">?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Converse com nosso time e entenda como uma estratégia de mídia estruturada pode aproximar sua empresa dos públicos certos e fortalecer sua aquisição de clientes.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("cta_final")}
              className="mt-10 inline-flex items-center justify-center rounded-sm bg-[#7C003E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Quero falar sobre aquisição
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="mt-24 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Parceiros certificados
            </p>

            <div className="mx-auto mt-8 grid w-full max-w-xl gap-5 sm:grid-cols-2">
              <div className="flex h-36 items-center justify-center overflow-hidden border border-white/15 bg-white p-4">
                <Image
                  src="/partners/google-partner.png"
                  alt="Google Partner"
                  width={600}
                  height={600}
                  unoptimized
                  className="h-28 w-auto object-contain"
                />
              </div>

              <div className="flex h-36 items-center justify-center overflow-hidden border border-white/15 bg-white p-4">
                <Image
                  src="/partners/kommo-partner.png"
                  alt="Kommo Partner"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
            <div>
              <a href="#" className="inline-flex items-center">
                <BrandLogo />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-7 text-white/45">
                Inteligência em Vendas no Digital. Comunicação e mídia para
                gerar demanda e oportunidades de negócio.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/invdgroup/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition hover:border-[#7C003E] hover:text-white"
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
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition hover:border-[#7C003E] hover:text-white"
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Navegação
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/65">
                <a href="#sobre" className="block transition hover:text-white">Sobre</a>
                <a href="#servicos" className="block transition hover:text-white">Serviços</a>
                <a href="#metodo" className="block transition hover:text-white">Como trabalhamos</a>
                <a href="#diferenciais" className="block transition hover:text-white">Diferenciais</a>
                <a href="#cases" className="block transition hover:text-white">Case</a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Serviços
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/65">
                <span className="block">Gestão de Tráfego Pago</span>
                <span className="block">Estratégia de Aquisição</span>
                <span className="block">Planejamento de Mídia</span>
                <span className="block">Meta Ads e Google Ads</span>
                <span className="block">Análise e Mensuração</span>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Contato
              </p>
              <div className="mt-5">
                <a
                  href="https://api.whatsapp.com/send/?phone=5561993253597"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center border border-white/15 px-4 py-2 text-sm text-white/75 transition hover:border-[#7C003E] hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <p>© 2026 INVD Group — Marketing Digital e Publicidade · Todos os direitos reservados.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-white/30 transition hover:text-white"
            >
              Voltar ao topo ↑
            </button>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackWhatsAppClick("botao_fixo")}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-sm bg-[#7C003E] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(5,5,5,0.4)] transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        WhatsApp
      </a>
    </main>
  );
}
