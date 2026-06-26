import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const brevia = localFont({
  src: [
    {
      path: "../../public/fonts/brevia/HvDTrial_Brevia-Light-BF6493a405b0609.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/brevia/HvDTrial_Brevia-Regular-BF6493a40670f4b.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/brevia/HvDTrial_Brevia-Medium-BF6493a40658743.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/brevia/HvDTrial_Brevia-Bold-BF6493a4067c1a1.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/brevia/HvDTrial_Brevia-Black-BF6493a40673700.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-brevia",
});

export const metadata: Metadata = {
  title: "MiBanco Experience",
  description: "MVP de la Fábrica de Contenidos Inteligente de MiBanco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${brevia.variable} h-full antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;900&family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-surface text-on-surface">
        {children}
      </body>
    </html>
  );
}
