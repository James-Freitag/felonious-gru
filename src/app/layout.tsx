import type { Metadata } from "next";
import { Luckiest_Guy, Fredoka } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const luckiestGuy = Luckiest_Guy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-luckiest-guy",
});

const fredoka = Fredoka({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fredoka", // Useful for global CSS
});

export const metadata: Metadata = {
  title: "Grus' Place",
  description: "Discover the life of Gru and his life",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${luckiestGuy.variable} ${fredoka.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
