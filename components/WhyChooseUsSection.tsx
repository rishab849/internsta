import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Play, Shield, Zap, Heart, Star } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure & Trusted",
    description: "Your data and privacy are our top priority with enterprise-grade security"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get matched with opportunities in minutes, not months"
  },
  {
    icon: Heart,
    title: "Student Focused",
    description: "Built specifically for students by people who understand your journey"
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "Thousands of successful placements and career launches"
  }
];

export function WhyChooseUsSection() {
  return (
    <div className="py-12 px-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Internsta?
          </h2>

          {/* Video/Image placeholder */}
          <div className="relative max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl aspect-video flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
              <Button 
                size="lg" 
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30 rounded-full h-20 w-20"
              >
                <Play className="h-8 w-8 ml-1" />
              </Button>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">See How Internsta Works</h3>
                <p className="text-sm opacity-80">Watch our 2-minute demo</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We're not just another job board. We're a comprehensive platform designed specifically for students 
            and early-career professionals to bridge the gap between education and real-world experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm border-orange-200">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
            Get Started Today
          </Button>
        </div>
    </div>
  );
}