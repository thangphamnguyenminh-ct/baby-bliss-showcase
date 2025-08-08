import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <header className="w-full sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Luna Newborn Photography
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#portfolio" className="story-link text-foreground/80">Portfolio</a>
          <a href="#about" className="story-link text-foreground/80">About</a>
          <a href="#demo" className="story-link text-foreground/80">Demo</a>
          <a href="#pricing" className="story-link text-foreground/80">Pricing</a>
          <a href="#testimonials" className="story-link text-foreground/80">Testimonials</a>
          <a href="#contact" className="story-link text-foreground/80">Contact</a>
          <a href="#contact" aria-label="Book a session">
            <Button variant="hero" size="sm">Book Now</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
