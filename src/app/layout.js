import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Sarkari Result 2026 – Latest Jobs",
  description:
    "Latest Government Jobs, Results, Admit Card, Answer Key, Admission",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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