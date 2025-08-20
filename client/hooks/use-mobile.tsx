import * as React from "react";

// Breakpoints that match tailwind defaults
const BREAKPOINTS = {
  sm: 640,  // Small devices (phones)
  md: 768,  // Medium devices (tablets)
  lg: 1024, // Large devices (laptops)
  xl: 1280, // Extra large devices (desktops)
  xxl: 1536, // 2XL screens
};

type Breakpoint = keyof typeof BREAKPOINTS;
type DeviceType = 'mobile' | 'tablet' | 'laptop' | 'desktop';

interface ResponsiveInfo {
  isMobile: boolean;      // < 768px
  isTablet: boolean;      // >= 768px && < 1024px
  isDesktop: boolean;     // >= 1024px
  isLargeScreen: boolean; // >= 1280px
  deviceType: DeviceType;
  screenWidth: number;
  screenHeight: number;
  orientation: 'portrait' | 'landscape';
  breakpoint: Breakpoint | null;
}

/**
 * Enhanced hook for responsive design that provides detailed information
 * about the current viewport and device characteristics
 */
export function useResponsive(): ResponsiveInfo {
  const [responsiveInfo, setResponsiveInfo] = React.useState<ResponsiveInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeScreen: false,
    deviceType: 'desktop',
    screenWidth: 0,
    screenHeight: 0,
    orientation: 'landscape',
    breakpoint: null,
  });

  React.useEffect(() => {
    const updateResponsiveInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isMobile = width < BREAKPOINTS.md;
      const isTablet = width >= BREAKPOINTS.md && width < BREAKPOINTS.lg;
      const isDesktop = width >= BREAKPOINTS.lg;
      const isLargeScreen = width >= BREAKPOINTS.xl;
      
      // Determine current breakpoint
      let breakpoint: Breakpoint | null = null;
      if (width < BREAKPOINTS.sm) breakpoint = null;
      else if (width < BREAKPOINTS.md) breakpoint = 'sm';
      else if (width < BREAKPOINTS.lg) breakpoint = 'md';
      else if (width < BREAKPOINTS.xl) breakpoint = 'lg';
      else if (width < BREAKPOINTS.xxl) breakpoint = 'xl';
      else breakpoint = 'xxl';
      
      // Determine device type
      let deviceType: DeviceType = 'desktop';
      if (width < BREAKPOINTS.md) deviceType = 'mobile';
      else if (width < BREAKPOINTS.lg) deviceType = 'tablet';
      else if (width < BREAKPOINTS.xl) deviceType = 'laptop';
      else deviceType = 'desktop';
      
      setResponsiveInfo({
        isMobile,
        isTablet,
        isDesktop,
        isLargeScreen,
        deviceType,
        screenWidth: width,
        screenHeight: height,
        orientation: width > height ? 'landscape' : 'portrait',
        breakpoint,
      });
    };

    // Initial update
    updateResponsiveInfo();

    // Add event listener for resize
    window.addEventListener('resize', updateResponsiveInfo);

    // Add event listener for orientation change (mobile devices)
    window.addEventListener('orientationchange', updateResponsiveInfo);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateResponsiveInfo);
      window.removeEventListener('orientationchange', updateResponsiveInfo);
    };
  }, []);

  return responsiveInfo;
}

// Legacy hook for backward compatibility
export function useIsMobile() {
  const { isMobile } = useResponsive();
  return isMobile;
}
