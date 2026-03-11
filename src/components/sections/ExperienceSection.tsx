import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: 'Software Developer & Website Manager',
    company: 'ProCare / Surgical Mart Nepal',
    location: 'Kathmandu',
    period: 'Present',
    description:
      'Developing and managing web systems for medical product platforms including Surgical Mart Nepal. Responsible for backend systems, deployment, and software improvements.',
    technologies: ['Django', 'React', 'PostgreSQL', 'System deployment'],
    type: 'work',
    icon: Briefcase,
  },
  {
    title: 'Automation Intern',
    company: 'Nepal Telecom (NTC)',
    location: 'Kathmandu',
    period: 'June 2025',
    description:
      'Worked on automation related workflows and gained experience in enterprise scale systems and telecommunications infrastructure.',
    technologies: ['Automation tools', 'System documentation', 'Software workflows'],
    type: 'internship',
    icon: Briefcase,
  },
  {
    title: 'UI Assistant',
    company: 'Tapasya Creations',
    location: 'Kathmandu',
    period: 'Nov 2023 – Jan 2024',
    description:
      'Worked on UI design and frontend support for multiple digital projects. Assisted in improving user interface layouts and user experience while learning professional development workflows.',
    technologies: ['UI Design', 'HTML', 'CSS', 'JavaScript'],
    type: 'internship',
    icon: Briefcase,
  },
  {
    title: 'Freelance Media & Web Support',
    company: 'Raag Restaurant',
    location: 'Kathmandu',
    period: 'Freelance',
    description:
      'Handled UI updates, media content management, and digital presence support for restaurant based projects.',
    technologies: ['UI design', 'Web updates', 'Digital media management'],
    type: 'freelance',
    icon: Briefcase,
  },
];

const education = [
  {
    degree: 'BSc in Computer Science',
    school: 'University of Wolverhampton (via Herald College Kathmandu)',
    location: 'Kathmandu, Nepal',
    period: '2023 - 2026',
    courses: ['Machine Learning', 'AI Ethics', 'Software Development', 'Project Management'],
    icon: GraduationCap,
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience & Education</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto"></div>
          </div>

          {/* Professional Experience */}
          <div className="mb-16 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="h-6 w-6 mr-3 text-indigo-400" />
              Professional Experience
            </h3>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="relative border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300 group"
                >
                  {/* Timeline line connector (optional visual) */}
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-8 top-20 h-12 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent -bottom-4"></div>
                  )}

                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl sm:text-2xl text-slate-50">
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-base font-semibold text-indigo-300 mt-1">
                          {exp.company} • {exp.location}
                        </CardDescription>
                      </div>
                      <div className="text-sm font-medium text-slate-400 whitespace-nowrap">
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-indigo-500/30 text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="h-6 w-6 mr-3 text-cyan-400" />
              Education
            </h3>

            {education.map((edu, index) => (
              <Card
                key={index}
                className="border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl text-slate-50">
                        {edu.degree}
                      </CardTitle>
                      <CardDescription className="text-base font-semibold text-cyan-300 mt-1">
                        {edu.school}
                      </CardDescription>
                      <p className="text-sm text-slate-400 mt-1">{edu.location}</p>
                    </div>
                    <div className="text-sm font-medium text-slate-400 whitespace-nowrap">
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div>
                    <p className="text-sm font-semibold text-slate-300 mb-3">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="border-cyan-500/30 text-cyan-300 bg-cyan-500/10"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
                      <CardDescription className="text-base font-medium text-primary">
                        {edu.school} • {edu.location}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <div className="text-muted-foreground">
                      <strong>GPA:</strong> {edu.gpa}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="secondary">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
