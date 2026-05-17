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

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      title: "Tráfego Pago do Zero",
      text: "Meta Ads e Google Ads na prática — estrutura de campanha, segmentação e otimização para gerar resultado real.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "Presença Digital Estratégica",
      text: "Como construir autoridade online com conteúdo consistente, identidade clara e canais que convertem.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: "Posicionamento de Marca",
      text: "O que comunicar, para quem e como — o método para sair da guerra de preços e ser percebido pelo seu real valor.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Estrutura Comercial",
      text: "Funil de vendas, processos de captação e alinhamento entre marketing e time comercial para escalar receita.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      title: "Ecossistema Digital",
      text: "Site, automações, integrações e ferramentas — tudo que uma empresa precisa para crescer de forma digital e previsível.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#C0005A" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
        </svg>
      ),
      title: "Método INVD na Prática",
      text: "O mesmo processo que aplicamos em clientes que geramos +R$7Mi em receita — agora acessível para você implementar.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#7C003E] selection:text-white">
      {/* Header */}
      <header className="border-b border-white/5 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 lg:px-10">
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

        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-24 lg:px-10 lg:pb-24 lg:pt-28 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C0005A]" />
            <span className="text-[9px] uppercase tracking-[0.38em] text-white/40">
              Produto digital · INVD Group
            </span>
            <span className="h-px w-8 bg-[#C0005A]" />
          </div>

          <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.05em] md:text-7xl">
            Base Digital
            <span className="block bg-gradient-to-b from-[#D4146E] to-[#9A0048] bg-clip-text text-transparent">
              da INVD
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
            O método completo para estruturar sua presença digital, atrair clientes com tráfego pago e
            escalar sua empresa com estratégia — do zero ao resultado real.
          </p>

          {/* Hotmart Button */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              onClick={(e) => e.preventDefault()}
              href="https://pay.hotmart.com/V105871017C?checkoutMode=2"
              className="hotmart-fb hotmart__button-checkout"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Comprar agora" />
            </a>
            <p className="text-[11px] text-white/30">Acesso imediato · Garantia de 7 dias</p>
          </div>
        </div>
      </section>

      {/* O que você vai aprender */}
      <section className="bg-[#F4F1F3] text-black">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="mb-12 text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                Conteúdo do produto
              </span>
              <span className="h-px w-8 bg-[#C0005A]" />
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              O que está dentro da
              <span className="text-[#C0005A]"> Base Digital</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/55">
              Tudo que sua empresa precisa para sair da dependência de indicações e construir um sistema
              digital que gera clientes de forma previsível.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
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
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#C0005A]" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Para quem é
                </span>
              </div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
                Feito para quem quer{" "}
                <span className="text-[#C0005A]">crescer de verdade</span>
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/55">
                A Base Digital da INVD é para empreendedores e gestores que já têm um negócio funcionando
                mas precisam estruturar o marketing digital para escalar com previsibilidade.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                "Empresas que dependem de indicações para crescer",
                "Negócios que tentaram tráfego pago mas não tiveram resultado",
                "Empreendedores que querem parar de competir por preço",
                "Quem precisa de método — não de mais ferramentas",
                "Times de marketing que querem alinhar estratégia e execução",
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C0005A]/20 text-[#C0005A]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="#C0005A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm leading-6 text-white/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Números INVD */}
      <section className="bg-[#F4F1F3] text-black">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="text-center mb-12">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#C0005A]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-black/40">
                Quem está por trás
              </span>
              <span className="h-px w-8 bg-[#C0005A]" />
            </div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">
              O método de quem já{" "}
              <span className="text-[#C0005A]">comprovou na prática</span>
            </h2>
          </div>

          <div className="grid gap-px sm:grid-cols-3 rounded-2xl overflow-hidden border border-[#E7DDE1]">
            {[
              { metric: "+150k", label: "Leads gerados para clientes" },
              { metric: "+R$7Mi", label: "Em receita gerada para empresas" },
              { metric: "5 anos", label: "De mercado e resultados reais" },
            ].map((item) => (
              <div key={item.label} className="bg-white px-8 py-10 text-center">
                <span className="block text-5xl font-black tracking-[-0.04em] text-black">{item.metric}</span>
                <span className="mt-2 block text-[11px] uppercase tracking-[0.2em] text-black/40">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,0,62,0.18),_transparent_40%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 lg:px-10 text-center">
          <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Pronto para estruturar
            <br />
            <span className="text-[#C0005A]">sua base digital?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">
            Acesso imediato ao método completo da INVD. Garantia incondicional de 7 dias.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              onClick={(e) => e.preventDefault()}
              href="https://pay.hotmart.com/V105871017C?checkoutMode=2"
              className="hotmart-fb hotmart__button-checkout"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Comprar agora" />
            </a>
            <p className="text-[11px] text-white/30">Pagamento seguro via Hotmart · Acesso imediato</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-10 flex flex-col gap-3 items-center text-center">
          <a href="/">
            <img src="/logo.png" alt="INVD" className="h-6 w-auto object-contain opacity-60" />
          </a>
          <p className="text-xs text-white/25">© 2026 INVD — Todos os direitos reservados.</p>
          <p className="text-xs text-white/20">Inteligência em Negócios, Vendas e Digital</p>
        </div>
      </footer>
    </main>
  );
}
