import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://invdgroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "INVD Group | Gestão Estratégica de Tráfego Pago",
    template: "%s | INVD Group",
  },
  description:
    "Gestão estratégica de tráfego pago para empresas que buscam gerar oportunidades comerciais qualificadas. Conheça a INVD Group e nosso método de trabalho.",
  alternates: {
    canonical: "https://invdgroup.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "INVD Group | Gestão Estratégica de Tráfego Pago",
    description:
      "Campanhas de aquisição planejadas, gerenciadas e analisadas para gerar oportunidades reais de negócio.",
    url: "https://invdgroup.com/",
    siteName: "INVD Group",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-invd.png",
        width: 721,
        height: 409,
        alt: "INVD Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INVD Group | Gestão Estratégica de Tráfego Pago",
    description:
      "Campanhas de aquisição planejadas, gerenciadas e analisadas para gerar oportunidades reais de negócio.",
    images: ["/logo-invd.png"],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "INVD Group",
        alternateName: "Inteligência em Vendas no Digital",
        url: `${siteUrl}/`,
        logo: `${siteUrl}/logo-invd.png`,
        description:
          "Empresa especializada em gestão estratégica de tráfego pago e aquisição de oportunidades comerciais.",
        telephone: "+55 61 99325-3597",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Distrito Federal, Brasil",
        },
        sameAs: [
          "https://www.instagram.com/invdgroup/",
          "https://www.linkedin.com/company/invdgroup",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: "INVD Group",
        inLanguage: "pt-BR",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
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
