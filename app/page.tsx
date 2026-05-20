"use client";
import { useEffect } from "react";
export default function Home() {
  const services = [
    {
      title: "Tráfego Pago",
      text: "Campanhas de alta performance em Meta e Google com gestão contínua, otimização de custo por aquisição e foco em escala de resultados para empresas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.3"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
      ),
    },
    {
      title: "Social Media",
      text: "Gestão estratégica de redes sociais com conteúdo que posiciona sua empresa como referência e gera autoridade no mercado.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
    },
    {
      title: "Branding",
      text: "Reposicionamento e fortalecimento de marca com identidade visual, narrativa e presença que diferenciam sua empresa da concorrência.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.3"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      ),
    },
    {
      title: "Consultoria Comercial",
      text: "Diagnóstico de funil, reestruturação de processos e alinhamento entre marketing e time comercial para escalar vendas.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Presença Digital",
      text: "Estruturação completa do ecossistema digital — sites, automações e integração entre canais para empresas que querem crescer online.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.3"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
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
    <main className="min-h-screen bg-black text-white selection:bg-[#7C003E] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo da INVD"
              className="h-7 w-auto object-contain"
            />
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
            <a href="#resultados" className="transition hover:text-white">
              Resultados
            </a>
            <a href="#cases" className="transition hover:text-white">
              Cases
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="rounded-full bg-[#C0005A] px-5 py-2 text-[11px] font-semibold text-white transition hover:bg-[#970047]"
          >
            Fale com a INVD
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,0,62,0.22),_transparent_30%),radial-gradient(circle_at_left,_rgba(92,0,48,0.16),_transparent_24%),linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.82)_100%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,transparent_0%,transparent_35%,rgba(192,0,90,0.08)_50%,transparent_65%,transparent_100%)]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-28 lg:pt-32 grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C0005A]" />
              <span className="text-[9px] uppercase tracking-[0.38em] text-white/45">
                Agência de marketing para empresas que querem escalar
              </span>
            </div>

            <h1 className="reveal text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white md:text-7xl lg:text-[5.6rem]">
              Estratégia que
              <span className="block bg-gradient-to-b from-[#D4146E] to-[#9A0048] bg-clip-text text-transparent">
                reposiciona e
              </span>
              <span className="block bg-gradient-to-b from-[#D4146E] to-[#9A0048] bg-clip-text text-transparent">
                acelera.
              </span>
            </h1>

            <p className="reveal reveal-delay-1 mt-7 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Somos especialistas em reposicionamento, reestruturação e escala para empresas que já faturam mas não crescem no ritmo certo. Tráfego pago, social media e estratégia integrada com foco em resultado real.
            </p>

            <div className="reveal reveal-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick("hero")}
                className="inline-flex items-center justify-center rounded-full bg-[#C0005A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#970047]"
              >
                Quero escalar com a INVD
                <span className="ml-2">→</span>
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white/80 transition hover:border-white/30 hover:text-white"
              >
                Como trabalhamos
              </a>
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-center gap-6">
            <div className="reveal reveal-delay-1 border-l-2 border-[#C0005A] pl-6">
              <span className="block text-4xl font-black text-white tracking-[-0.04em]">+150k</span>
              <span className="block text-[11px] uppercase tracking-[0.25em] text-white/40 mt-1">Leads gerados</span>
            </div>
            <div className="h-px w-full bg-white/5" />
            <div className="reveal reveal-delay-2 border-l-2 border-[#C0005A] pl-6">
              <span className="block text-4xl font-black text-white tracking-[-0.04em]">+R$7Mi</span>
              <span className="block text-[11px] uppercase tracking-[0.25em] text-white/40 mt-1">Em receita para clientes</span>
            </div>
            <div className="h-px w-full bg-white/5" />
            <div className="reveal reveal-delay-3 border-l-2 border-[#C0005A] pl-6">
              <span className="block text-4xl font-black text-white tracking-[-0.04em]">5 anos</span>
              <span className="block text-[11px] uppercase tracking-[0.25em] text-white/40 mt-1">De mercado</span>
            </div>
          </div>
        </div>

        <div className="h-14 bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.35)_100%)] blur-xl opacity-70" />
      </section>

      <section id="sobre" className="bg-[#F4F1F3] text-black">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/45">
                Sobre a INVD
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Agência de marketing estratégico para empresas que querem crescer de verdade<span className="text-[#C0005A]">.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-black/65 md:text-base">
              A INVD é uma agência de marketing para empresas que faturam mas travam no crescimento. Atuamos com reposicionamento de marca, reestruturação de marketing e escala de resultados — sempre com visão comercial e performance mensurável.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-black/45 md:text-base">
              Não somos fornecedor. Somos parceiros estratégicos que atuam próximos à decisão, reestruturando o que você comunica, vende e escala no mercado.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="relative rounded-2xl border border-[#E7DDE1] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <span className="absolute right-4 top-3 text-4xl font-black text-[#EAD7DF]">
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

      <section id="servicos" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                O que fazemos
              </span>
              <span className="h-px w-10 bg-[#C0005A]" />
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Soluções para empresas
              <br />
              que querem <span className="text-[#C0005A]">crescer</span>
            </h2>
          </div>

          <div className="mt-14 flex flex-col gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal group flex items-center gap-8 rounded-2xl border border-white/8 bg-white/[0.02] px-8 py-6 transition hover:border-[#C0005A]/50 hover:bg-white/[0.04]"
              >
                <span className="text-5xl font-black text-white/10 group-hover:text-[#C0005A]/30 transition w-16 shrink-0 tracking-[-0.05em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1A0610]">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/50">{service.text}</p>
                </div>
                <span className="text-white/20 group-hover:text-[#C0005A] transition text-xl shrink-0">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="bg-[#F4F1F3] text-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/45">
                Como trabalhamos
              </span>
              <span className="h-px w-10 bg-[#C0005A]" />
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Do diagnóstico à escala —
              <span className="text-[#C0005A]"> com método e resultado</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-black/55 md:text-base">
              Empresas que faturam mas não escalam geralmente têm um problema de estratégia, não de execução. Por isso começamos pelo diagnóstico.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                text: "Mapeamos sua operação, posicionamento, canais e gaps de crescimento antes de propor qualquer solução de marketing.",
                highlight: false,
              },
              {
                step: "02",
                title: "Estratégia",
                text: "Desenvolvemos um plano sob medida conectando reposicionamento de marca, tráfego pago e conteúdo ao momento real da sua empresa.",
                highlight: true,
              },
              {
                step: "03",
                title: "Execução e Escala",
                text: "Atuamos como parceiros estratégicos com acompanhamento próximo, ajustes contínuos e foco em crescimento sustentável.",
                highlight: false,
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`rounded-2xl border bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)] ${
                  item.highlight ? "neon-card border-[#C0005A]" : "border-[#E7DDE1]"
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C0005A]">
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
              className="inline-flex items-center justify-center rounded-full bg-[#C0005A] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#970047]"
            >
              Quero escalar minha empresa
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="cases" className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/45">
                Cases e resultados
              </span>
              <span className="h-px w-10 bg-[#C0005A]" />
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Marketing com visão
              <br />
               e resultados reais
              <span className="text-[#C0005A]">.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.5fr_1fr]">
            {cases.filter(c => c.featured).map(item => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="reveal group relative rounded-[1.6rem] border border-white/8 bg-white/[0.02] p-8 transition hover:border-[#C0005A]/50 flex flex-col justify-between row-span-2"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">{item.subtitle}</span>
                  <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#C0005A]/70">{item.service}</p>
                  <p className="mt-5 text-sm leading-7 text-white/50">{item.text}</p>
                </div>
                <div className="mt-8 border-t border-white/8 pt-6">
                  <span className="block text-5xl font-black text-white tracking-[-0.04em]">{item.metric}</span>
                  <span className="block text-sm text-white/40 mt-1">{item.metricLabel}</span>
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
                  className="reveal group rounded-[1.6rem] border border-white/8 bg-white/[0.02] p-7 transition hover:border-[#C0005A]/50 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/35">{item.subtitle}</span>
                    <h3 className="mt-2 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#C0005A]/70">{item.service}</p>
                  </div>
                  <div className="mt-5 border-t border-white/8 pt-4 flex items-end justify-between">
                    <div>
                      <span className="block text-3xl font-black text-white tracking-[-0.04em]">{item.metric}</span>
                      <span className="block text-xs text-white/40 mt-1">{item.metricLabel}</span>
                    </div>
                    <span className="text-white/20 group-hover:text-[#C0005A] transition text-xl">→</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" className="bg-[#F4F1F3] text-black">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 max-w-2xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/45">
                Por que a INVD
              </span>
            </div>

            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Por que empresas
              <br />
              escolhem a
              <span className="text-[#C0005A]"> INVD</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {differentials.map((item) => (
              <div
                key={item.title}
                className="reveal rounded-2xl border border-[#E7DDE1] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
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
        id="resultados"
        className="relative overflow-hidden border-t border-white/5 bg-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,0,62,0.18),_transparent_40%)]" />
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Pronto para escalar
              <br />
              sua empresa de verdade
              <span className="text-[#C0005A]">?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Converse com nosso time e descubra como a INVD pode reposicionar sua marca, reestruturar seu marketing e escalar seus resultados com estratégia e performance.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("cta_resultados")}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#C0005A] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#970047]"
            >
              Quero escalar com a INVD
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="mt-24 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/35">
              Parceiros certificados
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/75">
                Google Partner
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/75">
                Kommo Partner
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs text-white/75">
                Meta Blueprint Partner
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
            <div>
              <a href="#" className="inline-flex items-center">
                <img
                  src="/logo.png"
                  alt="Logo da INVD"
                  className="h-7 w-auto object-contain"
                />
              </a>
              <p className="mt-4 max-w-xs text-sm leading-7 text-white/45">
                Inteligência em Negócios, Vendas e Digital. Estratégia que
                posiciona e acelera.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/invdgroup/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#C0005A] hover:text-white"
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
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition hover:border-[#C0005A] hover:text-white"
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
                <a href="#diferenciais" className="block transition hover:text-white">Diferenciais</a>
                <a href="#metodo" className="block transition hover:text-white">Como trabalhamos</a>
                <a href="#resultados" className="block transition hover:text-white">Resultados</a>
                <a href="#cases" className="block transition hover:text-white">Cases</a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Serviços
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/65">
                <span className="block">Tráfego Pago</span>
                <span className="block">Social Media</span>
                <span className="block">Branding</span>
                <span className="block">Consultoria</span>
                <span className="block">Presença Digital</span>
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
                  className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-[#C0005A] hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <p>© 2026 INVD — Todos os direitos reservados.</p>
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
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full bg-[#C0005A] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(192,0,90,0.35)] transition hover:bg-[#970047]"
      >
        WhatsApp
      </a>
    </main>
  );
}