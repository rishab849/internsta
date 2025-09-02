import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Work on real industry projects",
  "Build a professional portfolio",
  "Gain mentorship from experts",
  "Earn while you learn"
];

export function ExperienceSection() {
  return (
    <div className="py-12 px-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get Real-World Experience,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Early
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Don't wait until after graduation to start building your career. Join projects that matter 
                and gain the practical experience that employers are looking for.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">
              Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZXhwZXJpZW5jZXxlbnwxfHx8fDE3NTY3NDI4NDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Students gaining experience"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-70 animate-bounce"></div>
          </div>
        </div>
    </div>
  );
}