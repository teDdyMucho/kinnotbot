import { NeonButton } from "@/components/ui/neon-button";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card";
import { steps, whopLink } from "@/constants";
import { CheckCircle2, TrendingUp, BarChart3, Settings, CreditCard } from "@/lib/icons";
import { useAnimations } from "@/hooks/useAnimations";

export function Steps() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });
  
  return (
    <section id="how-it-works" ref={containerRef} className="pt-8 pb-16 relative overflow-hidden section-ambient">
      <div className="ambient-layer ambient-lines" aria-hidden="true"></div>
      <div className="edge-glow edge-left" aria-hidden="true"></div>
      <div className="edge-glow edge-right" aria-hidden="true"></div>
      <div className="floating-orbs" aria-hidden="true">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            How <span className="text-electric-cyan">KinnoBot</span> Works
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Get started in minutes with our simple setup process and let AI handle your trades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {/* Connecting line between steps */}
          <div className="hidden lg:block absolute top-24 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-electric-blue to-electric-violet z-0"></div>
          {/* Step 1 */}
          <div className="glass-card p-6 reveal hover:shadow-glow-cyan transition-all duration-300 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 flex items-center justify-center shadow-glow-sm">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                  <CreditCard className="w-10 h-10 text-electric-cyan" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-5">1. Download & Install</h3>
            <p className="text-foreground/70 text-center mb-6">
              Download KinnoBot and install it on your MT5 platform in just a few clicks
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Compatible with all MT5 versions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Simple drag & drop installation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Works on Windows & Mac</span>
              </li>
            </ul>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card p-6 reveal hover:shadow-glow-cyan transition-all duration-300 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 flex items-center justify-center shadow-glow-sm">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                  <Settings className="w-10 h-10 text-electric-cyan" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-5">2. Configure Bot</h3>
            <p className="text-foreground/70 text-center mb-6">
              Set your risk parameters and trading preferences with our intuitive interface
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Customize risk per trade</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Choose trading pairs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Set trading hours</span>
              </li>
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="glass-card p-6 reveal hover:shadow-glow-cyan transition-all duration-300 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 flex items-center justify-center shadow-glow-sm">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-electric-cyan" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-5">3. Activate Trading</h3>
            <p className="text-foreground/70 text-center mb-6">
              Turn on KinnoBot and let AI-powered algorithms start trading for you
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">One-click activation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">24/5 automated trading</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Smart risk management</span>
              </li>
            </ul>
          </div>
          
          {/* Step 4 */}
          <div className="glass-card p-6 reveal hover:shadow-glow-cyan transition-all duration-300 relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 flex items-center justify-center shadow-glow-sm">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                  <BarChart3 className="w-10 h-10 text-electric-cyan" />
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-5">4. Monitor Results</h3>
            <p className="text-foreground/70 text-center mb-6">
              Track your performance and watch your account grow with real-time analytics
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Real-time trade tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Performance analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-electric-cyan mt-1 flex-shrink-0" />
                <span className="text-sm text-foreground/80">Exportable reports</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 text-center reveal">
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">Ready to experience the power of AI trading? Get started with KinnoBot today and transform your trading results.</p>
          <NeonButton
            size="lg"
            variant="neon"
            onClick={() => {
              const packagesSection = document.getElementById('packages');
              if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="magnetic py-6 px-10 text-lg"
          >
            Get Started Today
          </NeonButton>
        </div>
      </div>
    </section>
  );
}
