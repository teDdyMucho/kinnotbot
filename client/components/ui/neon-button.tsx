import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "neo-btn inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        neon: "btn-neon",
        "neon-outline":
          "border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-obsidian hover:shadow-glow",
        ghost:
          "text-electric-blue hover:bg-electric-blue/10 hover:text-electric-cyan",
        glass:
          "glass-card text-foreground hover:bg-white/20 hover:shadow-glow-violet",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-10 w-10",
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

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
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
