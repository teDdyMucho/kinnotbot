import { NeonButton } from "@/components/ui/neon-button";
import { useAnimations } from "@/hooks/useAnimations";
import { MessageCircle, CheckCircle2 } from "@/lib/icons";

export function Community() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });

  return (
    <section id="community" ref={containerRef} className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Join Our <span className="text-electric-cyan">Trading Community</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Get access to exclusive resources and 24/7 support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* Community Card */}
          <div className="glass-card p-8 reveal">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 flex items-center justify-center mr-5 shadow-glow-sm">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-electric-cyan" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Private Discord Community</h3>
                <p className="text-foreground/70">Connect with 500+ KinnoBot traders</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Daily market analysis and trading insights</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Share strategies and optimization tips</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Weekly live trading sessions with experts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Exclusive educational resources and guides</span>
              </div>
            </div>
            
            <div className="bg-black/30 p-5 rounded-lg mb-8 border border-white/10 hover:border-white/20 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-glow-xs"></div>
                <div className="text-sm">
                  <div className="font-bold text-white">Alex T.</div>
                  <div className="text-foreground/70">Pro Trader</div>
                </div>
              </div>
              <p className="text-foreground/80 text-sm italic">
                "The community has been invaluable for optimizing my KinnoBot settings. I've learned so much from other traders!"
              </p>
            </div>
            
            <NeonButton
              size="lg"
              variant="neon"
              className="w-full py-5 text-lg font-semibold magnetic"
              onClick={() => {
                window.open("https://discord.gg/kinnobot", "_blank");
              }}
            >
              Join Discord Community
            </NeonButton>
          </div>
          
          {/* Support Card */}
          <div className="glass-card p-8 reveal">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 flex items-center justify-center mr-5 shadow-glow-sm">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                  <svg className="w-8 h-8 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">24/7 Premium Support</h3>
                <p className="text-foreground/70">We're here whenever you need help</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Dedicated support team available 24/7</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Priority ticket system for urgent issues</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Remote assistance for technical setup</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">Personalized strategy consultations</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-black/30 p-5 rounded-lg text-center border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="text-3xl font-bold text-electric-cyan mb-2">&lt; 2hr</div>
                <div className="text-sm text-foreground/70">Average Response Time</div>
              </div>
              <div className="bg-black/30 p-5 rounded-lg text-center border border-white/10 hover:border-white/20 transition-colors duration-300">
                <div className="text-3xl font-bold text-electric-cyan mb-2">98%</div>
                <div className="text-sm text-foreground/70">Satisfaction Rate</div>
              </div>
            </div>
            
            <NeonButton
              size="lg"
              variant="neon-outline"
              className="w-full py-5 text-lg font-semibold magnetic"
              onClick={() => {
                window.open("https://support.kinnobot.com", "_blank");
              }}
            >
              Contact Support
            </NeonButton>
          </div>
        </div>
        
        {/* Additional Support Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          <div className="glass-card p-6 text-center hover:shadow-glow-sm transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-black/30 flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-electric-cyan/50 transition-colors duration-300">
              <svg className="w-6 h-6 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Email Support</h4>
            <p className="text-sm text-foreground/70">support@kinnobot.com</p>
          </div>
          <div className="glass-card p-6 text-center hover:shadow-glow-sm transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-black/30 flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-electric-cyan/50 transition-colors duration-300">
              <svg className="w-6 h-6 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Live Chat</h4>
            <p className="text-sm text-foreground/70">Available 24/7</p>
          </div>
          <div className="glass-card p-6 text-center hover:shadow-glow-sm transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-black/30 flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-electric-cyan/50 transition-colors duration-300">
              <svg className="w-6 h-6 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Knowledge Base</h4>
            <p className="text-sm text-foreground/70">Guides & Tutorials</p>
          </div>
          <div className="glass-card p-6 text-center hover:shadow-glow-sm transition-all duration-300 group">
            <div className="w-14 h-14 rounded-full bg-black/30 flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:border-electric-cyan/50 transition-colors duration-300">
              <svg className="w-6 h-6 text-electric-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Video Tutorials</h4>
            <p className="text-sm text-foreground/70">Step-by-step guides</p>
          </div>
        </div>
      </div>
    </section>
  );
}
