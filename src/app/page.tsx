import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GalleryBanner from "@/components/GalleryBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#080604] text-white overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <GalleryBanner />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}