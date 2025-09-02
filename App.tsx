import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { MainContent } from "./components/MainContent";
import { NewsletterSection } from "./components/NewsletterSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <MainContent />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}