import { NeonButton } from "@/components/ui/neon-button";
import { useAnimations } from "@/hooks/useAnimations";
import { BarChart3, TrendingUp } from "@/lib/icons";

export function DemoProof() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });

  return (
    <section id="demo" ref={containerRef} className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            See <span className="text-electric-cyan">KinnoBot</span> in Action
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Real performance data and live trading results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Performance Chart */}
          <div className="glass-card p-8 reveal hover:shadow-glow-cyan transition-all duration-300">
            <h3 className="text-2xl font-bold text-electric-cyan mb-6 flex items-center">
              <BarChart3 className="w-6 h-6 mr-3" /> Performance Metrics
            </h3>
            
            <div className="bg-black/30 p-5 rounded-lg mb-8">
              <div className="flex justify-between items-center mb-4">
                <div className="text-foreground/80">Monthly Returns</div>
                <div className="text-green-400 font-bold">+8.2% Avg</div>
              </div>
              
              {/* Chart Visualization */}
              <div className="h-64 relative">
                {/* Bar Chart Visualization */}
                <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-around">
                  {[6.2, 7.8, 8.5, 5.9, 9.2, 8.7, 7.4, 10.1, 8.9, 9.5, 7.8, 8.4].map((value, index) => (
                    <div key={index} className="w-1/12 mx-0.5 relative group">
                      <div 
                        className="bg-gradient-to-t from-electric-blue to-electric-violet rounded-t transition-all duration-500 group-hover:from-electric-cyan group-hover:to-electric-blue"
                        style={{ height: `${value * 5}%` }}
                      ></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-obsidian px-2 py-1 rounded text-xs text-electric-cyan opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {value}% return
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Horizontal Grid Lines */}
                {[0, 1, 2, 3, 4].map((line) => (
                  <div 
                    key={line} 
                    className="absolute border-t border-white/10 w-full" 
                    style={{ bottom: `${line * 20}%` }}
                  ></div>
                ))}
                
                {/* Y-axis Labels */}
                <div className="absolute left-0 bottom-0 h-full flex flex-col justify-between text-xs text-foreground/50">
                  <div>10%</div>
                  <div>7.5%</div>
                  <div>5%</div>
                  <div>2.5%</div>
                  <div>0%</div>
                </div>
              </div>
              
              {/* X-axis Labels */}
              <div className="flex justify-around mt-2 text-xs text-foreground/50">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                  <div key={index}>{month}</div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5 mb-8">
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-sm text-foreground/70 mb-1">Win Rate</div>
                <div className="text-2xl font-bold text-electric-cyan">78.4%</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-sm text-foreground/70 mb-1">Profit Factor</div>
                <div className="text-2xl font-bold text-electric-cyan">2.7</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-sm text-foreground/70 mb-1">Max Drawdown</div>
                <div className="text-2xl font-bold text-green-400">3.2%</div>
              </div>
              <div className="bg-black/20 p-4 rounded-lg">
                <div className="text-sm text-foreground/70 mb-1">Avg Trade Time</div>
                <div className="text-2xl font-bold text-electric-cyan">4.2 hrs</div>
              </div>
            </div>
            
            <div className="text-sm text-foreground/60 italic">
              *Performance data based on live trading from Jan-Dec 2024. Past performance does not guarantee future results.
            </div>
          </div>
          
          {/* Video Demo */}
          <div className="glass-card p-8 reveal hover:shadow-glow-cyan transition-all duration-300">
            <h3 className="text-2xl font-bold text-electric-cyan mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-3" /> Live Trading Demo
            </h3>
            
            {/* Custom Video Player */}
            <div className="mb-8">
              <div className="relative aspect-video glass-card border border-white/5 p-4 rounded-lg bg-white/5 transition-all duration-300 hover:bg-white/10 hover:shadow-glow-cyan hover:border-electric-cyan/30">
                <video 
                  className="w-full h-full object-cover rounded" 
                  controls
                  autoPlay
                  muted
                >
                  <source src="/images/KinnoShortStory/DemoKinno.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-electric-cyan"></div>
                </div>
                <p className="text-foreground/80">See how KinnoBot analyzes market conditions in real-time</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-electric-cyan"></div>
                </div>
                <p className="text-foreground/80">Watch automated trade entries and exits with precision timing</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-electric-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-electric-cyan"></div>
                </div>
                <p className="text-foreground/80">Discover how the AI adapts to changing market conditions</p>
              </div>
            </div>
            
            <NeonButton
              size="lg"
              variant="neon"
              className="w-full"
              onClick={() => {
                // In a real implementation, this would open a modal with a video player
                alert("Video demo would play here");
              }}
            >
              Watch Full Demo
            </NeonButton>
          </div>
        </div>
        
        <div className="mt-20 text-center reveal">
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">Ready to experience these results yourself? Get KinnoBot today.</p>
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
            Get KinnoBot Now
          </NeonButton>
        </div>
      </div>
    </section>
  );
}
