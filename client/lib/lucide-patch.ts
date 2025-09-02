/**
 * This file patches the lucide-react library to avoid loading the Chrome icon
 * which is being flagged by antivirus software.
 */

// Re-export all the icons we need from individual imports to avoid the problematic index.js file
export {
  Shield,
  AlertTriangle,
  CreditCard,
  Settings,
  TrendingUp,
  BarChart3,
  PanelLeft,
  X,
  Quote,
  Menu,
  ChevronDown,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Crown,
  Check,
  MessageCircle,
  Calendar,
  Monitor,
  Smartphone,
  Watch,
  Tablet
} from 'lucide-react/dist/esm/icons';

// Create a mock Chrome icon to satisfy any imports
export const Chrome = () => null;
