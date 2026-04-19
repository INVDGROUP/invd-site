export default function InvdSite() {
  const services = [
    {
      title: "Tráfego Pago",
      text: "Campanhas de alta performance em Google, Meta e plataformas estratégicas com otimização contínua e foco em ROAS.",
    },
    {
      title: "Social Media",
      text: "Gestão de redes sociais com conteúdo estratégico, planejamento editorial e posicionamento que gera autoridade.",
    },
    {
      title: "Branding",
      text: "Construção e fortalecimento de marca com identidade visual, tom de voz e narrativa que diferencia no mercado.",
    },
    {
      title: "Consultoria Comercial",
      text: "Diagnóstico de funil, estruturação de processos de venda e alinhamento entre marketing e time comercial.",
    },
    {
      title: "Presença Digital",
      text: "Estruturação completa de ecossistema digital: sites, landing pages, automações e integração de canais.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#7C003E] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src="/mnt/data/invd cru final.png"
              alt="INVD"
              className="h-10 w-auto rounded-md object-contain"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#servicos" className="transition hover:text-white">Serviços</a>
            <a href="#sobre" className="transition hover:text-white">Posicionamento</a>
            <a href="#contato" className="transition hover:text-white">Contato</a>
          </nav>
          <a
            href="https://wa.me/15559008723"
            className="rounded-full border border-[#7C003E] bg-[#7C003E] px-5 py-2 text-sm font-semibold transition hover:bg-[#5C0030]"
          >
            Falar com a INVD
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,0,62,0.35),_transparent_35%),radial-gradient(circle_at_left,_rgba(92,0,48,0.24),_transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
              Inteligência em Negócios, Vendas e Digital
            </span>
            <h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
              Soluções que conectam,
              <span className="block bg-gradient-to-r from-[#FFFFFF] via-[#FF2E96] to-[#7C003E] bg-clip-text text-transparent">
                estratégia a resultado.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              A INVD estrutura marcas e operações para crescer com direção.
              Mais que marketing, entregamos posicionamento, performance e clareza comercial.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/15559008723"
                className="rounded-full bg-[#7C003E] px-7 py-4 text-center text-sm font-semibold transition hover:bg-[#5C0030]"
              >
                Chamar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold text-white/85 transition hover:border-white/30 hover:text-white"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 shadow-2xl shadow-black/40">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#7C003E]/30 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-[#5C0030]/40 blur-3xl" />
              <div className="relative rounded-[1.5rem] border border-white/10 bg-[#0E0E0E] p-8">
                <img
                  src="/mnt/data/invd cru final.png"
                  src="/mnt/data/logo.png"
                  alt="Logo INVD"
                  className="h-20 w-auto object-contain"
                />
                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Posicionamento</p>
                    <p className="mt-2 text-xl font-semibold">Marca com autoridade</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Performance</p>
                    <p className="mt-2 text-xl font-semibold">Campanhas orientadas a resultado</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm text-white/50">Estrutura</p>
                    <p className="mt-2 text-xl font-semibold">Marketing alinhado ao comercial</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-y border-white/10 bg-[#070707]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E96]">
                Posicionamento
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Marketing sem direção gera vaidade. Estratégia bem aplicada gera crescimento.
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-base leading-8 text-white/70 md:text-lg">
                A INVD atua na conexão entre presença digital, processo comercial e construção de marca.
                O foco não é apenas aparecer. É criar uma estrutura capaz de sustentar resultado de verdade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E96]">
              Serviços
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Estrutura completa para posicionar, vender e escalar.</h2>
          </div>
          <p className="max-w-xl text-white/65">
            Soluções pensadas para empresas que querem sair da improvisação e construir presença com força de marca e foco comercial.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7 transition hover:-translate-y-1 hover:border-[#7C003E]/60 hover:bg-white/[0.06]"
            >
              <div className="mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#5C0030] to-[#FF2E96]" />
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/70">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#5C0030] via-[#7C003E] to-[#000000] p-8 md:grid-cols-3 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Contato</p>
            <p className="mt-3 text-lg font-semibold">+1 (555) 900-8723</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">E-mail</p>
            <p className="mt-3 break-all text-lg font-semibold">contato@invdgroup.com</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/60">Instagram</p>
            <p className="mt-3 text-lg font-semibold">@somos_invd</p>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E96]">
                Vamos conversar
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Sua empresa não precisa de mais volume. Precisa de direção.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Fale com a INVD e entenda como alinhar posicionamento, tráfego, presença digital e processo comercial para crescer com mais clareza.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <div className="space-y-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">WhatsApp</p>
                  <a href="https://wa.me/15559008723" className="mt-2 block text-xl font-semibold hover:text-[#FF2E96]">
                    +1 (555) 900-8723
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">E-mail</p>
                  <a href="mailto:contato@invdgroup.com" className="mt-2 block text-xl font-semibold hover:text-[#FF2E96]">
                    contato@invdgroup.com
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">Instagram</p>
                  <a href="https://instagram.com/somos_invd" className="mt-2 block text-xl font-semibold hover:text-[#FF2E96]">
                    @somos_invd
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/45">Endereço</p>
                  <p className="mt-2 text-xl font-semibold">Sem endereço físico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between lg:px-10">
          <p>© 2026 INVD Group. Todos os direitos reservados.</p>
          <p>Soluções que conectam, estratégia a resultado.</p>
        </div>
      </footer>
    </div>
  );
}
