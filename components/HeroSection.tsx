import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight, Users, Briefcase } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-cyan-50 via-teal-50 to-emerald-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Build Real Skills.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                  Launch Real Products.
                </span>
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-teal-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">For Companies</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Have a project and want freelance talent? Post a job and find the best fit for your project. 
                    We connect you with skilled professionals ready to deliver results.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white">
                    Post a Project <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm border-teal-200 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="space-y-4">
                  <div className="h-12 w-12 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">For Candidates</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Want to work on real projects while you study? Browse through hundreds of projects 
                    and gain practical experience that matters.
                  </p>
                  <Button variant="outline" className="w-full border-2 border-teal-500 text-teal-600 hover:bg-teal-50">
                    Browse Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1610188794435-e263eb62a516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlb3BsZSUyMHdvcmtpbmclMjB0b2dldGhlciUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTY3NDI4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="People working together on projects"
                className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}