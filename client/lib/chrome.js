import * as React from 'react';

// Create a mock Chrome icon component
function Chrome(props) {
  return React.createElement('svg', {
    ...props,
    xmlns: 'http://www.w3.org/2000/svg',
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('circle', { cx: 12, cy: 12, r: 10 }));
}

// Export the Chrome component as default
export default Chrome;
export const ChromeIcon = Chrome;
