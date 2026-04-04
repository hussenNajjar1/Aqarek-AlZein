
import "./globals.css";
import BottomNav from "./components/layouts/BottomNav";
import Navbar from "./components/layouts/Navbar";
import { cairo } from "@/fonts/fonts";
import Footer from "./components/layouts/Footer";
import { FavoritesProvider } from "@/context/FavoritesContext";
import { baseSEO } from "@/lib/seo";

export const metadata = baseSEO;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-full flex flex-col ${cairo.className}`}>
        <Navbar />
        <div>
          <FavoritesProvider>{children} </FavoritesProvider>
        </div>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}
