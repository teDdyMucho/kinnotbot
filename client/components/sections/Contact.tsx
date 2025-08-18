import { NeonButton } from "@/components/ui/neon-button";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card";
import { contact, whopLink } from "@/constants";
import { MessageCircle, Calendar } from "lucide-react";

export function Contact() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            {contact.title}
          </h2>
        </div>

        <div className="max-w-2xl mx-auto reveal">
          <GlassCard
            variant="glow"
            size="xl"
            className="text-center border border-white/20"
          >
            <GlassCardHeader>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1">
                <div className="w-full h-full rounded-full bg-obsidian flex items-center justify-center">
                  <MessageCircle className="w-10 h-10 text-electric-cyan" />
                </div>
              </div>
              <GlassCardTitle className="text-3xl sm:text-4xl mb-6">
                Ready to Get Started?
              </GlassCardTitle>
              <GlassCardDescription className="text-xl leading-relaxed text-foreground/80">
                {contact.cta}
              </GlassCardDescription>
            </GlassCardHeader>

            <GlassCardContent>
              <div className="space-y-6">
                <NeonButton
                  size="lg"
                  onClick={() => window.open(whopLink, "_blank")}
                  className="w-full sm:w-auto min-w-[320px] text-lg font-semibold py-4 px-8"
                >
                  <div className="flex items-center justify-center gap-3">
                    <Calendar className="w-6 h-6" />
                    <span>Schedule Your Call</span>
                  </div>
                </NeonButton>

                <p className="text-base text-foreground/60 font-medium">
                  30-minute consultation • No obligations • Expert guidance
                </p>
              </div>
            </GlassCardContent>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
