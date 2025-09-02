import { useAnimations } from "@/hooks/useAnimations";
import { NeonButton } from "../ui/neon-button";

export function FeaturedOn() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });

  return (
    <section id="social-proof" ref={containerRef} className="py-24 border-y border-white/10 bg-charcoal/30">
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
            Over <span className="text-electric-cyan">500</span> traders running KinnoBot worldwide
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Join our growing community of successful traders using AI to gain an edge in the markets
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {/* Account Screenshot 1 */}
          <div className="glass-card p-6 hover:shadow-glow-cyan transition-all duration-300 reveal transform hover:-translate-y-1">
            <div className="bg-black/40 p-5 rounded-lg mb-5">
              <div className="flex justify-between items-center mb-3">
                <div className="text-electric-cyan font-bold text-lg">Trading Account</div>
                <div className="text-green-400 font-semibold">+$1,240.65</div>
              </div>
              <div className="h-44 bg-gradient-to-r from-electric-blue/20 to-electric-violet/20 rounded flex items-center justify-center">
                <span className="text-white/50">Account Screenshot</span>
              </div>
            </div>
            <div className="text-sm text-foreground/80 italic pl-2 border-l-2 border-electric-cyan">
              "KinnoBot has consistently delivered 8% monthly returns since I started using it."
            </div>
          </div>
          
          {/* Account Screenshot 2 */}
          <div className="glass-card p-6 hover:shadow-glow-cyan transition-all duration-300 reveal transform hover:-translate-y-1">
            <div className="bg-black/40 p-5 rounded-lg mb-5">
              <div className="flex justify-between items-center mb-3">
                <div className="text-electric-cyan font-bold text-lg">Funded Account</div>
                <div className="text-green-400 font-semibold">+$3,587.22</div>
              </div>
              <div className="h-44 bg-gradient-to-r from-electric-blue/20 to-electric-violet/20 rounded flex items-center justify-center">
                <span className="text-white/50">Account Screenshot</span>
              </div>
            </div>
            <div className="text-sm text-foreground/80 italic pl-2 border-l-2 border-electric-cyan">
              "I passed my prop firm challenge in just 9 days with KinnoBot's consistent execution."
            </div>
          </div>
          
          {/* Account Screenshot 3 */}
          <div className="glass-card p-6 hover:shadow-glow-cyan transition-all duration-300 reveal transform hover:-translate-y-1">
            <div className="bg-black/40 p-5 rounded-lg mb-5">
              <div className="flex justify-between items-center mb-3">
                <div className="text-electric-cyan font-bold text-lg">Demo Account</div>
                <div className="text-green-400 font-semibold">+$925.18</div>
              </div>
              <div className="h-44 bg-gradient-to-r from-electric-blue/20 to-electric-violet/20 rounded flex items-center justify-center">
                <span className="text-white/50">Account Screenshot</span>
              </div>
            </div>
            <div className="text-sm text-foreground/80 italic pl-2 border-l-2 border-electric-cyan">
              "Even on my demo account, KinnoBot showed impressive results from day one."
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 reveal">
          <div className="glass-card py-5 px-10 flex flex-col items-center hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-electric-cyan mb-2">500+</div>
            <div className="text-sm text-foreground/80 font-medium">Active Users</div>
          </div>
          <div className="glass-card py-5 px-10 flex flex-col items-center hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-electric-cyan mb-2">24/5</div>
            <div className="text-sm text-foreground/80 font-medium">Market Coverage</div>
          </div>
          <div className="glass-card py-5 px-10 flex flex-col items-center hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-electric-cyan mb-2">98%</div>
            <div className="text-sm text-foreground/80 font-medium">Customer Satisfaction</div>
          </div>
          <div className="glass-card py-5 px-10 flex flex-col items-center hover:shadow-glow-cyan transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-electric-cyan mb-2">15+</div>
            <div className="text-sm text-foreground/80 font-medium">Supported Brokers</div>
          </div>
        </div>

        {/* Steady CTA Button */}
      <div className="flex justify-center mt-12 mb-12 reveal">
        <NeonButton
          size="lg"
          variant="neon"
          onClick={() => {  
            const contactSection = document.getElementById('packages');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="steady-cta min-w-[220px] py-6 text-lg primary"
        >
          Let KinnoBot Trade While You Live
        </NeonButton>
      </div>
      
      </div>
    </section>
  );
}
