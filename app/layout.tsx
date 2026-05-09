import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "INVD — Agência de Reposicionamento e Escala para Empresas",
  description:
    "Especialistas em reposicionamento, reestruturação e escala. Atendemos empresas que faturam acima de R$100k e querem crescer com estratégia e performance.",
  keywords: [
    "agência high ticket",
    "agência de escala",
    "reposicionamento de marca",
    "reestruturação de marketing",
    "crescimento empresarial",
    "tráfego pago",
  ],
  openGraph: {
    title: "INVD — Reposicionamento e Escala",
    description:
      "Agência de alto padrão para empresas que faturam mas não escalam.",
    url: "https://invdgroup.com",
    siteName: "INVD Group",
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "NJzQsa9fjha-nAUj-FZfergLpNXdTfzHT8I7byUacvM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
  <Script id="gtm-script" strategy="beforeInteractive">
    {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KFBHRHKT');
    `}
  </Script>
</head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFBHRHKT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}