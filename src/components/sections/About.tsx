const About = () => {
  return (
    <section id="about" className="container py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <header>
          <h2 className="font-display text-3xl md:text-4xl">A calm, baby-led studio</h2>
        </header>
        <div className="text-muted-foreground max-w-prose">
          <p>
            I create softly lit, natural portraits of your newborn with gentle posing and a calm pace. Your session is unhurried and relaxed, with plenty of time for feeding and cuddles.
          </p>
          <p className="mt-4">
            My approach is simple and timeless—so the focus stays on your baby and the connection you share.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
