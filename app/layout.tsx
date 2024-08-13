import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import Navbar from "@/components/navbar";

import { siteConfig } from "@/config/site";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <head/>
      <body className={cn("bg-black min-h-screen", jetBrains.className)}>
        <div className="relative flex flex-col h-screen">
          <Navbar/>

          <main className="container mx-auto max-w-7xl flex-grow z-0">
            <div className="bg-gradient-to-r from-red-950 basis-1/5"/>

            <div className="basis-3/5">
              {children}
            </div>

            <div className="bg-gradient-to-l from-red-950 basis-1/5"/>
          </main>
        </div>
      </body>
    </html>
  );
}
