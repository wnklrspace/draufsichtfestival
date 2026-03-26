import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Draufsicht Festival - Karlshöhe Stuttgart",
  description:
    "Zwei Tage, zwei Bühnen, unzählige besondere Momente: Das Draufsicht Festival verwandelte die Karlshöhe in Stuttgart in einen Ort voller Kunst, Kultur und Mitmachaktionen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
