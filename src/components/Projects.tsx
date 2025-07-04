import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Gym Website',
      description: 'A modern, responsive gym website built with HTML and CSS featuring membership plans, trainer profiles, and class schedules.',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      status: 'Completed',
      category: 'Web Development'
    },
    {
      title: 'Weather App',
      description: 'Interactive weather application using React.js with real-time weather data, location-based forecasts, and clean UI design.',
      technologies: ['React', 'JavaScript', 'API Integration'],
      status: 'In Progress',
      category: 'Web Application'
    },
    {
      title: 'Mini AI Chatbot',
      description: 'Python-based chatbot implementing natural language processing for basic conversations and query responses.',
      technologies: ['Python', 'NLP', 'Machine Learning'],
      status: 'Planning',
      category: 'AI/ML Project'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-success text-success-foreground';
      case 'In Progress':
        return 'bg-primary text-primary-foreground';
      case 'Planning':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Featured Projects
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A showcase of my journey in web development and AI/ML exploration
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card-elevated bg-card rounded-lg overflow-hidden group">
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-4xl opacity-50">
                    {project.category === 'AI/ML Project' ? '🤖' : 
                     project.category === 'Web Application' ? '📱' : '💻'}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Actions */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 text-xs"
                      disabled={project.status === 'Planning'}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-xs"
                      disabled={project.status === 'Planning'}
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              More projects coming soon! Follow my journey on GitHub.
            </p>
            <Button 
              variant="outline"
              size="lg"
              className="glow-on-hover"
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;