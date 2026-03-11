import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Zap } from 'lucide-react';

const projects = [
  {
    title: 'UdharoGuru – AI Powered Credit Tracking Platform',
    description:
      'A financial management platform designed for tracking personal and business credit transactions. The system includes OCR based receipt scanning, analytics dashboards, and automated reminders.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Django', 'React', 'PostgreSQL', 'Tesseract OCR', 'JWT'],
    highlights: ['OCR based data extraction', 'Financial analytics dashboard', 'Account management'],
    github: 'https://github.com/Prayag-1/',
  },
  {
    title: 'Surgical Mart Nepal – E-Commerce Medical Platform',
    description:
      'Developed and managed a full-stack e-commerce platform for medical and surgical products in Nepal. Built backend infrastructure, inventory systems, and admin dashboards for order management.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e6d41cef?w=600&h=400&fit=crop',
    tags: ['Django', 'PostgreSQL', 'React', 'REST APIs'],
    highlights: ['Inventory tracking system', 'Order management', 'Admin dashboard'],
    github: 'https://github.com/Prayag-1/',
  },
  {
    title: 'ProCare / Surgical Mart Website Management',
    description:
      'Worked on website development and software management for ProCare and Surgical Mart Nepal including system improvements, deployment workflows, and feature development.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    tags: ['React', 'Django', 'PostgreSQL', 'Git'],
    highlights: ['Website maintenance', 'Feature development', 'System deployment'],
    github: 'https://github.com/Prayag-1/',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Showcase of recent projects demonstrating full-stack development, AI integration, and system design
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative border-slate-700/50 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500/0 via-cyan-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:via-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-300 pointer-events-none"></div>

                <div className="grid md:grid-cols-3 gap-6 relative z-10">
                  {/* Image Section */}
                  <div className="md:col-span-1 overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-2xl sm:text-3xl mb-2">{project.title}</CardTitle>
                          <CardDescription className="text-base text-slate-300 leading-relaxed">
                            {project.description}
                          </CardDescription>
                        </div>
                        <Zap className="h-5 w-5 text-amber-400 flex-shrink-0 ml-4" />
                      </div>

                      {/* Highlights */}
                      <div className="my-4">
                        <p className="text-sm font-semibold text-slate-300 mb-2">Key Features:</p>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="text-sm text-slate-400 flex items-center">
                              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="bg-indigo-500/20 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/30"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                      <Button asChild variant="outline" className="border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/10">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </a>
                      </Button>
                      <Button asChild className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 flex-1">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          Explore Project
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
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
