import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const roles = ['Software Developer', 'Machine Learning Enthusiast', 'Automation Builder'];

  useEffect(() => {
    const currentRole = roles[textIndex];
    let charIndex = 0;
    let isDeleting = false;

    const timer = setInterval(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else if (charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 2000);
      } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        setTextIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, [textIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20">
      {/* Gradient background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="animate-fade-in-up">
              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Prayag Nepal
                </span>
              </h1>

              {/* Subheading */}
              <h2 className="text-2xl sm:text-3xl font-semibold mb-8 h-12">
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="animate-pulse">|</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-slate-400 max-w-xl mb-8 leading-relaxed">
                I build intelligent systems, full-stack applications, and automation tools that solve real-world problems. 
                Passionate about machine learning, scalable software, and impactful digital products.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="#projects" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white border-0">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>

                <a
                  href="https://portfolioweb.tiiny.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-indigo-500/30 hover:border-indigo-500/60 hover:bg-indigo-500/10"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-slate-600 hover:border-slate-500 hover:bg-slate-800"
                  >
                    Contact Me
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/Prayag-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors p-2 rounded-lg hover:bg-indigo-500/10"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/prayag-nepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:nepalprayag75@gmail.com"
                  className="text-slate-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="hidden md:flex justify-center animate-fade-in">
              <div className="relative">
                {/* Glowing ring background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-1 animate-pulse opacity-75"></div>
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 rounded-full bg-slate-900 overflow-hidden border-2 border-slate-800">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
