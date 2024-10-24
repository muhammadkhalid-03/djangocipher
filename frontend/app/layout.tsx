import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decrypter",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-cyan-gradient ${inter.className}`}>
        <Navbar />
          <div className="pt-24">
            {children}
          </div>
          
      </body>
    </html>
  );
}

// pt-24 needs to be in multiples of 8 (padding from the top of screen)
