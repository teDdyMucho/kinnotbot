import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    // Add CSS for scroll behavior control
    const style = document.createElement("style");
    style.innerHTML = `
      /* Avoid initial smooth-scroll interference; we'll re-enable via JS */
      html { scroll-behavior: auto; }
      
      /* If the page has a sticky header, prevent anchor overlap when users click TOC links */
      :root { --header-h: 80px; }
      h1, h2, h3, [id] { scroll-margin-top: var(--header-h); }
      
      /* Prevent focus styles from scrolling to off-screen elements on load */
      [autofocus] { outline: none; }
      
      /* Optional: ensure legal panels never overflow the viewport causing instant jump */
      .legal-panel { overflow: visible; }
    `;
    document.head.appendChild(style);

    // 1) Disable browser scroll restoration (so we control it)
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Helper: force top without animation
    const jumpTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      // Fallback for browsers that ignore 'instant'
      window.scrollTo(0, 0);
    };

    // 2) Kill autofocus that can pull focus to the bottom
    const stripAutofocus = () => {
      document.querySelectorAll("[autofocus]").forEach((el) => {
        if (el instanceof HTMLElement) {
          el.blur?.();
          el.removeAttribute("autofocus");
          // prevent scripts from re-focusing immediately
          el.setAttribute("data-block-autofocus", "true");
        }
      });
    };

    // 3) Remove hash on first paint (e.g., #footer from previous page)
    const clearHashOnce = () => {
      if (location.hash) {
        history.replaceState(null, "", location.pathname + location.search);
      }
    };

    // 4) Re-apply smooth scroll after first paint so user-initiated scrolls feel nice
    const enableSmoothSoon = () => {
      setTimeout(() => {
        try {
          const smoothStyle = document.createElement("style");
          smoothStyle.innerHTML = "html{scroll-behavior:smooth;}";
          document.head.appendChild(smoothStyle);
        } catch (e) {
          // Ignore errors
        }
      }, 400);
    };

    // 5) Run on DOM ready
    const onReady = () => {
      clearHashOnce();
      stripAutofocus();
      jumpTop();
      enableSmoothSoon();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", onReady);
    } else {
      onReady();
    }

    // 6) Handle React Router navigation (if using React Router)
    const handleNavigation = () => {
      clearHashOnce();
      stripAutofocus();
      jumpTop();
      enableSmoothSoon();
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", handleNavigation);

    // 7) In case fonts/layout shift after load, re-assert top once
    const timeoutId = setTimeout(jumpTop, 250);

    // Cleanup function
    return () => {
      window.removeEventListener("popstate", handleNavigation);
      clearTimeout(timeoutId);
      // Remove the style when component unmounts
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
