import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  items: string[];
  icon: LucideIcon;
}

export interface CountryExperience {
  country: string;
  flagCode: string; // ISO code for flag display if needed, or just visual reference
  highlights: string[];
}

export interface CampaignStat {
  label: string;
  value: string;
  description: string;
}

export interface Product {
  title: string;
  description: string;
}