import React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "@/lib/icons";

interface PlanSelectorProps {
  plans: string[];
  currentPlanIndex: number;
  onChange: (index: number) => void;
  className?: string;
}

export function PlanSelector({
  plans,
  currentPlanIndex,
  onChange,
  className,
}: PlanSelectorProps) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <button
        onClick={() => onChange(currentPlanIndex === 0 ? plans.length - 1 : currentPlanIndex - 1)}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300 border border-white/10 hover:border-electric-cyan/30 hover:shadow-glow-sm"
        aria-label="Previous plan"
      >
        <ChevronLeft className="w-5 h-5 text-electric-cyan" />
      </button>
      
      <div className="flex items-center gap-2">
        {plans.map((plan, index) => (
          <button
            key={index}
            onClick={() => onChange(index)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              // Only highlight Pro plan
              plan === "Pro"
                ? "bg-gradient-to-r from-electric-blue to-electric-violet text-white shadow-glow-sm"
                : "bg-white/10 text-foreground/70 hover:bg-white/20 hover:text-white"
            )}
          >
            {plan}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => onChange(currentPlanIndex === plans.length - 1 ? 0 : currentPlanIndex + 1)}
        className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors duration-300 border border-white/10 hover:border-electric-cyan/30 hover:shadow-glow-sm"
        aria-label="Next plan"
      >
        <ChevronRight className="w-5 h-5 text-electric-cyan" />
      </button>
    </div>
  );
}
