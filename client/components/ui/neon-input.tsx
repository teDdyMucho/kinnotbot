import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const NeonInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg glass-card px-4 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-0 focus-visible:shadow-glow disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
NeonInput.displayName = "NeonInput";

export { NeonInput };
