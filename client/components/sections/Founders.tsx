import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/ui/glass-card";
import { founders } from "@/constants";
import { TikTokIcon, YouTubeIcon, InstagramIcon } from "@/components/ui/social-icons";

export function Founders() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            {founders.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {founders.people.map((person, index) => (
            <div key={index} className="reveal">
              <GlassCard variant="hover" size="lg" className="h-full">
                <GlassCardHeader className="text-center mb-6">
                  {/* Founder Images */}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet p-1 overflow-hidden">
                    <img 
                      src={person.name === "Kinno" ? "/images/founder-kinno.jpg" : "/images/founder-ethan.jpg"} 
                      alt={`${person.name} - ${person.role}`}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <GlassCardTitle className="text-2xl sm:text-3xl mb-2">
                    {person.name}
                  </GlassCardTitle>
                  <GlassCardDescription className="text-lg text-electric-cyan font-semibold">
                    {person.role}
                  </GlassCardDescription>
                  
                  {/* Social Media Links - Only for Kinno */}
                  {person.name === "Kinno" && (
                    <div className="flex justify-center gap-4 mt-3">
                      <a 
                        href="https://www.tiktok.com/@kinnomoney" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-cyan hover:text-electric-blue transition-colors"
                        aria-label="TikTok"
                      >
                        <TikTokIcon />
                      </a>
                      <a 
                        href="https://www.youtube.com/@kinnomoneyx" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-cyan hover:text-electric-blue transition-colors"
                        aria-label="YouTube"
                      >
                        <YouTubeIcon />
                      </a>
                      <a 
                        href="https://www.instagram.com/kinnomoney/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-cyan hover:text-electric-blue transition-colors"
                        aria-label="Instagram"
                      >
                        <InstagramIcon />
                      </a>
                    </div>
                  )}
                </GlassCardHeader>

                <GlassCardContent>
                  <div className="space-y-4">
                    {person.paragraphs.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-foreground/80 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </GlassCardContent>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
