import { motion } from "framer-motion";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
} from "@/components/ui/glass-card";
import { testimonials } from "@/constants";
import { Quote } from "lucide-react";

export function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            What Traders Say
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            Real feedback from real traders
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard variant="hover" size="lg" className="h-full">
                <GlassCardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-8 h-8 text-electric-cyan flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-display font-semibold text-electric-cyan mb-2">
                        {testimonial.headline}
                      </h3>
                    </div>
                  </div>
                </GlassCardHeader>

                <GlassCardContent>
                  <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  <footer className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center">
                      <span className="text-sm font-semibold text-obsidian">
                        {testimonial.name
                          .replace("— ", "")
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <cite className="text-sm font-semibold text-electric-blue not-italic">
                      {testimonial.name}
                    </cite>
                  </footer>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
