// Cancer Knowledge Book — Type Definitions

export type CancerCategory = "carcinoma" | "sarcoma" | "lymphoma" | "leukemia" | "cns" | "melanoma" | "other";
export type ResourceType = "website" | "pdf" | "video" | "research";
export type Region = "US" | "UK" | "India" | "Australia" | "EU" | "Middle East" | "Sub-Saharan Africa" | "Asia" | "Global";

export interface VideoResource {
  title: string;
  youtubeId?: string;  // The YouTube video ID (e.g. 'dQw4w9WgXcQ')
  vimeoId?: string;    // The Vimeo video ID (e.g. '235129606')
  channel: string;    // Channel name for attribution
  durationMins?: number;
}

export interface Treatment {
  name: string;
  description: string;
  typicalCostRange?: string; // e.g. "$5,000 – $50,000"
}

export interface SupportOrganization {
  name: string;
  url: string;
  description: string;
  geography: Region;
}

export interface ExternalResource {
  title: string;
  url: string;
  type: ResourceType;
}

export interface GeographyNote {
  region: Region;
  prevalence?: string;
  screeningPrograms?: string;
  notableHospitals?: string[];
}

export interface CancerEntry {
  id: string;
  name: string;
  alternateNames: string[];
  category: CancerCategory;
  description: string;
  commonSymptoms: string[];
  riskFactors: string[];
  diagnostics: string[];
  treatments: Treatment[];
  stages?: string[];
  survivalRates?: string;
  supportOrganizations: SupportOrganization[];
  externalResources: ExternalResource[];
  videos?: VideoResource[];     // Optional curated video resources
  geographyNotes: GeographyNote[];
  lastUpdated: string;
}
