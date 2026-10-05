import Hero from "@/components/Hero";
import ExplainerSection from "@/components/ExplainerSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1">
        <Hero />
        <ExplainerSection />
      </main>
      <Footer />
    </div>
  );
}
