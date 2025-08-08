import NavBar from "@/components/NavBar";
import Hero from "@/components/sections/Hero";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Demo from "@/components/sections/Demo";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <NavBar />
      <div className="container pt-8 md:pt-12">
        <Hero />
      </div>
      <Gallery />
      <About />
      <Demo />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
