import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Библия с комментариями Джимми Сваггерта | Цифровая PDF версия',
  description: 'Изучайте Писание глубже с уникальными комментариями Джимми Сваггерта. Теперь в удобном PDF формате для любого устройства всего за "9.',
  openGraph: {
    "title": "Библия с комментариями Джимми Сваггерта",
    "description": "Ваш путь к глубокому пониманию Слова Божьего в цифровом формате.",
    "siteName": "Библия Сваггерта",
    "type": "website"
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
