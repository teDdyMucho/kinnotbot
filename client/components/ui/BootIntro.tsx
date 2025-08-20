import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Particle animation hook
function useParticles(
  canvasRef: React.RefObject<HTMLCanvasElement>,
  isActive: boolean,
) {
  const particlesRef = useRef<
    Array<{
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
    }>
  >([]);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!isActive || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize particles
    particlesRef.current = Array.from({ length: 32 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.0008,
      vy: (Math.random() - 0.5) * 0.0008,
    }));

    function sizeCanvas() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function animate() {
      if (!canvas || !ctx) return;

      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= 1) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= 1) particle.vy *= -1;

        // Keep in bounds
        particle.x = Math.max(0, Math.min(1, particle.x));
        particle.y = Math.max(0, Math.min(1, particle.y));

        // Draw particle
        const gx = particle.x * width;
        const gy = particle.y * height;
        const gradient = ctx.createRadialGradient(
          gx,
          gy,
          0,
          gx,
          gy,
          particle.r * 8,
        );
        gradient.addColorStop(0, "rgba(71, 214, 255, 0.4)");
        gradient.addColorStop(0.5, "rgba(124, 92, 255, 0.2)");
        gradient.addColorStop(1, "rgba(124, 92, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(gx, gy, particle.r * 6, 0, Math.PI * 2);
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    }

    sizeCanvas();
    window.addEventListener("resize", sizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", sizeCanvas);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isActive, canvasRef]);
}

export default function BootIntro() {
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return true;

    // Skip if reduced motion is preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }

    // Skip if already played this session
    return sessionStorage.getItem("introPlayed") !== "1";
  });

  const timeoutRef = useRef<number>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Custom particle animation
  useParticles(canvasRef, show);

  useEffect(() => {
    if (!show) return;

    timeoutRef.current = window.setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("introPlayed", "1");
    }, 3200);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [show]);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="site-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="fixed inset-0 z-[9999] grid place-items-center pointer-events-none"
          style={{
            background: `
              radial-gradient(60% 60% at 50% 50%, rgba(71, 214, 255, 0.12), transparent 60%),
              linear-gradient(180deg, hsl(var(--background)), #1a0f2a)
            `,
          }}
          aria-hidden="true"
        >
          {/* Grid backdrop */}
          <div
            className="intro__backdrop absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />

          {/* Center container */}
          <div className="intro__center relative w-[min(64vw,520px)] aspect-square">
            {/* Particle canvas */}
            <canvas
              ref={canvasRef}
              className="intro__particles absolute inset-0 rounded-full opacity-60"
              aria-hidden="true"
            />

            {/* Main ring */}
            <motion.div
              className="intro__ring absolute inset-0 rounded-full grid place-items-center"
              style={{
                background: `
                  radial-gradient(50% 50% at 50% 50%, 
                    rgba(71, 214, 255, 0.15), 
                    rgba(124, 92, 255, 0.08) 60%, 
                    transparent 70%
                  )
                `,
                boxShadow: `
                  inset 0 0 0 1px rgba(255, 255, 255, 0.08),
                  0 0 40px rgba(71, 214, 255, 0.35)
                `,
              }}
              initial={
                reducedMotion ? { opacity: 1 } : { scale: 0.8, opacity: 0 }
              }
              animate={{
                scale: 1,
                opacity: 1,
                boxShadow: [
                  "inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 30px rgba(71, 214, 255, 0.28)",
                  "inset 0 0 0 1px rgba(255, 255, 255, 0.12), 0 0 60px rgba(124, 92, 255, 0.42)",
                  "inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 30px rgba(71, 214, 255, 0.28)",
                ],
              }}
              transition={
                reducedMotion
                  ? { duration: 0.3 }
                  : {
                      scale: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                      opacity: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
                      boxShadow: {
                        duration: 2.1,
                        ease: "easeInOut",
                        delay: 0.9,
                        repeat: Infinity,
                        repeatType: "loop",
                      },
                    }
              }
            >
              {/* Logo and text with shine effect */}
              <motion.div className="intro__word relative overflow-hidden flex flex-col items-center gap-4">
                <motion.img
                  src="/images/kinnobotlogo.png"
                  alt="KinnoBot Logo"
                  className="w-20 h-20 md:w-24 md:h-24"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                />
                <motion.span
                  className="font-extrabold uppercase tracking-[0.06em] text-transparent bg-clip-text text-[clamp(22px,5.4vw,44px)] font-display"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #47d6ff, #7c5cff)",
                    textShadow: "0 0 22px rgba(71, 214, 255, 0.45)",
                  }}
                >
                  KINNO&nbsp;BOT
                </motion.span>

                {/* Shine overlay */}
                {!reducedMotion && (
                  <motion.div
                    className="absolute inset-0 -left-[30%]"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.65) 35%, transparent)",
                      filter: "blur(2px)",
                    }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "140%" }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                  />
                )}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
