import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "INVD | Agência de Marketing em Brasília",
  description:
    "Agência de marketing em Brasília especializada em tráfego pago, posicionamento digital, gestão comercial e crescimento para empresas.",
  keywords: [
    "agência de marketing em Brasília",
    "marketing digital Brasília",
    "tráfego pago Brasília",
    "gestão comercial Brasília",
    "social media Brasília",
    "consultoria de marketing Brasília",
    "INVD",
  ],
  openGraph: {
    title: "INVD | Agência de Marketing em Brasília",
    description:
      "Tráfego pago, posicionamento digital, gestão comercial e estratégia para empresas em Brasília.",
    url: "https://invdgroup.com",
    siteName: "INVD",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "INVD | Agência de Marketing em Brasília",
    description:
      "Tráfego pago, posicionamento digital, gestão comercial e estratégia para empresas em Brasília.",
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
        <Script id="gtm-script" strategy="afterInteractive">
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