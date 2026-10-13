import Image from "next/image";

export type CaseItem = {
  title: string;
  subtitle: string;
  service: string | null;
  metric: string | null;
  metricLabel: string | null;
  text: string | null;
  link: string | null;
  logo: string;
};

type CasesCarouselProps = {
  items: CaseItem[];
};

function LogoCard({ item }: { item: CaseItem }) {
  const content = (
    <div className="group relative flex h-40 w-64 shrink-0 items-center justify-center overflow-hidden border border-white/15 bg-[#0B0B0B] p-8 transition hover:border-[#7C003E] hover:bg-[#101010] sm:h-44 sm:w-72">
      {item.logo.startsWith("http") ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.logo}
          alt={`Logo ${item.title}`}
          className="h-full w-full object-contain p-8 transition duration-300 group-hover:scale-[1.03] sm:p-10"
        />
      ) : (
        <Image
          src={item.logo}
          alt={`Logo ${item.title}`}
          fill
          unoptimized
          sizes="288px"
          className="object-contain p-8 transition duration-300 group-hover:scale-[1.03] sm:p-10"
        />
      )}
    </div>
  );

  if (!item.link) return content;

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Conheça o case ${item.title}`}
      className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C003E]"
    >
      {content}
    </a>
  );
}

export default function CasesCarousel({ items }: CasesCarouselProps) {
  return (
    <div
      className="cases-logo-marquee mt-14 overflow-hidden"
      aria-label="Logos de clientes da INVD"
    >
      <div className="cases-logo-track flex w-max">
        <div className="flex gap-5 pr-5">
          {items.map((item) => (
            <LogoCard key={item.title} item={item} />
          ))}
        </div>

        <div className="flex gap-5 pr-5" aria-hidden="true">
          {items.map((item) => (
            <LogoCard key={`duplicate-${item.title}`} item={{ ...item, link: null }} />
          ))}
        </div>
      </div>
    </div>
  );
}
