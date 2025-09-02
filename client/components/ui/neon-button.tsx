import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "neo-btn inline-flex items-center justify-center whitespace-nowrap rounded-lg font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden shadow-md hover:shadow-lg",
  {
    variants: {
      variant: {
        neon: "btn-neon bg-gradient-to-r from-electric-blue to-electric-violet hover:shadow-glow-cyan",
        "neon-outline":
          "border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/20 hover:border-electric-cyan hover:text-electric-cyan hover:shadow-glow-cyan",
        ghost:
          "text-electric-blue hover:bg-electric-blue/10 hover:text-electric-cyan",
        glass:
          "glass-card text-foreground hover:bg-white/20 hover:shadow-glow-cyan",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-10 px-5 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "neon",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const NeonButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // Add magnetic effect functionality
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    
    React.useEffect(() => {
      const button = buttonRef.current;
      if (!button || !className?.includes('magnetic')) return;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const strength = 10; // Adjust strength of the magnetic effect
        
        button.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
      };
      
      const handleMouseLeave = () => {
        button.style.transform = 'translate(0, 0)';
      };
      
      button.addEventListener('mousemove', handleMouseMove);
      button.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        button.removeEventListener('mousemove', handleMouseMove);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [className]);

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={(node) => {
          // Handle both refs
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
          if (buttonRef) buttonRef.current = node;
        }}
        {...props}
      >
        {variant === "neon" && (
          <span className="absolute inset-0 bg-gradient-to-r from-electric-cyan to-electric-violet opacity-0 transition-opacity duration-300 hover:opacity-100" />
        )}
        <span className="relative z-10">{children}</span>
      </Comp>
    );
  },
);
NeonButton.displayName = "NeonButton";

export { NeonButton, buttonVariants };
