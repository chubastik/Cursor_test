import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "FiberTech Support — техподдержка монтажников связи",
  description:
    "Портал технической поддержки для техников сервиса: подключение интернета, кабель, оптика, диагностика и чек-листы выезда.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} font-sans`}>{children}</body>
    </html>
  );
}
