import { Link } from "react-router-dom";
import { disclaimer } from "@/constants";

export function Footer() {
  const policyLinks = [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "#" }, // Keep as placeholder for now
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <footer className="py-8 border-t border-white/10 bg-charcoal/50" style={{ marginBottom: 0, paddingBottom: '0.5rem' }}>
      <div className="container mx-auto px-4">
        <div className="space-y-12 reveal">
          {/* Policy Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-8">
              {policyLinks.map((link, index) =>
                link.path.startsWith("/") ? (
                  <Link
                    key={index}
                    to={link.path}
                    className="text-electric-blue hover:text-electric-cyan transition-colors underline"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={link.path}
                    className="text-electric-blue hover:text-electric-cyan transition-colors underline"
                  >
                    {link.name}
                  </a>
                ),
              )}
            </nav>
          </div>

          {/* Disclaimer */}
          <div className="space-y-6 max-w-4xl mx-auto">
            {disclaimer.map((paragraph, index) => (
              <p
                key={index}
                className={`text-sm leading-relaxed ${
                  index === disclaimer.length - 1
                    ? "text-center text-foreground/50 font-semibold"
                    : "text-foreground/60"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Brand */}
          <div className="text-center pt-8 border-t border-white/10">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-electric-blue to-electric-violet flex items-center justify-center">
                <span className="text-obsidian font-bold text-sm">K</span>
              </div>
              <span className="text-2xl font-display font-bold text-neon">
                KinnoBot
              </span>
            </div>
            <p className="text-sm text-foreground/50 mt-2">
              AI-Powered Trading Automation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
