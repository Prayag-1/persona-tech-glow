import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Brain, Cog, TrendingUp } from 'lucide-react';

const buildItems = [
  {
    icon: Brain,
    title: 'AI Applications',
    description: 'Intelligent systems powered by machine learning and deep learning models',
    color: 'from-indigo-500/20 to-purple-500/20',
    textColor: 'text-indigo-400',
  },
  {
    icon: Cog,
    title: 'Automation Systems',
    description: 'Streamlined workflows and processes that save time and reduce errors',
    color: 'from-cyan-500/20 to-blue-500/20',
    textColor: 'text-cyan-400',
  },
  {
    icon: Zap,
    title: 'Full Stack Platforms',
    description: 'Modern web and mobile applications built with cutting-edge technologies',
    color: 'from-purple-500/20 to-pink-500/20',
    textColor: 'text-purple-400',
  },
  {
    icon: TrendingUp,
    title: 'Data Driven Tools',
    description: 'Analytics dashboards and tools that turn data into actionable insights',
    color: 'from-amber-500/20 to-orange-500/20',
    textColor: 'text-amber-400',
  },
];

export function BuildSection() {
  return (
    <section id="build" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">What I Build</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              I create scalable solutions that combine technology, design, and business strategy
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-6"></div>
          </div>

          {/* Build Items Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {buildItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="relative border-slate-700/50 bg-slate-900/30 hover:bg-slate-900/60 transition-all duration-300 group overflow-hidden"
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                  <CardHeader className="relative z-10">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${item.color} w-fit mb-4`}>
                      <IconComponent className={`h-6 w-6 ${item.textColor}`} />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <CardDescription className="text-slate-300">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
