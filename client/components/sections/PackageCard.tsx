import { NeonButton } from "@/components/ui/neon-button";
import { Crown, Check, X } from "lucide-react";

interface PackageItem {
  name: string;
  price: string;
  cadence: string;
  features: Record<string, boolean>;
  ctaLabel: string;
  link: string;
  popular: boolean;
}

interface PackageCardProps {
  pkg: PackageItem;
  features: string[];
  kicker: string;
}

export function PackageCard({ pkg, features, kicker }: PackageCardProps) {
  return (
    <div
      className={`glass-card relative overflow-hidden ${
        pkg.popular
          ? "neo-glow border-2 border-electric-blue/50 transform scale-105"
          : "border border-white/20 hover:border-white/30 transition-colors"
      }`}
    >
      {/* Most Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-electric-blue to-electric-violet px-6 py-2 rounded-full shadow-lg border border-white/20 whitespace-nowrap">
            <span className="text-obsidian font-bold text-sm flex items-center gap-2">
              <Crown className="w-4 h-4" />
              {kicker}
            </span>
          </div>
        </div>
      )}

      <div className="p-8">
        {/* Package Header */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-neon mb-4">{pkg.name}</h3>
          <div className="text-5xl font-display font-bold text-foreground mb-2">
            {pkg.price}
          </div>
          <div className="text-lg text-foreground/70 font-medium">
            {pkg.cadence}
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              {pkg.features[feature] ? (
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-cyan/20 flex-shrink-0">
                  <Check className="w-4 h-4 text-electric-cyan" />
                </div>
              ) : (
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground/10 flex-shrink-0">
                  <X className="w-4 h-4 text-foreground/40" />
                </div>
              )}
              <span
                className={`text-base ${pkg.features[feature] ? "text-foreground" : "text-foreground/50"}`}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <NeonButton
          size="lg"
          variant={pkg.popular ? "neon" : "neon-outline"}
          onClick={() => window.open(pkg.link, "_blank")}
          className="w-full text-lg font-semibold py-4"
        >
          {pkg.ctaLabel}
        </NeonButton>

        {pkg.popular && (
          <p className="text-sm text-electric-cyan text-center mt-4 font-medium">
            🔥 Most chosen by traders
          </p>
        )}
      </div>
    </div>
  );
}
