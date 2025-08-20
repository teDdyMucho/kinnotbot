import { NeonButton } from "@/components/ui/neon-button";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card";
import { steps, whopLink } from "@/constants";
import { CheckCircle2 } from "lucide-react";

export function Steps() {
  return (
    <section id="activate" className="pt-24 pb-8 md:pt-24 md:pb-16 lg:pt-32 relative mt-16 md:mt-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 reveal">
          <img 
            src="/images/kinnobotlogo.png" 
            alt="KinnoBot Logo" 
            className="w-24 h-auto mx-auto mb-6 animate-fadeIn" 
          />
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            {steps.sectionTitle}
          </h2>
        </div>

        <div className="space-y-12">
          {steps.items.map((step, index) => (
            <div
              key={index}
              className={`reveal flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1">
                  <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                    <span className="text-3xl font-display font-bold text-electric-cyan">
                      {index + 1}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1 max-w-2xl">
                <GlassCard variant="hover" size="lg">
                  <GlassCardHeader>
                    <GlassCardTitle className="text-2xl sm:text-3xl mb-2">
                      {step.title}
                    </GlassCardTitle>
                    <GlassCardDescription className="text-lg text-foreground/70 mb-6">
                      {step.subtitle}
                    </GlassCardDescription>
                  </GlassCardHeader>

                  <GlassCardContent>
                    <ul className="space-y-3 mb-8">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-electric-cyan mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <NeonButton
                      onClick={() => window.open(whopLink, "_blank")}
                      size="lg"
                      className="w-full sm:w-auto neo-btn magnetic"
                    >
                      {step.cta}
                    </NeonButton>
                  </GlassCardContent>
                </GlassCard>
              </div>

              {/* Connecting Line */}
              {index < steps.items.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gradient-to-b from-electric-blue to-electric-violet opacity-30 mt-32" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
