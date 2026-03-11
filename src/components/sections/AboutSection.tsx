import { Card, CardContent } from '@/components/ui/card';
import { Code2, Braces, Zap, Database } from 'lucide-react';

const skillGroups = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['Python', 'JavaScript', 'Java', 'C++'],
  },
  {
    category: 'Frameworks',
    icon: Braces,
    items: ['React', 'Node.js', 'Express'],
  },
  {
    category: 'AI / Data',
    icon: Zap,
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'OpenCV'],
  },
  {
    category: 'Tools',
    icon: Database,
    items: ['Git', 'Linux', 'AWS', 'Jupyter'],
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto"></div>
          </div>

          {/* About Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Text Section */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="space-y-6 text-slate-300">
                <p className="text-lg leading-relaxed">
                  I am a Computer Science student at Herald College Kathmandu with strong interests 
                  in software development, machine learning, and intelligent automation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  I enjoy building real-world applications that combine data, backend systems, and modern frontend frameworks. 
                  My work focuses on creating scalable systems that solve practical problems.
                </p>

                <p className="text-lg leading-relaxed">
                  Currently I am developing projects involving:
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mr-3"></span>
                    Machine learning systems
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mr-3"></span>
                    AI powered applications
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mr-3"></span>
                    Full stack web platforms
                  </li>
                  <li className="flex items-center text-lg">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mr-3"></span>
                    Automation tools
                  </li>
                </ul>

                <p className="text-lg leading-relaxed pt-4">
                  I am particularly interested in working on products where technology directly improves 
                  business operations or user experience.
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-4 animate-fade-in-up">
              <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">10+</div>
                <p className="text-slate-400 mt-2">Projects Completed</p>
              </div>
              
              <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">3+</div>
                <p className="text-slate-400 mt-2">Years of Experience</p>
              </div>

              <div className="p-6 rounded-lg border border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">4</div>
                <p className="text-slate-400 mt-2">Professional Roles</p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8">Technologies & Tools</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillGroups.map((group, index) => {
                const IconComponent = group.icon;
                return (
                  <Card 
                    key={index} 
                    className="relative border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/60 hover:border-indigo-500/50 transition-all duration-300 group/card"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 group-hover/card:from-indigo-500/40 group-hover/card:to-cyan-500/40 transition-colors">
                          <IconComponent className="h-5 w-5 text-indigo-400" />
                        </div>
                        <h4 className="font-semibold ml-3 text-slate-100">
                          {group.category}
                        </h4>
                      </div>
                      <div className="space-y-2">
                        {group.items.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="text-sm text-slate-300 pl-3 border-l-2 border-indigo-500/30 group-hover/card:border-indigo-500/60 transition-colors"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
