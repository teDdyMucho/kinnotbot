import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card";
import { valueProposition } from "@/constants";
import { useEffect, useRef } from "react";

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
    <section className="py-8 sm:py-10 md:py-12 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 reveal">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-neon">
            {valueProposition.headings[0]}
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
            {valueProposition.supporting}
          </p>
          
          {/* Wistia Video Embed */}
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <div className="relative aspect-video">
              <div ref={videoRef} className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                  <div className="wistia_embed wistia_async_gf9h2jq90f videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
                    <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 1, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
                      <img src="https://fast.wistia.com/embed/medias/gf9h2jq90f/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="Video Thumbnail" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
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
      </div>
    </section>
  );
}
