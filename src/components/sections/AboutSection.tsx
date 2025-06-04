
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'React', 'Java', 'C++'] },
  { category: 'AI/ML', items: [ 'NumPy', 'Scikit-learn', 'OpenCV', 'Pandas'] },
  { category: 'Web Dev', items: ['React', 'Node.js', 'SQL', 'Express', ] },
  { category: 'Tools', items: ['Git', 'Jira', 'AWS', 'Linux', 'Jupyter'] },
];


export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Driven by curiosity and powered by code
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* About Text */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
            <p>
                  I'm a Computer Science student at Herald College Kathmandu  with a passion for 
                  Machine learning , Software Developement and also posssesiing experience on Project Management. My journey began with a 
                  fascination for how technology can solve real-world problems.
                </p>
                <p>
                  Currently, I'm diving deep Software Developement 
                  natural language processing while building full-stack applications  and  building AI models .
                </p>
                <p>
                  When I'm not coding, you'll find me contributing my interst in project management , 
                   or exploring the latest research in AI ethics and UI/Ux design.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => (
                  <Card key={index} className="glass-effect">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-3 text-sm text-primary">
                        {skillGroup.category}
                      </h4>
                      <div className="space-y-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="text-sm text-muted-foreground"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
