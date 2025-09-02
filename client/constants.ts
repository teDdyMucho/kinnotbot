// Common constants for reuse
export const COMMON = {
  effectiveDate: "2025-05-21",
  companyName: "GYMIGO LLC",
  ctaLabels: {
    getAccess: "Get Access",
    startTrading: "Start Trading",
    instantAccess: "Instant Access",
    getDiscount: "Get Discount",
  },
};

export const offerBar = {
  heading: "Get 10% Off!",
  sub: "Limited Time Offer for New Members",
  form: ["First Name", "Last Name", "Email", "Phone"],
  cta: COMMON.ctaLabels.getDiscount,
};

export const hero = {
  title: "Trade Smart",
  sub: "Ai-driven execution → Stronger performance",
  bullets: [
    "Powered by Ai",
    "Built to capitalize on opportunity 24/5.",
    "Trade smarter. Scale faster. Sleep better.",
  ],
  ctas: [
    COMMON.ctaLabels.getAccess,
    COMMON.ctaLabels.startTrading,
    COMMON.ctaLabels.instantAccess,
  ],
};

// Package features for reuse across all packages
export const packageFeatures = [
  "KinnoBot Trading Ai",
  "Install Guide (docs + videos)",
  "Default Settings",
  "1-on-1 Set Up Call",
  "Kinno's Setting Updates",
  "Future Bot Upgrades",
  "Priority Support",
  "Private Discord Access",
  "Weekly Coaching Calls",
  "Private Investor Network",
];

export const packages = {
  sectionTitle: "Packages",
  kicker: "Most Popular",
  features: packageFeatures,
  items: [
    {
      name: "KinnoBot - Basic",
      price: "$287.00",
      cadence: "per month",
      features: {
        [packageFeatures[0]]: true, // KinnoBot Trading Ai
        [packageFeatures[1]]: true, // Install Guide
        [packageFeatures[2]]: true, // Default Settings
        [packageFeatures[3]]: false, // 1-on-1 Set Up Call
        [packageFeatures[4]]: false, // Setting Updates
        [packageFeatures[5]]: false, // Future Upgrades
        [packageFeatures[6]]: false, // Priority Support
        [packageFeatures[7]]: false, // Discord Access
        [packageFeatures[8]]: false, // Weekly Coaching
        [packageFeatures[9]]: false, // Investor Network
      },
      ctaLabel: COMMON.ctaLabels.getAccess,
      link: "https://whop.com/kinnobot-pro/?productId=prod_kCbZ32WGqhlvi",
      popular: false,
    },
    {
      name: "KinnoBot - Pro",
      price: "$897.00",
      cadence: "per year",
      features: {
        [packageFeatures[0]]: true, // KinnoBot Trading Ai
        [packageFeatures[1]]: true, // Install Guide
        [packageFeatures[2]]: true, // Default Settings
        [packageFeatures[3]]: true, // 1-on-1 Set Up Call
        [packageFeatures[4]]: true, // Setting Updates
        [packageFeatures[5]]: true, // Future Upgrades
        [packageFeatures[6]]: true, // Priority Support
        [packageFeatures[7]]: false, // Discord Access
        [packageFeatures[8]]: false, // Weekly Coaching
        [packageFeatures[9]]: false, // Investor Network
      },
      ctaLabel: COMMON.ctaLabels.getAccess,
      link: "https://whop.com/kinnobot-pro/?productId=prod_Bqtr7vQGBNFmy",
      popular: true,
    },
    {
      name: "KinnoBot - Elite",
      price: "$2,849.00",
      cadence: "one-time",
      features: {
        [packageFeatures[0]]: true, // KinnoBot Trading Ai
        [packageFeatures[1]]: true, // Install Guide
        [packageFeatures[2]]: true, // Default Settings
        [packageFeatures[3]]: true, // 1-on-1 Set Up Call
        [packageFeatures[4]]: true, // Setting Updates
        [packageFeatures[5]]: true, // Future Upgrades
        [packageFeatures[6]]: true, // Priority Support
        [packageFeatures[7]]: true, // Discord Access
        [packageFeatures[8]]: true, // Weekly Coaching
        [packageFeatures[9]]: true, // Investor Network
      },
      ctaLabel: COMMON.ctaLabels.getAccess,
      link: "https://whop.com/kinnobot-pro/?productId=prod_qsAU4wh1cRHQw",
      popular: false,
    },
  ],
};

