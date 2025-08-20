import { NeonButton } from "@/components/ui/neon-button";
import { hero, whopLink } from "@/constants";
import { useAnimations } from "@/hooks/useAnimations";

export function Hero() {
  const { containerRef } = useAnimations({
    enableHeroBoot: true,
    enableHeroBackground: true,
    enableInteractiveEffects: true,
  });

  return (
    <section
      id="hero"
      ref={containerRef}
      className="hero-section hero-area min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Coin layer for floating coins */}
      <div className="coin-layer"></div>

      {/* Enhanced rotating background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="bg-rotator"></div>
        <div className="light-sweep"></div>
      </div>

      {/* Hero cursor glow */}
      <div id="heroGlow" />

      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-electric-violet/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-violet/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 hero-boot">
            <img 
              src="/images/kinnobotlogo.png" 
              alt="KinnoBot Logo" 
              className="w-24 h-24 mx-auto hero-logo" 
            />
          </div>
          <h1 className="hero-title text-6xl sm:text-7xl lg:text-8xl font-display font-bold mb-6 text-white">
            Trade Smart with{" "}
            <span className="hero-highlight neon-headline">KINNO BOT</span>
          </h1>

          <p className="hero-sub text-xl sm:text-2xl lg:text-3xl text-foreground/90 mb-8 font-medium">
            {hero.sub}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            {hero.bullets.map((bullet, index) => (
              <div
                key={index}
                className="hero-chip tilt glass-card p-4 text-center group hover:shadow-glow-violet transition-all duration-300"
              >
                <span className="text-electric-cyan font-semibold group-hover:text-electric-blue transition-colors">
                  {bullet}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {hero.ctas.map((cta, index) => (
              <NeonButton
                key={index}
                size="lg"
                variant={index === 0 ? "neon" : "neon-outline"}
                onClick={() => window.open(whopLink, "_blank")}
                className={`hero-cta magnetic min-w-[160px] ${index === 0 ? "primary" : ""}`}
              >
                {cta}
              </NeonButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
