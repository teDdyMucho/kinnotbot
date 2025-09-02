import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { GlassCard } from "./glass-card";
import { NeonButton } from "./neon-button";
import { FeatureGroup, FeatureItem } from "./feature-group";
import { ChevronUp, ChevronDown, Crown } from "@/lib/icons";

interface PlanFeature {
  title: string;
  description: string;
  included: boolean | "limited";
  tooltip?: string;
  group: string;
}

interface PlanProps {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  cadence: string;
  badge?: string;
  features: PlanFeature[];
  ctaLabel: string;
  link: string;
  popular: boolean;
  className?: string;
}

export function SinglePlanCard({
  name,
  description,
  price,
  originalPrice,
  cadence,
  badge,
  features,
  ctaLabel,
  link,
  popular,
  className,
  ...props
}: PlanProps) {
  // Always show all features, no dropdown needed
  
  // Group features by category
  const groupedFeatures = useMemo(() => {
    if (!features || features.length === 0) {
      console.warn('No features provided to SinglePlanCard');
      return {};
    }
    
    const result = features.reduce<Record<string, PlanFeature[]>>((groups, feature) => {
      const group = feature.group || "Core Features";
      if (!groups[group]) groups[group] = [];
      groups[group].push(feature);
      return groups;
    }, {});
    
    return result;
  }, [features]);
  
  return (
    <GlassCard
      variant={popular ? "glow" : "default"}
      size="lg"
      className={cn(
        "max-w-4xl mx-auto transition-all duration-300",
        popular ? "border-2 border-electric-blue/50 shadow-glow-cyan" : "border border-white/20",
        className
      )}
      {...props}
    >
      {/* Plan Header */}
      <div className="relative p-8 md:p-10 border-b border-white/10">
        {badge && popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-gradient-to-r from-electric-blue to-electric-violet px-6 py-2 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
              <span className="text-obsidian font-bold text-sm flex items-center gap-2">
                <Crown className="w-4 h-4" />
                {badge}
              </span>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <h3 className={cn(
            "text-3xl font-bold mb-2",
            popular ? "text-electric-cyan" : "text-neon"
          )}>
            {name}
          </h3>
          <p className="text-lg text-foreground/70 mb-6">{description}</p>
          
          <div className="flex items-center justify-center mb-2">
            {originalPrice && (
              <span className="text-xl text-foreground/50 line-through mr-2">
                {originalPrice}
              </span>
            )}
            <span className="text-5xl font-display font-bold text-white">
              {price}
            </span>
          </div>
          
          <div className="text-lg text-foreground/70 font-medium mb-6">
            {cadence}
          </div>
          
          <NeonButton
            size="lg"
            variant={popular ? "neon" : "neon-outline"}
            onClick={() => {
              const packagesSection = document.getElementById("packages");
              if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full md:w-auto px-10 text-lg font-semibold py-5 magnetic"
          >
            {ctaLabel}
          </NeonButton>
        </div>
      </div>
      
      {/* Features section - only showing included features */}
      <div className="flex-1 py-6">
        <FeatureGroup 
          title="What's Included"
          expanded={true}
          features={features
            .filter(feature => feature.included)
            .map(feature => ({
              title: feature.title,
              description: feature.description || "",
              included: true,
              tooltip: feature.tooltip
            }))}
        />
      </div>
      
      {/* Footer */}
      <div className="p-6 text-center text-sm text-foreground/60 border-t border-white/10">
        <p className="mb-2">30-day money-back guarantee</p>
        <div className="flex items-center justify-center gap-2">
          <span>Secure checkout via</span>
          <span className="font-medium text-foreground/80">Credit Card</span>
          <span>•</span>
          <span className="font-medium text-foreground/80">PayPal</span>
          <span>•</span>
          <span className="font-medium text-foreground/80">Crypto</span>
        </div>
      </div>
    </GlassCard>
  );
}