export const disclaimer = [
  "KinnoBot is a trading automation tool built for use with MetaTrader platforms. It is not financial advice, and it does not guarantee profits or performance. Trading involves risk, and past results do not guarantee future outcomes. Use at your own discretion.",
  "Performance may vary based on your broker, market conditions, and how you configure your settings. You are solely responsible for your trading activity and account management.",
  "All sales are final due to the immediate delivery of digital assets. Please review our Terms of Service, Privacy Policy, and Refund Policy before purchasing.",
  `KinnoBot is independently developed by ${COMMON.companyName}. It is not affiliated with MetaTrader, MetaQuotes, or any broker.`,
  "Copyright © 2025 | All Rights Reserved",
];

// Common sections used by TOS and Refund Policy
const commonSections = {
  riskDisclosure: [
    "Trading involves substantial risk, including total loss.",
    "You are solely responsible for settings and decisions.",
    "KinnoBot does not guarantee profitability.",
    "Not financial advice; use at your own risk.",
    "Recommended: start on a demo account.",
  ],
  allSalesFinal: [
    "No refunds, returns, or exchanges for digital products.",
    "Access to proprietary software is delivered immediately.",
  ],
};

export const tos = {
  title: "Terms of Service",
  effectiveDate: COMMON.effectiveDate,
  sections: [
    {
      heading: "Use of Software",
      bullets: [
        "License: single-user, non-transferable for MT4/MT5.",
        "No resell, sharing, reverse-engineering, or modification.",
      ],
    },
    {
      heading: "Risk Disclosure",
      bullets: [
        "Trading involves substantial risk, including total loss.",
        "You are solely responsible for settings and decisions.",
        "KinnoBot does not guarantee profitability.",
        "Not financial advice; use at your own risk.",
        "Recommended: start on a demo account.",
      ],
    },
    {
      heading: "No Financial Guarantee",
      bullets: [
        "Past performance does not guarantee future results.",
        "Examples or statistics are illustrative only; no outcome warranties.",
      ],
    },
  ],
};

export const refundPolicy = {
  title: "Refund Policy",
  effectiveDate: COMMON.effectiveDate,
  sections: [
    {
      heading: "All Sales Final",
      bullets: [
        "No refunds, returns, or exchanges for digital products.",
        "Access to proprietary software is delivered immediately.",
      ],
    },
    {
      heading: "No-Refund Examples",
      bullets: [
        "Buyer's remorse or changed strategy",
        "Inability to install/configure due to technical skill",
        "Dissatisfaction with results or market conditions",
      ],
    },
    {
      heading: "What You Receive",
      bullets: [
        "Instant access to the KinnoBot file (.ex4/.ex5 or similar)",
        "Setup guides and/or walkthrough videos",
        "Additional resources based on purchase tier",
        "Ongoing support/updates if specified",
      ],
    },
    {
      heading: "Due Diligence",
      bullets: [
        "Review product description and compatibility (MT4/MT5)",
        "Use proper risk management; ask questions before purchase",
      ],
    },
    {
      heading: "Chargebacks",
      bullets: [
        "Chargebacks after delivery violate the policy",
        "Company may dispute or take action for fraudulent activity",
      ],
    },
    {
      heading: "Agreement",
      bullets: ["Completing your purchase signifies agreement to this policy"],
    },
  ],
};

// Whop purchase link (environment variable recommended for production)
export const whopLink =
  import.meta.env.VITE_WHOP_LINK || "https://whop.com/kinnobot-pro/";

// Essential constants used by components
export const featuredOn = {
  title: "Featured On",
  logos: [] as string[],
};

export const valueProposition = {
  headings: [
    "Maximize Your Daily Returns With Ai",
    "Use Ai to Maximize Your Daily Returns",
    "Why Trust KinnoBot?",
  ],
  supporting:
    "Ai isn't a trend. Institutions are using Ai to gain a measurable edge. KinnoBot applies the same intelligence to the markets.",
  cards: [
    {
      title: "Advanced Trading Algorithms",
      body: "Ai-powered strategies analyze thousands of data points per second, adapting instantly to market changes.",
    },
    {
      title: "Automated Execution",
      body: "Effortless trading with lightning-fast order execution, removing human error and delivering consistent performance.",
    },
    {
      title: "Risk Management Features",
      body: "Implements dynamic stop-loss, take-profit, and drawdown control to protect capital and optimize returns.",
    },
  ],
};

