/**
 * Vite plugin to ignore problematic Chrome icon imports from lucide-react
 */
export default function ignoreChrome() {
  return {
    name: 'vite-plugin-ignore-chrome',
    resolveId(id) {
      // Check if the import is for the Chrome icon
      if (id.includes('lucide-react/dist/esm/icons/chrome.js') || 
          id.includes('./chrome.js') || 
          id.includes('./icons/chrome.js')) {
        // Return a virtual module
        return '\0virtual:chrome';
      }
      return null;
    },
    load(id) {
      // If this is our virtual module, return an empty component
      if (id === '\0virtual:chrome') {
        return `
          import * as React from 'react';
          export default function Chrome(props) {
            return null;
          }
          export const ChromeIcon = Chrome;
        `;
      }
      return null;
    }
  };
}
