import "@/css/globals.css";
import "@/css/darkModeOverrides.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardoaar",
  description: "Ricardoaar's personal website"
};

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>{children}
    <div id="portal-root" />
    </body>
    </html>
  );
}
