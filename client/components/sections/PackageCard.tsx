import { NeonButton } from "@/components/ui/neon-button";
import { Crown, Check, X } from "@/lib/icons";

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
      className={`glass-card relative overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] ${
        pkg.popular
          ? "neo-glow border-2 border-electric-blue/50 transform scale-105 shadow-glow-cyan"
          : "border border-white/20 hover:border-electric-cyan/30 hover:shadow-glow-sm"
      }`}
    >
      {/* Most Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-electric-blue to-electric-violet px-6 py-2 rounded-full shadow-lg border border-white/20 whitespace-nowrap animate-pulse-slow">
            <span className="text-obsidian font-bold text-sm flex items-center gap-2">
              <Crown className="w-4 h-4" />
              {kicker}
            </span>
          </div>
        </div>
      )}

      <div className="p-8 md:p-10">
        {/* Package Header */}
        <div className="text-center mb-10">
          <h3 className={`text-3xl font-bold mb-5 ${pkg.popular ? "text-electric-cyan" : "text-neon"}`}>{pkg.name}</h3>
          <div className="text-5xl font-display font-bold text-white mb-3">
            {pkg.price}
          </div>
          <div className="text-lg text-foreground/70 font-medium">
            {pkg.cadence}
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-5 mb-10 min-h-[320px]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 group">
              {pkg.features[feature] ? (
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-electric-cyan/20 flex-shrink-0 group-hover:bg-electric-cyan/30 transition-colors duration-300">
                  <Check className="w-4 h-4 text-electric-cyan" />
                </div>
              ) : (
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground/10 flex-shrink-0">
                  <X className="w-4 h-4 text-foreground/40" />
                </div>
              )}
              <span
                className={`text-base ${pkg.features[feature] ? "text-foreground group-hover:text-white transition-colors duration-300" : "text-foreground/50"}`}
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
          className="w-full text-lg font-semibold py-5 magnetic"
        >
          {pkg.ctaLabel}
        </NeonButton>

        {pkg.popular && (
          <p className="text-sm text-electric-cyan text-center mt-5 font-medium">
            🔥 Most chosen by traders
          </p>
        )}
      </div>
    </div>
  );
}
