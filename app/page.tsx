import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Highlights from "@/components/Highlights";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Highlights />
        <QuickLinks />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
