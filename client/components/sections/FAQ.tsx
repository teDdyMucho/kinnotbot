import { useState } from "react";
import { ChevronDown, MessageCircle } from "@/lib/icons";
import { faq } from "@/constants";
import { cn } from "@/lib/utils";
import { useAnimations } from "@/hooks/useAnimations";
import { NeonButton } from "@/components/ui/neon-button";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Start with first FAQ open
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // Enhanced FAQ items
  const enhancedFaqItems = [
    {
      q: "Do I need trading experience to use KinnoBot?",
      a: "",
      video: "images/For_Proof_Section/faqA1.mp4"
    },
    {
      q: "Does the bot work on any brokers?",
      a: "",
      video: "images/For_Proof_Section/faqA2.mp4"
    },
    {
      q: "How long does it take to set up?",
      a: "",
      video: "images/For_Proof_Section/faqA3.mp4"
    },
    {
      q: "What is KinnoBot and how does it work?",
      a: "KinnoBot is an AI-powered trading bot for MT5 that analyzes market conditions 24/7 and executes trades automatically based on sophisticated algorithms. It uses machine learning to adapt to changing market conditions and optimize trading strategies for maximum profitability."
    },
    {
      q: "Which markets and brokers does KinnoBot support?",
      a: "KinnoBot supports all major forex pairs, commodities, indices, and cryptocurrencies available on MT5. It's compatible with most MT5 brokers worldwide, including popular options like IC Markets, Pepperstone, FxPro, and many others."
    },
    {
      q: "What kind of returns can I expect?",
      a: "While past performance doesn't guarantee future results, KinnoBot has achieved an average monthly return of 8.2% in live trading conditions. Results vary based on market conditions, risk settings, and account size."
    },
    {
      q: "What's the minimum deposit required?",
      a: "KinnoBot can work with accounts starting at $100, but we recommend at least $1,000 for optimal performance and risk management. The bot automatically adjusts position sizes based on your account balance."
    },
    {
      q: "Is there a money-back guarantee?",
      a: "Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied with KinnoBot for any reason, simply contact our support team within 30 days of purchase for a full refund."
    },
    {
      q: "How do I install and set up KinnoBot?",
      a: "Installation is simple: download the bot files from your account dashboard, import them into your MT5 platform, and follow our step-by-step setup guide. The entire process takes less than 10 minutes, and our support team is available to help if needed."
    },
    {
      q: "Can I customize the trading parameters?",
      a: "Absolutely. While KinnoBot works great with default settings, you can customize risk levels, trading pairs, session times, and many other parameters to match your trading preferences and risk tolerance."
    }
  ];

  return (
    <section id="faq" ref={containerRef} className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Frequently <span className="text-electric-cyan">Asked Questions</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Everything you need to know about KinnoBot
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          {enhancedFaqItems.map((item, index) => (
            <div 
              key={index} 
              className={`glass-card mb-5 overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-electric-cyan/50 shadow-glow-sm' : 'border-white/10 hover:border-white/30'}`}
            >
              <button
                className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-xl font-semibold text-white group-hover:text-electric-cyan transition-colors duration-300">{item.q}</span>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 text-electric-cyan transition-transform duration-300 group-hover:scale-110",
                    openIndex === index ? "rotate-180" : ""
                  )}
                />
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-500",
                  openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="p-6 md:p-8 pt-0 text-foreground/80 border-t border-white/10 leading-relaxed">
                  {item.video ? (
                    <div className="video-container py-4">
                      <video 
                        className="w-full rounded-lg shadow-lg" 
                        controls 
                        playsInline
                        preload="metadata"
                        key={`video-${index}-${openIndex === index}`}
                      >
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    item.a
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 md:p-10 max-w-4xl mx-auto hover:shadow-glow-cyan transition-all duration-300">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center shadow-glow-sm">
              <MessageCircle className="w-7 h-7 text-obsidian" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Still have questions?</h3>
              <p className="text-foreground/70">Our support team is here to help</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <NeonButton
              size="lg"
              variant="neon"
              className="flex-1 py-5 text-lg font-semibold magnetic"
              onClick={() => window.open("https://support.kinnobot.com", "_blank")}
            >
              Contact Support
            </NeonButton>
            
            <NeonButton
              size="lg"
              variant="neon-outline"
              className="flex-1 py-5 text-lg font-semibold magnetic"
              onClick={() => window.open("https://docs.kinnobot.com", "_blank")}
            >
              View Documentation
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
}
