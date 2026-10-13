import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diagnóstico de Aquisição Digital Gratuito",
  description:
    "Responda a cinco perguntas e avalie gratuitamente a estrutura de mídia, públicos, mensuração e aquisição digital da sua empresa.",
  alternates: {
    canonical: "/diagnostico",
  },
  openGraph: {
    title: "Diagnóstico gratuito de aquisição digital",
    description:
      "Descubra o nível de estrutura da aquisição digital da sua empresa em cinco perguntas.",
    url: "/diagnostico",
    siteName: "INVD Group",
    locale: "pt_BR",
    type: "website",
    images: ["/logo-invd.png"],
  },
};

export default function DiagnosticoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
