import { useState, useEffect } from "react";
import { NeonButton } from "./neon-button";
import { useIsMobile } from "@/hooks/use-mobile";

export function MobileCTA() {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the Hero section height
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      
      const heroHeight = heroSection.offsetHeight;
      const currentScrollY = window.scrollY;
      
      // Show CTA only after scrolling past the Hero section
      if (currentScrollY > heroHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isMobile) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-electric-cyan/30 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-center">
        <NeonButton
          size="sm"
          variant="neon"
          onClick={() => {
            const packagesSection = document.getElementById("packages");
            if (packagesSection) {
              packagesSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-full max-w-xs py-3 text-base primary"
        >
          Activate KinnoBot Today
        </NeonButton>
      </div>
    </div>
  );
}
