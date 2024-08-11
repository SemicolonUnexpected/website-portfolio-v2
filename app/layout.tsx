import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import GradientLeft from "@/components/side-gradient";

const jetBrains = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SemicolonUnexpected",
  description: "The portfolio of a budding computer scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrains.className}>
        <div className="flex padding-0">
          <div className="bg-gradient-to-r from-red-950 basis-1/5"/>
          <div className="min-w-fit basis-3/5">
            {children}
          </div>
          <div className="bg-gradient-to-l from-red-950 basis-1/5"/>
        </div>
      </body>
    </html>
  );
}
