import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StarsCanvas from "@/components/main/StarsBackground";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dimasagengsaputro.my.id"),
  title: "Dimas Ageng Saputro - Web Developer",
  description:
    "Dimas Ageng Saputro is a Backend Developer from Indonesia with 1+ years of expertise. Software Engineer. Specializing web development, Golang, and JavaScript technologies.",
  keywords: [
    "Web Developer",
    "Portfolio",
    "PT Ihsan Solusi",
    "Dimas Ageng Saputro",
    "Dimas Ageng",
    "Dimasageng",
    "DimasAgengSaputro",
    "Dimas_Ageng_Saputro",
    "Next.js",
    "Golang",
    "React.Js",
    "Profil lengkap dan portofolio Dimas Ageng Saputro."
  ],
  openGraph: {
    title: "Dimas Ageng Saputro",
    description:
       "Web Developer of Backend Developer from Indonesia with 1+ years of expertise. Software Engineer. Specializing web development, Golang, and JavaScript technologies.",
    images: "/OpenGraph.jpg",
  },
  alternates: {
    canonical: "https://dimasagengsaputro.my.id",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Dimas Ageng Saputro",
              jobTitle: "Web Developer",
              url: "https://dimasagengsaputro.my.id",
              sameAs: [
                "https://www.linkedin.com/in/dimasagengsaputro/",
                "https://github.com/dimasagengsaputro",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <GoogleAnalytics gaId={process.env.NEXT_PRIVATE_GTID ?? ""} />
        <SpeedInsights />
        <Analytics />
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
