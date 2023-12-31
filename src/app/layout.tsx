import { Nanum_Myeongjo } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";

const nanum = Nanum_Myeongjo({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bullet Group | Goto Mamoru",
  description: `'사람'을 소중히 여기는 전략적 비전 소통의 힘으로 혁신적 기회를 찾는 리더 고토 마모루가 전하는 진정한 글로벌 인재의 조건과 그만의 관점`,
  authors: [{ name: "Tamastudy" }, { name: "Jongseok Lee" }],
  creator: "Tamastudy",
  publisher: "Tamastudy",
  generator: "Tamastudy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  applicationName: "GotoMamoru",
  referrer: "origin-when-cross-origin",
  keywords: [
    "전략적 비전",
    "사람중심",
    "글로벌 인재",
    "고토 마모루",
    "한국산업인력공단",
    "타마스터디",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    images: [
      "/img/goto.jpeg",
      "/img/logo_mark.svg",
      "/img/top_logo.svg",
      "/img/footer_logo.svg",
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={nanum.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
