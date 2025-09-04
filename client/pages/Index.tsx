import { OfferBar } from "@/components/sections/OfferBar";
import { Hero } from "@/components/sections/Hero";
import { FeaturedOn } from "@/components/sections/FeaturedOn";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { VisualShowcase } from "@/components/sections/VisualShowcase";
import { Steps } from "@/components/sections/Steps";
import { DemoProof } from "@/components/sections/DemoProof";
import { Packages } from "@/components/sections/Packages";
import { Community } from "@/components/sections/Community";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { ProofSection } from "@/components/sections/ProofSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { DiscountModal } from "@/components/ui/DiscountModal";
import { MobileCTA } from "@/components/ui/mobile-cta";
import { useAnimations } from "@/hooks/useAnimations";

export default function Index() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
    enableInteractiveEffects: true,
  });

  return (
    <div ref={containerRef} className="m-0 p-0" style={{ margin: 0, padding: 0 }}>
      <OfferBar />
      <Hero />
      <FeaturedOn />
      <ValueProposition />
      <VisualShowcase />
      <Steps />
      <DemoProof />
      <Packages />
      <Community />
      <FAQ />
      <FinalCTA />
      <ProofSection />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <DiscountModal />
      <MobileCTA />
    </div>
  );
}
