import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Clock, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Faster Hiring",
    description: "Reduce time-to-hire by 60% with our streamlined process"
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Save on recruitment costs while finding quality talent"
  },
  {
    icon: Users,
    title: "Pre-vetted Talent",
    description: "Access a pool of skilled candidates ready to contribute"
  }
];

export function HiringSection() {
  return (
    <div className="py-12 px-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1579389248774-07907f421a6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMG9mZmljZXxlbnwxfHx8fDE3NTY3MTkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Team collaboration in modern office"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-70 animate-pulse"></div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Build Faster.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Hire Smarter.
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect with talented students and recent graduates who are eager to contribute to your projects. 
                Find the perfect match for your team's needs.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-4 bg-white/70 backdrop-blur-sm border-orange-200">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
                Browse Profiles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                Company Sign Up
              </Button>
            </div>
          </div>
        </div>
    </div>
  );
}