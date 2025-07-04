const About = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Radhakrishna Thete, a passionate first-year B.Tech student specializing in 
                <strong className="text-primary"> Artificial Intelligence and Machine Learning</strong> at 
                Zeal College of Engineering and Research, Narhe.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey into technology began with a fascination for how machines can learn and 
                make intelligent decisions. This curiosity led me to explore the intersection of 
                <strong className="text-accent"> mathematics, programming, and AI</strong>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm diving deep into <strong className="text-primary">Python programming</strong>, 
                mastering <strong className="text-accent">front-end web development</strong>, and exploring the 
                mathematical foundations that power modern AI systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me learning about the latest developments in AI, 
                working on personal projects, or contributing to open-source initiatives.
              </p>
            </div>
            
            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-elevated bg-card p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Started B.Tech Journey</div>
              </div>
              
              <div className="card-elevated bg-card p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">AI/ML</div>
                <div className="text-sm text-muted-foreground">Specialization Focus</div>
              </div>
              
              <div className="card-elevated bg-card p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-primary mb-2">Python</div>
                <div className="text-sm text-muted-foreground">Primary Language</div>
              </div>
              
              <div className="card-elevated bg-card p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-accent mb-2">Web Dev</div>
                <div className="text-sm text-muted-foreground">Front-End Focus</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;