"use client";
export default function Home() {
  const services = [
    {
      title: "Tráfego Pago",
      text: "Campanhas de alta performance em Meta e Google com gestão contínua, otimização de custo por aquisição e foco em escala de resultados para empresas.",
    },
    {
      title: "Social Media",
      text: "Gestão estratégica de redes sociais com conteúdo que posiciona sua empresa como referência e gera autoridade no mercado.",
    },
    {
      title: "Branding",
      text: "Reposicionamento e fortalecimento de marca com identidade visual, narrativa e presença que diferenciam sua empresa da concorrência.",
    },
    {
      title: "Consultoria Comercial",
      text: "Diagnóstico de funil, reestruturação de processos e alinhamento entre marketing e time comercial para escalar vendas.",
    },
    {
      title: "Presença Digital",
      text: "Estruturação completa do ecossistema digital — sites, automações e integração entre canais para empresas que querem crescer online.",
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
    subtitle: "Fábrica de equipamentos fitness",
    metric: "+3x de alcance orgânico em 60 dias",
    text: "Presença digital mais sólida, campanhas mais alinhadas ao posicionamento e fortalecimento comercial com comunicação orientada a resultado.",
    link: "https://instagram.com/selectfit_",
  },
  {
    title: "Escola Cense",
    subtitle: "Posicionamento educacional",
    metric: "Autoridade digital estruturada em 90 dias",
    text: "Estruturação de presença institucional com produção de conteúdo estratégico, fortalecimento de percepção e construção de autoridade.",
    link: "https://instagram.com/escolacence",
  },
  {
    title: "Rede Cade",
    subtitle: "Saúde e clínicas",
    metric: "+40% de consistência na presença online",
    text: "Expansão digital com construção de marca, ativação de campanhas e melhoria da presença online com foco em consistência.",
    link: "https://instagram.com/redecadeoficial",
  },
];

  const whatsappLink =
    "https://api.whatsapp.com/send/?phone=5561993253597&text&type=phone_number&app_absent=0";
  const instagramLink = "https://www.instagram.com/invdgroup/";

  const trackWhatsAppClick = (location: string) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "whatsapp_click",
    button_location: location,
    link_url: whatsappLink,
  });
  };

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

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-28 lg:px-10 lg:pb-28 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C0005A]" />
              <span className="text-[9px] uppercase tracking-[0.38em] text-white/45">
                Agência de marketing para empresas que querem escalar
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] text-white md:text-7xl lg:text-[5.6rem]">
              Estratégia que
              <span className="block bg-gradient-to-b from-[#D4146E] to-[#9A0048] bg-clip-text text-transparent">
                reposiciona e
              </span>
              <span className="block bg-gradient-to-b from-[#D4146E] to-[#9A0048] bg-clip-text text-transparent">
                acelera.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              Somos especialistas em reposicionamento, reestruturação e escala para empresas que já faturam mas não crescem no ritmo certo. Tráfego pago, social media e estratégia integrada com foco em resultado real.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
              Soluções de marketing para empresas
              <br />
              que querem crescer com
              <span className="text-[#C0005A]"> estratégia</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.6rem] border border-white/8 bg-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-[#C0005A]/50"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#1A0610] text-[#C0005A]">
                  ●
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  {service.text}
                </p>
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
                  item.highlight ? "border-[#C0005A]" : "border-[#E7DDE1]"
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
                className="rounded-2xl border border-[#E7DDE1] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
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

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {cases.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.6rem] border border-white/8 bg-white/[0.02] p-7 transition hover:border-[#C0005A]/50 hover:-translate-y-1 block"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#1A0610] text-[#C0005A]">
                  ▣
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm font-bold text-[#C0005A]">
                  {item.metric}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/50">
                  {item.text}
                </p>
              </a>
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
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Navegação
              </p>
              <div className="mt-5 space-y-3 text-sm text-white/65">
                <a href="#sobre" className="block transition hover:text-white">
                  Sobre
                </a>
                <a
                  href="#servicos"
                  className="block transition hover:text-white"
                >
                  Serviços
                </a>
                <a
                  href="#diferenciais"
                  className="block transition hover:text-white"
                >
                  Diferenciais
                </a>
                <a
                  href="#resultados"
                  className="block transition hover:text-white"
                >
                  Resultados
                </a>
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
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Rede social
              </p>
              <div className="mt-5">
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 transition hover:border-[#C0005A] hover:text-white"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <p>© 2026 INVD — Todos os direitos reservados.</p>
            <p>Inteligência em Negócios, Vendas e Digital</p>
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