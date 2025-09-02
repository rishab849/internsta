import { StatsSection } from "./StatsSection";
import { ExperienceSection } from "./ExperienceSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { HiringSection } from "./HiringSection";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { InternshipListings } from "./InternshipListings";

export function MainContent() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-20">
            <StatsSection />
            <ExperienceSection />
            <HowItWorksSection />
            <HiringSection />
            <WhyChooseUsSection />
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <InternshipListings />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}