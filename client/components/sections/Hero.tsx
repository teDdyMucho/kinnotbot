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
      className="hero-section hero-area min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
    >
      {/* Coin layer for floating coins */}
      <div className="coin-layer"></div>

      {/* Enhanced background - removed bg-rotator */}
      <div className="hero-bg" aria-hidden="true">
        <div className="light-sweep"></div>
      </div>

      {/* Hero cursor glow */}
      <div id="heroGlow" />

      {/* Background elements with focused linear line */}
      {/* <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(180deg, rgba(10,16,37,1) 0%, rgba(13,27,62,1) 50%, rgba(10,16,37,1) 100%)'
        }}
      /> */}

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230066FF%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      </div>
      
        {/* Floating Particles */}
        <div className="particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>

      {/* Focused linear line */}
      {/* <div 
        className="absolute left-0 right-0 h-[2px] top-1/2 -translate-y-1/2 z-[1]" 
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(66,138,255,0.7) 50%, transparent 100%)',
          boxShadow: '0 0 15px 5px rgba(66,138,255,0.3)'
        }}
      /> */}
      
      {/* Subtle glow effects */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[70%] bg-[#1a3a7a]/10 rounded-full blur-[100px]" /> */}
      
      {/* Smooth transition to black */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-[#0a1025] to-transparent" /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-8 md:pt-12">
          <div className="mb-8 hero-boot">
            <img 
              src="/images/kinnobotlogo.png" 
              alt="KinnoBot Logo" 
              className="w-20 h-20 md:w-24 md:h-24 mx-auto hero-logo" 
            />
          </div>
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-display font-bold mb-8 text-white leading-tight">
            Trade Like A PRO <br /> <span className="hero-highlight neon-headline">With Zero Effort!</span>
          </h1>

          <p className="hero-sub text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-10 font-medium max-w-3xl mx-auto">
            Start trading with AI in 5 minutes. Plug-and-play on MT5. No experience required.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12 sm:mb-14 md:mb-16 max-w-3xl mx-auto">
            <div className="hero-chip tilt glass-card py-4 px-3 text-center group hover:shadow-glow-violet transition-all duration-300">
              <span className="text-electric-cyan font-semibold group-hover:text-electric-blue transition-colors text-sm md:text-base">
                MT5 Compatible
              </span>
            </div>
            <div className="hero-chip tilt glass-card py-4 px-3 text-center group hover:shadow-glow-violet transition-all duration-300">
              <span className="text-electric-cyan font-semibold group-hover:text-electric-blue transition-colors text-sm md:text-base">
                500+ Active Users
              </span>
            </div>
            <div className="hero-chip tilt glass-card py-4 px-3 text-center group hover:shadow-glow-violet transition-all duration-300">
              <span className="text-electric-cyan font-semibold group-hover:text-electric-blue transition-colors text-sm md:text-base">
                24/7 Support
              </span>
            </div>
            {/* <div className="hero-chip tilt glass-card py-4 px-3 text-center group hover:shadow-glow-violet transition-all duration-300">
              <span className="text-electric-cyan font-semibold group-hover:text-electric-blue transition-colors text-sm md:text-base">
                Money-Back Guarantee
              </span>
            </div> */}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-4">
            <NeonButton
              size="lg"
              variant="neon"
              onClick={() => {
                const packagesSection = document.getElementById('packages');
                if (packagesSection) {
                  packagesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hero-cta magnetic min-w-[180px] py-6 text-lg primary w-full sm:w-auto"
            >
              Start Trading with KinnoBot
            </NeonButton>
            
            <NeonButton
              size="lg"
              variant="neon-outline"
              onClick={() => {
                const demoSection = document.getElementById('demo');
                if (demoSection) {
                  demoSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="hero-cta magnetic min-w-[180px] py-6 text-lg secondary w-full sm:w-auto"
            >
              Watch How It Works
            </NeonButton>

            
          </div>
        </div>
      </div>
    </section>
  );
}
