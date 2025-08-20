import React from "react";
import { useResponsive } from "@/hooks/use-mobile";

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  mobileClassName?: string;
  tabletClassName?: string;
  desktopClassName?: string;
  as?: React.ElementType;
  id?: string;
}

/**
 * A responsive container component that applies different classes based on the current viewport size
 * while preserving the current style and theme of the website
 */
export function ResponsiveContainer({
  children,
  className = "",
  mobileClassName = "",
  tabletClassName = "",
  desktopClassName = "",
  as: Component = "div",
  id,
}: ResponsiveContainerProps) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  // Determine which responsive class to apply
  let responsiveClass = className;
  
  if (isMobile) {
    responsiveClass = `${className} ${mobileClassName}`.trim();
  } else if (isTablet) {
    responsiveClass = `${className} ${tabletClassName}`.trim();
  } else if (isDesktop) {
    responsiveClass = `${className} ${desktopClassName}`.trim();
  }

  return (
    <Component className={responsiveClass} id={id}>
      {children}
    </Component>
  );
}

/**
 * A component that conditionally renders content based on the viewport size
 * while preserving the current style and theme of the website
 */
export function ResponsiveView({
  children,
  mobileContent,
  tabletContent,
  desktopContent,
}: {
  children?: React.ReactNode;
  mobileContent?: React.ReactNode;
  tabletContent?: React.ReactNode;
  desktopContent?: React.ReactNode;
}) {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  if (isMobile && mobileContent !== undefined) {
    return <>{mobileContent}</>;
  }
  
  if (isTablet && tabletContent !== undefined) {
    return <>{tabletContent}</>;
  }
  
  if (isDesktop && desktopContent !== undefined) {
    return <>{desktopContent}</>;
  }
  
  // Default content
  return <>{children}</>;
}

/**
 * A component that adds responsive spacing (margin and padding)
 * while preserving the current style and theme of the website
 */
export function ResponsiveSpacing({
  children,
  className = "",
  p,
  px,
  py,
  pt,
  pr,
  pb,
  pl,
  m,
  mx,
  my,
  mt,
  mr,
  mb,
  ml,
  as: Component = "div",
}: {
  children: React.ReactNode;
  className?: string;
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;
  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  as?: React.ElementType;
}) {
  const { isMobile, isTablet } = useResponsive();
  
  // Calculate responsive spacing values
  const getResponsiveValue = (value: string | number | undefined) => {
    if (value === undefined) return undefined;
    
    // If it's a number, apply scaling based on device
    if (typeof value === 'number') {
      if (isMobile) return value * 0.75; // 75% of original on mobile
      if (isTablet) return value * 0.85; // 85% of original on tablet
      return value; // 100% on desktop
    }
    
    return value; // Return string values as is
  };
  
  const style: React.CSSProperties = {};
  
  // Apply padding
  if (p !== undefined) style.padding = getResponsiveValue(p);
  if (px !== undefined) {
    style.paddingLeft = getResponsiveValue(px);
    style.paddingRight = getResponsiveValue(px);
  }
  if (py !== undefined) {
    style.paddingTop = getResponsiveValue(py);
    style.paddingBottom = getResponsiveValue(py);
  }
  if (pt !== undefined) style.paddingTop = getResponsiveValue(pt);
  if (pr !== undefined) style.paddingRight = getResponsiveValue(pr);
  if (pb !== undefined) style.paddingBottom = getResponsiveValue(pb);
  if (pl !== undefined) style.paddingLeft = getResponsiveValue(pl);
  
  // Apply margin
  if (m !== undefined) style.margin = getResponsiveValue(m);
  if (mx !== undefined) {
    style.marginLeft = getResponsiveValue(mx);
    style.marginRight = getResponsiveValue(mx);
  }
  if (my !== undefined) {
    style.marginTop = getResponsiveValue(my);
    style.marginBottom = getResponsiveValue(my);
  }
  if (mt !== undefined) style.marginTop = getResponsiveValue(mt);
  if (mr !== undefined) style.marginRight = getResponsiveValue(mr);
  if (mb !== undefined) style.marginBottom = getResponsiveValue(mb);
  if (ml !== undefined) style.marginLeft = getResponsiveValue(ml);
  
  return (
    <Component className={className} style={style}>
      {children}
    </Component>
  );
}
