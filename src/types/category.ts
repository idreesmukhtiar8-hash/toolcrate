import type { Tool } from "@/types/tool";

export interface CategorySEO {
  title?: string;
  description?: string;
  keywords?: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
  featured?: boolean;
  toolCount?: number;
  seo?: CategorySEO;
  createdAt?: string;
  updatedAt?: string;
}

export interface CategoryWithTools extends Category {
  tools: Tool[];
}

export interface CategoryFilters {
  search?: string;
  featured?: boolean;
  sort?: "name" | "toolCount";
}
