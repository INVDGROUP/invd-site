import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base Digital: sua página profissional no ar",
  description:
    "Curso prático para personalizar um template, apresentar seus serviços e publicar sua página profissional com GitHub Pages.",
  alternates: {
    canonical: "/base-digital",
  },
  openGraph: {
    title: "Base Digital INVD — Sua página profissional no ar",
    description:
      "Use templates prontos, apresente seus serviços e publique sua página profissional com GitHub Pages.",
    url: "/base-digital",
    siteName: "INVD Group",
    locale: "pt_BR",
    type: "website",
    images: ["/logo-invd.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Base Digital INVD — Sua página profissional no ar",
    description:
      "Use templates prontos, apresente seus serviços e publique sua página profissional com GitHub Pages.",
    images: ["/logo-invd.png"],
  },
};

export default function BaseDigitalLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
