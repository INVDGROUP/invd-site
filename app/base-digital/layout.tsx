import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base Digital: crie e publique sua página profissional",
  description:
    "Curso prático para criar, personalizar e publicar uma página profissional usando templates prontos e GitHub Pages.",
  alternates: {
    canonical: "/base-digital",
  },
  openGraph: {
    title: "Base Digital INVD — Crie e publique sua página profissional",
    description:
      "Aprenda a personalizar templates e publicar uma página profissional com GitHub Pages.",
    url: "/base-digital",
    siteName: "INVD Group",
    locale: "pt_BR",
    type: "website",
    images: ["/logo-invd.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Digital INVD — Crie e publique sua página profissional",
    description:
      "Aprenda a personalizar templates e publicar uma página profissional com GitHub Pages.",
    images: ["/logo-invd.png"],
  },
};

export default function BaseDigitalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
