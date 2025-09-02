import {
  Monitor,
  Smartphone,
  Watch,
  Tablet,
  Settings,
  TrendingUp,
  BarChart3,
} from "@/lib/icons";
import { useAnimations } from "@/hooks/useAnimations";
import { SectionConnector } from "@/components/ui/SectionConnector";
import { NeonButton } from "@/components/ui/neon-button";

export function VisualShowcase() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
    enableInteractiveEffects: true,
  });
  return (
    <section id="experience" ref={containerRef} className="pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-8 lg:pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8 lg:mb-10 reveal">
          <img 
            src="/images/kinnobotlogo.png" 
            alt="KinnoBot Logo" 
            className="w-24 h-auto mx-auto mb-6 animate-fadeIn" 
          />
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-4 md:mb-6">
            Experience KinnoBot
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70 px-2">
            See our AI trading platform in action across all your devices
          </p>
        </div>

        {/* Steady CTA Button */}
      <div className="flex justify-center mt-8 mb-8 reveal">
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
          Dominate the Charts with KinnoBot
        </NeonButton>
      </div>

        {/* Experience Grid */}
        <div className="reveal" style={{ height: "auto", minHeight: "auto", maxHeight: "auto", margin: "0" }}>
          <div className="exp-wrap w-full">
            <div className="exp-grid w-full">
              {/* Trading Controls */}
              <div className="card exp-controls tilt">
                <div className="card-media">
                  <div className="panel-label">
                    <Settings className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Trading Controls</h3>
                  </div>
                  <img
                    src="/images/kinnobotrun.gif"
                    alt="KinnoBot Trading Controls"
                    className="kinnobot-gif"
                  />
                </div>
              </div>

              {/* Dashboard */}
              <div className="card exp-dashboard tilt">
                <div className="card-media dashboard-media">
                  <div className="panel-label">
                    <BarChart3 className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Dashboard</h3>
                  </div>
                  <img
                    src="/images/asdsad.gif"
                    alt="KinnoBot Dashboard"
                    className="kinnobot-gif"
                  />
                </div>
              </div>

              {/* Desktop Trading */}
              <div className="card exp-desktop tilt">
                <div className="card-media">
                  <div className="panel-label">
                    <Monitor className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Desktop Trading</h3>
                  </div>
                  <img
                    src="/images/fgr.gif"
                    alt="KinnoBot Desktop Interface"
                    className="kinnobot-gif"
                  />
                </div>
              </div>

              {/* Mobile Trading */}
              <div className="card exp-mobile tilt">
                <div className="card-media mobile-media">
                  <div className="panel-label">
                    <Smartphone className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Mobile Trading</h3>
                  </div>
                  <img
                    src="/images/SHAWN.gif"
                    alt="KinnoBot Mobile Interface"
                    className="kinnobot-gif"
                  />
                </div>
              </div>

              {/* Smartwatch */}
              <div className="card exp-watch tilt">
                <div className="card-media">
                  <div className="panel-label">
                    <Watch className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Smartwatch</h3>
                  </div>
                  <img
                    src="/images/smartwatch.png"
                    alt="KinnoBot Smartwatch Interface"
                    className="kinnobot-gif"
                  />
                </div>
              </div>

              {/* Integration Workflow */}
              <div className="card exp-flow tilt">
                <div className="card-media">
                  <div className="panel-label">
                    <TrendingUp className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">
                      Integration Workflow
                    </h3>
                  </div>
                  <img
                    src="/images/integration-workflow.png"
                    alt="KinnoBot Integration Workflow"
                    className="kinnobot-gif"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
