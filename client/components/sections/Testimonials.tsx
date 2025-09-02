import { motion } from "framer-motion";
import {
  GlassCard,
  GlassCardContent,
  GlassCardHeader,
} from "@/components/ui/glass-card";
import { useState } from "react";


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
  
  // Array of proof images from the Proof_of_Traders directory
  const proofImages = [
    "/images/Proof_of_Traders/trader1.jpeg",
    "/images/Proof_of_Traders/trader2.jpeg",
    "/images/Proof_of_Traders/trader3.jpeg",
    "/images/Proof_of_Traders/trader4.jpeg",
    "/images/Proof_of_Traders/trader5.jpeg",
    "/images/Proof_of_Traders/trader6.jpeg",
  ];
  
  // State for the modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          {proofImages.map((imagePath, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard variant="hover" size="lg" className="h-full cursor-pointer overflow-hidden" onClick={() => setSelectedImage(imagePath)}>
                <div className="relative w-full h-64 overflow-hidden">
                  <img 
                    src={imagePath} 
                    alt={`Trading proof ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <GlassCardContent>
                  <p className="text-electric-cyan font-medium text-center">
                    Click to enlarge
                  </p>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-auto">
            <button 
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={selectedImage} 
              alt="Trading proof enlarged" 
              className="max-w-full max-h-[85vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
