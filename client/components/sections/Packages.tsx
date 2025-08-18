import { packages } from "@/constants";
import { PackageTable } from "./PackageTable";
import { PackageCard } from "./PackageCard";

export function Packages() {
  return (
    <section className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            {packages.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            Choose the perfect plan for your trading automation needs
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block max-w-7xl mx-auto reveal">
          <PackageTable
            packages={packages.items}
            features={packages.features}
            kicker={packages.kicker}
          />
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-8 max-w-2xl mx-auto">
          {packages.items.map((pkg, index) => (
            <div key={index} className="reveal">
              <PackageCard
                pkg={pkg}
                features={packages.features}
                kicker={packages.kicker}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
