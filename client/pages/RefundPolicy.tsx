import { useEffect } from "react";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
} from "../components/ui/glass-card";
import { ScrollToTop } from "../components/ui/ScrollToTop";
import { refundPolicy, disclaimer } from "../constants";
import { CreditCard, AlertTriangle } from "lucide-react";
import { useAnimations } from "../hooks/useAnimations";

export default function RefundPolicy() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
    enableInteractiveEffects: true,
  });

  useEffect(() => {
    // Add scroll offset for anchor jumps so header doesn't cover content
    document.documentElement.style.scrollPaddingTop = "96px";

    return () => {
      document.documentElement.style.scrollPaddingTop = "";
    };
  }, []);
  return (
    <div id="refund" className="min-h-screen" ref={containerRef}>
      <ScrollToTop />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 reveal" id="page-top">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1">
            <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-electric-cyan" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-4">
            {refundPolicy.title}
          </h1>
          <p className="text-lg text-foreground/70">
            Effective Date:{" "}
            {new Date(refundPolicy.effectiveDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        {/* Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {refundPolicy.sections.map((section, index) => (
            <div key={index} className="reveal">
              <GlassCard size="lg">
                <GlassCardHeader>
                  <GlassCardTitle className="text-2xl mb-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center">
                      <span className="text-obsidian font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    {section.heading}
                  </GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <ul className="space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-electric-cyan rounded-full mt-2 flex-shrink-0" />
                        <span className="text-foreground/80 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlassCardContent>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Disclaimer Footer */}
        <div className="max-w-4xl mx-auto mt-16 reveal">
          <GlassCard className="bg-yellow-500/5 border-yellow-500/20">
            <GlassCardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-yellow-300">
                    Important Notice
                  </h3>
                  {disclaimer.slice(1, 3).map((para, index) => (
                    <p
                      key={index}
                      className="text-sm text-foreground/70 leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12 reveal">
          <a
            href="/"
            className="neo-btn inline-flex items-center px-6 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform"
            data-block-autofocus="true"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
