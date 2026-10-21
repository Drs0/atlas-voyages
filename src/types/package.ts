export type DestinationCategory = 'desert' | 'imperial' | 'atlas';

export interface LocalizedString {
  fr: string;
  ar: string;
}

export interface LocalizedArray {
  fr: string[];
  ar: string[];
}

export interface ItineraryDay {
  day: number;
  title: LocalizedString;
  description: LocalizedString;
}

export interface TravelPackage {
  id: string;
  slug: string;
  category: DestinationCategory;
  durationDays: number;
  durationNights: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  overview: LocalizedString;
  startingPriceMAD: number;
  coverImage: string;
  bestSeason: LocalizedString;
  itinerary: ItineraryDay[];
  inclusions: LocalizedArray;
  exclusions: LocalizedArray;
  featured?: boolean;
}
