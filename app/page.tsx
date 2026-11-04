import Image from "next/image";
import Link from "next/link";
import BrandLogo from "./components/brand-logo";
import EditorialOrbit from "./components/editorial-orbit";
import CasesCarousel, { type CaseItem } from "./components/cases-carousel";
import { BackToTopButton, RevealObserver, WhatsAppLink } from "./components/conversion-elements";
import MethodTabs, { type MethodStep } from "./components/method-tabs";

const whatsappLink = "https://api.whatsapp.com/send/?phone=5561993253597&text&type=phone_number&app_absent=0";

const acquisitionProblems = [
  { number: "01", title: "Os anúncios atraem contatos, mas não o perfil esperado.", text: "Pode existir um descompasso entre público, mensagem, oferta e objetivo da campanha." },
  { number: "02", title: "Os leads chegam, mas não há clareza sobre o que acontece depois.", text: "Sem acompanhar os indicadores relevantes, volume de contatos não revela quais campanhas contribuem para oportunidades reais." },
  { number: "03", title: "A empresa quer investir em mídia, mas ainda não estruturou a aquisição.", text: "Objetivos, canais, públicos e critérios de acompanhamento precisam estar definidos antes de ampliar o investimento." },
];

const services = [
  { number: "01", title: "Estratégia de aquisição", text: "Planejamento das campanhas, definição de objetivos, públicos, canais e estrutura de aquisição." },
  { number: "02", title: "Gestão e otimização", text: "Implementação, monitoramento e ajustes contínuos nas campanhas de mídia paga." },
  { number: "03", title: "Análise de performance", text: "Acompanhamento dos indicadores, avaliação da qualidade das oportunidades e identificação de melhorias." },
];

const methodSteps: MethodStep[] = [
  {
    code: "I", action: "Identificar", title: "Localizar o que limita a aquisição",
    text: "Mapeamos o cenário da operação, avaliamos indicadores e localizamos os fatores que estão limitando o desempenho da aquisição.",
    practical: "A leitura considera campanhas, mensagem, oferta e o caminho percorrido pelas oportunidades para definir onde a atenção é mais necessária.",
    outputs: ["Cenário mapeado", "Limitações identificadas", "Prioridades definidas"],
  },
  {
    code: "N", action: "Nivelar", title: "Fortalecer os pontos prioritários",
    text: "Priorizamos e executamos ajustes nos pontos identificados, fortalecendo aquilo que compromete os resultados.",
    practical: "A operação recebe uma ordem clara de trabalho para corrigir o que limita o desempenho antes de ampliar esforços em etapas que já funcionam.",
    outputs: ["Ajustes priorizados", "Execução orientada", "Base fortalecida"],
  },
  {
    code: "V", action: "Validar", title: "Verificar o efeito das mudanças",
    text: "Acompanhamos indicadores, comparamos resultados e verificamos se as mudanças produziram melhorias.",
    practical: "Os dados mostram o que deve continuar, o que precisa mudar e quais hipóteses merecem uma nova rodada de análise.",
    outputs: ["Indicadores acompanhados", "Resultados comparados", "Aprendizados registrados"],
  },
  {
    code: "D", action: "Desenvolver", title: "Evoluir a partir do que foi validado",
    text: "Aprimoramos o que foi validado, consolidamos aprendizados e ampliamos gradualmente as estratégias quando existem condições para isso.",
    practical: "A evolução respeita o desempenho observado e a capacidade da operação, sem tratar aumento de investimento como garantia automática de resultado.",
    outputs: ["Aprendizados consolidados", "Melhoria contínua", "Evolução gradual"],
  },
];

const implementationSteps = [
  { step: "01", title: "Conversa inicial", text: "Entendemos o contexto do negócio, os objetivos e o cenário atual de aquisição.", detail: "Uma conversa objetiva para compreender a necessidade." },
  { step: "02", title: "Proposta e alinhamento", text: "Apresentamos o escopo de atuação, as condições e as prioridades de trabalho.", detail: "Responsabilidades e próximos passos bem definidos." },
  { step: "03", title: "Início da operação", text: "Após a contratação, organizamos os acessos, o planejamento e a implementação das atividades previstas.", detail: "A execução começa de acordo com o escopo contratado." },
];

