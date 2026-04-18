import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedSection from "@/components/sections/FeaturedSection";
import PromoGrid from "@/components/sections/PromoGrid";
import CinematicVFX from "@/components/sections/CinematicVFX";

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      <Navbar />

      <main style={{ paddingTop: "65px" }}>
        <Hero />
        <FeaturedSection />
        <CinematicVFX />
        <PromoGrid />
      </main>
    </div>
  );
}
