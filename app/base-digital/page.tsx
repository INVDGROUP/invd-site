"use client";
import { useEffect } from "react";

export default function BaseDigital() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.hotmart.com/checkout/widget.min.js";
    script.async = true;
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const HotmartButton = () => (
    <div className="flex flex-col items-center gap-3">
      <a
        onClick={(e) => e.preventDefault()}
        href="https://pay.hotmart.com/V105871017C?checkoutMode=2"
        className="hotmart-fb hotmart__button-checkout"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Comprar agora" />
      </a>
      <p className="text-[11px] text-white/30">
        Garantia de 7 dias · Acesso imediato · Pagamento seguro via Hotmart
      </p>
    </div>
  );

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#7C003E] selection:text-white">

      {/* Header */}
      <header className="border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo da INVD" className="h-7 w-auto object-contain" />
          </a>
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            Produto digital
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,0,62,0.22),_transparent_30%),radial-gradient(circle_at_left,_rgba(92,0,48,0.16),_transparent_24%)]" />

        <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-24 lg:px-10 lg:pb-24 lg:pt-28 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C0005A]" />
            <span className="text-[9px] uppercase tracking-[0.38em] text-white/40">
              Curso · INVD Group
            </span>
            <span className="h-px w-8 bg-[#C0005A]" />
          </div>

          <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl">
            Base Digital
            <span className="block bg-gradient-to-b from-[#D4146E] to-[#9A0048] bg-clip-text text-transparent">
              INVD
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            Construa sua presença digital do jeito certo — sem gastar errado, sem depender de plataforma
            e sem precisar contratar ninguém.
          </p>

          <div className="mt-10">
            <HotmartButton />
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="bg-[#F4F1F3] text-black">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                O que você vai aprender
              </span>
              <span className="h-px w-8 bg-[#C0005A]" />
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              Sua página profissional no ar
              <span className="text-[#C0005A]"> de graça</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/55">
              Você vai aprender a criar sua própria página profissional do zero, usando código simples
              com templates prontos para editar. Ao final, sua página estará no ar com seu nome,
              seus serviços e seu contato — pronta para atrair clientes.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                  </svg>
                ),
                title: "Página profissional do zero",
                text: "Crie sua própria página usando código simples, sem precisar conhecer programação avançada.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 17l6-6-6-6m8 14h8"/>
                  </svg>
                ),
                title: "3 templates prontos",
                text: "Templates profissionais comentados linha por linha — é só editar com seus dados e publicar.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
                  </svg>
                ),
                title: "Hospedagem gratuita",
                text: "Passo a passo para colocar sua página no ar pelo GitHub Pages, sem pagar nada de hospedagem.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                ),
                title: "Formulário de contato",
                text: "Aula bônus: formulário funcional sem precisar de servidor — seus clientes chegam direto no seu e-mail.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
                title: "Atualizações futuras",
                text: "Tudo que for adicionado ao curso você recebe sem pagar nada extra — acesso vitalício.",
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                ),
                title: "Garantia de 7 dias",
                text: "Não gostou? Peça o reembolso em até 7 dias — sem burocracia, sem perguntas.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#E7DDE1] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F1F3]">
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/55">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="bg-black">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C0005A]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Para quem é
                </span>
              </div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
                Para quem está
                <span className="text-[#C0005A]"> começando no digital</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/55">
                O Base Digital INVD foi criado para quem precisa aparecer de forma profissional online
                sem gastar errado — e quer fazer isso com autonomia, do próprio jeito.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                "MEIs que querem ter uma presença profissional",
                "Freelancers que dependem de indicações",
                "Autônomos que ainda não aparecem no digital",
                "Advogados, consultores e contadores iniciando online",
                "Quem quer uma página própria sem pagar hospedagem",
                "Quem tentou mas achou tudo complexo demais",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C0005A]/20">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#C0005A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="text-sm leading-6 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custo de manutenção */}
      <section className="bg-[#F4F1F3] text-black">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C0005A]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                  Quanto custa manter
                </span>
              </div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
                Hospedagem
                <span className="text-[#C0005A]"> grátis.</span>
                <br />
                Para sempre.
              </h2>
              <p className="mt-6 text-sm leading-7 text-black/55">
                A hospedagem via GitHub Pages é completamente gratuita. O único custo opcional é um
                domínio próprio — e mesmo esse você decide se quer e quando quiser.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[#E7DDE1] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-black">Hospedagem (GitHub Pages)</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-[11px] font-semibold text-green-700">Grátis</span>
                </div>
                <p className="text-sm text-black/50 leading-6">Sua página no ar sem pagar nada por mês.</p>
              </div>
              <div className="rounded-2xl border border-[#E7DDE1] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-black">Domínio próprio (opcional)</span>
                  <span className="rounded-full bg-[#F4F1F3] px-3 py-1 text-[11px] font-semibold text-black/50">A partir de R$40/ano</span>
                </div>
                <p className="text-sm text-black/50 leading-6">Se quiser usar seu.nome.com.br — mas não é obrigatório.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,0,62,0.18),_transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 lg:px-10 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C0005A]" />
            <span className="text-[9px] uppercase tracking-[0.38em] text-white/40">
              Garantia incondicional de 7 dias
            </span>
            <span className="h-px w-8 bg-[#C0005A]" />
          </div>

          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Sua presença digital
            <br />
            <span className="text-[#C0005A]">começa hoje.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">
            Sem gastar errado. Sem depender de ninguém. Sem mensalidade de hospedagem.
            Se não gostar em até 7 dias, devolvemos tudo — sem perguntas.
          </p>

          <div className="mt-10">
            <HotmartButton />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-4xl px-6 py-10 lg:px-10 flex flex-col gap-3 items-center text-center">
          <a href="/">
            <img src="/logo.png" alt="INVD" className="h-6 w-auto object-contain opacity-50" />
          </a>
          <p className="text-xs text-white/25">© 2026 INVD — Todos os direitos reservados.</p>
          <p className="text-xs text-white/20">Inteligência em Negócios, Vendas e Digital</p>
        </div>
      </footer>

    </main>
  );
}
