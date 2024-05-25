import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { Syne } from "next/font/google";

import "./globals.css";
import "./styles.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const bricolage_grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage_grotesque",
});
const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Rocketship",
  description: "Interplanetary Delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bricolage_grotesque.variable + " " + syne.variable}>
        <div className="bg-[#0f172a] text-white min-h-screen flex flex-col">
          <Header />
          {/* <HeaderExample /> */}
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
