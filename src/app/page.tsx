import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GalleryBanner from "@/components/GalleryBanner";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080604] text-white">
      <HeroSection />

      <ServicesSection />

      <GalleryBanner />

      <TestimonialsSection />

      <BookingCTA />
    </div>
  );
}