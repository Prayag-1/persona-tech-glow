import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">

          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img
                  src="https://i.ibb.co/BKGQCYdH/Screenshot-2025-06-04-201256.png"
                  alt="Profile"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Prayag Nepal</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light">
            IT Student & Software Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about building intelligent systems and software solutions.
            Currently pursuing Computer Science with a focus on Machine Learning and AI.
          </p>

         {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
  <a
    href="https://github.com/Prayag-1/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button size="lg" className="group">
      View My Work
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  </a>
  
  <a
    href="https://portfolioweb.tiiny.site/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline" size="lg">
      View Resume
    </Button>
  </a>
</div>


          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Prayag-1/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/prayag-nepal/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nepalprayag75@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
