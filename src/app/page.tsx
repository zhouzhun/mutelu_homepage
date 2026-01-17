"use client";

import { LanguageProvider } from "@/components/LanguageProvider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-mystic-dark">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
