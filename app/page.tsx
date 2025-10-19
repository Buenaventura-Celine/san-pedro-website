import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
}
