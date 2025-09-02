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

interface PackageTableProps {
  packages: PackageItem[];
  features: string[];
  kicker: string;
}

export function PackageTable({
  packages,
  features,
  kicker,
}: PackageTableProps) {
  return (
    <div className="glass-card overflow-visible border border-white/10 shadow-glow-sm">
      {/* Package Headers */}
      <div className="grid grid-cols-4 border-b border-white/20">
        {/* Features Column Header */}
        <div className="p-6 text-center border-r border-white/10">
          <h3 className="text-xl font-semibold text-foreground/90">Features</h3>
        </div>

        {/* Package Headers */}
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`p-6 text-center relative border-r border-white/10 last:border-r-0 ${
              pkg.popular
                ? "bg-gradient-to-b from-electric-blue/15 to-electric-violet/15 border-x-2 border-electric-blue/50"
                : "hover:bg-white/5 transition-colors duration-300"
            }`}
          >
            {/* Most Popular Badge */}
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-30">
                <div className="bg-gradient-to-r from-electric-blue to-electric-violet px-6 py-2 rounded-full shadow-lg border border-white/20 whitespace-nowrap animate-pulse-slow">
                  <span className="text-obsidian font-bold text-sm flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    {kicker}
                  </span>
                </div>
              </div>
            )}

            <div className="pt-4">
              <h3 className={`text-2xl font-bold mb-5 ${pkg.popular ? "text-electric-cyan" : "text-neon"}`}>{pkg.name}</h3>
              <div className="text-4xl font-display font-bold text-white mb-3">
                {pkg.price}
              </div>
              <div className="text-base text-foreground/70 font-medium">
                {pkg.cadence}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Rows */}
      {features.map((feature, featureIndex) => (
        <div
          key={featureIndex}
          className={`grid grid-cols-4 border-b border-white/10 last:border-b-0 min-h-[54px] ${
            featureIndex % 2 === 0 ? "bg-white/5" : "bg-transparent"
          } hover:bg-white/10 transition-colors duration-300`}
        >
          {/* Feature Name */}
          <div className="p-4 flex items-center border-r border-white/10">
            <span className="text-foreground/90 font-medium text-base">
              {feature}
            </span>
          </div>

          {/* Package Feature Indicators */}
          {packages.map((pkg, pkgIndex) => (
            <div
              key={pkgIndex}
              className={`p-4 flex items-center justify-center border-r border-white/10 last:border-r-0 group ${
                pkg.popular ? "bg-electric-blue/8" : ""
              }`}
            >
              {pkg.features[feature] ? (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-electric-cyan/20 shadow-glow-xs group-hover:bg-electric-cyan/30 group-hover:shadow-glow-sm transition-all duration-300">
                  <Check
                    className="w-5 h-5 text-electric-cyan font-bold"
                    aria-label="Included"
                  />
                </div>
              ) : (
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10">
                  <X
                    className="w-5 h-5 text-foreground/40"
                    aria-label="Not included"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      {/* CTA Row */}
      <div className="grid grid-cols-4 border-t-2 border-white/20 bg-white/10">
        <div className="p-10 border-r border-white/10"></div>
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`p-10 border-r border-white/10 last:border-r-0 ${
              pkg.popular ? "bg-electric-blue/8" : ""
            }`}
          >
            <NeonButton
              size="lg"
              variant={pkg.popular ? "neon" : "neon-outline"}
              onClick={() => window.open(pkg.link, "_blank")}
              className="w-full text-base font-semibold py-5 magnetic"
            >
              {pkg.ctaLabel}
            </NeonButton>
            {pkg.popular && (
              <p className="text-sm text-electric-cyan text-center mt-3 font-medium">
                🔥 Most chosen by traders
              </p>
            )}
          </div>
        ))}
      </div>
      
      {/* Disclaimer */}
      <div className="p-4 text-center text-sm text-foreground/60 border-t border-white/10">
        All plans include 24/7 support and free updates. 30-day money-back guarantee.
      </div>
    </div>
  );
}
