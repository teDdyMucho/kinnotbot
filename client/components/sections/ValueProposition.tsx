import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card";
import { valueProposition } from "@/constants";
import { useEffect, useRef } from "react";
import { NeonButton } from "../ui/neon-button";

// Add Wistia types
declare global {
  interface Window {
    _wq: any[];
  }
}

export function ValueProposition() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Wistia scripts
    const playerScript = document.createElement('script');
    playerScript.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    playerScript.async = true;
    document.body.appendChild(playerScript);
    
    // Initialize video once scripts are loaded
    playerScript.onload = () => {
      if (window._wq === undefined) window._wq = [];
      window._wq.push({
        id: 'gf9h2jq90f',
        onReady: function(video: any) {
          // Video is ready to play
          console.log('Wistia video ready');
        }
      });
    };

    return () => {
      // Cleanup
      document.body.removeChild(playerScript);
    };
  }, []);
  return (
    <section className="py-24 relative">
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            {valueProposition.headings[0]}
          </h2>

          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {valueProposition.supporting}
          </p>
          
          {/* Custom Video Player */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <div className="relative aspect-video glass-card border border-white/5 p-4 rounded-lg bg-white/5 transition-all duration-300 hover:bg-white/10 hover:shadow-glow-cyan hover:border-electric-cyan/30">
              <video 
                className="w-full h-full object-cover rounded" 
                controls
                autoPlay
                muted
              >
                <source src="/images/KinnoShortStory/KinoStory.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>


        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {valueProposition.cards.map((card, index) => (
            <div key={index} className="reveal">
              <GlassCard variant="hover" className="h-full">
                <GlassCardHeader>
                  <GlassCardTitle className="text-2xl mb-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-electric-blue to-electric-violet p-0.5">
                      <div className="w-full h-full rounded-lg bg-obsidian flex items-center justify-center">
                        <div className="w-6 h-6 bg-gradient-to-br from-electric-blue to-electric-violet rounded" />
                      </div>
                    </div>
                    {card.title}
                  </GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <GlassCardDescription className="text-base leading-relaxed">
                    {card.body}
                  </GlassCardDescription>
                </GlassCardContent>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Steady CTA Button */}
        <div className="flex justify-center mt-12 mb-12 reveal">
          <NeonButton
            size="lg"
            variant="neon"
            onClick={() => {  
              const packagesSection = document.getElementById('packages');
              if (packagesSection) {
                packagesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="steady-cta min-w-[220px] py-6 text-lg primary"
          >
            Trade Smarter, Not Harder with KinnoBot
          </NeonButton>
        </div>
      
      </div>
    </section>
  );
}
