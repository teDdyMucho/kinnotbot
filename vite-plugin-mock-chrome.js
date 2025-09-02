/**
 * Vite plugin to replace problematic Chrome icon imports with our mock implementation
 */
export default function mockChromePlugin() {
  return {
    name: 'vite-plugin-mock-chrome',
    resolveId(id, importer) {
      // Check if the import is for the Chrome icon
      if (id === './chrome.js' && importer && importer.includes('lucide-react/dist/esm/icons')) {
        return 'virtual:chrome';
      }
      if (id === './icons/chrome.js' && importer && importer.includes('lucide-react/dist/esm')) {
        return 'virtual:chrome';
      }
      return null;
    },
    load(id) {
      if (id === 'virtual:chrome') {
        return `
          import Chrome from '${process.cwd().replace(/\\/g, '/')}/client/lib/chrome.js';
          export default Chrome;
          export const ChromeIcon = Chrome;
        `;
      }
      return null;
    }
  };
}
