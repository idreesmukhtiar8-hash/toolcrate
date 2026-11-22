export type ToolPricing = "FREE" | "FREE PLAN" | "PAID";

export type ToolPlatform =
  | "Web"
  | "Windows"
  | "macOS"
  | "Linux"
  | "Android"
  | "iOS"
  | "Chrome Extension"
  | "Browser Extension"
  | "API";

export interface ToolSEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Tool {
  id: string;
  slug: string;
  name: string;
  category: string;
  logo: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  pros: string[];
  cons: string[];
  pricing: ToolPricing;
  website: string;
  alternatives: string[];
  platforms: ToolPlatform[];
  lastVerified: string;
  featured?: boolean;
  trending?: boolean;
  popular?: boolean;
  tags?: string[];
  seo?: ToolSEO;
  createdAt?: string;
  updatedAt?: string;
}

export interface ToolFilters {
  category?: string;
  pricing?: ToolPricing;
  platform?: ToolPlatform;
  search?: string;
  sort?: "popular" | "newest" | "name";
}
