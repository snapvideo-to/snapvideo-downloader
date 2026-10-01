import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Instagram Downloader UI - Open Source Next.js React Template",
  description:
    "Open-source Next.js and React frontend for downloading Instagram Videos, Reels, Photos, and Stories in high quality MP4 format.",
  metadataBase: new URL("https://snapvideo.to"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen antialiased bg-slate-50 text-slate-800">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
