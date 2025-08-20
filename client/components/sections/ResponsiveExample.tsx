import React from "react";
import { 
  ResponsiveContainer, 
  ResponsiveView, 
  ResponsiveSpacing 
} from "@/components/ui/ResponsiveContainer";
import { useResponsive } from "@/hooks/use-mobile";

/**
 * Example component demonstrating the usage of responsive components
 * while preserving the current style and theme of the website
 */
export function ResponsiveExample() {
  const { isMobile, isTablet, isDesktop, deviceType, orientation } = useResponsive();
  
  return (
    <section className="py-12 relative">
      <ResponsiveContainer 
        className="container mx-auto"
        mobileClassName="px-4"
        tabletClassName="px-6"
        desktopClassName="px-8"
      >
        <div className="text-center mb-10">
          <h2 className="section-title text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-neon mb-6">
            Responsive Components
          </h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            Examples of responsive components that adapt to different screen sizes
          </p>
        </div>
        
        {/* Device Info Card */}
        <div className="bg-obsidian/50 border border-white/10 rounded-lg p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4 text-electric-blue">Current Device Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <span className="font-medium mr-2">Device Type:</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-neon">{deviceType}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Orientation:</span>
              <span className="bg-white/10 px-3 py-1 rounded-full text-neon">{orientation}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Is Mobile:</span>
              <span className={`px-3 py-1 rounded-full ${isMobile ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {isMobile ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Is Tablet:</span>
              <span className={`px-3 py-1 rounded-full ${isTablet ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {isTablet ? 'Yes' : 'No'}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium mr-2">Is Desktop:</span>
              <span className={`px-3 py-1 rounded-full ${isDesktop ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                {isDesktop ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>
        
        {/* Responsive View Example */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-electric-blue">Responsive View Example</h3>
          
          <ResponsiveView
            mobileContent={
              <div className="bg-obsidian/50 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Mobile View</h4>
                <p>This content is optimized for mobile devices.</p>
                <div className="mt-4 grid grid-cols-1 gap-4">
                  <div className="bg-white/5 p-4 rounded">Mobile Card 1</div>
                  <div className="bg-white/5 p-4 rounded">Mobile Card 2</div>
                </div>
              </div>
            }
            tabletContent={
              <div className="bg-obsidian/50 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Tablet View</h4>
                <p>This content is optimized for tablet devices.</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded">Tablet Card 1</div>
                  <div className="bg-white/5 p-4 rounded">Tablet Card 2</div>
                  <div className="bg-white/5 p-4 rounded">Tablet Card 3</div>
                  <div className="bg-white/5 p-4 rounded">Tablet Card 4</div>
                </div>
              </div>
            }
            desktopContent={
              <div className="bg-obsidian/50 border border-white/10 rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Desktop View</h4>
                <p>This content is optimized for desktop devices.</p>
                <div className="mt-4 grid grid-cols-4 gap-4">
                  <div className="bg-white/5 p-4 rounded">Desktop Card 1</div>
                  <div className="bg-white/5 p-4 rounded">Desktop Card 2</div>
                  <div className="bg-white/5 p-4 rounded">Desktop Card 3</div>
                  <div className="bg-white/5 p-4 rounded">Desktop Card 4</div>
                </div>
              </div>
            }
          >
            <div className="bg-obsidian/50 border border-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Fallback View</h4>
              <p>This is the default content if no specific view is provided.</p>
            </div>
          </ResponsiveView>
        </div>
        
        {/* Responsive Container Example */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-electric-blue">Responsive Container Example</h3>
          
          <ResponsiveContainer
            className="bg-obsidian/50 border border-white/10 rounded-lg"
            mobileClassName="p-4"
            tabletClassName="p-6"
            desktopClassName="p-8"
          >
            <h4 className="text-xl font-bold mb-2">Adaptive Container</h4>
            <p className="mb-4">This container adapts its padding based on the device size.</p>
            
            <ResponsiveContainer
              className="grid gap-4"
              mobileClassName="grid-cols-1"
              tabletClassName="grid-cols-2"
              desktopClassName="grid-cols-3"
            >
              <div className="bg-white/5 p-4 rounded">Card 1</div>
              <div className="bg-white/5 p-4 rounded">Card 2</div>
              <div className="bg-white/5 p-4 rounded">Card 3</div>
              <div className="bg-white/5 p-4 rounded">Card 4</div>
              <div className="bg-white/5 p-4 rounded">Card 5</div>
              <div className="bg-white/5 p-4 rounded">Card 6</div>
            </ResponsiveContainer>
          </ResponsiveContainer>
        </div>
        
        {/* Responsive Spacing Example */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-electric-blue">Responsive Spacing Example</h3>
          
          <ResponsiveSpacing
            className="bg-obsidian/50 border border-white/10 rounded-lg"
            p={32}
            mb={40}
          >
            <h4 className="text-xl font-bold mb-2">Adaptive Spacing</h4>
            <p>This component has responsive padding and margin that scales based on device size.</p>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ResponsiveSpacing
                className="bg-white/5 rounded"
                p={16}
              >
                <p>This card has responsive padding.</p>
              </ResponsiveSpacing>
              
              <ResponsiveSpacing
                className="bg-white/5 rounded"
                p={16}
                mt={24}
              >
                <p>This card has responsive padding and margin-top.</p>
              </ResponsiveSpacing>
            </div>
          </ResponsiveSpacing>
        </div>
        
        {/* Utility Classes Example */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-electric-blue">Responsive Utility Classes</h3>
          
          <div className="bg-obsidian/50 border border-white/10 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4">CSS Utility Classes</h4>
            
            <div className="mb-6">
              <h5 className="font-bold mb-2">Responsive Width</h5>
              <div className="responsive-width bg-white/5 p-4 rounded">
                This element uses the responsive-width class
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="font-bold mb-2">Responsive Padding</h5>
              <div className="responsive-p bg-white/5 rounded">
                This element uses the responsive-p class
              </div>
            </div>
            
            <div className="mb-6">
              <h5 className="font-bold mb-2">Responsive Text</h5>
              <p className="responsive-text-xl bg-white/5 p-4 rounded">
                This text uses the responsive-text-xl class
              </p>
            </div>
            
            <div>
              <h5 className="font-bold mb-2">Responsive Flex Column</h5>
              <div className="responsive-flex-col responsive-gap bg-white/5 p-4 rounded">
                <div className="bg-white/10 p-2 rounded">Item 1</div>
                <div className="bg-white/10 p-2 rounded">Item 2</div>
                <div className="bg-white/10 p-2 rounded">Item 3</div>
              </div>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
