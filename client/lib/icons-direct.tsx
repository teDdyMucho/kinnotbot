import React from 'react';

// Define the base SVG properties that all Lucide icons use
const defaultAttributes: React.SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as "round",
  strokeLinejoin: "round" as "round"
};

// Create icon components directly without using lucide-react
// These are the icons used in your project

export function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

export function AlertTriangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

export function Settings(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

export function BarChart3(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

export function PanelLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </svg>
  );
}

export function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Quote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

export function Menu(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function CheckCircle2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

export function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function MoreHorizontal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  );
}

export function Crown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

export function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MessageCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function Calendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

export function Monitor(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <rect width="20" height="14" x="2" y="3" rx="2" />
      <line x1="8" x2="16" y1="21" y2="21" />
      <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
  );
}

export function Smartphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function Watch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <circle cx="12" cy="12" r="6" />
      <polyline points="12 10 12 12 13 13" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.64h2.66a2 2 0 0 0 2-1.64l.81-4.05" />
    </svg>
  );
}

export function Tablet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <line x1="12" x2="12.01" y1="18" y2="18" />
    </svg>
  );
}

// Create a mock Chrome icon that won't trigger antivirus
export function Chrome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function Info(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export function ChevronUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

export function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultAttributes} {...props}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}
