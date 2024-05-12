
export interface Property {
  title: string;
  description: string;
  imageUrls: string[];
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  amenities: string[];
  yearBuilt?: number;
}

export interface FetchError {
  message: string;
  // You can add more details depending on what information you receive from errors
}
