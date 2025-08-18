import { featuredOn } from "@/constants";

export function FeaturedOn() {
  // Placeholder logos - would be replaced with actual logo images
  const placeholderLogos = [
    "Forbes",
    "TechCrunch",
    "Bloomberg",
    "Reuters",
    "CNBC",
    "Yahoo Finance",
  ];

  return (
    <section className="py-6 border-y border-white/10 bg-charcoal/30">
      <div className="container mx-auto px-4">
        <div className="text-center reveal">
          <p className="text-foreground/60 font-semibold mb-8 text-sm uppercase tracking-wider">
            {featuredOn.title}
          </p>

          <div className="marquee">
            <div className="marquee__track">
              {/* First set */}
              {placeholderLogos.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 px-8 py-4 glass-card tilt opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-foreground/70 font-semibold text-lg">
                    {logo}
                  </span>
                </div>
              ))}

              {/* Duplicate set for seamless scroll */}
              {placeholderLogos.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 px-8 py-4 glass-card tilt opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
                >
                  <span className="text-foreground/70 font-semibold text-lg">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
