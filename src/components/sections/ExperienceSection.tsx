
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
   {
    title: 'Intern',
    company: 'Horeca Solutions',
    location: 'Baneshwor, Kathmandu',
    period: 'June 2024 - August 2024',
    description: 'Developed and deployed websites, mostly handled frontend. Also did documentation and became familiar with Microsoft tools.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Microsoft Office'],
    type: 'internship',
  },
  {
    title: 'Software Intern',
    company: 'Nepal Telecom',
    location: 'On site',
    period: 'June 2025',
    description: 'Worked in a large company, understood software development workflows in enterprise environments.',
    technologies: [],
    type: 'internship',
  },
  {
    title: 'UI Assistant',
    company: 'Tapasya Creations',
    location: 'Sankhamul, Kathmandu',
    period: 'Nov 2023 - Jan 2024',
    description: 'Assisted in UI design, improved UX and aesthetics. First company experience, introduced to real work culture.',
    technologies: ['Canva', 'Adobe Photoshop', 'Adobe Illustrator'],
    type: 'research',
  },
];

const education = [
  {
    degree: 'BSc in Computer Science',
    school: 'University of Wolverhampton',
    location: 'Kathmandu, Nepal',
    period: '2023 - 2026',
    gpa: 'Ongoing',
    relevant: ['Machine Learning', 'AI Ethics', 'Software Development', 'Project Management'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey through internships, research, and academic pursuits
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="animate-fade-in-up">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
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
