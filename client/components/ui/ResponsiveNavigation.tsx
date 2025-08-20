import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useResponsive } from "@/hooks/use-mobile";

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface ResponsiveNavigationProps {
  items: NavItem[];
  logo?: React.ReactNode;
  ctaButton?: React.ReactNode;
  className?: string;
}

export function ResponsiveNavigation({
  items,
  logo,
  ctaButton,
  className = "",
}: ResponsiveNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isMobile, isTablet } = useResponsive();
  const isMobileOrTablet = isMobile || isTablet;

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobileOrTablet && isOpen) {
      setIsOpen(false);
    }
  }, [isMobileOrTablet, isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.getElementById("main-navigation");
      if (navElement && !navElement.contains(event.target as Node) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle dropdown toggle
  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <nav
      id="main-navigation"
      className={`sticky top-0 z-50 backdrop-blur-md bg-gradient-to-b from-obsidian/90 to-obsidian/80 border-b border-white/10 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">{logo}</div>

          {/* Desktop Navigation */}
          {!isMobileOrTablet && (
            <>
              <div className="hidden md:flex space-x-8">
                {items.map((item) => (
                  <div key={item.label} className="relative group">
                    {item.children ? (
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className="flex items-center text-foreground/80 hover:text-electric-blue transition-colors px-3 py-2 text-sm font-medium"
                      >
                        {item.label}
                        <ChevronDown
                          className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
                          aria-hidden="true"
                        />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="text-foreground/80 hover:text-electric-blue transition-colors px-3 py-2 text-sm font-medium"
                      >
                        {item.label}
                      </a>
                    )}

                    {/* Dropdown Menu */}
                    {item.children && (
                      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-obsidian border border-white/10 hidden group-hover:block">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-foreground/80 hover:bg-white/5 hover:text-electric-blue"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button (desktop) */}
              <div className="hidden md:block">{ctaButton}</div>
            </>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground/80 hover:text-electric-blue focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMobileOrTablet && (
        <div
          className={`md:hidden ${
            isOpen ? "block" : "hidden"
          } border-t border-white/5`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-obsidian/95">
            {items.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="w-full flex items-center justify-between text-foreground/80 hover:text-electric-blue hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="pl-4 space-y-1 border-l border-white/10 ml-3 mt-1">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-electric-blue hover:bg-white/5"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-foreground/80 hover:text-electric-blue hover:bg-white/5 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-white/10 bg-obsidian/95">
            <div className="px-4">{ctaButton}</div>
          </div>
        </div>
      )}
    </nav>
  );
}
