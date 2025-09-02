import React from "react";
import { cn } from "@/lib/utils";
import { Check, X, Info, Crown, Clock } from "@/lib/icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { NeonButton } from "./neon-button";

interface PlanFeature {
  title: string;
  description: string;
  included: {
    basic: boolean | "limited";
    pro: boolean | "limited";
    elite: boolean | "limited";
  };
  tooltip?: string;
  group: string;
}

interface FeatureComparisonChartProps {
  features: PlanFeature[];
  plans: {
    name: string;
    description: string;
    price: string;
    originalPrice?: string;
    cadence: string;
    ctaLabel: string;
    link: string;
    popular: boolean;
  }[];
  className?: string;
  bonusEndDate?: Date;
  upgradeDeadline?: Date;
}

export function FeatureComparisonChart({
  features,
  plans,
  className,
  bonusEndDate,
  upgradeDeadline,
}: FeatureComparisonChartProps) {
  // Group features by category
  const groupedFeatures = features.reduce<Record<string, PlanFeature[]>>((groups, feature) => {
    const group = feature.group || "Core Features";
    if (!groups[group]) groups[group] = [];
    groups[group].push(feature);
    return groups;
  }, {});

  // Format date for display
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  // Calculate days remaining until deadline
  const getDaysRemaining = (deadline: Date) => {
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      {/* We've moved the urgency banner to the Packages component */}

      <div className="min-w-[768px]">
        {/* Header row with plan info */}
        <div className="grid grid-cols-4 gap-6 mb-8 mt-8">
          <div className="col-span-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 mb-2">
              <img src="/images/kinnobotlogo.png" alt="KinnoBot Logo" className="w-20 h-20" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">KINNO BOT</h3>
            <p className="text-xs text-foreground/70">Ai-powered trading</p>
          </div>
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "col-span-1 p-6 rounded-lg text-center relative transform transition-all duration-300",
                plan.popular 
                  ? "bg-gradient-to-b from-electric-blue/20 to-electric-violet/10 border-2 border-electric-blue/50 scale-105 shadow-lg shadow-electric-blue/20 z-10" 
                  : "bg-white/5 border border-white/10 hover:scale-102 hover:bg-white/8 hover:shadow-md hover:shadow-white/5"
              )}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-electric-blue to-electric-violet px-6 py-2 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
                    <span className="text-obsidian font-bold text-sm flex items-center gap-2">
                      <Crown className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                </div>
              )}
              
              <h3 className={cn(
                "text-2xl font-bold mb-2",
                plan.popular ? "text-electric-cyan" : "text-white"
              )}>
                {plan.name.replace('KinnoBot - ', '')}
              </h3>
              
              <p className="text-sm text-foreground/70 mb-4 h-12">{plan.description}</p>
              
              {/* <div className="flex items-center justify-center mb-2">
                {plan.originalPrice && (
                  <span className="text-base text-foreground/50 line-through mr-2">
                    {plan.originalPrice}
                  </span>
                )}
                <span className="text-3xl font-display font-bold text-white">
                  {plan.price}
                </span>
              </div>
              
              <div className="text-sm text-foreground/70 font-medium mb-4">
                {plan.cadence === "one-time" ? "lifetime access" : plan.cadence}
              </div> */}
              
              {/* Bonus callout for Pro plan */}
              { plan.popular && bonusEndDate && (
                <div className="bg-electric-blue/20 border border-electric-blue/30 rounded p-2 mb-4 text-xs text-electric-cyan">
                  <strong>BONUS:</strong> Free 1-on-1 setup call until {formatDate(bonusEndDate)}
                </div>
              )}
              
              {plan.name === "KinnoBot - Elite" && (
                <div className="bg-electric-blue/20 border border-electric-blue/30 rounded p-2 mb-4 text-xs text-electric-cyan">
                  <strong>BONUS:</strong> Free 1-on-1 setup call until {formatDate(bonusEndDate)}
                </div>
              )}

              <NeonButton
                size="sm"
                variant={plan.popular ? "neon" : "neon-outline"}
                className="w-full text-sm font-semibold py-3"
                onClick={() => window.open(plan.link, '_blank')}
              >
                {plan.ctaLabel}
              </NeonButton>

           
            </div>
          ))}
        </div>
        
        {/* Feature comparison rows by group */}
        {Object.entries(groupedFeatures).map(([groupName, groupFeatures]) => (
          <div key={groupName} className="mb-8">
            <h4 className="text-lg font-semibold text-electric-cyan border-b border-white/10 pb-2 mb-4">
              {groupName}
            </h4>
            
            {groupFeatures.map((feature, featureIndex) => (
              <div 
                key={featureIndex} 
                className={cn(
                  "grid grid-cols-4 gap-4 py-3",
                  featureIndex % 2 === 0 ? "bg-white/5" : "bg-transparent",
                  "rounded-lg"
                )}
              >
                {/* Feature name and description */}
                <div className="col-span-1 flex items-center pl-4 bg-white/5 rounded-l-lg border-l border-t border-b border-white/10">
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-medium text-white">
                        {feature.title}
                      </h5>
                      
                      {feature.tooltip && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                                <Info className="w-3 h-3 text-foreground/60" />
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-sm max-w-xs">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </div>
                    <p className="text-xs text-foreground/70 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
                
                {/* Feature availability for each plan */}
                {plans.map((plan, planIndex) => {
                  const planKey = plan.name.replace('KinnoBot - ', '').toLowerCase() as 'basic' | 'pro' | 'elite';
                  const included = feature.included[planKey];
                  
                  return (
                    <div 
                      key={planIndex} 
                      className={cn(
                        "col-span-1 flex items-center justify-center",
                        plan.popular ? "bg-electric-blue/10" : ""
                      )}
                    >
                      {included === true ? (
                        <div className={cn(
                          "flex items-center justify-center w-8 h-8 rounded-full",
                          plan.popular 
                            ? "bg-electric-cyan/20" 
                            : "bg-white/10"
                        )}>
                          <Check className={cn(
                            "w-5 h-5",
                            plan.popular 
                              ? "text-electric-cyan" 
                              : "text-white/70"
                          )} />
                        </div>
                      ) : included === "limited" ? (
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/20">
                          <Check className="w-5 h-5 text-amber-500" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10">
                          <X className="w-5 h-5 text-foreground/40" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
