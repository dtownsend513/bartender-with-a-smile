import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import PlantBasedSection from "@/components/PlantBasedSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f3ee] overflow-hidden">
      <HeroSection />
      <PlantBasedSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}