import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base Digital — Crie sua página profissional",
  description:
    "Aprenda a criar e publicar sua própria página profissional com templates prontos, hospedagem gratuita e autonomia digital.",
  alternates: {
    canonical: "/base-digital",
  },
  openGraph: {
    title: "Base Digital INVD — Sua página profissional no ar",
    description:
      "Curso prático para criar uma página profissional com templates prontos e hospedagem gratuita.",
    url: "/base-digital",
    siteName: "INVD Group",
    locale: "pt_BR",
    type: "website",
    images: ["/logo-invd.png"],
  },
};

export default function BaseDigitalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
