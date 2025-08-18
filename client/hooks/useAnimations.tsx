import { useEffect, useRef } from "react";

interface AnimationOptions {
  enableHeroBoot?: boolean;
  enableScrollReveals?: boolean;
  enableInteractiveEffects?: boolean;
  enableHeroBackground?: boolean;
}

export function useAnimations(options: AnimationOptions = {}) {
  const {
    enableHeroBoot = false,
    enableScrollReveals = false,
    enableInteractiveEffects = false,
    enableHeroBackground = false,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cleanupFunctions: (() => void)[] = [];

    // Hero Boot Animation System
    if (enableHeroBoot) {
      const heroBootCleanup = initializeHeroBoot(containerRef.current);
      if (heroBootCleanup) cleanupFunctions.push(heroBootCleanup);
    }

    // Scroll Reveal System
    if (enableScrollReveals) {
      const scrollRevealCleanup = initializeScrollReveals(containerRef.current);
      if (scrollRevealCleanup) cleanupFunctions.push(scrollRevealCleanup);
    }

    // Interactive Effects (magnetic buttons, 3D tilt)
    if (enableInteractiveEffects) {
      const interactiveCleanup = initializeInteractiveEffects(
        containerRef.current,
      );
      if (interactiveCleanup) cleanupFunctions.push(interactiveCleanup);
    }

    // Hero Background Effects
    if (enableHeroBackground) {
      const heroBackgroundCleanup = initializeHeroBackground();
      if (heroBackgroundCleanup) cleanupFunctions.push(heroBackgroundCleanup);
    }

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [
    enableHeroBoot,
    enableScrollReveals,
    enableInteractiveEffects,
    enableHeroBackground,
  ]);

  return { containerRef };
}

// Hero Boot Animation Implementation
function initializeHeroBoot(hero: HTMLElement): (() => void) | null {
  // Add hero-boot immediately to prevent content flash
  hero.classList.add("hero-boot");

  let animationsPlayed = false;

  const resetAndPlayAnimations = () => {
    if (animationsPlayed) return;

    hero.classList.remove("boot-play");
    hero.offsetHeight; // Force reflow

    setTimeout(() => {
      hero.classList.add("boot-play");
      animationsPlayed = true;

      // Hide hero glow after animations complete
      setTimeout(() => {
        const heroGlow = document.getElementById("heroGlow");
        if (heroGlow) {
          heroGlow.style.opacity = "0";
        }
      }, 2000);
    }, 100);
  };

  // Check for intro element and wait for its removal
  const introElement = document.getElementById("site-intro");

  if (!introElement) {
    resetAndPlayAnimations();
  } else {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node as Element).id === "site-intro"
          ) {
            setTimeout(resetAndPlayAnimations, 500);
            observer.disconnect();
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Fallback timeout
    const fallbackTimeout = setTimeout(() => {
      observer.disconnect();
      resetAndPlayAnimations();
    }, 6000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimeout);
    };
  }

  return () => {
    // Cleanup if needed
  };
}

// Scroll Reveal System
function initializeScrollReveals(container: HTMLElement): (() => void) | null {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  // Observe elements with reveal classes
  const revealElements = container.querySelectorAll(
    ".reveal, .card, .faq-item",
  );
  revealElements.forEach((el) => observer.observe(el));

  // Section title reveal
  const sectionTitles = container.querySelectorAll(".section-title");
  sectionTitles.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

// Interactive Effects System
function initializeInteractiveEffects(
  container: HTMLElement,
): (() => void) | null {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return null;

  const handleMagneticEffect = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    target.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMagneticReset = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = "";
  };

  const handle3DTilt = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handle3DTiltReset = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.transform = "";
  };

  // Apply magnetic effect to buttons
  const magneticElements = container.querySelectorAll(".magnetic");
  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", handleMagneticEffect);
    el.addEventListener("mouseleave", handleMagneticReset);
  });

  // Apply 3D tilt to cards
  const tiltElements = container.querySelectorAll(".tilt");
  tiltElements.forEach((el) => {
    el.addEventListener("mousemove", handle3DTilt);
    el.addEventListener("mouseleave", handle3DTiltReset);
  });

  return () => {
    magneticElements.forEach((el) => {
      el.removeEventListener("mousemove", handleMagneticEffect);
      el.removeEventListener("mouseleave", handleMagneticReset);
    });
    tiltElements.forEach((el) => {
      el.removeEventListener("mousemove", handle3DTilt);
      el.removeEventListener("mouseleave", handle3DTiltReset);
    });
  };
}

