import NavBar from "@/components/NavBar";
import HeroSection from "@/components/sections/Hero";
import RecentWorkSection from "@/components/sections/RecentWork";
import AboutSection from "@/components/sections/About";
import DemoSection from "@/components/sections/Demo";
import PricingSection from "@/components/sections/Pricing";
import TestimonialsSection from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";
import type { Content } from "@/config/types";

const Index = ({ content }: { content: Content }) => {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <HeroSection content={content.hero} contact={content.contact} />
      <RecentWorkSection content={content.recentWork} />
      <AboutSection content={content.about} />
      <DemoSection content={content.concept} />
      <PricingSection content={content.pricing} />
      <TestimonialsSection content={content.testimonials} />
      <Footer contact={content.contact} />
    </main>
  );
};

export default Index;
