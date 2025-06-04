import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Web apps',
    description: 'Web app like weather app which shows past weather data and a movie sharing app where you and ypur love ones can watch movies together and share your thoughts.',
    image: 'https://miro.medium.com/v2/resize:fit:2000/0*zj_kGMq6f2ZxW7p3.png',
    tags: ['React Native',  'Firebase' , 'Node.js', 'Express'],
    github: 'https://github.com/Prayag-1/watch-together-app',
    featured: true,
  },
  {
    title: 'AI-Powered infant mortatlity rate prediction',
    description: 'A machine learning model that predicts infant mortality rates using demographic and health data, providing insights for healthcare policy.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/codewprayag/FinalAI-',
    demo: 'https://demo.com',
    featured: true,
  },
  {
    title: 'Java Applications',
    description: 'A collection of Java applications Like banking software attendence tracker which i made for my self to use while i was a project manager in my college,also a quiz application',
    image: 'https://th.bing.com/th/id/OIP.uDEtrBWFiURX4Am-l_faaAHaEc?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    tags: ['Java main', 'Java Swing', 'MySQL', 'JDBC'],
    github: 'https://github.com/Prayag-1/Banking-Software',
    demo: 'https://demo.com',
    featured: false,
  },
  {
    title: 'Project Management',
    description: 'A project management venture in which i learned about scrum and agile methodologies, and how to manage a team effectively.',
    image: 'https://th.bing.com/th/id/OIP.rWaFJz5Uw-SBRWObo5zk3AHaDx?rs=1&pid=ImgDetMain',
    tags: ['Project Management', 'Scrum', 'Agile', 'Reports'],
    github: 'https://github.com/KarMa063/ZippyTrip',
    demo: 'https://demo.com',
    featured: false,
  },
];

export function ProjectsSection() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills in AI, software development, and problem-solving
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          Demo
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
