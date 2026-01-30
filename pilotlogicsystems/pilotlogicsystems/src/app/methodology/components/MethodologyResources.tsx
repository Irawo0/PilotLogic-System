import Icon from '@/components/ui/AppIcon';

interface Technology {
  name: string;
  description: string;
  icon: string;
  category: string;
}

interface MethodologyResourcesProps {
  className?: string;
}

const MethodologyResources = ({ className = '' }: MethodologyResourcesProps) => {
  const technologies: Technology[] = [
    {
      name: 'Python',
      description: 'Core automation scripting and data processing',
      icon: 'CodeBracketIcon',
      category: 'Programming'
    },
    {
      name: 'OpenAI',
      description: 'AI-powered intelligent automation and processing',
      icon: 'SparklesIcon',
      category: 'AI/ML'
    },
    {
      name: 'AWS',
      description: 'Enterprise cloud infrastructure and services',
      icon: 'CloudIcon',
      category: 'Cloud'
    },
    {
      name: 'Supabase',
      description: 'Real-time database and authentication',
      icon: 'CircleStackIcon',
      category: 'Database'
    },
    {
      name: 'Zapier',
      description: 'No-code workflow automation and integrations',
      icon: 'BoltIcon',
      category: 'Integration'
    },
    {
      name: 'Make',
      description: 'Advanced automation scenarios and workflows',
      icon: 'CogIcon',
      category: 'Integration'
    },
    {
      name: 'PostgreSQL',
      description: 'Enterprise-grade relational database',
      icon: 'ServerIcon',
      category: 'Database'
    }
  ];

  return (
    <section className={`py-20 lg:py-32 bg-gradient-to-b from-primary/5 to-transparent ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Icon name="CubeIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Technology Stack
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
            Technologies We Deploy
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade tools and platforms powering intelligent automation infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="glassmorphism rounded-xl p-8 hover:border-primary/40 transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={tech.icon as any} size={32} className="text-primary" />
              </div>

              <div className="mb-2">
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold mb-3">
                  {tech.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2 font-heading group-hover:text-primary transition-colors duration-200">
                {tech.name}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 glassmorphism rounded-2xl p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="RocketLaunchIcon" size={40} className="text-primary" />
              </div>
            </div>
            <div className="flex-grow text-center lg:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Ready to Build Your Automation Infrastructure?
              </h3>
              <p className="text-muted-foreground">
                Schedule a free consultation to discuss how we can leverage these technologies to transform your operations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="https://calendly.com/pilotlogicsystems/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-interactive hover:-translate-y-0.5 transition-all duration-200 flex items-center space-x-2"
              >
                <Icon name="CalendarIcon" size={20} />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyResources;