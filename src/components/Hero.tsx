import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 overflow-hidden">
            <img src="/lovable-uploads/4c3c0269-7307-42fa-ac01-3935e557d156.png" alt="Radhakrishna Thete" className="w-full h-full object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Radhakrishna Thete
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            AI/ML Enthusiast | Front-End Developer | Python Programmer
          </p>
          
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto leading-relaxed">
            First-year B.Tech student passionate about Artificial Intelligence, Machine Learning, 
            and creating innovative web experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => scrollToSection('projects')} size="lg" className="glow-on-hover bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
              View My Projects
            </Button>
            <Button onClick={() => scrollToSection('contact')} size="lg" className="glow-on-hover text-primary font-semibold px-8 py-3 bg-white/[0.31]">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>;
};
export default Hero;