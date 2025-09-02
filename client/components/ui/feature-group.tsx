import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, X, Info, ChevronDown, ChevronUp } from "@/lib/icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

interface FeatureItemProps {
  title: string;
  description: string;
  included: boolean | "limited";
  tooltip?: string;
}

interface FeatureGroupProps {
  title: string;
  features: FeatureItemProps[];
  expanded?: boolean;
  className?: string;
}

export function FeatureItem({ title, description, included, tooltip }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-4 py-2 group">
      <div className="flex-shrink-0 mt-1">
        {included === true ? (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-cyan/20 group-hover:bg-electric-cyan/30 transition-colors duration-300">
            <Check className="w-4 h-4 text-electric-cyan" />
          </div>
        ) : included === "limited" ? (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors duration-300">
            <Check className="w-4 h-4 text-amber-500" />
          </div>
        ) : (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground/10">
            <X className="w-4 h-4 text-foreground/40" />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className={cn(
            "text-base font-medium",
            included ? "text-foreground group-hover:text-white transition-colors duration-300" : "text-foreground/50"
          )}>
            {title}
          </h4>
          
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                    <Info className="w-3 h-3 text-foreground/60" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-sm max-w-xs">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          
          {included === "limited" && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-500 font-medium">
              Limited
            </span>
          )}
        </div>
        
        <p className={cn(
          "text-sm",
          included ? "text-foreground/70" : "text-foreground/40"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
}

export function FeatureGroup({ title, features, expanded = false, className }: FeatureGroupProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  
  return (
    <div className={cn("border-b border-white/10 last:border-b-0 py-4", className)}>
      <button 
        className="flex items-center justify-between w-full text-left py-2"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3 className="text-lg font-semibold text-electric-cyan">{title}</h3>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-foreground/60" />
        ) : (
          <ChevronDown className="w-5 h-5 text-foreground/60" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-2 space-y-1">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      )}
    </div>
  );
}
