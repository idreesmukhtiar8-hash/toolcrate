export const siteConfig = {
  name: "ToolCrate",
  url: "https://toolcrate.com",
  description: "Discover useful free online tools for work, creativity, productivity, and everyday tasks.",
  tagline: "Your crate of useful online tools",
  language: "en",
  locale: "en_US",
  keywords: [
    "free online tools", "AI tools", "productivity tools", "PDF tools",
    "image tools", "video tools", "developer tools", "online utilities"
  ],
  email: "support@toolcrate.com",
  navigation: [
    { label: "Explore Tools", href: "/tools" },
    { label: "Categories", href: "/categories" },
    { label: "AI Tools", href: "/ai-tools" },
    { label: "Trending", href: "/trending" },
    { label: "Blog", href: "/blog" }
  ],
  footerNavigation: [
    {
      title: "Explore",
      links: [
        { label: "All Tools", href: "/tools" },
        { label: "Categories", href: "/categories" },
        { label: "AI Tools", href: "/ai-tools" },
        { label: "Trending", href: "/trending" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Submit a Tool", href: "/submit-tool" },
        { label: "Advertise", href: "/advertise" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms", href: "/terms" },
        { label: "Disclaimer", href: "/disclaimer" },
        { label: "Cookie Policy", href: "/cookie-policy" }
      ]
    }
  ],
  socialLinks: {
    // Add verified social profile URLs before launch.
    x: "",
    instagram: "",
    facebook: ""
  }
} as const;
