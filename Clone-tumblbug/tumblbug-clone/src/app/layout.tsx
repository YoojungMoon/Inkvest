import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "텀블벅 - 크리에이터를 위한 크라우드펀딩",
  description: "창의적인 시도를 함께 실현시키는 펀딩 커뮤니티 텀블벅에서 문화예술, 출판, 패션, 게임 까지 다양한 분야 크리에이터들의 프로젝트를 후원해주세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
