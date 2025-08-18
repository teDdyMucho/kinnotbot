import { motion } from "framer-motion";
import { offerBar } from "@/constants";
import { useDiscountModal } from "@/hooks/useDiscountModal";

export function OfferBar() {
  const { openModal } = useDiscountModal();
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-electric-blue to-electric-violet py-3 px-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 text-center lg:text-left">
          <div className="flex-shrink-0">
            <span className="text-obsidian font-display font-bold text-lg">
              {offerBar.heading}
            </span>
            <span className="text-obsidian/80 ml-2 font-medium">
              {offerBar.sub}
            </span>
          </div>

          <button
            onClick={openModal}
            className="open-discount neo-btn magnetic bg-obsidian/90 text-electric-cyan border-electric-cyan hover:bg-obsidian hover:shadow-glow hover:scale-105 h-10 px-6 whitespace-nowrap rounded-lg font-semibold transition-transform"
          >
            {offerBar.cta}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