const cases: CaseItem[] = [
  { title: "Select Fit", subtitle: "Fitness & Equipamentos", service: "Estratégia de Aquisição · Tráfego Pago", metric: "9x", metricLabel: "de crescimento de receita desde o início da parceria", text: "Planejamento de mídia e gestão de tráfego pago orientados à aquisição de clientes.", link: "https://instagram.com/selectfit_", logo: "/cases/select-fit.png" },
  { title: "Escola CENCE", subtitle: "Educação", service: "Tráfego Pago", metric: "+matrículas", metricLabel: "com redução de custo por aquisição", link: "https://instagram.com/escolacence", text: null, logo: "/cases/escola-cence-transparent.png" },
  { title: "Rede CADE", subtitle: "Saúde & Clínicas", service: "Planejamento de Mídia · Tráfego Pago", metric: "2x", metricLabel: "de receita com canal digital estruturado do zero", link: "https://instagram.com/redecadeoficial", text: null, logo: "/cases/rede-cade.png" },
  { title: "Kbal Fitness", subtitle: "Academia", service: null, metric: null, metricLabel: null, text: null, link: null, logo: "/cases/kbal-fitness-transparent.png" },
  { title: "Gilson Rufino", subtitle: "Consultoria empresarial", service: null, metric: null, metricLabel: null, text: null, link: null, logo: "/cases/gilson-rufino.png" },
  { title: "V2 Tech", subtitle: "Tecnologia", service: null, metric: null, metricLabel: null, text: null, link: null, logo: "/cases/v2-tech.png" },
];

