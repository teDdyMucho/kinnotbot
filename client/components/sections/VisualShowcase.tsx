import {
  Monitor,
  Smartphone,
  Watch,
  Tablet,
  Settings,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import { useAnimations } from "@/hooks/useAnimations";

export function VisualShowcase() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
    enableInteractiveEffects: true,
  });
  return (
    <section id="experience" ref={containerRef} className="py-6 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            Experience KinnoBot
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            See our AI trading platform in action across all your devices
          </p>
        </div>

        {/* Experience Grid */}
        <div className="reveal" style={{ height: "1750px" }}>
          <div className="exp-wrap">
            <div className="exp-grid">
              {/* Trading Controls */}
              <div className="card exp-controls tilt">
                <div className="card-media">
                  <div className="panel-label">
                    <Settings className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Trading Controls</h3>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F26165d6270994562923ef0e1beea8cf4%2F6e8639d0487d41fe93f9768ff1b4066d?format=webp&width=800"
                    alt="KinnoBot Trading Controls"
                  />
                </div>
              </div>

              {/* Dashboard */}
              <div className="card exp-dashboard tilt">
                <div
                  className="card-media"
                  style={{
                    width: "auto",
                    padding: "20px",
                    maxWidth: "1100px",
                    minWidth: "640px",
                    minHeight: "440px",
                    height: "auto",
                    alignSelf: "center",
                    flexGrow: "0",
                  }}
                >
                  <div className="panel-label">
                    <BarChart3 className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Dashboard</h3>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fceb01c8090ad439481a6fd86a803fe4a%2Ff73f22c67e8b4ff7af61d30f4233190e?format=webp&width=800"
                    alt="KinnoBot Dashboard"
                    style={{
                      maxHeight: "380%",
                      minWidth: "600px",
                      minHeight: "400px",
                      maxWidth: "580%",
                      width: "770px",
                      height: "480px",
                      margin: "0 50px",
                      padding: "50px 150px 70px",
                    }}
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
                    src="https://cdn.builder.io/api/v1/image/assets%2F26165d6270994562923ef0e1beea8cf4%2Fed76c1f9af604ced8a9ae941a28065cc?format=webp&width=800"
                    alt="KinnoBot Desktop Interface"
                  />
                </div>
              </div>

              {/* Mobile Trading */}
              <div className="card exp-mobile tilt">
                <div className="card-media">
                  <div className="panel-label">
                    <Smartphone className="w-8 h-8 text-electric-cyan mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">Mobile Trading</h3>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F26165d6270994562923ef0e1beea8cf4%2Ff598d8108da84c2fa88c8469ed5bcd57?format=webp&width=800"
                    alt="KinnoBot Mobile Interface"
                    style={{ padding: "20px" }}
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
                    src="https://cdn.builder.io/api/v1/image/assets%2F26165d6270994562923ef0e1beea8cf4%2F1d9821b4ed3f4aafa58cc2124ab89fec?format=webp&width=800"
                    alt="KinnoBot Smartwatch Interface"
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
                    src="https://cdn.builder.io/api/v1/image/assets%2F26165d6270994562923ef0e1beea8cf4%2F7fe7f61e1e5d4dafaf2e7c4edbb865b6?format=webp&width=800"
                    alt="KinnoBot Integration Workflow"
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
