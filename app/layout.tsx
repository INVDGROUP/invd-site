import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "INVD — Agência de Marketing para Empresas que Querem Escalar",
  description:
    "Especialistas em reposicionamento, reestruturação e escala para empresas que faturam acima de R$100k. Tráfego pago, social media e estratégia integrada para crescimento real.",
  keywords: [
    "agência de marketing para empresas",
    "agência para escalar empresa",
    "agência de tráfego pago",
    "agência de reposicionamento de marca",
    "marketing para empresas high ticket",
    "agência de marketing digital Brasil",
    "como escalar empresa com marketing",
    "agência de performance e resultados",
    "consultoria de marketing para empresas",
    "agência de crescimento empresarial",
    "marketing estratégico para empresas",
    "agência de reestruturação de marketing",
  ],
  openGraph: {
    title: "INVD — Agência de Marketing para Empresas que Querem Escalar",
    description:
      "Reposicionamento, reestruturação e escala para empresas que faturam mas não crescem no ritmo certo.",
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