export default function Home() {
  return (
    <main className="editorial-shell min-h-screen bg-[#050505] text-[#F5F5F3] selection:bg-[#7C003E] selection:text-white">
      <RevealObserver />
      <header className="editorial-header sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#conteudo" aria-label="INVD Group — início" className="flex items-center gap-3"><BrandLogo /></a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-5 text-[11px] text-white/70 md:flex">
            <a href="#problemas" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Desafios</a>
            <a href="#servicos" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">O que fazemos</a>
            <a href="#cases" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Cases</a>
            <a href="#metodo" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Método INVD</a>
            <a href="#diagnostico" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Diagnóstico</a>
            <a href="#como-comecar" className="transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Como começar</a>
          </nav>
          <WhatsAppLink href={whatsappLink} target="_blank" rel="noreferrer" location="header" className="rounded-sm bg-[#7C003E] px-5 py-2.5 text-[11px] font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F5F3]">Fale com a INVD</WhatsAppLink>
        </div>
      </header>

      <section id="conteudo" className="editorial-hero relative scroll-mt-20 overflow-hidden bg-[#050505]">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] border-l border-white/[0.06] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:56px_56px] lg:block" />
        <div className="pointer-events-none absolute right-[10%] top-0 h-full w-px bg-[#7C003E]/30" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1fr_20rem] lg:px-10 lg:pb-32 lg:pt-28">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#8A8A8A]">Inteligência em Vendas no Digital</span></div>
            <h1 className="reveal text-5xl font-black leading-[0.9] tracking-[-0.055em] text-[#F5F5F3] md:text-7xl lg:text-[5.35rem]">Tráfego pago para gerar<span className="block text-[#7C003E]">oportunidades reais</span><span className="block text-[#7C003E]">de negócio.</span></h1>
            <p className="reveal reveal-delay-1 mt-7 max-w-2xl text-sm leading-7 text-[#A1A1A1] md:text-base">Estruturamos e gerenciamos campanhas de aquisição com foco em atrair potenciais clientes, acompanhar a qualidade dos leads e melhorar continuamente os resultados.</p>
            <div className="reveal reveal-delay-2 mt-10 flex flex-col gap-4 sm:flex-row">
              <WhatsAppLink href={whatsappLink} target="_blank" rel="noreferrer" location="hero" className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#7C003E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Conversar sobre meu negócio <span className="ml-2">→</span></WhatsAppLink>
              <Link href="/diagnostico" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/25 px-7 py-4 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Fazer diagnóstico gratuito</Link>
            </div>
          </div>
          <aside className="editorial-aside border-y border-white/10 py-7 lg:border-l lg:border-y-0 lg:py-4 lg:pl-7" aria-label="Perfil de empresa atendida">
            <EditorialOrbit />
            <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#8A8A8A]">Para empresas que</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-white/60">
              <li className="border-l border-[#7C003E] pl-4">Já investem em anúncios e precisam melhorar o desempenho.</li>
              <li className="border-l border-[#7C003E] pl-4">Buscam contatos com maior aderência à oferta.</li>
              <li className="border-l border-[#7C003E] pl-4">Querem entender como a mídia contribui para a aquisição.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="problemas" className="editorial-light scroll-mt-20 bg-[#F5F5F3] text-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-black/60">Problemas reais de aquisição</span></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Quando investir em mídia não é suficiente para entender o que funciona<span className="text-[#7C003E]">.</span></h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden border border-[#D9D9D9] bg-[#D9D9D9] lg:grid-cols-3">
            {acquisitionProblems.map((problem) => <article key={problem.number} className="reveal bg-white p-7 sm:p-9"><span className="text-4xl font-black tracking-[-0.08em] text-[#7C003E]/70">{problem.number}</span><h3 className="mt-7 text-xl font-black leading-tight text-black">{problem.title}</h3><p className="mt-4 text-sm leading-7 text-black/55">{problem.text}</p></article>)}
          </div>
          <p className="mt-9 max-w-3xl border-l-2 border-[#7C003E] pl-5 text-sm leading-7 text-black/60 md:text-base">A INVD conecta planejamento, execução e leitura de dados para transformar o investimento em mídia em uma operação de aquisição mais compreensível e evolutiva.</p>
        </div>
      </section>

      <section id="servicos" className="editorial-dark scroll-mt-20 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-white/60">O que fazemos</span><span className="h-px w-10 bg-[#7C003E]" /></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Gestão de tráfego com estratégia, execução e <span className="text-[#7C003E]">análise.</span></h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">Uma solução central de gestão estratégica de tráfego pago, organizada em três frentes que funcionam de forma integrada.</p>
          </div>
          <div className="mt-14 flex flex-col">
            {services.map((service) => <article key={service.number} className="reveal group grid gap-5 border-t border-white/15 px-1 py-8 transition hover:border-[#7C003E] sm:grid-cols-[4rem_1fr] sm:items-start sm:gap-8 sm:px-4 lg:grid-cols-[4rem_18rem_1fr]"><span className="text-5xl font-black tracking-[-0.05em] text-white/50 transition group-hover:text-[#D85A99]">{service.number}</span><h3 className="text-xl font-bold text-white">{service.title}</h3><p className="max-w-2xl text-sm leading-7 text-white/60 sm:col-start-2 lg:col-start-3">{service.text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="cases" className="editorial-dark bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#7C003E]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-white/60">
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

      <section id="metodo" className="editorial-light scroll-mt-20 border-t border-white/10 bg-[#F5F5F3] text-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-black/60">Método INVD</span><span className="h-px w-10 bg-[#7C003E]" /></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Método INVD: decisões orientadas pelo que realmente limita os <span className="text-[#7C003E]">resultados.</span></h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">Uma lógica contínua para identificar o ponto limitante, ajustar prioridades, validar mudanças e desenvolver a operação a partir do que os dados demonstram.</p>
          </div>
          <MethodTabs steps={methodSteps} />
        </div>
      </section>

      <section id="diagnostico" className="editorial-dark scroll-mt-20 border-y border-white/10 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60">Diagnóstico gratuito</span></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Entenda o nível atual da sua <span className="text-[#D85A99]">aquisição digital.</span></h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">Responda a cinco perguntas sobre mídia, públicos, mensuração e processo comercial. Ao final, você recebe uma leitura inicial dos pontos que merecem mais atenção.</p>
            <Link href="/diagnostico" className="mt-9 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#7C003E] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Iniciar diagnóstico gratuito <span className="ml-2" aria-hidden="true">→</span></Link>
          </div>
          <aside className="border-l border-[#7C003E] pl-7" aria-label="Como funciona o diagnóstico">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60">Em poucos minutos</p>
            <ol className="mt-6 space-y-5 text-sm leading-7 text-white/70">
              <li><span className="mr-3 font-bold text-[#D85A99]">01</span>Responda cinco perguntas objetivas.</li>
              <li><span className="mr-3 font-bold text-[#D85A99]">02</span>Veja os principais gargalos identificados.</li>
              <li><span className="mr-3 font-bold text-[#D85A99]">03</span>Entenda qual pode ser o próximo passo.</li>
            </ol>
          </aside>
        </div>
      </section>

      <section id="como-comecar" className="editorial-light scroll-mt-20 bg-white text-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 max-w-3xl">
            <div className="mb-6 flex items-center gap-3"><span className="h-px w-10 bg-[#7C003E]" /><span className="text-[10px] uppercase tracking-[0.35em] text-black/60">Como começar</span></div>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-5xl">Três passos para iniciar a <span className="text-[#7C003E]">contratação.</span></h2>
            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/55 md:text-base">Depois do primeiro contato, a conversa avança com escopo, responsabilidades e próximos passos claros.</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-[#D9D9D9] bg-[#D9D9D9] lg:grid-cols-3">
            {implementationSteps.map((item) => <article key={item.step} className="reveal group bg-white p-7 transition hover:bg-[#050505] sm:p-9"><div className="flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#7C003E]">Passo {item.step}</span><span className="text-4xl font-black tracking-[-0.08em] text-black/50 transition group-hover:text-white/50">{item.step}</span></div><h3 className="mt-7 text-xl font-black text-black transition group-hover:text-white">{item.title}</h3><p className="mt-4 text-sm leading-7 text-black/60 transition group-hover:text-white/60">{item.text}</p><div className="mt-8 border-t border-black/10 pt-5 transition group-hover:border-white/10"><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/60 transition group-hover:text-white/60">{item.detail}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="contato" className="editorial-cta relative scroll-mt-20 overflow-hidden border-t border-white/10 bg-[#050505]">
        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-[#7C003E]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">Vamos avaliar como o tráfego pago pode contribuir para a aquisição de clientes da sua empresa<span className="text-[#7C003E]">?</span></h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base">Converse com a INVD para apresentar seu cenário, seus objetivos e entender como podemos atuar na sua estratégia de aquisição.</p>
            <WhatsAppLink href={whatsappLink} target="_blank" rel="noreferrer" location="cta_final" className="mt-10 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#7C003E] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Conversar sobre meu negócio <span className="ml-2">→</span></WhatsAppLink>
          </div>
          <div className="mt-24 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">Parceiros</p>
            <div className="mx-auto mt-8 grid w-full max-w-xl gap-5 sm:grid-cols-2">
              <div className="flex h-36 items-center justify-center overflow-hidden border border-white/15 bg-white p-4"><Image src="/partners/google-partner.png" alt="Google Partner" width={600} height={600} unoptimized className="h-28 w-auto object-contain" /></div>
              <div className="flex h-36 items-center justify-center overflow-hidden border border-white/15 bg-white p-4"><Image src="/partners/kommo-partner.png" alt="Kommo Partner" width={1920} height={1080} unoptimized className="h-full w-full object-contain" /></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
            <div>
              <a href="#conteudo" aria-label="INVD Group — início" className="inline-flex items-center"><BrandLogo /></a>
              <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">Inteligência em Vendas no Digital. Gestão estratégica de tráfego pago para aquisição de clientes.</p>
              <div className="mt-6 flex items-center gap-3">
                <a href="https://www.instagram.com/invdgroup/" target="_blank" rel="noreferrer" aria-label="INVD Group no Instagram" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition hover:border-[#7C003E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
                <a href="https://www.linkedin.com/company/invdgroup" target="_blank" rel="noreferrer" aria-label="INVD Group no LinkedIn" className="flex h-10 w-10 items-center justify-center border border-white/15 text-white/50 transition hover:border-[#7C003E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">Navegação</p>
              <div className="mt-5 space-y-3 text-sm text-white/65"><a href="#problemas" className="block transition hover:text-white">Desafios</a><a href="#servicos" className="block transition hover:text-white">O que fazemos</a><a href="#cases" className="block transition hover:text-white">Cases</a><a href="#metodo" className="block transition hover:text-white">Método INVD</a><Link href="/diagnostico" className="block transition hover:text-white">Diagnóstico gratuito</Link><a href="#como-comecar" className="block transition hover:text-white">Como começar</a></div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">Atuação</p>
              <div className="mt-5 space-y-3 text-sm text-white/65"><span className="block">Estratégia de aquisição</span><span className="block">Gestão de tráfego pago</span><span className="block">Análise de performance</span><span className="block">Meta Ads e Google Ads</span></div>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/60">Contato</p>
              <div className="mt-5"><WhatsAppLink href={whatsappLink} target="_blank" rel="noreferrer" location="footer" className="inline-flex min-h-11 items-center border border-white/15 px-4 py-2 text-sm text-white/75 transition hover:border-[#7C003E] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">WhatsApp</WhatsAppLink></div>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 border-t border-white/5 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between"><p>© 2026 INVD Group — Marketing Digital e Publicidade · Todos os direitos reservados.</p><BackToTopButton /></div>
        </div>
      </footer>

      <WhatsAppLink href={whatsappLink} target="_blank" rel="noreferrer" location="botao_fixo" aria-label="Conversar com a INVD pelo WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center justify-center rounded-sm bg-[#7C003E] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(5,5,5,0.4)] transition hover:bg-[#92004A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">WhatsApp</WhatsAppLink>
    </main>
  );
}
