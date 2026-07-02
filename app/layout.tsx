import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cursor Test",
  description: "Первый сайт для мастер-класса летней школы",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
