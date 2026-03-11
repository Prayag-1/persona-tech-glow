
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Prayag Nepal
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Software Developer • AI Enthusiast • Problem Solver
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/Prayag-1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prayag-nepal/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:nepalprayag75@gmail.com"
                className="p-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-slate-400 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Prayag Nepal. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
