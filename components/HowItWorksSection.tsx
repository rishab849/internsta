import { Card } from "./ui/card";
import { UserPlus, Search, MessageSquare, Trophy } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Sign Up",
    description: "Create your profile and showcase your skills, experience, and portfolio to stand out to potential employers."
  },
  {
    icon: Search,
    title: "Match Opportunities",
    description: "Browse through curated internship opportunities or let our AI-powered system match you with perfect fits."
  },
  {
    icon: MessageSquare,
    title: "Get in Communication",
    description: "Connect directly with hiring managers and teams. Schedule interviews and discuss project requirements."
  },
  {
    icon: Trophy,
    title: "Get Hired",
    description: "Start your internship journey and gain real-world experience while building valuable professional connections."
  }
];

export function HowItWorksSection() {
  return (
    <div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Internsta Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with your career journey has never been easier. Follow these simple steps to find your perfect internship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-orange-200 bg-gradient-to-br from-white to-orange-50">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
    </div>
  );
}