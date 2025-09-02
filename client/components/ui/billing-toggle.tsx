import React from "react";
import { cn } from "@/lib/utils";

type BillingCycle = 'monthly' | 'annual' | 'lifetime';

interface BillingToggleProps {
  value: BillingCycle;
  onChange: (value: BillingCycle) => void;
  className?: string;
}

export function BillingToggle({
  value,
  onChange,
  className,
}: BillingToggleProps) {
  return (
    <div className={cn("inline-flex items-center bg-obsidian/50 p-2 rounded-full border border-white/10 shadow-glow-sm max-w-md w-full", className)}>
      <button
        onClick={() => onChange('monthly')}
        className={`flex-1 px-6 py-3 rounded-full transition-all duration-300 font-medium text-center ${
          value === 'monthly' 
            ? 'bg-gradient-to-r from-electric-blue to-electric-violet text-white shadow-md' 
            : 'text-foreground/70 hover:text-white'
        }`}
      >
        MONTHLY
      </button>
      <button
        onClick={() => onChange('annual')}
        className={`flex-1 px-6 py-3 rounded-full transition-all duration-300 font-medium text-center relative ${
          value === 'annual' 
            ? 'bg-gradient-to-r from-electric-blue to-electric-violet text-white shadow-md' 
            : 'text-foreground/70 hover:text-white'
        }`}
      >
        ANNUAL
        <span className="absolute -top-2 right-2 text-xs bg-green-500 text-black px-2 py-0.5 rounded-full font-bold">Best Value</span>
      </button>
      <button
        onClick={() => onChange('lifetime')}
        className={`flex-1 px-6 py-3 rounded-full transition-all duration-300 font-medium text-center relative ${
          value === 'lifetime' 
            ? 'bg-gradient-to-r from-electric-blue to-electric-violet text-white shadow-md' 
            : 'text-foreground/70 hover:text-white'
        }`}
      >
        LIFETIME
      </button>
    </div>
  );
}
