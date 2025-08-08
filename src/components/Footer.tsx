const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t">
      <div className="container py-10 md:py-14">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="font-display text-2xl">Let’s capture your little one</h3>
            <p className="mt-2 text-muted-foreground max-w-md">
              Sessions are limited each month to ensure the calm, unhurried experience your family deserves.
            </p>
            <a
              href="mailto:hello@example.com?subject=Newborn%20Session%20Inquiry"
              className="story-link mt-4 inline-block text-primary"
            >
              hello@example.com
            </a>
          </div>
          <div className="md:text-right text-sm text-muted-foreground">
            <p>&copy; {year} Luna Newborn Photography</p>
            <p className="mt-1">All images lovingly created for your family.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
