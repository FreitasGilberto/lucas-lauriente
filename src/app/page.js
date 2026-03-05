import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShowsSection from "@/components/ShowsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { showDates } from "@/data/shows";

export default function Home() {
  return (
    <div className="w-full bg-black text-white">
      <Navbar />
      <Hero />
      <ShowsSection shows={showDates} />
      <AboutSection />
      <Footer />
    </div>
  );
}
