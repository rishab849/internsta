import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Clock, Heart, Bookmark } from "lucide-react";

const internships = [
  {
    id: 1,
    urgentlyHiring: true,
    title: "Social Media Specialist",
    company: "CathyInternational.com",
    location: "Irvine, CA 92614",
    salary: "From $22 an hour",
    type: "Full-time",
    benefits: ["Health insurance", "Retirement plan", "401(k) matching", "Employee discount"],
    isNew: false
  },
  {
    id: 2,
    urgentlyHiring: false,
    isNew: true,
    title: "Marketing and Social Media Specialist",
    company: "Great River Food",
    location: "City of Industry, CA 91746",
    salary: "$25 an hour",
    type: "Full-time",
    benefits: ["Health insurance", "Paid time off", "Vision insurance", "Dental insurance"],
    isNew: true
  },
  {
    id: 3,
    urgentlyHiring: true,
    title: "Marketing Coordinator",
    company: "Aduana's Inheritance",
    location: "45 min • Irvine, CA",
    salary: "From $24 an hour",
    type: "Full-time",
    benefits: ["Health insurance", "Paid time off", "Vision insurance", "Dental insurance", "Life insurance"],
    isNew: false
  },
  {
    id: 4,
    urgentlyHiring: false,
    title: "Marketing Coordinator: Legal Recruiting Agency",
    company: "Expert Staff Corp",
    location: "20 min • Los Angeles, CA",
    salary: "$27 - $30 an hour",
    type: "Full-time",
    benefits: ["Monday to Friday", "401(k)", "Health insurance", "401(k) matching"],
    isNew: false
  },
  {
    id: 5,
    urgentlyHiring: false,
    title: "PR & Brand Specialist (Kids Tech Startup)",
    company: "Playbird USA Inc",
    location: "City of Industry, CA 91746",
    salary: "$50,000 - $62,000 a year",
    type: "Full-time",
    benefits: ["Paid time off"],
    isNew: false
  }
];

export function InternshipListings() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">INTERNSHIPS FOR YOU:</h2>
      </div>
      
      <div className="space-y-4">
        {internships.map((internship) => (
          <Card key={internship.id} className="p-4 hover:shadow-md transition-shadow border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div className="flex gap-2">
                {internship.urgentlyHiring && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs px-2 py-1">
                    Urgently hiring
                  </Badge>
                )}
                {internship.isNew && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs px-2 py-1">
                    New
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Bookmark className="h-4 w-4 text-gray-400" />
                </Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Heart className="h-4 w-4 text-gray-400" />
                </Button>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2 text-base leading-tight">
              {internship.title}
            </h3>

            <div className="text-sm text-gray-600 mb-1">
              {internship.company}
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-3">
              <MapPin className="h-3 w-3 mr-1" />
              {internship.location}
            </div>

            <div className="text-base font-semibold text-gray-900 mb-3">
              {internship.salary}
            </div>

            <div className="flex flex-wrap gap-1 mb-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                ✓ {internship.type}
              </Badge>
              {internship.benefits.map((benefit, index) => (
                <Badge key={index} variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                  {benefit}
                </Badge>
              ))}
            </div>

            <Button variant="link" className="text-blue-600 text-sm p-0 h-auto">
              ▷ Easily apply
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}