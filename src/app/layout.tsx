import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simpson app",
  description: "Simpson app",};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Icon100.png" type="image/x-icon" />
        <link href="https://fonts.cdnfonts.com/css/simpsonfont" rel="stylesheet" />
        <title>The Simpsons App</title>
      </head>
      <body className={inter.className} style={{ fontFamily: '"Simpsonfont", sans-serif' }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
