import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { GlassCard, GlassCardContent } from "@/components/ui/glass-card";
import { useAnimations } from "@/hooks/useAnimations";
import { Play } from "@/lib/icons";

export function ProofSection() {
  const { containerRef } = useAnimations({
    enableScrollReveals: true,
  });

  // State for image modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // State for video modal
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Lock body scroll while any modal is open
  useEffect(() => {
    const anyOpen = Boolean(selectedImage || selectedVideo);
    const originalOverflow = document?.body?.style?.overflow || "";
    if (anyOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedImage, selectedVideo]);

  // Array of proof images
  const proofImages = [
    "/images/For_Proof_Section/proof1.jpeg",
    "/images/For_Proof_Section/proof2.jpeg",
    "/images/For_Proof_Section/proof3.jpeg",
    "/images/For_Proof_Section/proof4.jpeg",
    "/images/For_Proof_Section/proof5.jpeg",
    "/images/For_Proof_Section/proof6.jpeg",
  ];

  // Video testimonials with thumbnails using the same images
  const videoTestimonials = [
    {
      name: "John D.",
      title: "Day Trader",
      video: "/images/For_Proof_Section/story1.mp4",
      thumbnail: "/images/For_Proof_Section/proof1.jpeg",
    },
    {
      name: "Sarah M.",
      title: "Swing Trader",
      video: "/images/For_Proof_Section/story2.mp4",
      thumbnail: "/images/For_Proof_Section/proof3.jpeg",
    },
    {
      name: "Michael R.",
      title: "Options Trader",
      video: "/images/For_Proof_Section/story3.mp4",
      thumbnail: "/images/For_Proof_Section/proof5.jpeg",
    },
  ];

  return (
    <section id="proof" ref={containerRef} className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            Real <span className="text-electric-cyan">Results</span>
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            See the actual trading performance and hear from our users
          </p>
        </div>

        {/* Screenshot Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-electric-cyan mb-8 text-center">
            Trading Screenshots
          </h3>
          <div className="glass-card border border-white/5 p-8 rounded-lg bg-white/5 transition-all duration-300 hover:bg-white/10 hover:shadow-glow-cyan hover:border-electric-cyan/30">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proofImages.map((imagePath, index) => (
                <div key={index} className="cursor-pointer" onClick={() => setSelectedImage(imagePath)}>
                  <div className="relative w-full p-2">
                    <div className="aspect-w-16 aspect-h-9 w-full">
                      <img 
                        src={imagePath} 
                        alt={`Trading proof ${index + 1}`} 
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                  {/* <div className="pt-2">
                    <p className="text-electric-cyan font-medium text-center">
                      Click to enlarge
                    </p>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Testimonials */}
        {/* <div>
          <h3 className="text-2xl font-bold text-electric-cyan mb-8 text-center">
            Trader Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <div key={index}>
                <GlassCard variant="default" size="lg" className="h-full">
                  <div 
                    className="relative w-full cursor-pointer p-4"
                    onClick={() => setSelectedVideo(testimonial.video)}
                  >
                    <div className="aspect-w-16 aspect-h-9 w-full">
                      <img 
                        src={testimonial.thumbnail} 
                        alt={`${testimonial.name} testimonial`} 
                        className="w-full h-auto object-contain"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center">
                          <Play className="w-8 h-8 text-electric-cyan ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <GlassCardContent>
                    <h4 className="text-xl font-semibold text-electric-cyan">{testimonial.name}</h4>
                    <p className="text-foreground/70">{testimonial.title}</p>
                    <p className="text-foreground/80 mt-2">
                      "KinnoBot transformed my trading experience. Click to watch my story."
                    </p>
                  </GlassCardContent>
                </GlassCard>
              </div>
            ))}
          </div>
        </div> */}

        {/* Image Modal (rendered in portal to avoid transformed ancestors) */}
        {selectedImage && typeof document !== "undefined" &&
          createPortal(
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
            </div>,
            document.body
          )}

        {/* Video Modal (rendered in portal) */}
        {selectedVideo && typeof document !== "undefined" &&
          createPortal(
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div className="relative max-w-4xl w-full max-h-[90vh]">
                <button
                  className="absolute -top-10 right-0 bg-white/20 hover:bg-white/40 rounded-full p-2 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedVideo(null);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] w-full"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>,
            document.body
          )}
      </div>
    </section>
  );
}
