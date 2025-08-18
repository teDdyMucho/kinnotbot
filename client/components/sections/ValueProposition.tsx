import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card";
import { valueProposition } from "@/constants";

export function ValueProposition() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6 text-neon">
            {valueProposition.headings[0]}
          </h2>

          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {valueProposition.supporting}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