export const steps = {
  sectionTitle: "Activate KinnoBot in Minutes",
  items: [
    {
      title: "Step 1. Download & Install the Bot",
      subtitle: "Receive instant access to the KinnoBot file.",
      bullets: [
        "Instant access after purchase",
        "Simple installation guide",
        "Compatible with leading brokers",
        "Runs on your desktop or VPS for 24/5 automated trading",
      ],
      cta: COMMON.ctaLabels.getAccess,
    },
    {
      title: "Step 2: Set Your Risk Preferences",
      subtitle:
        "Customize the bot to align with your trading goals and account size.",
      bullets: [
        "Adjust lot size to control position size and exposure.",
        "Set stop loss and take profit levels",
        "Choose which pairs and timeframes you want the bot to operate",
        'Use "demo mode" to test settings risk-free',
      ],
      cta: COMMON.ctaLabels.getAccess,
    },
    {
      title: "Step 3: Let KinnoBot Execute",
      subtitle: "Once activated, step away with confidence",
      bullets: [
        "Real-time market scanning",
        "Automatic trade entries and exits",
        "Emotionless decision-making",
        "Continuous monitoring",
        "Built-in risk controls",
      ],
      cta: COMMON.ctaLabels.startTrading,
    },
  ],
};

export const founders = {
  sectionTitle: "Meet The Founders",
  people: [
    {
      name: "Kinno",
      role: "Founder & Lead Strategist",
      paragraphs: [
        "A seasoned trader with over a decade of experience, Kinno has mastered the art of market structure, liquidity, and risk management. His high-precision strategies have consistently outperformed traditional approaches.",
        "Recognizing the limits of manual execution, Kinno developed KinnoBot to bring automation and structure to retail traders. It's powered by the same logic he trades himself: institutional-level analysis, Ai-driven entries, and risk-optimized trade management.",
        "His mission is simple: eliminate emotional trading and give everyday traders a hands-free system that adapts to the market in real time—so they can focus less on the charts, and more on results.",
      ],
    },
    {
      name: "Ethan",
      role: "Lead Ai Developer",
      paragraphs: [
        "With a background in computer science and financial engineering, Ethan spent the past 7 years building algorithmic trading systems for hedge funds and proprietary firms. His expertise in machine learning and statistical modeling plays a key role in optimizing KinnoBot's Ai engine for precision.",
        "Before joining Kinno, Ethan led predictive algorithm design at a fintech startup, developing tools that analyzed market sentiment and institutional order flow in real time.",
        "Driven by a passion to bridge the gap between Ai and active trading, Ethan ensures KinnoBot remains at the cutting edge of automated market intelligence—delivering data-driven, high-probability trade execution for every user.",
      ],
    },
  ],
};

export const faq = {
  sectionTitle: "FAQ",
  tagline: "You have questions, we have answers",
  items: [
    { q: "Do I need trading experience to use KinnoBot?", a: null },
    { q: "Does the bot work on any broker?", a: null },
    { q: "Can I adjust the bot settings?", a: null },
    { q: "Can I use it on a funded account?", a: null },
    { q: "How long does it take to set up?", a: null },
    { q: "How often does the bot trade?", a: null },
  ],
};

export const testimonials = [
  {
    headline: '"Finally consistent."',
    quote:
      "I've been trading for 2 years but always struggled with discipline. KinnoBot changed that. It just follows the rules. No emotions, no second-guessing.",
    name: "— James T.",
  },
  {
    headline: '"Perfect for prop challenges."',
    quote:
      "I used KinnoBot to help me pass my funded challenge. The structure, risk control, and hands-free setup made it easy to stay within firm limits.",
    name: "— Ali M.",
  },
  {
    headline: '"Beginner-friendly and clear."',
    quote:
      "I'm new to trading and didn't want to spend months learning the hard way. Setup was simple, and the bot does exactly what it says it will.",
    name: "— Tina R.",
  },
  {
    headline: '"Clean strategy & execution."',
    quote:
      "You can tell Kinno put real work into this system. The bot follows a strategy that actually makes sense.",
    name: "— Marco D.",
  },
  {
    headline: '"Runs while I\'m at work."',
    quote:
      "I don't have time to trade all day, that's why I got KinnoBot. I check my phone and see wins while at work.",
    name: "— Jasmine F.",
  },
  {
    headline: '"Real results"',
    quote:
      "I've tried bots in the past but this one actually trades with logic. Support was fast, and I've had solid results every week.",
    name: "— Ethan W.",
  },
];

export const contact = {
  title: "Have More Questions?",
  cta: "Apply for a 30-Minute Call with Our Team to Learn More About KinnoBot",
};
