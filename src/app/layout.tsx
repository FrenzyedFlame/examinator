import { cn } from "@/lib/utils"
import type { Metadata } from "next";
import "./global.css";
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Examinator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={cn(inter.className,"antialiased min-h-screen pt-16")}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        </body>
    </html>
  );
}
