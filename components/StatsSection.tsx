import { Card } from "./ui/card";
import { Users, Building2, Trophy, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "250",
    label: "Active Students",
    description: "Building real skills"
  },
  {
    icon: Building2,
    number: "13",
    label: "Partner Companies",
    description: "Hiring top talent"
  },
  {
    icon: Trophy,
    number: "29",
    label: "Success Rate",
    description: "Job placement"
  },
  {
    icon: Globe,
    number: "250",
    label: "Global Reach",
    description: "Days of the year"
  }
];

export function StatsSection() {
  return (
    <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by Students and Companies Worldwide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful students who have launched their careers through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 bg-gradient-to-br from-cyan-50 to-teal-50">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full flex items-center justify-center">
                  <Icon className="h-6 w-6 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </Card>
            );
          })}
        </div>
    </div>
  );
}