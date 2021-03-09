import { Collection, ObjectID } from "mongodb";

export interface Listing {
  _id: ObjectID;
  property: string;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  monthly_rate: number;
  lease_term_months: number;
  total_views: number;
}

export interface Database {
  listings: Collection<Listing>;
}
