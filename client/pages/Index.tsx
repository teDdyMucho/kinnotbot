import { OfferBar } from "@/components/sections/OfferBar";
import { Hero } from "@/components/sections/Hero";
import { FeaturedOn } from "@/components/sections/FeaturedOn";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { VisualShowcase } from "@/components/sections/VisualShowcase";
import { Steps } from "@/components/sections/Steps";
import { Founders } from "@/components/sections/Founders";
import { Packages } from "@/components/sections/Packages";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { DiscountModal } from "@/components/ui/DiscountModal";
import { useAnimations } from "@/hooks/useAnimations";

export default function Index() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
    enableInteractiveEffects: true,
  });

  return (
    <div ref={containerRef} className="min-h-screen m-0 p-0" style={{ margin: 0, padding: 0 }}>
      <OfferBar />
      <Hero />
      <FeaturedOn />
      <ValueProposition />
      <VisualShowcase />
      <Steps />
      <Founders />
      <Packages />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
      <DiscountModal />
    </div>
  );
}