// Hero Background Effects
function initializeHeroBackground(): (() => void) | null {
  // Auto-size rotator for ultra-wide screens
  const rotator = document.querySelector(".bg-rotator") as HTMLElement;
  if (rotator) {
    const diagonal =
      Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) * 1.35;
    rotator.style.width = rotator.style.height = Math.ceil(diagonal) + "px";
  }

  // Light sweep cleanup
  const sweepCleanup = () => {
    const sweep = document.querySelector(".light-sweep");
    if (!sweep) return;

    const remove = () => {
      sweep.classList.add("animation-complete", "is-gone");
      (sweep as HTMLElement).style.cssText +=
        "display:none!important;transform:translateX(200vw)!important;opacity:0!important;";
    };

    sweep.addEventListener("animationend", remove, { once: true });
    setTimeout(remove, 2000); // Safety timeout
  };

  sweepCleanup();

  // Hero floating coins
  const initializeHeroCoins = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const hero = document.querySelector("#hero");
    if (!hero) return;

    let layer = hero.querySelector(".coin-layer") as HTMLElement;
    if (!layer) {
      layer = document.createElement("div");
      layer.className = "coin-layer";
      hero.prepend(layer);
    }

    layer.innerHTML = "";

    const COINS = [
      "https://cdn.builder.io/o/assets%2Fceb01c8090ad439481a6fd86a803fe4a%2Ffbc9ee9d684e473f825b22abbfecdf56?alt=media&token=5a119f22-b15a-4f44-815d-f0132e293a17&apiKey=ceb01c8090ad439481a6fd86a803fe4a",
      "https://cdn.builder.io/o/assets%2Fceb01c8090ad439481a6fd86a803fe4a%2F45f5c668bb46450b9f48d1ae784dbf3d?alt=media&token=45941ae9-84ba-47ba-9655-4483262e6d7e&apiKey=ceb01c8090ad439481a6fd86a803fe4a",
      "https://cdn.builder.io/o/assets%2Fceb01c8090ad439481a6fd86a803fe4a%2Fab329b9d71a04078bb981b603e764c1b?alt=media&token=6a7b7d14-3847-4611-ba41-2e28b76f8b5e&apiKey=ceb01c8090ad439481a6fd86a803fe4a",
      "https://cdn.builder.io/o/assets%2Fceb01c8090ad439481a6fd86a803fe4a%2Fcd664da7154544f192eb11cd25ab0998?alt=media&token=a5dd6901-a808-4cec-8a90-b6739ac47a1a&apiKey=ceb01c8090ad439481a6fd86a803fe4a",
      "https://cdn.builder.io/o/assets%2Fceb01c8090ad439481a6fd86a803fe4a%2F24979a82aa2248eb827bd4f5556a2c55?alt=media&token=150c1323-3fda-4c74-9c6e-f8c8c359cc08&apiKey=ceb01c8090ad439481a6fd86a803fe4a",
    ];

    for (let i = 0; i < 15; i++) {
      const img = document.createElement("img");
      img.src = COINS[i % COINS.length];
      img.alt = "floating coin";

      const size = 40 + Math.random() * 50;

      // Position coins to avoid center area (30-70% width, 25-75% height)
      let left, top;
      const avoidCenter = Math.random() > 0.3; // 70% chance to avoid center

      if (avoidCenter) {
        // Place on edges - either left/right edges or top/bottom edges
        if (Math.random() > 0.5) {
          // Left or right edges
          left =
            Math.random() > 0.5
              ? Math.random() * 25 // 0-25%
              : 75 + Math.random() * 25; // 75-100%
          top = Math.random() * 100; // anywhere vertically
        } else {
          // Top or bottom edges
          left = Math.random() * 100; // anywhere horizontally
          top =
            Math.random() > 0.5
              ? Math.random() * 20 // 0-20%
              : 80 + Math.random() * 20; // 80-100%
        }
      } else {
        // Place in corners only
        left =
          Math.random() > 0.5
            ? Math.random() * 30 // 0-30%
            : 70 + Math.random() * 30; // 70-100%
        top =
          Math.random() > 0.5
            ? Math.random() * 25 // 0-25%
            : 75 + Math.random() * 25; // 75-100%
      }

      Object.assign(img.style, {
        position: "absolute",
        width: `${size}px`,
        willChange: "transform, opacity",
        filter: "drop-shadow(0 8px 12px rgba(0,0,0,.4))",
        opacity: "0.9",
        left: `${left}%`,
        top: `${top}%`,
      });

      const duration = 20 + Math.random() * 18;
      const deltaX = Math.random() * 30 - 15;
      const deltaY = Math.random() * 20 - 10;

      img.animate(
        [
          { transform: "translate(0,0) rotate(0deg)" },
          {
            transform: `translate(${deltaX}%, ${deltaY}%) rotate(${Math.random() * 90 - 45}deg)`,
          },
        ],
        {
          duration: duration * 1000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        },
      );

      layer.appendChild(img);
    }
  };

  initializeHeroCoins();

  return () => {
    // Cleanup if needed
  };
}
