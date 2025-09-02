import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Get the Latest{" "}
              <span className="text-green-300">Internships</span>
            </h2>
            
            <p className="text-xl text-teal-100 mb-8">
              Join over 50,000 students who receive weekly updates about new internships, 
              career tips, and exclusive opportunities from top companies.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-teal-100 focus:bg-white/20"
                  required
                />
              </div>
              <Button type="submit" className="bg-green-400 text-teal-900 hover:bg-green-300 whitespace-nowrap">
                <Mail className="mr-2 h-4 w-4" />
                Subscribe Now
              </Button>
            </form>

            <div className="flex items-center gap-4 text-sm text-teal-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Weekly updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No spam, unsubscribe anytime</span>
              </div>
            </div>
          </div>

          {/* Right Column - Success Stories */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <div className="flex items-start gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NTY2ODM0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business networking"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold mb-2">For Candidates: Build Real Skills, Get Real Jobs</h3>
                  <p className="text-teal-100 text-sm">
                    Access to exclusive internships and direct connections with hiring managers.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white">
              <div className="flex items-start gap-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU2NzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold mb-2">For Companies: Find Top-Tier Students</h3>
                  <p className="text-teal-100 text-sm">
                    Connect with pre-screened, motivated students ready to contribute to your projects.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}