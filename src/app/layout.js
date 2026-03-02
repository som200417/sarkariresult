import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.sarkariresult6.com" />
<link rel="dns-prefetch" href="https://api.sarkariresult6.com" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">
            <ScrollToTop />
            {children}
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}