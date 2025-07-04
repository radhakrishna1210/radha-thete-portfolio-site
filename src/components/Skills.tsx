const Skills = () => {
  const skills = [
    { name: 'HTML', level: 85, category: 'Frontend' },
    { name: 'CSS', level: 80, category: 'Frontend' },
    { name: 'JavaScript', level: 65, category: 'Frontend' },
    { name: 'Python', level: 75, category: 'Programming' },
    { name: 'Git & GitHub', level: 70, category: 'Tools' },
    { name: 'AI/ML Fundamentals', level: 60, category: 'AI/ML' }
  ];

  const categories = ['Frontend', 'Programming', 'Tools', 'AI/ML'];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Skills & Technologies
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Building a strong foundation in modern web technologies and AI/ML concepts
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category} className="card-elevated bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
                <div className="space-y-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-card-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="skill-bar h-2 rounded-full transition-all duration-1000 delay-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Learning Goals */}
          <div className="mt-12 card-elevated bg-card p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center text-primary">
              Currently Learning
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-2">🤖</div>
                <h4 className="font-semibold text-card-foreground mb-2">Machine Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Exploring algorithms and mathematical foundations
                </p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">⚛️</div>
                <h4 className="font-semibold text-card-foreground mb-2">React.js</h4>
                <p className="text-sm text-muted-foreground">
                  Building dynamic and interactive web applications
                </p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-semibold text-card-foreground mb-2">Data Science</h4>
                <p className="text-sm text-muted-foreground">
                  Data analysis and visualization techniques
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;