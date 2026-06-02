import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-variable",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-berkeley-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "앤빌 | AI/SaaS·B2B 플랫폼 제품관리 컨설팅 & AI MVP 제작",
  description: "앤빌은 AI/SaaS, B2B 플랫폼, 신사업 조직을 위한 제품관리 컨설팅, 서비스 기획, AI MVP 제작 파트너입니다. 고객 리서치, 데이터 분석, 서비스 기획, MVP 검증까지 함께합니다.",
  openGraph: {
    title: "복잡한 아이디어를 제품 기획서와 AI MVP로 바꾸는 제품관리 파트너",
    description: "AI/SaaS, B2B 플랫폼, 신사업팀을 위한 제품관리 컨설팅, 서비스 기획, AI MVP 제작. 고객·데이터 기반으로 문제를 구조화하고 실행 가능한 제품으로 만듭니다.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen flex flex-col font-inter-variable bg-pitch-black text-porcelain">
        {children}
      </body>
    </html>
  );
}
