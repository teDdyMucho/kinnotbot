import { packages, packageFeatures } from "@/constants";
import { useState, useEffect } from "react";
import { useAnimations } from "@/hooks/useAnimations";
import { BillingToggle } from "@/components/ui/billing-toggle";
import { PlanSelector } from "@/components/ui/plan-selector";
import { SinglePlanCard } from "@/components/ui/single-plan-card";
import { FeatureComparisonChart } from "@/components/ui/feature-comparison-chart";
import { useIsMobile } from "@/hooks/use-mobile";

type BillingCycle = 'monthly' | 'annual' | 'lifetime';

// Feature descriptions for each feature
const featureDescriptions = {
  "KinnoBot Trading Ai": {
    description: "Advanced trading algorithms with Ai-powered execution",
    group: "Core Trading Capabilities",
    tooltip: "Our proprietary Ai algorithm analyzes thousands of data points per second"
  },
  "Install Guide (docs + videos)": {
    description: "Step-by-step installation and setup documentation",
    group: "Setup & Support",
    tooltip: null
  },
  "Default Settings": {
    description: "Pre-configured settings optimized for performance",
    group: "Core Trading Capabilities",
    tooltip: null
  },
  "1-on-1 Set Up Call": {
    description: "Personal onboarding with our technical team",
    group: "Setup & Support",
    tooltip: "30-minute call to help you get started and answer questions"
  },
  "Kinno's Setting Updates": {
    description: "Regular updates to optimize trading parameters",
    group: "Upgrades & Future Access",
    tooltip: null
  },
  "Future Bot Upgrades": {
    description: "Access to all future versions and improvements",
    group: "Upgrades & Future Access",
    tooltip: null
  },
  "Priority Support": {
    description: "Front-of-line technical assistance",
    group: "Setup & Support",
    tooltip: "Get responses within 24 hours for all support requests"
  },
  "Private Discord Access": {
    description: "Join our exclusive trading community",
    group: "Community & Coaching",
    tooltip: null
  },
  "Weekly Coaching Calls": {
    description: "Group sessions with professional traders",
    group: "Community & Coaching",
    tooltip: "Live Q&A and strategy discussions every week"
  },
  "Private Investor Network": {
    description: "Connect with fellow traders and investors",
    group: "Community & Coaching",
    tooltip: "Networking opportunities with successful traders"
  },
};

// Plan descriptions
const planDescriptions = {
  "KinnoBot - Basic": "Perfect for beginners starting their trading journey",
  "KinnoBot - Pro": "Ideal for serious traders looking for consistent results",
  "KinnoBot - Elite": "The complete package for professional traders"
};

export function Packages() {
  const [currentPlan, setCurrentPlan] = useState<any>(null);
  const isMobile = useIsMobile();
  
  // Set bonus end date (30 days from now) and upgrade deadline (7 days from now)
  const bonusEndDate = new Date();
  bonusEndDate.setDate(bonusEndDate.getDate() + 30);
  
  const upgradeDeadline = new Date();
  upgradeDeadline.setDate(upgradeDeadline.getDate() + 7);
  
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });
  
  // Get all plans - one of each type (Basic, Pro, Elite)
  // We need to show all plans regardless of cadence
  const allPlans = [
    packages.items.find(pkg => pkg.name === "KinnoBot - Basic"),
    packages.items.find(pkg => pkg.name === "KinnoBot - Pro"),
    packages.items.find(pkg => pkg.name === "KinnoBot - Elite")
  ].filter(Boolean) as typeof packages.items;
  
  // Set the current plan for mobile view (default to Pro plan)
  useEffect(() => {
    const proPlan = allPlans.find(plan => plan.name === "KinnoBot - Pro");
    setCurrentPlan(proPlan || allPlans[0]);
  }, []);
  
  // Format features for the SinglePlanCard component
  const formatFeatures = (plan: any) => {
    if (!plan) {
      return [];
    }
    
    if (!plan.features) {
      return [];
    }
    
    const formattedFeatures = Object.entries(plan.features).map(([feature, included]) => ({
      title: feature,
      description: featureDescriptions[feature as keyof typeof featureDescriptions]?.description || "",
      included: included as boolean,
      tooltip: featureDescriptions[feature as keyof typeof featureDescriptions]?.tooltip || undefined,
      group: featureDescriptions[feature as keyof typeof featureDescriptions]?.group || "Core Trading Capabilities"
    }));
    
    return formattedFeatures;
  };
  
  // Format features for the comparison chart
  const formatComparisonFeatures = () => {
    // Get all unique features from all plans
    const allFeatures = packageFeatures.map(feature => {
      // Get inclusion status for each plan
      const basic = packages.items.find(p => p.name === "KinnoBot - Basic")?.features[feature] || false;
      const pro = packages.items.find(p => p.name === "KinnoBot - Pro")?.features[feature] || false;
      const elite = packages.items.find(p => p.name === "KinnoBot - Elite")?.features[feature] || false;
      
      return {
        title: feature,
        description: featureDescriptions[feature as keyof typeof featureDescriptions]?.description || "",
        included: {
          basic,
          pro,
          elite
        },
        tooltip: featureDescriptions[feature as keyof typeof featureDescriptions]?.tooltip || undefined,
        group: featureDescriptions[feature as keyof typeof featureDescriptions]?.group || "Core Trading Capabilities"
      };
    });
    
    return allFeatures;
  };
  
  // Calculate original price for yearly plans (20% discount)
  const getOriginalPrice = (plan: any) => {
    const price = parseFloat(plan.price.replace(/[^0-9.]/g, ''));
    const originalPrice = price / 0.8; // Remove 20% discount
    return `$${originalPrice.toFixed(2)}`;
  };
  
  return (
    <section id="packages" ref={containerRef} className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Choose Your <span className="text-electric-cyan">Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Select the perfect KinnoBot plan for your trading strategy
          </p>
        </div>
        
        {/* Upgrade deadline banner */}
        <div className="flex justify-center mb-10 reveal">
          <div className="bg-amber-900/30 border border-amber-500/50 rounded-lg px-6 py-3 text-center max-w-3xl">
            <p className="flex items-center justify-center gap-2 text-amber-300">
              <span className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <span>
                <strong>Limited Time Offer:</strong> {upgradeDeadline.getDate()} days left to upgrade at current prices
              </span>
            </p>
          </div>
        </div>
        
        {/* Feature Comparison Chart */}
        <div className="reveal in-view mb-8">
          <FeatureComparisonChart
            features={formatComparisonFeatures()}
            plans={allPlans.map(plan => ({
              name: plan.name,
              description: planDescriptions[plan.name as keyof typeof planDescriptions] || "",
              price: plan.price,
              originalPrice: getOriginalPrice(plan),
              cadence: plan.cadence,
              ctaLabel: plan.ctaLabel,
              link: plan.link,
              popular: plan.name === "KinnoBot - Pro"
            }))}
            bonusEndDate={bonusEndDate}
            upgradeDeadline={upgradeDeadline}
          />
        </div>
        
        {/* Mobile view - Scrollable notice */}
        {isMobile && (
          <div className="mt-6 mb-4 text-center text-sm text-electric-cyan">
            <p className="flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
              Swipe to compare all plans
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
