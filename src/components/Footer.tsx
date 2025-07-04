const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Radhakrishna Thete</h3>
            <p className="text-muted-foreground">
              AI/ML Enthusiast | Front-End Developer | Python Programmer
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Radhakrishna Thete. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Designed and developed with ❤️ for showcasing AI/ML journey
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;