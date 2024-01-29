export type TFilters = {
    priceRange?: {
      min: number;
      max: number;
    };
    releaseDate?: {
      min: string;
      max: string;
    };
    brand?: string;
    modelNumber?: string;
    category?: string;
    operatingSystem?: string;
    connectivity?: string;
    powerSource?: string;
    features?: string;
  }