import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/constants";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 reveal">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-4">
            {faq.sectionTitle}
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">{faq.tagline}</p>
        </div>

        <div className="faq-grid max-w-7xl mx-auto">
          {faq.items.map((item, index) => (
            <details key={index} className="faq-item">
              <summary
                role="button"
                aria-expanded={openIndex === index}
                onClick={(e) => {
                  e.preventDefault();
                  toggleAccordion(index);
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleAccordion(index);
                  }
                }}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300 flex-shrink-0",
                    openIndex === index && "rotate-180",
                  )}
                />
              </summary>
              {openIndex === index && (
                <div className="faq-body">
                  {item.a ? (
                    item.a
                  ) : (
                    <span className="text-sm text-electric-cyan bg-electric-cyan/10 px-2 py-1 rounded">
                      See site for details
                    </span>
                  )}
                </div>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
