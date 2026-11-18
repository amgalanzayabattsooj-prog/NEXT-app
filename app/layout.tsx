import { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "The Daily — A fresh perspective", template: "%s | The Daily" },
  description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-pt-7 scroll-smooth motion-reduce:scroll-auto">
      <body className="bg-paper font-sans text-ink antialiased selection:bg-orange-200">
        {children}
        <Footer />
      </body>
    </html>
  );
}