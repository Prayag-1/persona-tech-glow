import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, ExternalLink, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const response = await fetch('https://formspree.io/f/xyzjzenk', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } else {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again later.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              I'm actively looking for opportunities in software development, machine learning, and automation systems. 
              Let's build something amazing together!
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-6"></div>
          </div>

          {/* Open to Opportunities Section */}
          <div className="mb-16 animate-fade-in-up">
            <Card className="relative border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 to-cyan-950/40 overflow-hidden">
              {/* Background accent */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-indigo-500/20">
                    <Briefcase className="h-6 w-6 text-indigo-300" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl">Open to Opportunities</CardTitle>
                    <CardDescription className="text-base mt-2 text-slate-300">
                      I am actively looking for opportunities where I can build impactful products and grow as an engineer
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
                    <p className="text-sm font-semibold text-indigo-300 mb-1">Focus Areas</p>
                    <p className="text-slate-300">Full-stack development, AI systems, automation</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
                    <p className="text-sm font-semibold text-cyan-300 mb-1">Ideal Role</p>
                    <p className="text-slate-300">Software Dev, ML Engineer, Technical roles</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-900/50 border border-slate-700/50">
                    <p className="text-sm font-semibold text-purple-300 mb-1">Looking For</p>
                    <p className="text-slate-300">Growth opportunity, impactful work, mentorship</p>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  I'm especially interested in roles where I can work on products that directly improve business operations 
                  or user experience. If you think we could work well together, I'd love to hear from you!
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6 animate-fade-in-up">
              <div>
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              </div>

              {/* Email */}
              <div className="group p-4 rounded-lg border border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors">
                    <Mail className="h-4 w-4 text-indigo-400" />
                  </div>
                  <h4 className="font-semibold text-slate-100">Email</h4>
                </div>
                <a
                  href="mailto:nepalprayag75@gmail.com"
                  className="text-slate-400 hover:text-indigo-400 transition-colors text-sm"
                >
                  nepalprayag75@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div className="group p-4 rounded-lg border border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 hover:border-indigo-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-slate-700/50 group-hover:bg-slate-600/50 transition-colors">
                    <Github className="h-4 w-4 text-slate-300" />
                  </div>
                  <h4 className="font-semibold text-slate-100">GitHub</h4>
                </div>
                <a
                  href="https://github.com/Prayag-1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-200 transition-colors text-sm flex items-center gap-1"
                >
                  github.com/Prayag-1
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="group p-4 rounded-lg border border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/50 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                    <Linkedin className="h-4 w-4 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-slate-100">LinkedIn</h4>
                </div>
                <a
                  href="https://linkedin.com/in/prayag-nepal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1"
                >
                  Prayag Nepal
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <Card className="border-slate-700/50 bg-slate-900/30">
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-slate-300">
                    Drop me a line and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-slate-200">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          className="mt-2 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-slate-200">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          className="mt-2 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-200">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-slate-200">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        className="mt-2 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-slate-200">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="mt-2 bg-slate-800/50 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:border-indigo-500 resize-none"
                        placeholder="Tell me more..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white border-0"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block mr-2 animate-spin">⏳</span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
