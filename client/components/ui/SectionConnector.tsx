import React from "react";
import { cn } from "@/lib/utils";

interface SectionConnectorProps {
  className?: string;
}

export function SectionConnector({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-8 md:h-12 lg:h-16 overflow-hidden",
        className
      )}
      aria-hidden="true"
    />
  );
}
