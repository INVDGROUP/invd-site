import Link from "next/link";
import BrandLogo from "../components/brand-logo";
import EditorialOrbit from "../components/editorial-orbit";
import { RevealObserver } from "../components/conversion-elements";
import PurchaseLink from "./purchase-link";

const checkoutUrl = "https://pay.hotmart.com/V105871017C?checkoutMode=2";

const learningItems = [
  {
    number: "01",
    title: "Criar uma página profissional do zero",
    text: "Monte uma página para apresentar seu nome, seus serviços e seus canais de contato sem depender de programação avançada.",
  },
  {
    number: "02",
    title: "Personalizar três templates prontos",
    text: "Use modelos comentados como ponto de partida e substitua textos, informações e elementos visuais pelos seus próprios dados.",
  },
  {
    number: "03",
    title: "Publicar com GitHub Pages",
    text: "Siga o processo de publicação para colocar um projeto compatível no ar sem mensalidade de hospedagem.",
  },
  {
    number: "04",
    title: "Adicionar um formulário de contato",
    text: "Na aula bônus, configure um formulário funcional para receber contatos por e-mail sem manter um servidor próprio.",
  },
];

const journey = [
  {
    step: "01",
    title: "Acompanhe as aulas",
    text: "Entenda a estrutura da página e o papel de cada parte antes de começar a personalização.",
  },
  {
    step: "02",
    title: "Escolha e edite o template",
    text: "Substitua o conteúdo do modelo pelas informações do seu trabalho, seguindo as orientações do curso.",
  },
  {
    step: "03",
    title: "Publique sua página",
    text: "Configure o GitHub Pages e disponibilize o projeto em um endereço que você possa compartilhar.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Base Digital INVD",
  description:
    "Curso prático para criar, personalizar e publicar uma página profissional usando templates prontos e GitHub Pages.",
  provider: {
    "@type": "Organization",
    name: "INVD Group",
    sameAs: "https://invdgroup.com",
  },
};

function CheckoutButton({ location, label = "Quero criar minha página" }: { location: string; label?: string }) {
  return (
    <PurchaseLink
      href={checkoutUrl}
      target="_blank"
      rel="noreferrer"
      location={location}
      className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#7C003E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      {label}
      <span className="ml-2" aria-hidden="true">→</span>
    </PurchaseLink>
  );
}

export default function BaseDigital() {
  return (
    <main className="editorial-shell min-h-screen bg-[#050505] text-white selection:bg-[#7C003E] selection:text-white">
      <RevealObserver />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c") }}
      />

      <header className="editorial-header sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" aria-label="Voltar para a página inicial da INVD" className="flex items-center gap-3">
            <BrandLogo />
          </Link>
          <nav aria-label="Navegação da página Base Digital" className="hidden items-center gap-7 text-[11px] text-white/65 md:flex">
            <a href="#conteudo" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Conteúdo</a>
            <a href="#como-funciona" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Como funciona</a>
            <a href="#para-quem" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Para quem é</a>
          </nav>
          <a href="#inscricao" className="inline-flex min-h-11 items-center border border-white/20 px-4 py-2 text-[11px] font-semibold text-white/80 transition hover:border-[#7C003E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            Conhecer o curso
          </a>
        </div>
      </header>

      <section className="editorial-hero relative overflow-hidden bg-[#050505]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] border-l border-white/[0.06] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] lg:block" />
        <div className="pointer-events-none absolute right-[10%] top-0 h-full w-px bg-[#7C003E]/30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1fr_18rem] lg:px-10 lg:pb-28 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[9px] font-semibold uppercase tracking-[0.34em] text-white/60">Curso prático · INVD Group</span>
            </div>
            <h1 className="reveal text-5xl font-black leading-[0.9] tracking-[-0.055em] md:text-7xl lg:text-[5.15rem]">
              Crie e publique sua
              <span className="block text-[#7C003E]">página profissional.</span>
            </h1>
            <p className="reveal reveal-delay-1 mt-7 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              O Base Digital INVD ensina você a personalizar um template, apresentar seus serviços e colocar sua página no ar com GitHub Pages — mesmo sem experiência avançada em programação.
            </p>
            <div className="reveal reveal-delay-2 mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CheckoutButton location="hero" />
              <a href="#conteudo" className="inline-flex min-h-12 items-center justify-center px-2 text-sm font-semibold text-white/65 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Ver o que está incluído ↓</a>
            </div>
          </div>
          <aside className="editorial-aside border-y border-white/10 py-7 lg:border-l lg:border-y-0 lg:py-4 lg:pl-7" aria-label="Resumo do curso">
            <EditorialOrbit eyebrow="Autonomia em movimento" label="BASE" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-white/60">Você recebe</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/65">
              <li className="border-l border-[#7C003E] pl-4">Orientação passo a passo.</li>
              <li className="border-l border-[#7C003E] pl-4">Três templates para personalizar.</li>
              <li className="border-l border-[#7C003E] pl-4">Aula bônus de formulário de contato.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="editorial-light bg-[#F5F5F3] text-[#050505]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-black/60">O ponto de partida</span></div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Ter uma presença própria não precisa começar com uma estrutura <span className="text-[#7C003E]">complexa.</span></h2>
            </div>
            <div className="space-y-5 text-sm leading-7 text-black/60 md:text-base">
              <p>Perfis em redes sociais ajudam na divulgação, mas não substituem um espaço organizado para explicar quem você é, o que oferece e como entrar em contato.</p>
              <p>O curso propõe um primeiro projeto objetivo: uma página profissional que você consegue editar, publicar e manter com mais autonomia.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="conteudo" className="editorial-light scroll-mt-20 bg-white text-[#050505]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-black/60">O que você vai aprender</span></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Do template à página publicada<span className="text-[#7C003E]">.</span></h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">Cada conteúdo aproxima você de um resultado concreto, sem transformar o curso em uma formação completa de desenvolvimento web.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-[#D9D9D9] bg-[#D9D9D9] sm:grid-cols-2">
            {learningItems.map((item) => (
              <article key={item.number} className="reveal bg-white p-7 sm:p-9">
                <span className="text-4xl font-black tracking-[-0.08em] text-[#7C003E]/70">{item.number}</span>
                <h3 className="mt-7 text-xl font-black leading-tight text-black">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/55">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center"><CheckoutButton location="conteudo" label="Quero acessar o Base Digital" /></div>
        </div>
      </section>

      <section id="como-funciona" className="editorial-dark scroll-mt-20 bg-[#050505]">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-white/60">Como funciona</span><span className="h-px w-10 bg-[#7C003E]" /></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Aprenda, personalize e <span className="text-[#7C003E]">publique.</span></h2>
          </div>
          <div className="mt-14 flex flex-col">
            {journey.map((item) => (
              <article key={item.step} className="reveal group grid gap-5 border-t border-white/15 px-1 py-8 transition hover:border-[#7C003E] sm:grid-cols-[4rem_1fr] sm:gap-8 sm:px-4 lg:grid-cols-[4rem_18rem_1fr]">
                <span className="text-5xl font-black tracking-[-0.05em] text-white/10 transition group-hover:text-[#7C003E]/60">{item.step}</span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="max-w-2xl text-sm leading-7 text-white/60 sm:col-start-2 lg:col-start-3">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="para-quem" className="editorial-light scroll-mt-20 bg-[#F5F5F3] text-[#050505]">
        <div className="mx-auto grid max-w-6xl gap-px px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div className="border border-[#D9D9D9] bg-white p-7 sm:p-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C003E]">Para quem é</p>
            <h2 className="mt-5 text-3xl font-black leading-none tracking-[-0.04em] md:text-4xl">Um primeiro passo para quem quer autonomia digital.</h2>
            <ul className="mt-8 space-y-4 text-sm leading-6 text-black/60">
              <li className="border-l-2 border-[#7C003E] pl-4">MEIs, profissionais autônomos e freelancers.</li>
              <li className="border-l-2 border-[#7C003E] pl-4">Quem precisa apresentar serviços e contato em uma página própria.</li>
              <li className="border-l-2 border-[#7C003E] pl-4">Quem está disposto a editar um template seguindo as aulas.</li>
            </ul>
          </div>
          <div className="border border-t-0 border-[#D9D9D9] bg-[#ECE9EA] p-7 sm:p-10 lg:border-l-0 lg:border-t">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/60">O que o curso não substitui</p>
            <h2 className="mt-5 text-3xl font-black leading-none tracking-[-0.04em] md:text-4xl">Escopos que exigem desenvolvimento especializado.</h2>
            <ul className="mt-8 space-y-4 text-sm leading-6 text-black/55">
              <li className="border-l-2 border-black/15 pl-4">Lojas virtuais, sistemas ou áreas de acesso.</li>
              <li className="border-l-2 border-black/15 pl-4">Projetos totalmente personalizados e feitos sob demanda.</li>
              <li className="border-l-2 border-black/15 pl-4">Acompanhamento individual de implementação.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="editorial-light bg-white text-[#050505]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-10">
          <div>
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-black/60">Publicação e custos</span></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Hospedagem sem mensalidade para projetos compatíveis<span className="text-[#7C003E]">.</span></h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">O curso utiliza o GitHub Pages, serviço que permite hospedar gratuitamente páginas estáticas. Um domínio próprio é opcional e, se escolhido, é contratado separadamente.</p>
          </div>
          <dl className="border border-[#D9D9D9] bg-[#F5F5F3]">
            <div className="grid grid-cols-[1fr_auto] gap-x-6 border-b border-[#D9D9D9] p-6"><dt className="text-sm font-bold">GitHub Pages</dt><dd className="col-start-1 mt-2 text-sm leading-6 text-black/60">Hospedagem da página estática ensinada no curso.</dd><dd className="col-start-2 row-span-2 row-start-1 self-start text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7C003E]">Sem mensalidade</dd></div>
            <div className="grid grid-cols-[1fr_auto] gap-x-6 p-6"><dt className="text-sm font-bold">Domínio próprio</dt><dd className="col-start-1 mt-2 text-sm leading-6 text-black/60">Pode ser conectado depois, conforme sua preferência.</dd><dd className="col-start-2 row-span-2 row-start-1 self-start text-[10px] font-semibold uppercase tracking-[0.16em] text-black/60">Opcional</dd></div>
          </dl>
        </div>
      </section>

      <section id="inscricao" className="editorial-cta relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#7C003E]" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/60">Compra processada pela Hotmart</p>
          <h2 className="mt-6 text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">Pronto para construir sua primeira página profissional<span className="text-[#7C003E]">?</span></h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">Acesse o Base Digital INVD, acompanhe as aulas e transforme um dos templates em uma página que apresente seu trabalho com clareza.</p>
          <div className="mt-10"><CheckoutButton location="cta_final" label="Acessar o checkout do curso" /></div>
          <p className="mt-4 text-[11px] text-white/60">Garantia de 7 dias · Pagamento processado pela Hotmart</p>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#050505]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 text-center sm:flex-row sm:text-left lg:px-10">
          <div><Link href="/" aria-label="Voltar para a página inicial da INVD" className="inline-flex"><BrandLogo className="opacity-60" small /></Link><p className="mt-3 text-xs text-white/60">© 2026 INVD Group — Inteligência em Vendas no Digital.</p></div>
          <Link href="/" className="text-xs font-semibold text-white/60 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Conhecer a INVD Group →</Link>
        </div>
      </footer>
    </main>
  );
}
