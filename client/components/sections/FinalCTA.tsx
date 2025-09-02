import { NeonButton } from "@/components/ui/neon-button";
import { useAnimations } from "@/hooks/useAnimations";
import { TrendingUp, Shield, Calendar } from "@/lib/icons";

export function FinalCTA() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });

  return (
    <section id="final-cta" ref={containerRef} className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Background gradient effects */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-blue/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-electric-violet/20 rounded-full filter blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-5xl mx-auto glass-card p-8 md:p-12 lg:p-16 border-2 border-white/10 relative overflow-hidden reveal shadow-glow-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-electric-blue/10 to-electric-violet/10 rounded-full filter blur-xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-electric-cyan/10 to-electric-blue/10 rounded-full filter blur-xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 md:mb-8 animate-pulse-slow">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-violet">
                Start Trading Smarter Today
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10">
              Join over 500 traders who have already transformed their trading with KinnoBot's AI-powered automation
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-14">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black/50 to-black/30 flex items-center justify-center shadow-glow-sm border border-white/10">
                  <TrendingUp className="w-6 h-6 text-electric-cyan" />
                </div>
                <span className="text-lg md:text-xl font-medium text-foreground/90">8.2% Avg. Monthly Return</span>
              </div>
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black/50 to-black/30 flex items-center justify-center shadow-glow-sm border border-white/10">
                  <Shield className="w-6 h-6 text-electric-cyan" />
                </div>
                <span className="text-lg md:text-xl font-medium text-foreground/90">30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black/50 to-black/30 flex items-center justify-center shadow-glow-sm border border-white/10">
                  <Calendar className="w-6 h-6 text-electric-cyan" />
                </div>
                <span className="text-lg md:text-xl font-medium text-foreground/90">Setup in Under 10 Minutes</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-8 mb-10">
              <NeonButton
                size="lg"
                variant="neon"
                onClick={() => {
                  const packagesSection = document.getElementById('packages');
                  if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="magnetic text-lg md:text-xl font-semibold px-8 py-6 md:px-10 md:py-7 shadow-glow-cyan hover:shadow-glow-lg transition-all duration-300"
              >
                Get KinnoBot Now
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
                className="magnetic text-lg md:text-xl font-semibold px-8 py-6 md:px-10 md:py-7 hover:shadow-glow-sm transition-all duration-300"
              >
                See Performance Data
              </NeonButton>
            </div>
            
            <p className="text-foreground/60 text-sm md:text-base">
              Secure checkout via credit card, PayPal, or crypto • Instant delivery • 24/7 support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="bg-black/20 p-6 md:p-8 rounded-lg border border-white/5 hover:border-electric-cyan/30 hover:shadow-glow-sm transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-violet/20 flex items-center justify-center mx-auto mb-6 shadow-glow-sm">
                <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Risk-Free Trial</h3>
              <p className="text-foreground/70 text-base md:text-lg">
                Try KinnoBot risk-free with our 30-day money-back guarantee. No questions asked.
              </p>
            </div>
            <div className="bg-black/20 p-6 md:p-8 rounded-lg border border-white/5 hover:border-electric-cyan/30 hover:shadow-glow-sm transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-violet/20 flex items-center justify-center mx-auto mb-6 shadow-glow-sm">
                <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Instant Access</h3>
              <p className="text-foreground/70 text-base md:text-lg">
                Get immediate access to KinnoBot after purchase. Start trading within minutes.
              </p>
            </div>
            <div className="bg-black/20 p-6 md:p-8 rounded-lg border border-white/5 hover:border-electric-cyan/30 hover:shadow-glow-sm transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue/20 to-electric-violet/20 flex items-center justify-center mx-auto mb-6 shadow-glow-sm">
                <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">Free Updates</h3>
              <p className="text-foreground/70 text-base md:text-lg">
                Receive all future updates and improvements at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
