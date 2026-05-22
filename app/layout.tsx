import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "INVD — Agência de Marketing em Brasília para Empresas que Querem Escalar",
  description:
    "Agência de marketing em Brasília especializada em reposicionamento, tráfego pago e escala para empresas que faturam mas não crescem no ritmo certo. Estratégia com resultado real no DF.",
  keywords: [
    "agência de marketing em Brasília",
    "agência de marketing digital Brasília",
    "agência de tráfego pago Brasília",
    "marketing para empresas Brasília DF",
    "agência de marketing DF",
    "consultoria de marketing Brasília",
    "agência de performance Brasília",
    "marketing estratégico Brasília",
    "agência de reposicionamento de marca Brasília",
    "agência para escalar empresa Brasília",
    "social media Brasília",
    "tráfego pago DF",
    "agência de marketing para empresas",
    "agência de crescimento empresarial Brasília",
    "marketing digital Distrito Federal",
  ],
  openGraph: {
    title: "INVD — Agência de Marketing em Brasília para Empresas que Querem Escalar",
    description:
      "Agência de marketing em Brasília. Reposicionamento, tráfego pago e escala para empresas que faturam mas não crescem no ritmo certo.",
    url: "https://invdgroup.com",
    siteName: "INVD Group",
    locale: "pt_BR",
    type: "website",
  },
  verification: {
    google: "NJzQsa9fjha-nAUj-FZfergLpNXdTfzHT8I7byUacvM",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
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

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '28360765380192249');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=28360765380192249&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
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