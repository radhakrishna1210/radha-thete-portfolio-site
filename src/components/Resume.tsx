import { Button } from '@/components/ui/button';

const Resume = () => {
  const handleDownload = () => {
    // Placeholder for resume download functionality
    alert('Resume download feature will be implemented when you upload your resume PDF!');
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-elevated bg-card p-8 rounded-lg">
            <div className="text-5xl mb-6">📄</div>
            
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">
              Download My Resume
            </h2>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get a detailed overview of my academic background, technical skills, 
              projects, and achievements in AI/ML and web development.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-semibold text-card-foreground mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">B.Tech in AI/ML</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">💼</div>
                <h3 className="font-semibold text-card-foreground mb-1">Projects</h3>
                <p className="text-sm text-muted-foreground">Web & AI Projects</p>
              </div>
              
              <div className="text-center">
                <div className="text-2xl mb-2">🏆</div>
                <h3 className="font-semibold text-card-foreground mb-1">Skills</h3>
                <p className="text-sm text-muted-foreground">Tech Stack</p>
              </div>
            </div>
            
            <Button 
              onClick={handleDownload}
              size="lg"
              className="glow-on-hover font-semibold px-8"
            >
              Download Resume (PDF)
            </Button>
            
            <p className="text-xs text-muted-foreground mt-4">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;